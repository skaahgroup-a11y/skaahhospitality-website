import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { InsightCard } from "@/components/blocks/InsightCard";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { articles, getArticle } from "@/content/articles";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/06 section B (listing intro verbatim).
const seo = {
  metaTitle: "Planning Intelligence for Swiss Visits | SKAAH Insights",
  metaDescription:
    "Working guides for organisers of Swiss visits: delegation countdowns, catering playbooks and planning intelligence written from the ground.",
};

export const metadata: Metadata = pageMetadata(seo, "/insights");

const FEATURED_SLUG = "davos-delegation-countdown";

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common" });

  const featured = getArticle(FEATURED_SLUG);
  const rest = articles.filter((article) => article.slug !== FEATURED_SLUG);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title="Planning intelligence."
        subline="Working guides for organisers: specific, current and written from the ground."
      />

      {featured ? (
        <Section surface="light">
          <Link
            href={`/insights/${featured.slug}`}
            data-surface="dark"
            className="group block rounded-sm bg-navy-900 p-8 text-ice-100 shadow-card transition-shadow hover:shadow-lg md:p-12"
          >
            <p className="eyebrow">Cornerstone guide</p>
            <h2 className="heading-2 mt-4 max-w-3xl text-white">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ice-200">
              {featured.dek}
            </p>
            <p className="mt-6 text-sm text-ice-200/80">
              {t("readTime", { minutes: featured.readMinutes })}
              {" · "}
              {t("updated")} {formatDate(featured.dateModified)}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-500 transition-transform group-hover:translate-x-1">
              {t("readMore")}
              <Icon name="arrow-right" size={18} />
            </span>
          </Link>
        </Section>
      ) : null}

      <Section surface="ice">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
        <p className="mt-10 border-t border-ice-300 pt-6 text-sm text-stone-500">
          Further guides are in preparation: visas, VIP arrivals, movement
          planning for Davos, incentive budgets and more. If your question
          cannot wait for the article, ask us directly.
        </p>
      </Section>

      <CTABand
        headline="Ask the question behind your search."
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref="/enquiry"
      />
    </>
  );
}
