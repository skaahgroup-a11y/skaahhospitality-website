import { SITE_URL } from "@/lib/site";
import { articles } from "@/content/articles";

// RSS 2.0 feed for Insights per docs/06 section 4. Statically generated at
// build time; regenerates whenever the article content changes.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc822(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

export function GET(): Response {
  const items = articles
    .map((article) => {
      const link = `${SITE_URL}/en/insights/${article.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(article.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${toRfc822(article.datePublished)}</pubDate>`,
        `      <description>${escapeXml(article.dek)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const lastBuildDate = articles.length
    ? toRfc822(
        articles
          .map((article) => article.dateModified)
          .sort()
          .at(-1) as string,
      )
    : new Date().toUTCString();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>SKAAH Insights</title>",
    `    <link>${SITE_URL}/en/insights</link>`,
    "    <description>Working guides for organisers of Swiss visits: specific, current and written from the ground.</description>",
    "    <language>en-gb</language>",
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
