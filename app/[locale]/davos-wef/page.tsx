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
import {
  davosWefSeo,
  davosWefHero,
  davosWefNav,
  davosWefGround,
  davosWefCalendar,
  davosWefAccommodation,
  davosWefMovement,
  davosWefCatering,
  davosWefProtocol,
  davosWefLessons,
  davosWefOperatingModel,
  davosWefProofStats,
  davosWefCaseStudies,
  davosWefFaqs,
  davosWefCrossLinks,
  davosWefGallery,
  davosWefClosing,
  type HubProseSection,
} from "@/content/davos-wef";

export const metadata: Metadata = pageMetadata(davosWefSeo, "/davos-wef");

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
      <JsonLd data={[faqPageJsonLd(davosWefFaqs)]} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Davos & WEF Week", path: "/davos-wef" },
        ]}
      />
      <PageHero
        eyebrow={davosWefHero.eyebrow}
        title={davosWefHero.h1}
        subline={davosWefHero.subline}
        cta={davosWefHero.cta}
        media={davosWefHero.media}
      />

      {/* Sticky in-page nav: 8 anchors (docs/04 hub template) */}
      <HubNav items={davosWefNav} />

      {/* Section 1: what WEF week really is on the ground */}
      <ProseSection section={davosWefGround} surface="light" />

      {/* Section 2: the calendar, rendered as the countdown timeline (C14) */}
      <Section
        surface="ice"
        id={davosWefCalendar.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading heading={davosWefCalendar.heading} />
        <div className="mt-6 max-w-3xl space-y-5">
          {davosWefCalendar.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-stone-500"
            >
              <Copy text={paragraph} />
            </p>
          ))}
        </div>
        <div className="mt-12">
          <HubTimeline items={davosWefCalendar.items} />
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {davosWefCalendar.outro.map((paragraph) => (
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
      <ProseSection section={davosWefAccommodation} surface="light" />
      <ProseSection section={davosWefMovement} surface="ice" />
      <ProseSection section={davosWefCatering} surface="light" />
      <ProseSection section={davosWefProtocol} surface="ice" />

      {/* Section 7: five lessons, sign-off marker appended once for the set */}
      <Section
        surface="light"
        id={davosWefLessons.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading
          heading={davosWefLessons.heading}
          intro={davosWefLessons.intro}
        />
        <ol className="mt-10 max-w-3xl space-y-8">
          {davosWefLessons.items.map((lesson, index) => (
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
        <p className="mt-8 max-w-3xl border-t border-ice-300 pt-4 text-xs text-stone-400">
          <Copy text={davosWefLessons.confirm} />
        </p>
      </Section>

      {/* Section 8: operating model + section CTA */}
      <Section
        surface="ice"
        id={davosWefOperatingModel.id}
        className={ANCHOR_OFFSET}
      >
        <SectionHeading heading={davosWefOperatingModel.heading} />
        <div className="mt-6 max-w-3xl space-y-5">
          {davosWefOperatingModel.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-stone-500"
            >
              <Copy text={paragraph} />
            </p>
          ))}
        </div>
        <div className="mt-12">
          <CapabilityGrid items={davosWefOperatingModel.items} />
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-stone-500">
          <Copy text={davosWefOperatingModel.outro} />
        </p>
        <div className="mt-8">
          <ButtonLink href={davosWefOperatingModel.cta.href} variant="primary">
            {davosWefOperatingModel.cta.label}
          </ButtonLink>
        </div>
      </Section>

      {/* Media set: 6 archive frames */}
      <Section surface="light" wide>
        <SectionHeading heading={davosWefGallery.heading} />
        <div className="mt-10">
          <GalleryScroller frames={davosWefGallery.frames} />
        </div>
      </Section>

      {/* Proof rail: fallback line, stat cards, 2 case studies */}
      <Section surface="dark">
        <p className="max-w-3xl font-display text-3xl font-medium leading-snug text-white md:text-4xl">
          {FALLBACK_PROOF_LINE}
        </p>
        <div className="mt-10 max-w-3xl">
          <StatCards surface="dark" stats={davosWefProofStats} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {davosWefCaseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group rounded-sm border border-navy-800 bg-navy-950/60 p-6 transition-colors hover:border-gold-500"
            >
              <h3 className="heading-3 text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-200">
                {study.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-500 transition-transform group-hover:translate-x-1">
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
          <FAQAccordion faqs={davosWefFaqs} />
        </div>
      </Section>

      {/* Cross-links */}
      <Section surface="ice">
        <SectionHeading heading="Where to go next" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {davosWefCrossLinks.map((link) => (
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
        headline={davosWefClosing.headline}
        body={RESPONSE_PROMISE}
        ctaLabel={davosWefClosing.ctaLabel}
        ctaHref={davosWefClosing.ctaHref}
      />
    </>
  );
}
