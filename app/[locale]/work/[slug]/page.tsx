import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CaseStudyMetaRow } from "@/components/blocks/CaseStudyMetaRow";
import { StatCards } from "@/components/blocks/StatCards";
import { GalleryScroller } from "@/components/blocks/GalleryScroller";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";
import { caseStudies, getCaseStudy } from "@/content/work";
import { getService } from "@/content/services";
import { RESPONSE_PROMISE } from "@/lib/site";

// DECISION: case studies carry no publication date in content and most
// engagement years are [TO CONFIRM], so the Article dates reflect when the
// entries were authored for the site, not the engagement itself.
const CASE_STUDY_DATE = "2026-08-21";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(study.seo, `/work/${study.slug}`);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const usedServices = study.servicesUsed
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: study.title,
            description: study.seo.metaDescription,
            path: `/work/${study.slug}`,
            datePublished: CASE_STUDY_DATE,
            dateModified: CASE_STUDY_DATE,
            aboutService: usedServices[0]?.cardTitle,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: study.title, path: `/work/${study.slug}` },
        ]}
      />
      <PageHero eyebrow="Case study" title={study.title}>
        <CaseStudyMetaRow
          slug={study.slug}
          year={study.year}
          destination={study.destination}
          segment={study.segment}
          groupSizeBand={study.groupSizeBand}
        />
      </PageHero>

      {/* The brief */}
      <Section surface="light">
        <SectionHeading heading="The brief" />
        <p className="prose-site mt-6 max-w-3xl text-lg leading-relaxed">
          <Copy text={study.brief} />
        </p>
      </Section>

      {/* What made it hard */}
      <Section surface="ice">
        <SectionHeading heading="What made it hard" />
        <ul className="mt-8 max-w-3xl space-y-4">
          {study.hard.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
              />
              <span className="text-lg leading-relaxed">
                <Copy text={item} />
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What we did */}
      <Section surface="light">
        <SectionHeading heading="What we did" />
        <ul className="mt-8 max-w-3xl space-y-4">
          {study.did.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-gold-600">
                <Icon name="check" size={20} />
              </span>
              <span className="text-lg leading-relaxed">
                <Copy text={item} />
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The outcome */}
      <Section surface="dark">
        <h2 className="heading-2 text-white">The outcome</h2>
        <div className="mt-10">
          <StatCards stats={study.outcome.stats} surface="dark" />
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ice-200">
          <Copy text={study.outcome.summary} />
        </p>
      </Section>

      {/* Gallery */}
      <Section surface="light" wide>
        <SectionHeading
          heading="Gallery"
          intro="Frames are selected from the Davos archive. Nothing ships without a manifest row and consent review."
        />
        <div className="mt-10">
          <GalleryScroller frames={study.gallery} />
        </div>
      </Section>

      {/* Services used */}
      <Section surface="ice">
        <SectionHeading heading="Services used" />
        <div className="mt-8 flex flex-wrap gap-3">
          {usedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-navy-900 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              <Icon name={service.icon} size={18} />
              {service.cardTitle}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand
        headline="Planning something similar?"
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref={`/enquiry?segment=${study.segment}`}
      />
    </>
  );
}
