import type { ArticleContent } from "@/content-schemas/types";
import { wefDelegationCountdown } from "./wef-delegation-countdown";
import { indianCuisineSwissAltitude } from "./indian-cuisine-swiss-altitude";

// Two seeded articles are published at launch; ten further articles are
// briefed in docs/02-content/06 section B and follow the editorial calendar
// in docs/06 section 8.
export const articles: ArticleContent[] = [
  wefDelegationCountdown,
  indianCuisineSwissAltitude,
].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export function getArticle(slug: string): ArticleContent | undefined {
  return articles.find((article) => article.slug === slug);
}
