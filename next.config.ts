import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// DECISION: HSTS and TLS terminate at the Hostpoint Nginx proxy (docs/08 S3);
// app-level headers cover what the proxy does not set.
const securityHeaders = [
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
      [
        "/en/work/first-time-state-delegation-wef",
        "/en/work/first-time-state-delegation-davos",
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
