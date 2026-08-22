// Content verbatim from docs/02-content/02-services.md section E (Stays).
import type { ServiceContent } from "@/content-schemas/types";

export const stays: ServiceContent = {
  slug: "stays",
  order: 4,
  icon: "stays",
  seo: {
    metaTitle: "Group Stays in Switzerland: Hotels & Chalets | SKAAH",
    metaDescription:
      "Delegation blocks, chalet buyouts and serviced apartments near Zurich Airport, contracted and managed under one master account. Proven at Davos Week.",
    primaryKeyword: "group accommodation Switzerland",
  },
  cardTitle: "Stays",
  cardOneLiner: "Hotels, chalets and serviced apartments, blocked and managed.",
  cardDescription:
    "Delegation blocks, incentive allocations, chalet buyouts and long-stay serviced apartments, negotiated, held and managed under one master account.",
  h1: "The right rooms, held and handled.",
  subline:
    "Delegation blocks, incentive allocations, chalet buyouts and long-stay serviced apartments near Zurich Airport, contracted and managed under one master account.",
  cta: { label: "Start a stay enquiry", href: "/enquiry?segment=stay" },
  whoThisServes:
    "Delegation housing officers, corporate travel and event teams, families planning private alpine stays, and long-stay professionals working the Zurich Airport corridor.",
  capabilities: [
    {
      title: "Room-block negotiation",
      description:
        "Allocations negotiated and held on terms that protect you, not the seller.",
    },
    {
      title: "Delegation floors & suite protocol",
      description:
        "Whole floors held, suites assigned by precedence and privacy handled as standard.",
    },
    {
      title: "Chalet & villa buyouts",
      description:
        "Private properties for principals, boards and families, staffed and provisioned.",
    },
    {
      title: "Serviced apartments",
      description:
        "Long stays and advance teams in the Opfikon and Zurich Airport corridor, our own neighbourhood.",
    },
    {
      title: "Billing consolidation",
      description:
        "One master account, one reconciliation, no surprise extras at checkout.",
    },
    {
      title: "Quiet fixes when plans change",
      description:
        "Late arrivals, extended stays and swapped rooms resolved without your guests noticing.",
    },
  ],
  processSteps: [
    {
      title: "Advance brief",
      description:
        "Dates, party structure, precedence and standards, gathered in one conversation.",
    },
    {
      title: "Single costed plan",
      description:
        "One proposal across hotels, chalets and apartments, with terms stated plainly.",
    },
    {
      title: "Allocation lock",
      description:
        "Blocks contracted, rooming lists loaded and arrival details rehearsed with each property.",
    },
    {
      title: "Stay delivery",
      description:
        "A named lead manages check-ins, changes and the master account throughout.",
    },
    {
      title: "Reconciliation and debrief",
      description:
        "One consolidated bill, checked line by line, and a debrief before the file closes.",
    },
  ],
  proof: {
    lines: [
      "Six Indian delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Accommodation blocks held and managed through four Davos Januaries, when rooms matter most.",
    ],
    media: {
      slot: "stays-proof",
      subject: "Serviced apartment interior detail, Zurich Airport corridor",
      source: "new-shoot",
      alt: "Interior detail of a serviced apartment near Zurich Airport",
    },
  },
  faqs: [
    {
      question: "How are room blocks held and released?",
      answer:
        "Under a master account, with hold and release dates written into the contract before you commit, so nothing lapses by surprise. [TO CONFIRM: standard hold and release terms]",
    },
    {
      question: "What should we expect from Davos in January?",
      answer:
        "Scarcity and early commitment. Rooms in the valley are contracted far in advance and priced accordingly; the honest approach is to engage early and let us work the options, including nearby valleys with managed transfers.",
    },
    {
      question: "What terms apply to long-stay serviced apartments?",
      answer:
        "Long stays run with housekeeping and billing consolidated through us, on terms agreed per property. [TO CONFIRM: minimum stay and notice terms]",
    },
    {
      question: "How do you handle privacy for principals?",
      answer:
        "Floors can be held whole, names can be masked on rooming lists where properties allow it, and our own staff treat discretion as a condition of the job.",
    },
  ],
  relatedSlugs: ["travel-transport-immigration", "food-catering"],
  heroMedia: {
    slot: "stays-hero",
    subject: "Chalet exterior at blue hour with lit windows",
    source: "new-shoot",
    alt: "An alpine chalet at dusk with warmly lit windows",
  },
};
