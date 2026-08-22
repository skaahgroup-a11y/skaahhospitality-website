import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import type { SeoFields } from "@/content-schemas/types";

// Builds page metadata per docs/06 section 2: canonical self, OG/Twitter
// cards, titles as written in the content files (already end with | SKAAH).
export function pageMetadata(seo: SeoFields, path: string): Metadata {
  const url = `${SITE_URL}/en${path === "/" ? "" : path}`;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url,
      siteName: "SKAAH Hospitality",
      locale: "en_GB",
      type: "website",
      images: [{ url: `${SITE_URL}/brand/skaah-group-logo-square.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  };
}
