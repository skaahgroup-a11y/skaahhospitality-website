// Content verbatim from docs/02-content/02-services.md section C (MICE).
import type { ServiceContent } from "@/content-schemas/types";

export const miceEvents: ServiceContent = {
  slug: "mice-events",
  order: 2,
  icon: "mice",
  seo: {
    metaTitle: "Corporate Events & Incentive Travel in Switzerland | SKAAH",
    metaDescription:
      "DMC-grade planning for meetings, incentives and events across Switzerland: venues, production, transport and hotels under one proposal.",
    primaryKeyword: "DMC Switzerland",
    secondaryKeywords: [
      "incentive travel Switzerland",
      "corporate event management Zurich",
      "conference logistics Geneva",
    ],
  },
  cardTitle: "Meetings, Incentives & Events",
  cardOneLiner: "Board meetings to 1,000-guest programmes, produced end to end.",
  cardDescription:
    "Venues, technical production, stays, transport and gala catering for meetings, incentives, conferences and events, planned and priced as one proposal with one invoice.",
  h1: "Swiss events without the seams.",
  subline:
    "From a 20-person board retreat to a 1,000-guest programme: venues, production, stays, transport and food, planned and priced as one.",
  cta: {
    label: "Send your RFP, first response within one business day",
    href: "/enquiry?segment=mice",
  },
  whoThisServes:
    "Corporate organisers, executive offices and in-house event teams, incentive and travel agencies, and anyone who must deliver a Swiss programme, from a 20-person board retreat to a 1,000-guest conference, without managing twelve supplier relationships.",
  capabilities: [
    {
      title: "Venue search & contracting",
      description:
        "Shortlists that match the brief, site visits where they matter, contracts negotiated on your terms.",
    },
    {
      title: "Full technical production",
      description:
        "Staging, sound, light and screens, planned and rehearsed under one production lead.",
    },
    {
      title: "Incentive programme design",
      description:
        "Rail charters, alpine dinners, chocolate and watchmaking immersions, built around your group.",
    },
    {
      title: "Delegate travel & transfers",
      description:
        "Arrivals, coaches and chauffeured cars, timed to the programme (see Travel, Transport & Immigration).",
    },
    {
      title: "Room blocks",
      description:
        "Hotel allocations held and managed under one master account (see Stays).",
    },
    {
      title: "Gala catering",
      description:
        "Banquets and galas from our own multi-cuisine kitchens (see Food & Catering).",
    },
    {
      title: "On-site staffing",
      description:
        "Trained multilingual hosts and floor teams who represent you the way you intend.",
    },
    {
      title: "Budget control & one invoice",
      description:
        "Line-by-line costing, disciplined change control and a single consolidated invoice.",
    },
  ],
  processSteps: [
    {
      title: "RFP and brief",
      description:
        "Send the outline; the first response arrives within one business day, with the right questions.",
    },
    {
      title: "Single costed plan",
      description:
        "One proposal across venue, production, stays, transport and food, with named owners.",
    },
    {
      title: "Production lock",
      description:
        "Run-sheets, technical rehearsal and supplier confirmations locked before the group arrives.",
    },
    {
      title: "Event delivery",
      description:
        "One on-ground lead through the programme, with daily reporting to your office.",
    },
    {
      title: "Debrief and reconciliation",
      description:
        "Same-week debrief, budget reconciled line by line, one invoice.",
    },
  ],
  budgetBands: {
    rows: [
      {
        format: "Board retreat, 2 nights",
        guests: "12-30",
        band: "[TO CONFIRM: CHF band]",
      },
      { format: "Incentive, 3 nights", guests: "50-150", band: "[TO CONFIRM]" },
      {
        format: "Conference day + gala",
        guests: "150-500",
        band: "[TO CONFIRM]",
      },
    ],
    footnote:
      "Bands are indicative, for orientation before an RFP. Every proposal is costed line by line.",
  },
  // Real case studies replace this proof block early in Phase 4 (docs/02 section C).
  proof: {
    heading: "Verifiable specifics, not adjectives:",
    lines: [
      "[TO CONFIRM: largest single-group size delivered]",
      "[TO CONFIRM: venues delivered across Switzerland]",
      "[TO CONFIRM: repeat-client count]",
    ],
  },
  faqs: [
    {
      question: "How much lead time does a Swiss programme need?",
      answer:
        "The earlier the better for venue choice, especially in peak seasons. That said, we quote against real dates: send the RFP and the first response arrives within one business day, with an honest view of what the calendar allows.",
    },
    {
      question: "We have an in-house events team. How do you work with them?",
      answer:
        "As their ground arm in Switzerland. Your team keeps the creative direction and the client relationship; we bring venues, suppliers, production and delivery under one accountable contract.",
    },
    {
      question: "Can programmes be designed rail-first?",
      answer:
        "Yes, and in Switzerland they often should be. Swiss rail is punctual, comfortable and part of the experience: we design transfers and whole incentive days around it, with road support where rail does not reach.",
    },
    {
      question: "What is your cancellation approach?",
      answer:
        "Cancellation and postponement terms are set out in every proposal before you commit, mirroring the terms we hold with venues and suppliers. [TO CONFIRM: cancellation policy]",
    },
    {
      question: "Do we contract each supplier, or do you?",
      answer:
        "The default is one contract and one invoice with line-by-line transparency. Where your procurement rules require direct supplier contracts, we manage those suppliers on your behalf.",
    },
  ],
  relatedSlugs: ["stays", "branding-staffing"],
  heroMedia: {
    slot: "mice-hero",
    // DECISION: docs/02 allows new-shoot or archive for this slot; new-shoot preferred.
    subject:
      "Gala room at a Lake Lucerne venue, tables set, staff making final checks",
    source: "new-shoot",
    alt: "Gala tables set at a lakeside venue while staff make final checks",
  },
};
