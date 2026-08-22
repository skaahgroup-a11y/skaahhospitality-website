import type { MetadataRoute } from "next";
import { SITE_URL, isProductionEnv } from "@/lib/site";

// Staging: full disallow on top of the host-level basic auth (docs/06
// section 4). Production: open, with the sitemap declared.
export default function robots(): MetadataRoute.Robots {
  if (!isProductionEnv()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
