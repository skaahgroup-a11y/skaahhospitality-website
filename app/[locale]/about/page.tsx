import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CTABand } from "@/components/blocks/CTABand";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";
import {
  DESCRIPTOR,
  FALLBACK_PROOF_LINE,
  GROUP_LINE,
  INDIA_CORRIDOR_LINE,
  ORG,
  RESPONSE_PROMISE,
} from "@/lib/site";
import type { MediaBrief } from "@/content-schemas/types";

// Content per docs/02-content/06-experiences-insights-about-partner.md section C.
const seo = {
  metaTitle: "About SKAAH Hospitality: Swiss Precision | SKAAH",
  metaDescription:
    "Founded 2016 in Opfikon by Zurich Airport: hospitality and logistics under one roof, and the company behind four consecutive Davos Weeks.",
};

export const metadata: Metadata = pageMetadata(seo, "/about");

const whoWeAre = [
  "SKAAH Hospitality was founded in 2016 in Opfikon, by the runway of Zurich Airport, and has kept hospitality and logistics under one roof ever since. One team plans the visit, moves the people, holds the rooms and cooks the food, which is why nothing is lost between suppliers.",
  "We are the company behind four consecutive Davos Weeks of delegation work: the advance planning, the movements, the stays and the tables that let a demanding visit succeed quietly. [TO CONFIRM: founding narrative details]",
  INDIA_CORRIDOR_LINE,
];

// The five brand pillars (docs/01 scope), each with meaning in practice.
const pillars = [
  {
    title: "Swiss precision",
    description:
      "Plans are rehearsed, not improvised. Every movement has a named owner, a timing and a fallback before anyone travels.",
  },
  {
    title: "One partner",
    description:
      "One contract, one costed proposal, one team accountable on the ground. When everything sits under a single roof, nothing slips through the seams between suppliers.",
  },
  {
    title: "Cultural fluency",
    description:
      "We plan for the guests who are actually arriving: their cuisine, their protocol, their expectations. Menus, greetings and briefings are prepared for the delegation in front of us, not for a generic visitor.",
  },
  {
    title: "Quiet luxury",
    description:
      "Comfort that never needs to announce itself. The measure of our work is a visit that feels effortless, not a logo on the door.",
  },
  {
    title: "Responsible by design",
    description:
      "Rail before road wherever the programme allows, and sourcing choices we are willing to explain. Responsibility is designed into the plan, not appended to it.",
  },
];

// Portrait brief per spec: navy backdrop, soft key, no retouch gloss.
// Roles confirmed by the client on 22 August 2026; bios and portraits pending.
const leaders: { name: string; role: string; bio: string; media: MediaBrief }[] =
  [
    {
      name: "Mrs. Haritha Kavi",
      role: "Chairperson and Managing Director",
      bio: "[TO CONFIRM: bio 60-80 words + portrait]",
      media: {
        slot: "about-leader-haritha-kavi",
        subject:
          "Portrait of Mrs. Haritha Kavi, Chairperson and Managing Director",
        composition: "navy backdrop, soft key light",
        treatment: "no retouch gloss",
        source: "new-shoot",
        alt: "Portrait of Mrs. Haritha Kavi, Chairperson and Managing Director of SKAAH Hospitality",
      },
    },
    {
      name: "Mr. Amar Kavi",
      role: "Chief Executive Officer",
      bio: "[TO CONFIRM: bio 60-80 words + portrait]",
      media: {
        slot: "about-leader-amar-kavi",
        subject: "Portrait of Mr. Amar Kavi, CEO",
        composition: "navy backdrop, soft key light",
        treatment: "no retouch gloss",
        source: "new-shoot",
        alt: "Portrait of Mr. Amar Kavi, CEO of SKAAH Hospitality",
      },
    },
    {
      name: "Mr. Hanuma Kuna",
      role: "CTO / Enterprise Architect",
      bio: "[TO CONFIRM: bio 60-80 words + portrait]",
      media: {
        slot: "about-leader-hanuma-kuna",
        subject: "Portrait of Mr. Hanuma Kuna, CTO / Enterprise Architect",
        composition: "navy backdrop, soft key light",
        treatment: "no retouch gloss",
        source: "new-shoot",
        alt: "Portrait of Mr. Hanuma Kuna, CTO and Enterprise Architect of SKAAH Hospitality",
      },
    },
  ];

const groupBand = [
  "SKAAH Hospitality GmbH is part of SKAAH Group AG, a diversified Swiss group active across technologies, real estate, industries and hospitality.",
  "The group is the balance sheet and the standards behind our promises.",
  "Its companies share one discipline: commitments are made carefully and kept.",
];

const esgItems = [
  {
    title: "Rail-first design",
    description:
      "Programmes are planned around Switzerland's railways first, with road transport reserved for the legs that genuinely need it.",
  },
  {
    title: "Sourcing standards",
    description:
      "Kitchens and suppliers are chosen against standards we are prepared to show clients, not just to state.",
  },
  {
    title: "Staff conditions",
    description:
      "The people who deliver a visit are engaged, briefed and housed properly. Hospitality begins with our own teams.",
  },
  {
    title: "Goal alignment",
    description:
      "The group maintains sustainable development goal alignment [TO CONFIRM: which goals the group formally cites].",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={[localBusinessJsonLd()]} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      {/* Hero is portrait-free per docs/04 section 4. */}
      <PageHero
        eyebrow="About"
        title="Hospitality with an operations backbone."
        subline={DESCRIPTOR}
      />

      {/* Who we are */}
      <Section surface="light">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading heading="Who we are" />
            {whoWeAre.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500"
              >
                <Copy text={paragraph} />
              </p>
            ))}
            <p className="mt-8 border-l-2 border-gold-500 pl-4 font-display text-xl font-medium text-navy-900">
              {FALLBACK_PROOF_LINE}
            </p>
          </div>
          <MediaPlaceholder
            brief={{
              slot: "about-who-we-are",
              subject:
                "SKAAH team at work in the Opfikon office, aircraft on approach to Zurich Airport beyond the window",
              source: "new-shoot",
              alt: "The SKAAH Hospitality team at work in Opfikon near Zurich Airport",
            }}
            aspect="4:5"
          />
        </div>
      </Section>

      {/* How we think: the five pillars */}
      <Section surface="ice">
        <SectionHeading
          heading="How we think"
          intro="Five pillars, each with a meaning you can hold us to on the ground."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-sm border border-ice-200 bg-white p-6 shadow-card"
            >
              <span className="text-gold-600">
                <Icon name="compass" size={22} />
              </span>
              <h3 className="heading-3 mt-3 text-navy-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Leadership */}
      <Section surface="light">
        <SectionHeading heading="Leadership" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-sm border border-ice-200 bg-white shadow-card"
            >
              <MediaPlaceholder brief={leader.media} aspect="4:5" />
              <div className="p-6">
                <h3 className="heading-3 text-navy-900">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-700">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  <Copy text={leader.bio} />
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-stone-500">
          <Copy text="Further leaders: [TO CONFIRM: list]" />
        </p>
      </Section>

      {/* Part of SKAAH Group: quiet treatment per SoW section 4.2 */}
      <Section surface="dark">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{GROUP_LINE}</p>
          <h2 className="heading-2 text-white">Part of SKAAH Group</h2>
          {groupBand.map((sentence) => (
            <p key={sentence} className="mt-4 leading-relaxed text-ice-200">
              {sentence}
            </p>
          ))}
          <a
            href={ORG.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400"
          >
            skaah.com
            <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </Section>

      {/* Responsible by design: ESG in practice */}
      <Section surface="ice">
        <SectionHeading
          heading="Responsible by design"
          intro="ESG as practice, not paragraph: the choices are visible in how a programme is built."
        />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {esgItems.map((item) => (
            <li key={item.title}>
              <span className="text-gold-600">
                <Icon name="check" size={20} />
              </span>
              <h3 className="mt-2 font-medium text-navy-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
                <Copy text={item.description} />
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Careers */}
      <Section surface="light">
        <SectionHeading heading="Careers" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500">
          We hire people who keep promises at scale: operations leads, chefs,
          drivers and coordinators across Switzerland.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone-500">
          <Copy text="Write to us at [TO CONFIRM: careers mailbox] with a short note on the hardest week you have ever run." />
        </p>
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
