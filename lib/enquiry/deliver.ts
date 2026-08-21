import type { EnquiryPayload } from "./store";
import { queueFailedJob } from "./store";
import { getSegmentSpec } from "./segments";

// Delivery fan-out per docs/05 section 7: per-segment mailbox, tracking-sheet
// webhook, acknowledgement mail. Each channel degrades gracefully: when its
// configuration is absent (local development, pre-launch), it logs and the
// payload persistence in the API route remains the source of truth.

function segmentMailbox(segment: string): string | undefined {
  try {
    const raw = process.env.SEGMENT_MAILBOXES;
    if (!raw) return undefined;
    const map = JSON.parse(raw) as Record<string, string>;
    return map[segment];
  } catch {
    return undefined;
  }
}

interface MailMessage {
  to: string;
  subject: string;
  text: string;
}

async function sendMail(message: MailMessage): Promise<void> {
  const host = process.env.SMTP_HOST;
  if (!host) {
    console.info(`[enquiry] SMTP unset, skipping mail to ${message.to}`);
    return;
  }
  // Authenticated Hostpoint SMTP (docs/05 section 8). nodemailer is loaded
  // lazily so the dependency stays out of every page bundle.
  const { createTransport } = await import("nodemailer");
  const transport = createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });
  await transport.sendMail({
    from: process.env.MAIL_FROM ?? "noreply@skaahhospitality.com",
    ...message,
  });
}

function payloadSummary(payload: EnquiryPayload): string {
  const lines = [
    `Reference: ${payload.reference}`,
    `Segment: ${payload.segment}`,
    `Submitted: ${payload.submittedAt}`,
    "",
    `Name: ${payload.contact.name}`,
    `Organisation: ${payload.contact.organisation}`,
    `Role: ${payload.contact.role}`,
    `E-mail: ${payload.contact.email}`,
    `Phone: ${payload.contact.phone}`,
    `Preferred channel: ${payload.contact.preferredChannel}`,
    "",
    `Verified domain: ${payload.flags.verifiedDomain ? "yes" : "no"}`,
    `Manual check: ${payload.flags.manualCheck ? "yes" : "no"}`,
    "",
    "Details:",
    JSON.stringify(payload.details, null, 2),
    "",
    `Attachments: ${payload.attachments.length}`,
    ...payload.attachments.map(
      (attachment) =>
        `  ${attachment.file} (${Math.round(attachment.bytes / 1024)} KB)`,
    ),
  ];
  return lines.join("\n");
}

export async function deliverEnquiry(payload: EnquiryPayload): Promise<void> {
  const spec = getSegmentSpec(payload.segment);
  const promise = spec?.promise ?? "48 hours";

  // 1. Per-segment mailbox.
  const mailbox = segmentMailbox(payload.segment);
  if (mailbox) {
    try {
      await sendMail({
        to: mailbox,
        subject: `New ${payload.segment} enquiry ${payload.reference}`,
        text: payloadSummary(payload),
      });
    } catch (error) {
      await queueFailedJob("mailbox", payload, String(error));
    }
  }

  // 2. Tracking-sheet webhook (Google Sheets API relay); CSV-by-mail interim
  // handled by the operations team while the sheet is unconfirmed.
  const webhook = process.env.SHEET_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reference: payload.reference,
          segment: payload.segment,
          date: payload.submittedAt,
          status: "new",
          owner: "",
          estimatedValue: "",
          verifiedDomain: payload.flags.verifiedDomain,
          manualCheck: payload.flags.manualCheck,
        }),
      });
      if (!response.ok) {
        throw new Error(`sheet webhook responded ${response.status}`);
      }
    } catch (error) {
      await queueFailedJob("sheet", payload, String(error));
    }
  }

  // 3. Acknowledgement mail to the enquirer, restating the segment promise.
  try {
    await sendMail({
      to: payload.contact.email,
      subject: `Received: your enquiry ${payload.reference}`,
      text: [
        `Dear ${payload.contact.name},`,
        "",
        `Thank you. Your enquiry has been received under reference ${payload.reference}.`,
        `${spec?.ownerTeam ?? "The SKAAH team"} replies within ${promise}.`,
        "",
        "What helps next: dates if they firm up, party size changes, and any documents you did not attach.",
        "",
        "SKAAH Hospitality GmbH",
        "Opfikon (Zurich Airport), Switzerland",
      ].join("\n"),
    });
  } catch (error) {
    await queueFailedJob("acknowledgement", payload, String(error));
  }
}
