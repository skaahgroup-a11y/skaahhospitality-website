import { promises as fs } from "fs";
import path from "path";

// Runtime data directory. On the Hostpoint Flex server this resolves to
// ~/app/skaah-web/shared/data (docs/08 section 3); locally ./data.
export function dataDir(): string {
  return path.resolve(process.env.DATA_DIR ?? "./data");
}

export interface EnquiryPayload {
  reference: string;
  segment: string;
  submittedAt: string;
  contact: {
    name: string;
    organisation: string;
    role: string;
    email: string;
    phone: string;
    preferredChannel: string;
  };
  details: Record<string, unknown>;
  attachments: { file: string; bytes: number; url: string }[];
  flags: {
    verifiedDomain: boolean;
    manualCheck: boolean;
    utm: Record<string, string>;
  };
  consent: { privacyVersion: string; acceptedAt: string };
  locale: string;
}

function sanitiseFilename(name: string): string {
  const base = path.basename(name).replace(/[^A-Za-z0-9._-]/g, "_");
  return base.slice(0, 120) || "attachment";
}

// Persist the JSON payload (CRM-ready, schema per docs/05 section 7).
export async function persistEnquiry(
  payload: EnquiryPayload,
  options: { spam?: boolean } = {},
): Promise<void> {
  const folder = path.join(dataDir(), options.spam ? "spam" : "enquiries");
  await fs.mkdir(folder, { recursive: true });
  await fs.writeFile(
    path.join(folder, `${payload.reference}.json`),
    JSON.stringify(payload, null, 2),
    "utf8",
  );
}

// DECISION: docs/05 specifies direct-to-storage uploads to a CH/EU bucket
// with signed URLs. Until the bucket exists (spike S0 output), attachments
// stream to local disk under DATA_DIR, which on the Flex server is Swiss NVMe
// and satisfies residency; the uploader swaps to signed URLs in task T4.3
// without changing this call shape.
export async function persistAttachment(
  reference: string,
  filename: string,
  bytes: Uint8Array,
): Promise<{ file: string; bytes: number; url: string }> {
  const safe = sanitiseFilename(filename);
  const folder = path.join(dataDir(), "uploads", reference);
  await fs.mkdir(folder, { recursive: true });
  const filePath = path.join(folder, safe);
  await fs.writeFile(filePath, bytes);
  return {
    file: safe,
    bytes: bytes.byteLength,
    url: `data://uploads/${reference}/${safe}`,
  };
}

// Failed fan-out jobs queue here for retry (retry worker is task T4.6).
export async function queueFailedJob(
  kind: string,
  payload: unknown,
  error: string,
): Promise<void> {
  const folder = path.join(dataDir(), "queue");
  await fs.mkdir(folder, { recursive: true });
  const stamp = Date.now();
  await fs.writeFile(
    path.join(folder, `${kind}-${stamp}.json`),
    JSON.stringify({ kind, error, payload, queuedAt: new Date().toISOString() }, null, 2),
    "utf8",
  );
}
