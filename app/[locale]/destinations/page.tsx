import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { DestinationCard } from "@/components/blocks/DestinationCard";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { destinations } from "@/content/destinations";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/04-destinations.md (landing).
const seo = {
  metaTitle: "Switzerland Destinations for Delegations & Events | SKAAH",
  metaDescription:
    "Eight organiser guides to Switzerland: Zurich, Geneva, Lucerne, Davos and beyond, covering venues, stays, movement and what SKAAH runs in each place.",
  primaryKeyword: "Switzerland destinations for delegations and events",
};

export const metadata: Metadata = pageMetadata(seo, "/destinations");

export default async function DestinationsLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ]}
      />
      <PageHero
        eyebrow="Destinations"
        title="Switzerland, destination by destination."
        subline="Eight working guides written for organisers, not tourists: venues, stays, movement and what we actually run in each place."
      />

      <Section surface="light">
        {/* Heading-order fix (QA AC-09): grids jump h1 to card h3 without it. */}
        <h2 className="sr-only">The eight destinations</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              title={destination.cardTitle}
              oneLiner={destination.cardOneLiner}
              href={`/destinations/${destination.slug}`}
              badge={destination.badge}
              media={destination.heroMedia}
            />
          ))}
        </div>
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
