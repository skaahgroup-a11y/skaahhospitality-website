import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { PartnerValueGrid } from "@/components/blocks/PartnerValueGrid";
import { PartnerCta } from "@/components/blocks/PartnerCta";
import { StepRow } from "@/components/blocks/StepRow";
import { WhatsAppLink } from "@/components/blocks/WhatsAppLink";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/06-experiences-insights-about-partner.md section D.
const seo = {
  metaTitle: "Swiss Ground Partner for Agencies & Incentive Houses | SKAAH",
  metaDescription:
    "White-label Swiss execution for agencies and incentive houses: one costed proposal, protected commercials and delegation-grade operations under your brand or ours.",
  primaryKeyword: "Swiss ground partner for agencies",
};

export const metadata: Metadata = pageMetadata(seo, "/partners");

// Value grid titles verbatim from the spec; descriptions drafted in voice.
const partnerValues = [
  {
    title: "White-label delivery",
    description:
      "We run the ground under your brand or ours; your choice, made once per project and honoured throughout.",
  },
  {
    title: "One costed proposal within 5 business days [TO CONFIRM: promise]",
    description:
      "One document across venues, stays, movements and menus, costed and ready to place in front of your client.",
  },
  {
    title: "Protected commercials: your client is never approached",
    description:
      "Commercial terms sit between us, in writing. The client relationship stays yours, before, during and after delivery.",
  },
  {
    title: "Multi-cuisine kitchens your clients will notice",
    description:
      "Our own kitchens cook the cuisines your groups actually eat, alongside Swiss tables done properly.",
  },
  {
    title: "Delegation-grade operations when your client is a government",
    description:
      "Protocol, secure movements and documentation discipline, proven across four WEF years.",
  },
];

const partnershipSteps = [
  {
    title: "Introduce the opportunity",
    description:
      "Tell us the client, the dates and the ambition; a short call is enough to start.",
  },
  {
    title: "Receive one costed proposal",
    description:
      "One document covering venues, stays, movements and menus, with named owners and one number.",
  },
  {
    title: "We deliver, under your brand or ours",
    description:
      "Your team fronts the client or ours does; either way, one Swiss desk answers for the ground.",
  },
];

const whoWeWorkWith = [
  {
    title: "Outbound MICE agencies",
    description:
      "Incentive and conference specialists sending groups to Switzerland who need one accountable desk on the ground.",
  },
  {
    title: "DMC networks",
    description:
      "Networks and consortia that need dependable Swiss fulfilment for their member agencies' clients.",
  },
  {
    title: "Event producers",
    description:
      "Creative and production agencies that want Swiss logistics running quietly underneath their show.",
  },
  {
    title: "Travel designers",
    description:
      "Private travel designers building Swiss chapters for clients who expect everything handled.",
  },
];

export default async function PartnersPage({
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
          { name: "Partner with us", path: "/partners" },
        ]}
      />
      <PageHero
        eyebrow="Partner with us"
        title="Your Switzerland desk."
        subline="For international agencies and incentive houses, and for India-side MICE specialists in particular: white-label Swiss execution under your brand or ours, your client relationship untouched."
        media={{
          slot: "partners-hero",
          subject:
            "Two teams working across one table, contracts and laptops in play",
          composition: "candid working session, no handshake",
          source: "new-shoot",
          alt: "Two partner teams working together across one table with contracts and laptops",
        }}
      />

      {/* Value grid (C28) */}
      <Section surface="light">
        <SectionHeading heading="What you get" />
        <div className="mt-12">
          <PartnerValueGrid items={partnerValues} />
        </div>
      </Section>

      {/* How partnership works */}
      <Section surface="ice">
        <SectionHeading heading="How partnership works" />
        <div className="mt-12">
          <StepRow steps={partnershipSteps} />
        </div>
      </Section>

      {/* Who we work with */}
      <Section surface="light">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading heading="Who we work with" />
            <ul className="mt-10 space-y-8">
              {whoWeWorkWith.map((partner) => (
                <li key={partner.title}>
                  <h3 className="heading-3 text-navy-900">{partner.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-500">
                    {partner.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <MediaPlaceholder
            brief={{
              slot: "partners-table",
              subject:
                "Agency and SKAAH teams over one planning table, proposals and laptops open",
              composition: "worked documents in frame, no handshake",
              source: "new-shoot",
              alt: "Agency and SKAAH teams planning together over one table of proposals and laptops",
            }}
            aspect="4:5"
          />
        </div>
      </Section>

      {/* Agency CTA band with partner_cta_click tracking */}
      <section
        data-surface="dark"
        className="bg-navy-900 py-16 text-ice-100 md:py-24"
      >
        <div className="container-site text-center">
          <h2 className="display-2 text-white">
            One conversation opens the desk.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ice-200">
            {RESPONSE_PROMISE}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PartnerCta href="/enquiry?segment=agency">
              Start an agency conversation
            </PartnerCta>
            <WhatsAppLink variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
