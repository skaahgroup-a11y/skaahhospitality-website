import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/content/services";
import { destinations } from "@/content/destinations";
import { caseStudies } from "@/content/work";
import { articles } from "@/content/articles";

// XML sitemap per docs/06 section 4 (per-locale-ready: URLs carry /en).
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/davos-week",
    "/destinations",
    "/work",
    "/experiences",
    "/insights",
    "/about",
    "/partners",
    "/enquiry",
    "/privacy",
    "/imprint",
    "/cookies",
  ];

  const urls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}/en${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const service of services) {
    urls.push({
      url: `${SITE_URL}/en/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }
  for (const destination of destinations) {
    urls.push({
      url: `${SITE_URL}/en/destinations/${destination.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const study of caseStudies) {
    urls.push({
      url: `${SITE_URL}/en/work/${study.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }
  for (const article of articles) {
    urls.push({
      url: `${SITE_URL}/en/insights/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return urls;
}
