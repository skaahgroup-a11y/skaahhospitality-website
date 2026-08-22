import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { ServiceCard } from "@/components/blocks/ServiceCard";
import { CTABand } from "@/components/blocks/CTABand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/content/services";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/02-services.md section A.
const seo = {
  metaTitle: "Hospitality & Logistics Services in Switzerland | SKAAH",
  metaDescription:
    "Seven services, one accountable partner: delegations, MICE, travel and immigration, stays, catering, media and staffing across Switzerland.",
  primaryKeyword: "hospitality and logistics services Switzerland",
};

export const metadata: Metadata = pageMetadata(seo, "/services");

const comparison = [
  {
    title: "Single contract and invoice",
    onePartner: "One agreement, one number to approve.",
    twelveSuppliers: "A stack of contracts, deposits and terms to reconcile.",
  },
  {
    title: "One on-ground lead",
    onePartner: "A named lead who answers for the whole operation.",
    twelveSuppliers: "Coordination falls to your own team on the day.",
  },
  {
    title: "Nothing lost between vendors",
    onePartner: "Handoffs happen inside one team, on one run sheet.",
    twelveSuppliers: "Every seam between suppliers is a place plans slip.",
  },
];

export default async function ServicesLandingPage({
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
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Seven services. One accountable partner."
        subline="Most visits fail in the seams between suppliers. We remove the seams: one relationship, one proposal, one team on the ground, across everything below."
        media={{
          slot: "services-hero",
          subject:
            "Operations table with radios, laminated run-sheets, Swiss rail timetable",
          composition: "top-down",
          source: "new-shoot",
          alt: "Event operations planning table with run sheets and radios",
        }}
      />

      <Section surface="light">
        {/* Heading-order fix (QA AC-09): grids jump h1 to card h3 without it. */}
        <h2 className="sr-only">The seven services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.cardTitle}
              description={service.cardDescription}
              href={`/services/${service.slug}`}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <Section surface="ice">
        <SectionHeading heading="One partner, not twelve suppliers" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {comparison.map((row) => (
            <div
              key={row.title}
              className="rounded-sm border border-ice-200 bg-white p-6 shadow-card"
            >
              <h3 className="heading-3 text-navy-900">{row.title}</h3>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-navy-900">
                <span className="mt-0.5 shrink-0 text-green-600">
                  <Icon name="check" size={18} />
                </span>
                {row.onePartner}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-stone-500">
                <span className="mt-0.5 shrink-0">
                  <Icon name="close" size={18} />
                </span>
                {row.twelveSuppliers}
              </p>
            </div>
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
