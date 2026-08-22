import { defineRouting } from "next-intl/routing";

// Launch language is English only; routing is locale-prefixed under /en so
// additional locales attach without URL changes (CLAUDE.md guardrails).
export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
