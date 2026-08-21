import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { ArticleTOC } from "@/components/blocks/ArticleTOC";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { InsightCard } from "@/components/blocks/InsightCard";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy } from "@/components/ui/Copy";
import { ButtonLink } from "@/components/ui/Button";
import { articles, getArticle } from "@/content/articles";
import { RESPONSE_PROMISE } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata(article.seo, `/insights/${article.slug}`);
}

// Stable anchor ids derived from section headings for the TOC.
function headingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticle(slug);
  if (!article) notFound();
  const t = await getTranslations({ locale, namespace: "common" });

  const headings = article.sections.map((section) => ({
    id: headingId(section.heading),
    label: section.heading,
  }));
  const related = (article.relatedSlugs ?? [])
    .map((relatedSlug) => getArticle(relatedSlug))
    .filter((entry) => entry !== undefined);
  // Inline CTA lands mid-article, after roughly half the sections.
  const ctaAfterIndex = Math.max(0, Math.ceil(article.sections.length / 2) - 1);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: article.title,
            description: article.seo.metaDescription,
            path: `/insights/${article.slug}`,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
          }),
          ...(article.faqs && article.faqs.length > 0
            ? [faqPageJsonLd(article.faqs)]
            : []),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />
      <PageHero eyebrow="Insight" title={article.title} subline={article.dek}>
        <p className="mt-6 text-sm text-ice-200/80">
          {article.authorRole}
          {" · "}
          {t("readTime", { minutes: article.readMinutes })}
          {" · "}
          {t("updated")} {formatDate(article.dateModified)}
        </p>
      </PageHero>

      <Section surface="light">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            {article.sections.map((section, index) => {
              const id = headingId(section.heading);
              return (
              <div key={id}>
                <section
                  id={id}
                  aria-labelledby={`${id}-heading`}
                  className="mt-14 scroll-mt-28 first:mt-0"
                >
                  <h2
                    id={`${id}-heading`}
                    className="heading-2 max-w-[68ch] text-navy-900"
                  >
                    {section.heading}
                  </h2>
                  <div className="prose-site mt-6">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-relaxed">
                        <Copy text={paragraph} />
                      </p>
                    ))}
                  </div>
                  {section.list ? (
                    <ul className="prose-site mt-6 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                          />
                          <span className="leading-relaxed">
                            <Copy text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>

                {index === ctaAfterIndex ? (
                  <aside
                    data-surface="dark"
                    className="mt-14 max-w-[68ch] rounded-sm bg-navy-900 p-8 text-ice-100"
                  >
                    <p className="heading-3 text-white">
                      Planning the visit this guide describes?
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ice-200">
                      {RESPONSE_PROMISE}
                    </p>
                    <div className="mt-6">
                      <ButtonLink href="/enquiry" variant="gold">
                        Start your enquiry
                      </ButtonLink>
                    </div>
                  </aside>
                ) : null}
              </div>
              );
            })}
          </div>

          <aside className="order-first lg:order-none">
            <div className="lg:sticky lg:top-28">
              <ArticleTOC headings={headings} />
            </div>
          </aside>
        </div>
      </Section>

      {article.faqs && article.faqs.length > 0 ? (
        <Section surface="ice">
          <SectionHeading heading="Questions organisers ask" />
          <div className="mt-10 max-w-3xl">
            <FAQAccordion faqs={article.faqs} />
          </div>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section surface={article.faqs?.length ? "light" : "ice"}>
          <SectionHeading heading="Related reading" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((entry) => (
              <InsightCard key={entry.slug} article={entry} />
            ))}
          </div>
        </Section>
      ) : null}

      <CTABand
        headline="Tell us about your visit."
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref="/enquiry"
      />
    </>
  );
}
