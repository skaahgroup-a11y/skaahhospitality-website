// Content verbatim from docs/02-content/02-services.md section B (flagship).
import type { ServiceContent } from "@/content-schemas/types";

export const governmentDelegations: ServiceContent = {
  slug: "government-delegations",
  order: 1,
  icon: "delegations",
  seo: {
    metaTitle: "Government Delegation Support in Switzerland | SKAAH",
    metaDescription:
      "Delegation-grade planning in Switzerland: protocol, immigration liaison, secure transport, accommodation and catering. Proven at Davos Week.",
    primaryKeyword: "government delegation support Switzerland",
    secondaryKeywords: [
      "diplomatic protocol services Switzerland",
      "delegation logistics Davos",
      "visa support delegations Switzerland",
    ],
  },
  cardTitle: "Government & Diplomatic Delegations",
  cardOneLiner:
    "Protocol, immigration liaison, secure ground transport and delegation-grade planning.",
  cardDescription:
    "Planning and ground execution for government and diplomatic visits: protocol, immigration liaison, secure transport and delegation-grade accommodation, accountable to one office.",
  h1: "Delegations, handled to protocol.",
  subline:
    "Planning and ground execution for government and diplomatic visits to Switzerland: discreet, precise and accountable to one office, yours.",
  cta: { label: "Start a delegation enquiry", href: "/enquiry?segment=delegation" },
  whoThisServes:
    "Chief minister and ministerial offices, state industrial development corporations, embassies and consulates, trade missions, and the officials who answer for every minute of a visit.",
  capabilities: [
    {
      title: "Protocol & precedence",
      description:
        "Seating, orders of address, gifting norms, flag and title accuracy.",
    },
    {
      title: "Visa & immigration liaison",
      description:
        "Documentation support and coordination with the right Swiss offices [TO CONFIRM: exact service boundary with legal counsel].",
    },
    {
      title: "Secure ground transport",
      description:
        "Vetted drivers, marshalled convoys, airport-to-venue timing rehearsed.",
    },
    {
      title: "Accommodation blocks",
      description:
        "Delegation-grade hotels and serviced apartments, held and managed under one master account.",
    },
    {
      title: "Multi-cuisine catering",
      description:
        "Your delegation's own cuisine done properly, alongside Swiss tables (see Food & Catering).",
    },
    {
      title: "Bilateral & programme support",
      description:
        "Meeting rooms, interpreters, staging for signings and MoUs.",
    },
    {
      title: "Media & documentation",
      description:
        "Photography and film cleared to your rules (see Media & Production).",
    },
    {
      title: "Davos Week operations",
      description:
        "The specific discipline of Davos in January (see the Davos Week hub).",
    },
  ],
  processSteps: [
    {
      title: "Advance brief and recce",
      description: "We walk the ground before your advance team does.",
    },
    {
      title: "Single costed plan",
      description: "One proposal across every service, with named owners.",
    },
    {
      title: "Protocol rehearsal",
      description: "Movements, precedence and staging rehearsed in advance.",
    },
    {
      title: "Delegation week",
      description: "A 24-hour operations lead for the duration of the visit.",
    },
    {
      title: "Same-week debrief",
      description: "Debrief and asset handover before the week closes.",
    },
  ],
  proof: {
    lines: [
      "Six Indian delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Four consecutive Davos Weeks without a public misstep. [TO CONFIRM: approved phrasing]",
      "In the India corridor we work with the Confederation of Indian Industry (CII) and Invest India.",
    ],
    media: {
      slot: "deleg-proof",
      subject: "Convoy staging area at dawn, marshals with clipboards",
      source: "davos-archive",
      alt: "Vehicles staged at dawn for a delegation movement in Davos",
    },
  },
  faqs: [
    {
      question: "How early should a delegation engage you?",
      answer:
        "For Davos Week, 90 days or more. For other visits, 30 days is comfortable; we have delivered on far less.",
    },
    {
      question: "Can you work alongside our own security detail?",
      answer:
        "Yes. We plan around your officers and the Swiss authorities, never instead of them.",
    },
    {
      question: "Do you name past clients?",
      answer: "Only with written consent. Discretion is the default.",
    },
    {
      question: "Which languages do your teams work in?",
      answer:
        "English, German, French, Italian and Hindi on the ground, more on request. [TO CONFIRM: actual list]",
    },
    {
      question: "Can you host vegetarian, Jain, halal and regional menus?",
      answer:
        "Yes, from our own multi-cuisine kitchens, not an outsourced afterthought.",
    },
  ],
  relatedSlugs: ["travel-transport-immigration", "food-catering"],
  heroMedia: {
    slot: "deleg-hero",
    subject:
      "Delegation walking away from camera into a lit venue, Davos night",
    source: "davos-archive",
    alt: "A delegation entering a lit venue in the evening",
  },
};
