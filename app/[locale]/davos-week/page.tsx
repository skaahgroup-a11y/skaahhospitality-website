import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { HubNav } from "@/components/blocks/HubNav";
import { HubTimeline } from "@/components/blocks/HubTimeline";
import { CapabilityGrid } from "@/components/blocks/CapabilityGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { GalleryScroller } from "@/components/blocks/GalleryScroller";
import { StatCards } from "@/components/blocks/StatCards";
import { ServiceCard } from "@/components/blocks/ServiceCard";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Copy } from "@/components/ui/Copy";
import { FALLBACK_PROOF_LINE, RESPONSE_PROMISE } from "@/lib/site";
import { INDEPENDENCE_DISCLAIMER } from "@/content/disclaimer";
import {
  davosWeekSeo,
  davosWeekHero,
  davosWeekNav,
  davosWeekGround,
  davosWeekCalendar,
  davosWeekAccommodation,
  davosWeekMovement,
  davosWeekCatering,
  davosWeekProtocol,
  davosWeekLessons,
  davosWeekOperatingModel,
  davosWeekProofStats,
  davosWeekCaseStudies,
  davosWeekFaqs,
  davosWeekCrossLinks,
  davosWeekGallery,
  davosWeekClosing,
  type HubProseSection,
} from "@/content/davos-week";

export const metadata: Metadata = pageMetadata(davosWeekSeo, "/davos-week");

// Anchored sections clear the fixed header (h-16/h-20) plus the sticky nav.
const ANCHOR_OFFSET = "scroll-mt-32 md:scroll-mt-36";

function ProseSection({
  section,
  surface,
}: {
  section: HubProseSection;
  surface: "light" | "ice";
}) {
  return (
    <Section surface={surface} id={section.id} className={ANCHOR_OFFSET}>
      <SectionHeading heading={section.heading} />
      <div className="mt-6 max-w-3xl space-y-5">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-stone-500">
            <Copy text={paragraph} />
          </p>
        ))}
      </div>
    </Section>
  );
}

export default async function DavosWefHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={[faqPageJsonLd(davosWeekFaqs)]} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Davos Week", path: "/davos-week" },
        ]}
      />
      <PageHero
        eyebrow={davosWeekHero.eyebrow}
        title={davosWeekHero.h1}
        subline={davosWeekHero.subline}
        cta={davosWeekHero.cta}
        media={davosWeekHero.media}
      />

      {/* Independence disclaimer, shown prominently on this page in addition
          to the site-wide footer rendering. */}
      <div className="border-b border-ice-200 bg-ice-100">
        <div className="container-site py-4">
          <p className="max-w-4xl text-xs leading-relaxed text-stone-500">
            <Copy text={INDEPENDENCE_DISCLAIMER} />
          </p>
        </div>
      </div>

      {/* Sticky in-page nav: 8 anchors (docs/04 hub template) */}
      <HubNav items={davosWeekNav} />

      {/* Section 1: what Davos Week really is on the ground */}
      <ProseSection section={davosWeekGround} surface="light" />

      {/* Section 2: the calendar, rendered as the countdown timeline (C14) */}
      <Section
        surface="ice"
        id={davosWeekCalendar.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading heading={davosWeekCalendar.heading} />
        <div className="mt-6 max-w-3xl space-y-5">
          {davosWeekCalendar.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-stone-500"
            >
              <Copy text={paragraph} />
            </p>
          ))}
        </div>
        <div className="mt-12">
          <HubTimeline items={davosWeekCalendar.items} />
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {davosWeekCalendar.outro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-stone-500"
            >
              <Copy text={paragraph} />
            </p>
          ))}
        </div>
      </Section>

      {/* Sections 3 to 6 */}
      <ProseSection section={davosWeekAccommodation} surface="light" />
      <ProseSection section={davosWeekMovement} surface="ice" />
      <ProseSection section={davosWeekCatering} surface="light" />
      <ProseSection section={davosWeekProtocol} surface="ice" />

      {/* Section 7: five lessons, sign-off marker appended once for the set */}
      <Section
        surface="light"
        id={davosWeekLessons.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading
          heading={davosWeekLessons.heading}
          intro={davosWeekLessons.intro}
        />
        <ol className="mt-10 max-w-3xl space-y-8">
          {davosWeekLessons.items.map((lesson, index) => (
            <li key={lesson.situation} className="flex gap-5">
              <span
                aria-hidden="true"
                className="font-display text-3xl font-medium leading-none text-gold-600"
              >
                {index + 1}
              </span>
              <div>
                <p className="font-medium leading-relaxed text-navy-900">
                  <Copy text={lesson.situation} />
                </p>
                <p className="mt-2 leading-relaxed text-stone-500">
                  <Copy text={lesson.practice} />
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl border-t border-ice-300 pt-4 text-xs text-stone-500">
          <Copy text={davosWeekLessons.confirm} />
        </p>
      </Section>

      {/* Section 8: operating model + section CTA */}
      <Section
        surface="ice"
        id={davosWeekOperatingModel.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading heading={davosWeekOperatingModel.heading} />
        <div className="mt-6 max-w-3xl space-y-5">
          {davosWeekOperatingModel.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-stone-500"
            >
              <Copy text={paragraph} />
            </p>
          ))}
        </div>
        <div className="mt-12">
          <CapabilityGrid items={davosWeekOperatingModel.items} />
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-stone-500">
          <Copy text={davosWeekOperatingModel.outro} />
        </p>
        <div className="mt-8">
          <ButtonLink href={davosWeekOperatingModel.cta.href} variant="primary">
            {davosWeekOperatingModel.cta.label}
          </ButtonLink>
        </div>
      </Section>

      {/* Media set: 6 archive frames */}
      <Section surface="light" wide>
        <SectionHeading heading={davosWeekGallery.heading} />
        <div className="mt-10">
          <GalleryScroller frames={davosWeekGallery.frames} />
        </div>
      </Section>

      {/* Proof rail: fallback line, stat cards, 2 case studies */}
      <Section surface="dark">
        <p className="max-w-3xl font-display text-3xl font-medium leading-snug text-white md:text-4xl">
          {FALLBACK_PROOF_LINE}
        </p>
        <div className="mt-10 max-w-3xl">
          <StatCards surface="dark" stats={davosWeekProofStats} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {davosWeekCaseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group rounded-sm border border-navy-800 bg-navy-950/60 p-6 transition-colors hover:border-gold-500"
            >
              <h3 className="heading-3 text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-200">
                {study.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-transform group-hover:translate-x-1">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQs (FAQPage JSON-LD emitted above) */}
      <Section surface="light">
        <SectionHeading heading="Questions delegations ask" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={davosWeekFaqs} />
        </div>
      </Section>

      {/* Cross-links */}
      <Section surface="ice">
        <SectionHeading heading="Where to go next" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {davosWeekCrossLinks.map((link) => (
            <ServiceCard
              key={link.href}
              title={link.title}
              description={link.description}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>
      </Section>

      <CTABand
        headline={davosWeekClosing.headline}
        body={RESPONSE_PROMISE}
        ctaLabel={davosWeekClosing.ctaLabel}
        ctaHref={davosWeekClosing.ctaHref}
      />
    </>
  );
}
