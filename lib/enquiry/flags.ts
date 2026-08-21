// Legitimacy triage per docs/01 section 4.5: flag, never gate.

// Official-domain detection: gov.in, nic.in, *.gov, *.gov.<cc>, embassy domains.
const OFFICIAL_DOMAIN_PATTERNS: RegExp[] = [
  /(^|\.)gov\.in$/i,
  /(^|\.)nic\.in$/i,
  /(^|\.)gov$/i,
  /(^|\.)gov\.[a-z]{2}$/i,
  /(^|\.)gc\.ca$/i,
  /(^|\.)admin\.ch$/i,
  /(^|\.)europa\.eu$/i,
  /(^|\.)mea\.gov\.in$/i,
  /embassy/i,
  /consulate/i,
];

const FREE_MAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "rediffmail.com",
  "protonmail.com",
  "proton.me",
]);

export function emailDomain(email: string): string {
  const at = email.lastIndexOf("@");
  return at === -1 ? "" : email.slice(at + 1).toLowerCase().trim();
}

export function isVerifiedDomain(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return false;
  return OFFICIAL_DOMAIN_PATTERNS.some((pattern) => pattern.test(domain));
}

export interface ManualCheckInput {
  email: string;
  organisation?: string;
  segment: string;
  details: Record<string, unknown>;
}

// Anomaly heuristics per docs/02-content/07: free-mail sender plus a
// delegation-size 61+ claim plus no organisation triggers a manual check.
// Each signal alone is fine; the combination is what looks off.
export function needsManualCheck(input: ManualCheckInput): boolean {
  const freeMail = FREE_MAIL_DOMAINS.has(emailDomain(input.email));
  const noOrganisation = !input.organisation?.trim();
  const largeDelegation =
    input.segment === "delegation" && input.details["sizeBand"] === "61-plus";

  if (freeMail && largeDelegation && noOrganisation) return true;
  // A large delegation claimed from a free mailbox is worth a look even with
  // an organisation stated.
  if (freeMail && largeDelegation) return true;
  return false;
}
