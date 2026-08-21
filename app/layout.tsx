import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted per docs/04 section 6: 2 families, max 3 weights, WOFF2 only.
const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/inter-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/inter-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

// DECISION: the html element lives in the root layout with lang="en" because
// launch is English only; when locales exceed 1, move html/body into
// app/[locale]/layout.tsx and set lang from the route param.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
