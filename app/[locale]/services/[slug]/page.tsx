import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CapabilityGrid } from "@/components/blocks/CapabilityGrid";
import { StepRow } from "@/components/blocks/StepRow";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { CTABand } from "@/components/blocks/CTABand";
import { BudgetBandTable } from "@/components/blocks/BudgetBandTable";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy } from "@/components/ui/Copy";
import { services, getService } from "@/content/services";
import { getDestination } from "@/content/destinations";
import { getCaseStudy } from "@/content/work";
import { getArticle } from "@/content/articles";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { RESPONSE_PROMISE } from "@/lib/site";

// Editorial cross-links per docs/06 section 2: every service page links the
// hub, at least one destination, one case study and one article
// (QA finding SS-11).
const crossLinkMap: Record<
  string,
  { destination: string; caseStudy: string; article: string }
> = {
  "government-delegations": {
    destination: "davos",
    caseStudy: "six-delegations-one-swiss-partner",
    article: "davos-delegation-countdown",
  },
  "mice-events": {
    destination: "lucerne",
    caseStudy: "returning-delegation-doubled-scale",
    article: "indian-cuisine-swiss-altitude",
  },
  "travel-transport-immigration": {
    destination: "zurich",
    caseStudy: "two-delegations-one-week",
    article: "davos-delegation-countdown",
  },
  stays: {
    destination: "zurich",
    caseStudy: "first-time-delegation-davos",
    article: "davos-delegation-countdown",
  },
  "food-catering": {
    destination: "davos",
    caseStudy: "kitchen-at-1560-metres",
    article: "indian-cuisine-swiss-altitude",
  },
  "media-production": {
    destination: "geneva",
    caseStudy: "bilateral-programme-geneva-zurich",
    article: "davos-delegation-countdown",
  },
  "branding-staffing": {
    destination: "davos",
    caseStudy: "six-delegations-one-swiss-partner",
    article: "indian-cuisine-swiss-altitude",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata(service.seo, `/services/${service.slug}`);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((entry) => entry !== undefined);

  const mapping = crossLinkMap[service.slug];
  const crossLinks = mapping
    ? [
        {
          kind: "Destination guide",
          title: getDestination(mapping.destination)?.cardTitle ?? "",
          href: `/destinations/${mapping.destination}`,
        },
        {
          kind: "From the work",
          title: getCaseStudy(mapping.caseStudy)?.title ?? "",
          href: `/work/${mapping.caseStudy}`,
        },
        {
          kind: "From Insights",
          title: getArticle(mapping.article)?.title ?? "",
          href: `/insights/${mapping.article}`,
        },
      ].filter((link) => link.title !== "")
    : null;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.cardTitle,
            serviceType: service.seo.primaryKeyword ?? service.cardTitle,
            path: `/services/${service.slug}`,
          }),
          faqPageJsonLd(service.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.cardTitle, path: `/services/${service.slug}` },
        ]}
      />
      <PageHero
        eyebrow={service.cardTitle}
        title={service.h1}
        subline={service.subline}
        cta={service.cta}
        media={service.heroMedia}
      />

      {/* Who this serves */}
      <Section surface="light">
        <SectionHeading heading="Who this serves" />
        <p className="prose-site mt-6 text-lg leading-relaxed">
          <Copy text={service.whoThisServes} />
        </p>
      </Section>

      {/* What we handle */}
      <Section surface="ice">
        <SectionHeading heading="What we handle" />
        <div className="mt-12">
          <CapabilityGrid items={service.capabilities} />
        </div>
      </Section>

      {service.budgetBands ? (
        <Section surface="light">
          <SectionHeading heading="Indicative budget bands" />
          <div className="mt-8 max-w-3xl">
            <BudgetBandTable
              rows={service.budgetBands.rows}
              footnote={service.budgetBands.footnote}
            />
          </div>
        </Section>
      ) : null}

      {/* How it runs */}
      <Section surface={service.budgetBands ? "ice" : "light"}>
        <SectionHeading heading="How it runs" />
        <div className="mt-12">
          <StepRow steps={service.processSteps} />
        </div>
      </Section>

      {/* Proof block (dark) */}
      <Section surface="dark">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            {service.proof.lines.map((line) => (
              <p
                key={line}
                className="mt-4 font-display text-2xl font-medium leading-snug text-white first:mt-0"
              >
                <Copy text={line} />
              </p>
            ))}
          </div>
          {service.proof.media ? (
            <MediaPlaceholder brief={service.proof.media} aspect="3:2" />
          ) : null}
        </div>
      </Section>

      {/* FAQs */}
      <Section surface="light">
        <SectionHeading heading="Questions organisers ask" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </Section>

      {/* Related services */}
      <Section surface="ice">
        <RelatedServices services={related} />
        {crossLinks ? (
          <div className="mt-14 border-t border-ice-300 pt-8">
            <h2 className="heading-3 text-navy-900">Plan deeper</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {crossLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex h-full flex-col rounded-sm border border-ice-200 bg-white p-5 shadow-card transition-shadow hover:shadow-lg"
                  >
                    <span className="eyebrow">{link.kind}</span>
                    <span className="mt-2 flex-1 font-medium text-navy-900">
                      {link.title}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
                      <Icon name="arrow-right" size={18} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      <CTABand
        headline="Tell us about your visit."
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref="/enquiry"
      />
    </>
  );
}
