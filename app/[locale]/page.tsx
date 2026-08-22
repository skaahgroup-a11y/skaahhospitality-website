import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo/meta";
import { HeroFilm } from "@/components/blocks/HeroFilm";
import { ProofStrip } from "@/components/blocks/ProofStrip";
import { ServiceCard } from "@/components/blocks/ServiceCard";
import { DestinationCard } from "@/components/blocks/DestinationCard";
import { SegmentRouter } from "@/components/blocks/SegmentRouter";
import { StepRow } from "@/components/blocks/StepRow";
import { InsightCard } from "@/components/blocks/InsightCard";
import { CTABand } from "@/components/blocks/CTABand";
import { StatCards } from "@/components/blocks/StatCards";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RESPONSE_PROMISE, INDIA_CORRIDOR_LINE } from "@/lib/site";
import {
  homeSeo,
  homeHero,
  homeTrustItems,
  homeFilm,
  homePoster,
  homeProof,
  homeServicesSection,
  homeFlagship,
  homeDestinationsSection,
  homeSegmentsSection,
  homeSteps,
  homeInsightsSection,
  homeClosing,
} from "@/content/home";
import { services } from "@/content/services";
import { destinations } from "@/content/destinations";
import { articles } from "@/content/articles";

export const metadata: Metadata = pageMetadata(homeSeo, "/");

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const teaserDestinations = destinations.filter((destination) =>
    ["zurich", "geneva", "lucerne", "davos"].includes(destination.slug),
  );
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* H1: film hero */}
      <HeroFilm
        eyebrow={homeHero.eyebrow}
        headline={homeHero.headline}
        subline={homeHero.subline}
        proofLine={homeHero.proofLine}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        trustItems={homeTrustItems}
        film={homeFilm}
        poster={homePoster}
      />

      {/* H2: proof strip */}
      <Section surface="ice">
        <ProofStrip
          heading={homeProof.heading}
          stats={homeProof.stats}
          link={homeProof.link}
        />
      </Section>

      {/* H3: services grid, order fixed */}
      <Section surface="light">
        <SectionHeading
          heading={homeServicesSection.heading}
          intro={homeServicesSection.intro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.cardTitle}
              description={service.cardOneLiner}
              href={`/services/${service.slug}`}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      {/* H4: flagship narrative band (dark) */}
      <Section surface="dark">
        <div className="max-w-3xl">
          <h2 className="display-2 text-white">{homeFlagship.heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ice-200">
            {homeFlagship.body}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ice-200">
            {INDIA_CORRIDOR_LINE}
          </p>
          <div className="mt-8">
            <StatCards
              surface="dark"
              stats={homeProof.stats.slice(0, 3)}
            />
          </div>
          <div className="mt-8">
            <ButtonLink href={homeFlagship.cta.href} variant="gold">
              {homeFlagship.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* H5: destinations teaser */}
      <Section surface="light">
        <SectionHeading heading={homeDestinationsSection.heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teaserDestinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              title={destination.cardTitle}
              oneLiner={destination.cardOneLiner}
              href={`/destinations/${destination.slug}`}
              badge={destination.badge}
              media={destination.heroMedia}
            />
          ))}
          <Link
            href="/destinations"
            className="group flex min-h-40 flex-col items-start justify-center rounded-sm border border-ice-200 bg-navy-900 p-6 text-ice-100 shadow-card transition-colors hover:bg-navy-800"
          >
            <span className="heading-3 text-white">All destinations</span>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-transform group-hover:translate-x-1">
              <Icon name="arrow-right" size={18} />
            </span>
          </Link>
        </div>
      </Section>

      {/* H6: segments router */}
      <Section surface="ice">
        <SectionHeading heading={homeSegmentsSection.heading} />
        <div className="mt-12">
          <SegmentRouter tiles={homeSegmentsSection.tiles} />
        </div>
      </Section>

      {/* H7: how we work */}
      <Section surface="light">
        <SectionHeading heading="How we work" />
        <div className="mt-12">
          <StepRow steps={homeSteps} />
        </div>
        <p className="mt-10 border-t border-ice-300 pt-6 text-sm text-stone-500">
          {RESPONSE_PROMISE}
        </p>
      </Section>

      {/* H8: insights teaser */}
      <Section surface="ice">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading heading={homeInsightsSection.heading} />
          <Link
            href="/insights"
            className="link-draw inline-flex items-center gap-2 text-sm font-medium text-navy-900"
          >
            All insights
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>

      {/* H9: closing CTA band */}
      <CTABand
        headline={homeClosing.headline}
        body={homeClosing.body}
        ctaLabel={homeClosing.cta.label}
        ctaHref={homeClosing.cta.href}
      />
    </>
  );
}
