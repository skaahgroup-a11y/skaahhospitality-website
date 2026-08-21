import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { VenueTable } from "@/components/blocks/VenueTable";
import { Timeline } from "@/components/blocks/Timeline";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy } from "@/components/ui/Copy";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { destinations, getDestination } from "@/content/destinations";
import { RESPONSE_PROMISE } from "@/lib/site";

// One template serves both tiers (docs/02-content/04-destinations.md):
// destination-full for tier 1 guides, destination-overview for tier 2.

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return pageMetadata(destination.seo, `/destinations/${destination.slug}`);
}

// What-we-run chips as styled spans; gold hairline on dark, navy on light.
function WhatWeRunChips({
  items,
  onDark = false,
}: {
  items: string[];
  onDark?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li key={item}>
          <span
            className={`inline-block rounded-sm border px-4 py-2 text-sm font-medium ${
              onDark
                ? "border-gold-500 text-ice-100"
                : "border-navy-900 bg-white text-navy-900"
            }`}
          >
            <Copy text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const destination = getDestination(slug);
  if (!destination) notFound();

  const t = await getTranslations({ locale, namespace: "common" });
  const isFullGuide = destination.tier === 1;

  return (
    <>
      {destination.faqs ? (
        <JsonLd data={[faqPageJsonLd(destination.faqs)]} />
      ) : null}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          {
            name: destination.cardTitle,
            path: `/destinations/${destination.slug}`,
          },
        ]}
      />
      <PageHero
        eyebrow={
          isFullGuide
            ? `${destination.cardTitle} · Organiser guide`
            : `${destination.cardTitle} · Overview`
        }
        title={destination.h1}
        subline={destination.subline}
        cta={{ label: "Start your enquiry", href: "/enquiry" }}
        media={destination.heroMedia}
      />

      {/* Davos: the Davos Week operation lives in the hub; prominent cross-link. */}
      {destination.crossLinkBanner ? (
        <div className="bg-gold-500">
          <div className="container-site flex flex-wrap items-center justify-between gap-4 py-5">
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-navy-950 md:text-base">
              <Copy text={destination.crossLinkBanner.text} />
            </p>
            <ButtonLink
              href={destination.crossLinkBanner.cta.href}
              variant="outline-navy"
            >
              {destination.crossLinkBanner.cta.label}
            </ButtonLink>
          </div>
        </div>
      ) : null}

      {isFullGuide ? (
        <>
          {destination.whyGroups ? (
            <Section surface="light">
              <SectionHeading heading="Why groups come here" />
              <div className="prose-site mt-6 text-lg leading-relaxed">
                {destination.whyGroups.map((paragraph) => (
                  <p key={paragraph}>
                    <Copy text={paragraph} />
                  </p>
                ))}
              </div>
            </Section>
          ) : null}

          {destination.venuesSnapshot ? (
            <Section surface="ice">
              <SectionHeading
                heading="Venues & capacities snapshot"
                intro={destination.venuesSnapshot.intro}
              />
              <div className="mt-8 max-w-3xl">
                <VenueTable
                  archetypes={destination.venuesSnapshot.archetypes}
                />
              </div>
            </Section>
          ) : null}

          {destination.staysSnapshot ? (
            <Section surface="light">
              <SectionHeading heading="Stays snapshot" />
              <div className="prose-site mt-6 text-lg leading-relaxed">
                {destination.staysSnapshot.map((paragraph) => (
                  <p key={paragraph}>
                    <Copy text={paragraph} />
                  </p>
                ))}
              </div>
            </Section>
          ) : null}

          {destination.gettingAround ? (
            <Section surface="ice">
              <SectionHeading heading="Getting there & around" />
              <ul className="mt-8 max-w-3xl space-y-4">
                {destination.gettingAround.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-gold-600">
                      <Icon name="compass" size={18} />
                    </span>
                    <span className="leading-relaxed text-navy-900">
                      <Copy text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          <Section surface="dark">
            <SectionHeading heading="What we run here" />
            <div className="mt-8">
              <WhatWeRunChips items={destination.whatWeRun} onDark />
            </div>
          </Section>

          {destination.sampleDay ? (
            <Section surface="light">
              <SectionHeading
                heading="A sample day"
                intro="One plausible shape for a programme day; every visit gets its own run sheet."
              />
              <div className="mt-10 max-w-3xl">
                <Timeline items={destination.sampleDay} orientation="vertical" />
              </div>
            </Section>
          ) : null}

          {destination.faqs ? (
            <Section surface="ice">
              <SectionHeading heading="Questions organisers ask" />
              <div className="mt-10 max-w-3xl">
                <FAQAccordion faqs={destination.faqs} />
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
      ) : (
        <>
          <Section surface="light">
            <SectionHeading heading="Three facts organisers need" />
            {destination.whyGroups ? (
              <div className="prose-site mt-6 text-lg leading-relaxed">
                {destination.whyGroups.map((paragraph) => (
                  <p key={paragraph}>
                    <Copy text={paragraph} />
                  </p>
                ))}
              </div>
            ) : null}
            {destination.organiserFacts ? (
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {destination.organiserFacts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-sm border border-ice-200 bg-white p-6 shadow-card"
                  >
                    <h3 className="heading-3 text-navy-900">
                      <Copy text={fact.title} />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-500">
                      <Copy text={fact.description} />
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </Section>

          <Section surface="ice">
            <SectionHeading heading="What we run here" />
            <div className="mt-8">
              <WhatWeRunChips items={destination.whatWeRun} />
            </div>
          </Section>

          <CTABand
            headline={t("fullGuideComing")}
            body={RESPONSE_PROMISE}
            ctaLabel="Start your enquiry"
            ctaHref="/enquiry"
          />
        </>
      )}
    </>
  );
}
