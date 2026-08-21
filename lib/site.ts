// Single source for site-wide constants. Values marked [TO CONFIRM: ...] are
// rendered with an amber badge on staging and block production builds
// (CLAUDE.md truth discipline, docs/07 gate G5).

export const SITE_URL = process.env.SITE_URL ?? "https://skaahhospitality.com";

export const ORG = {
  name: "SKAAH Hospitality GmbH",
  brand: "SKAAH Hospitality",
  parent: "SKAAH Group AG",
  seat: "Opfikon (Zurich Airport), Switzerland",
  groupUrl: "https://skaah.com",
  // [TO CONFIRM: LinkedIn URL]
  linkedInUrl: "",
} as const;

export const DESCRIPTOR =
  "The Swiss hospitality and logistics partner for government delegations and high-value corporate groups, proven at WEF Davos.";

export const GROUP_LINE = "A SKAAH Group company";

export const RESPONSE_PROMISE =
  "Every enquiry receives a first response within 48 hours. Event and MICE RFPs within one business day.";

export const FALLBACK_PROOF_LINE =
  "Six Indian state government delegations. Four WEF years. One Swiss partner.";

export const CONTACT = {
  office: "Opfikon (Zurich Airport), Switzerland",
  email: "enquiry@skaahhospitality.com",
  emailConfirm: "[TO CONFIRM: enquiry mailbox address]",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappConfirm: "[TO CONFIRM: WhatsApp number]",
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  phoneConfirm: "[TO CONFIRM: phone number]",
} as const;

export function whatsappHref(message?: string): string {
  const number = CONTACT.whatsappNumber || "0";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

export function isProductionEnv(): boolean {
  return process.env.NEXT_PUBLIC_ENV === "production";
}
