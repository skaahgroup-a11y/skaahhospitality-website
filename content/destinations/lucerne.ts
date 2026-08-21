// Content drafted from docs/02-content/04-destinations.md (Lucerne, Tier 1).
import type { DestinationContent } from "@/content-schemas/types";

export const lucerne: DestinationContent = {
  slug: "lucerne",
  order: 3,
  tier: 1,
  seo: {
    metaTitle: "Lucerne for Incentives & Events: Organiser Guide | SKAAH",
    metaDescription:
      "An organiser's guide to Lucerne: lakefront venues, steamer and mountain logistics, split-hotel strategies and the incentives SKAAH runs on the water.",
    primaryKeyword: "incentive travel Switzerland",
  },
  cardTitle: "Lucerne",
  cardOneLiner:
    "The incentive heartland: lake, Pilatus and Rigi within minutes of concert-grade venues on the water.",
  h1: "Lucerne: the postcard that performs.",
  subline:
    "The incentive heartland of Switzerland: lake, Pilatus and Rigi within minutes, and concert-grade venues standing on the water.",
  heroMedia: {
    slot: "lucerne-hero",
    subject: "Paddle steamer bow at golden hour on Lake Lucerne",
    source: "new-shoot",
    alt: "Bow of a paddle steamer on Lake Lucerne at golden hour",
  },
  whyGroups: [
    "Lucerne is where incentive programmes go to feel like a reward. The lake sits at the front door, Pilatus and Rigi stand within minutes, and the old town fills the space between with the Switzerland every guest imagined before arriving. Few destinations deliver the postcard and the production values in the same place, and the postcard performs: this is a working events destination with the technical depth to stage a proper show.",
    "The venues on the water are concert-grade: built for acoustics, staging and full technical production, not just for dinner. Award nights and galas here carry a weight that a hotel ballroom cannot match.",
    "The geography is compact. Hotels, venues, piers and the old town sit within walking distance of one another, so programmes spend their hours on content and celebration rather than on coaches.",
    "And when the programme wants altitude, the mountains are not a day trip; they are the afternoon. A steamer, a cogwheel railway or a cable car puts a summit on the schedule without wrecking it.",
  ],
  venuesSnapshot: {
    intro:
      "Lakefront concert and congress spaces, paddle-steamer charters and mountain-top halls. The table shows indicative archetypes; named venues and confirmed capacities follow commercial clearance [TO CONFIRM: named venue list + capacities].",
    archetypes: [
      {
        archetype: "Lakefront concert or congress hall",
        capacity: "200 to 1,800 guests",
      },
      { archetype: "Paddle-steamer charter", capacity: "50 to 300 guests" },
      {
        archetype: "Mountain-top hall or restaurant",
        capacity: "40 to 300 guests",
      },
      {
        archetype: "Belle-époque hotel ballroom",
        capacity: "80 to 350 guests",
      },
      {
        archetype: "Old-town private dining room",
        capacity: "20 to 80 guests",
      },
    ],
  },
  staysSnapshot: [
    "The belle-époque five-stars on the lake are the classic addresses: terraces over the water, ballrooms downstairs, and the sense of occasion an incentive is supposed to deliver.",
    "Capacity honesty matters here: large groups outgrow a single house. When they do, we say so early and run a split-hotel strategy, one master account, one service standard, and a room-allocation logic that protects the group's hierarchy rather than leaving it to chance.",
  ],
  gettingAround: [
    "Lucerne sits about 60 minutes from Zurich Airport, which makes it a first-night destination rather than a long transfer.",
    "Steamers and cogwheel railways are scheduled services with fixed capacities; we book them as firmly as any hall, and every mountain leg carries a weather fallback agreed in advance.",
    "Luggage travels ahead. On mountain days the cases go by road while the group takes the scenic route, so rooms are ready and nobody carries anything up a summit.",
  ],
  whatWeRun: [
    "Incentives",
    "Gala productions",
    "Award nights",
    "Board offsites",
  ],
  sampleDay: [
    {
      marker: "08:00",
      title: "Breakfast aboard a paddle steamer",
      description: "The lake as the first meeting room of the day.",
    },
    {
      marker: "10:30",
      title: "Pilatus ascent",
      description: "Luggage and staging travel ahead by road.",
    },
    {
      marker: "15:30",
      title: "Chapel-bridge walk staged for photography",
      description: "The group photo everyone actually keeps.",
    },
    {
      marker: "19:30",
      title: "Gala with a Swiss-Indian fusion menu",
      description: "Concert-grade venue, full production, one run sheet.",
    },
    { marker: "22:30", title: "Debrief and next-day sheet" },
  ],
  faqs: [
    {
      question: "What happens if the weather closes a mountain venue?",
      answer:
        "Every element at altitude carries a fallback at lake level, agreed with you in advance, with a decision deadline set the evening before. Guests experience a confident change of plan, not a cancellation, because the fallback venue, transport and catering are held until the decision is made.",
    },
    {
      question: "Can venues or steamers be taken for exclusive use?",
      answer:
        "Often, yes: charters, mountain-top venues and some houses can be closed to the public for your group. Lead time decides what is realistic, and school-holiday and peak-season weeks narrow the options. Brief us early with your dates and we will tell you plainly what exclusivity is achievable.",
    },
    {
      question: "Does Lucerne combine well with Interlaken?",
      answer:
        "Naturally. The two form a strong two-stop incentive: Lucerne for the lake and the gala, Interlaken and the Jungfrau region for the high-alpine day. We run the pairing as one plan, with luggage moving separately so travel days stay scenic instead of laden.",
    },
  ],
};
