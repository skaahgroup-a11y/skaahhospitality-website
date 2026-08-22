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
  // Company facts confirmed by the client on 22 August 2026.
  registration: "CHE-473.516.098",
  vat: "CHE-473.516.098 MWST",
  registeredAddress: {
    street: "Glärnischstrasse 39",
    postalCode: "8152",
    locality: "Opfikon",
    country: "Switzerland",
  },
  // [TO CONFIRM: LinkedIn URL]
  linkedInUrl: "",
} as const;

// Government-sector references, per the client instruction of 22 August 2026:
// individual public-sector bodies are not named on the website pending
// clearances; the named India-corridor relationships are CII and Invest India.
// The claims gate (scripts/check-claims.mjs) enforces this.
export const INDIA_CORRIDOR_LINE =
  "In the India corridor we work with the Confederation of Indian Industry (CII) and Invest India.";

export const DESCRIPTOR =
  "The Swiss hospitality and logistics partner for government delegations and high-value corporate groups, proven at Davos Week.";

export const GROUP_LINE = "A SKAAH Group company";

export const RESPONSE_PROMISE =
  "Every enquiry receives a first response within 48 hours. Event and MICE RFPs within one business day.";

export const FALLBACK_PROOF_LINE =
  "Six Indian delegations. Four consecutive Davos Weeks. One Swiss partner.";

export const CONTACT = {
  office: "Glärnischstrasse 39, 8152 Opfikon, Switzerland",
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
