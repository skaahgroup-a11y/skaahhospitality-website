// Content verbatim from docs/02-content/04-destinations.md (Zurich, Tier 1).
import type { DestinationContent } from "@/content-schemas/types";

export const zurich: DestinationContent = {
  slug: "zurich",
  order: 1,
  tier: 1,
  seo: {
    metaTitle: "Zurich for Delegations & Events: Organiser Guide | SKAAH",
    metaDescription:
      "An organiser's guide to Zurich: arrivals at scale, venue archetypes, stays, and what SKAAH runs on the ground in its home city.",
    primaryKeyword: "corporate event management Zurich",
  },
  cardTitle: "Zurich",
  cardOneLiner:
    "Switzerland's arrival city: airport precision, lakefront venues and our own Opfikon base.",
  h1: "Zurich: the gateway that works.",
  subline:
    "Switzerland's arrival city and financial centre, and the home of our own base at Opfikon, minutes from the runway.",
  heroMedia: {
    slot: "zurich-hero",
    subject: "Zurich Airport apron at dawn, marshaller guiding an aircraft",
    source: "new-shoot",
    alt: "Marshaller guiding an aircraft on the Zurich Airport apron at dawn",
  },
  whyGroups: [
    "Zurich is Switzerland's arrival city and financial centre, with direct flights from Delhi, Mumbai, the Gulf hubs and every European capital [TO CONFIRM: current direct routes].",
    "Our own base at Opfikon sits minutes from the runway, which is why arrivals here run on rails: meet-and-assist, luggage logistics and onward movements are managed from the doorstep of the airport.",
  ],
  venuesSnapshot: {
    intro:
      "Convention-grade halls, lakefront banqueting and discreet boardrooms in the old town. Named venues and confirmed capacities follow commercial clearance [TO CONFIRM: named venue list + capacities].",
    archetypes: [
      { archetype: "Convention-grade hall", capacity: "500 to 3,000 guests" },
      { archetype: "Lakefront banqueting house", capacity: "120 to 500 guests" },
      { archetype: "Old-town boardroom or salon", capacity: "8 to 40 guests" },
      { archetype: "Five-star hotel ballroom", capacity: "80 to 400 guests" },
      { archetype: "Industrial event space", capacity: "200 to 1,200 guests" },
    ],
  },
  staysSnapshot: [
    "The five-star cluster sits around Bahnhofstrasse and the lake, with delegation-grade floors available under master accounts.",
    "The serviced-apartment corridor at Zurich Airport carries long stays and advance teams; it is also our own neighbourhood.",
  ],
  gettingAround: [
    "10 minutes from the airport to Opfikon, 12 by train to the Hauptbahnhof.",
    "Inside the city, rail beats road: trams and trains hold their timetable when traffic does not.",
    "Chauffeur staging at Zurich Airport follows the airport's own rules; we hold the staging plan so principals never wait.",
  ],
  whatWeRun: [
    "Arrivals and meet-and-assist at scale",
    "Corporate meetings and galas",
    "Delegation advance work before onward travel to Davos or Geneva",
  ],
  sampleDay: [
    {
      marker: "08:00",
      title: "Arrivals met airside",
      description: "[TO CONFIRM: airside access boundary]",
    },
    { marker: "10:00", title: "Hotel check-in under master account" },
    { marker: "13:00", title: "Working lunch, Indian and Swiss stations" },
    { marker: "15:00", title: "Bilateral meetings, old town" },
    { marker: "19:30", title: "Lake-view dinner" },
    { marker: "22:00", title: "Debrief and next-day sheet" },
  ],
  faqs: [
    {
      question: "How much buffer should winter arrivals carry?",
      answer:
        "Plan 45 minutes of slack on every winter movement. Zurich clears weather fast, but delegations should never depend on that.",
    },
    {
      question: "How are customs and VIP handling arranged?",
      answer:
        "Through the airport's official channels, arranged in advance case by case. We prepare the paperwork and walk the route before your party lands.",
    },
    {
      question: "Can Zurich be combined with Davos?",
      answer:
        "Naturally. Zurich is the standard arrival and acclimatisation stop before the valley; we run the transfer as one plan.",
    },
  ],
};
