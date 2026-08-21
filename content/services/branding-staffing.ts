// Content verbatim from docs/02-content/02-services.md section H
// (Branding, Marketing & Staffing).
import type { ServiceContent } from "@/content-schemas/types";

export const brandingStaffing: ServiceContent = {
  slug: "branding-staffing",
  order: 7,
  icon: "branding",
  seo: {
    metaTitle:
      "Event Branding, Pavilions & Hospitality Staffing in Switzerland | SKAAH",
    metaDescription:
      "Pavilion branding, signage, print and digital collateral, and trained multilingual hospitality staff who represent you the way you intend.",
    primaryKeyword: "event staffing Switzerland",
  },
  cardTitle: "Branding, Marketing & Staffing",
  cardOneLiner: "Pavilions, collateral and trained multilingual staff.",
  cardDescription:
    "Pavilion and venue branding, signage and wayfinding, print and digital collateral, and trained multilingual hospitality staff, briefed to represent you properly.",
  h1: "The look, the collateral, the people.",
  subline:
    "Pavilion and venue branding, print and digital collateral, and trained multilingual hospitality staff who represent you the way you intend.",
  // DECISION: no dedicated enquiry segment exists for branding and staffing;
  // route to the general enquiry rather than mislabel the lead.
  cta: { label: "Start a staffing enquiry", href: "/enquiry" },
  whoThisServes:
    "State and corporate pavilion owners, event organisers who need a venue to carry their identity, and any team that needs front-of-house people who are briefed, multilingual and presentable.",
  capabilities: [
    {
      title: "Pavilion design & build coordination",
      description:
        "Design intent carried through build partners, on time and to specification.",
    },
    {
      title: "Signage & wayfinding",
      description:
        "Guests find the room, the seat and the exit without having to ask.",
    },
    {
      title: "Printed & digital collateral",
      description:
        "Programmes, badges, menus and screen content, produced to your brand guidelines.",
    },
    {
      title: "Hostesses, liaison officers & interpreters",
      description:
        "Trained multilingual people, matched to the audience and briefed to your protocol.",
    },
    {
      title: "Uniform standards & briefing packs",
      description:
        "Every team member dressed to standard and carrying the same answers.",
    },
  ],
  processSteps: [
    {
      title: "Brand and staffing brief",
      description:
        "Guidelines, headcount, languages and the impression you intend, captured up front.",
    },
    {
      title: "Single costed plan",
      description:
        "One proposal across build, collateral and people, with named owners.",
    },
    {
      title: "Production and briefing lock",
      description:
        "Artwork approved, builds scheduled, staff briefed and rehearsed before doors open.",
    },
    {
      title: "On-site delivery",
      description:
        "A named lead runs the space and the floor team for the duration of the event.",
    },
    {
      title: "Strike and debrief",
      description:
        "The space cleared to schedule, materials accounted for and a debrief before the week closes.",
    },
  ],
  proof: {
    lines: [
      "Six Indian state government delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Presentation is part of protocol: the space and the people in it speak for you before anyone says a word.",
    ],
  },
  faqs: [
    {
      question: "Which languages do your hospitality staff speak?",
      answer:
        "English, German, French, Italian and Hindi on the ground, more on request. [TO CONFIRM: actual list]",
    },
    {
      question: "How much lead time does a pavilion build need?",
      answer:
        "It depends on scale and venue rules, and build slots in peak weeks are contracted early. Share your dates and the first response will give you an honest calendar. [TO CONFIRM: typical build lead times]",
    },
    {
      question: "How do you keep work on our brand guidelines?",
      answer:
        "Your guidelines are the specification, not a suggestion: artwork is checked against them before print, and anything ambiguous is queried rather than guessed.",
    },
    {
      question: "How are staff trained and briefed?",
      answer:
        "Every assignment carries a briefing pack: the client, the guests, the protocol, the answers to expected questions and the uniform standard. Staff are walked through it before they ever wear your name.",
    },
  ],
  relatedSlugs: ["media-production", "mice-events"],
  heroMedia: {
    slot: "branding-hero",
    subject: "Liaison team briefing with lanyards and folders, faces turned away",
    source: "new-shoot",
    alt: "A hospitality liaison team being briefed before an event",
  },
};
