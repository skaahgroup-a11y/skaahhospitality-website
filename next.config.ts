import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// DECISION: HSTS and TLS terminate at the Hostpoint Nginx proxy (docs/08 S3);
// app-level headers cover what the proxy does not set.
// DECISION (QA SR-04): docs/05 s6 asks for CSP with nonces. Nonce-based CSP
// requires per-request dynamic rendering in the App Router, which would
// forfeit the static prerendering the CWV budgets depend on. This policy
// therefore allows inline scripts (Next bootstrap and JSON-LD) while locking
// everything else to self plus Plausible; the nonce upgrade is scheduled with
// the Hostpoint Nginx setup, where the proxy can inject per-request nonces
// without dynamising the app. frame-ancestors none supersedes X-Frame-Options
// on modern browsers; both are sent.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://plausible.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://plausible.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Renamed paths: the hub and two entries dropped restricted trademark
    // wordings from their slugs. The launch-day legacy map from the
    // skaah.com/hospitality crawl lands here too (docs/06 section 5).
    const renamed = [
      ["/davos-wef", "/en/davos-week"],
      ["/en/davos-wef", "/en/davos-week"],
      [
        "/en/insights/wef-delegation-countdown",
        "/en/insights/davos-delegation-countdown",
      ],
      // Case-study slugs renamed twice: first for trademark wording, then to
      // drop government client references pending clearances (22 Aug 2026).
      [
        "/en/work/first-time-state-delegation-wef",
        "/en/work/first-time-delegation-davos",
      ],
      [
        "/en/work/first-time-state-delegation-davos",
        "/en/work/first-time-delegation-davos",
      ],
      [
        "/en/work/six-states-one-swiss-partner",
        "/en/work/six-delegations-one-swiss-partner",
      ],
    ];
    return renamed.map(([source, destination]) => ({
      source: source as string,
      destination: destination as string,
      permanent: true,
    }));
  },
};

export default withNextIntl(nextConfig);
