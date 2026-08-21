import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSegmentSpec, ACCEPTED_FILE_EXTENSIONS } from "@/lib/enquiry/segments";
import { isVerifiedDomain, needsManualCheck } from "@/lib/enquiry/flags";
import { nextReference } from "@/lib/enquiry/reference";
import { sniffAllowed } from "@/lib/enquiry/sniff";
import {
  persistEnquiry,
  persistAttachment,
  type EnquiryPayload,
} from "@/lib/enquiry/store";
import { deliverEnquiry } from "@/lib/enquiry/deliver";

export const runtime = "nodejs";

// Simple in-memory rate limit (docs/05 section 6): 5 submissions per 10
// minutes per address. Single Node process on the Flex server, so a Map is
// adequate for Phase 1.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const submissions = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entries = (submissions.get(ip) ?? []).filter(
    (stamp) => now - stamp < WINDOW_MS,
  );
  if (entries.length >= MAX_PER_WINDOW) {
    submissions.set(ip, entries);
    return true;
  }
  entries.push(now);
  submissions.set(ip, entries);
  return false;
}

const bodySchema = z.object({
  segment: z.enum([
    "delegation",
    "mice",
    "stay",
    "catering",
    "agency",
    "general",
  ]),
  contact: z.object({
    name: z.string().trim().min(1).max(200),
    organisation: z.string().trim().max(300).default(""),
    role: z.string().trim().max(200).default(""),
    email: z.string().trim().email().max(320),
    phone: z.string().trim().max(50).default(""),
    preferredChannel: z
      .enum(["email", "phone", "whatsapp"])
      .default("email"),
  }),
  details: z.record(z.string(), z.unknown()).default({}),
  consentAccepted: z.literal(true),
  // Honeypot: real visitors never fill this hidden field.
  website: z.string().max(200).default(""),
  // Time-trap: milliseconds the form was open before submission.
  elapsedMs: z.number().int().nonnegative().default(0),
  utm: z.record(z.string(), z.string()).default({}),
  locale: z.string().default("en"),
});

const MIN_ELAPSED_MS = 4000;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const rawPayload = formData.get("payload");
  if (typeof rawPayload !== "string") {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(JSON.parse(rawPayload));
  } catch {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const spec = getSegmentSpec(parsed.segment);
  if (!spec) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const reference = await nextReference();

  // Spam control: honeypot or an impossibly fast submission. The response
  // looks like success so automated senders learn nothing; the payload is
  // kept aside for audit instead of being delivered.
  const isSpam =
    parsed.website.trim() !== "" || parsed.elapsedMs < MIN_ELAPSED_MS;

  // Attachments: enforce count, per-file and total caps plus type sniffing.
  const files = formData
    .getAll("files")
    .filter((entry): entry is File => entry instanceof File);
  const maxTotalBytes = spec.maxUploadMB * 1024 * 1024;
  let totalBytes = 0;
  const attachments: EnquiryPayload["attachments"] = [];

  for (const file of files.slice(0, 10)) {
    const extension = file.name
      .slice(file.name.lastIndexOf("."))
      .toLowerCase();
    if (!ACCEPTED_FILE_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { error: "file_type", file: file.name },
        { status: 422 },
      );
    }
    totalBytes += file.size;
    if (file.size > maxTotalBytes || totalBytes > maxTotalBytes) {
      return NextResponse.json(
        { error: "file_size", file: file.name },
        { status: 422 },
      );
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (!sniffAllowed(bytes)) {
      return NextResponse.json(
        { error: "file_type", file: file.name },
        { status: 422 },
      );
    }
    if (!isSpam) {
      attachments.push(await persistAttachment(reference, file.name, bytes));
    }
  }

  const payload: EnquiryPayload = {
    reference,
    segment: parsed.segment,
    submittedAt: new Date().toISOString(),
    contact: parsed.contact,
    details: parsed.details,
    attachments,
    flags: {
      verifiedDomain: isVerifiedDomain(parsed.contact.email),
      manualCheck: needsManualCheck({
        email: parsed.contact.email,
        organisation: parsed.contact.organisation,
        segment: parsed.segment,
        details: parsed.details,
      }),
      utm: parsed.utm,
    },
    consent: {
      privacyVersion: "2026-08",
      acceptedAt: new Date().toISOString(),
    },
    locale: parsed.locale,
  };

  await persistEnquiry(payload, { spam: isSpam });

  if (!isSpam) {
    // Fan-out failures queue internally and never fail the visitor response.
    await deliverEnquiry(payload);
  }

  return NextResponse.json({
    reference,
    segment: parsed.segment,
    ownerTeam: spec.ownerTeam,
    promise: spec.promise,
  });
}
