// Content drafted from docs/02-content/04-destinations.md (Davos, Tier 1).
// Positioning: the WEF-week operation lives in the /davos-wef hub; this page
// covers the other fifty-one weeks and carries a prominent cross-link banner.
import type { DestinationContent } from "@/content-schemas/types";

export const davos: DestinationContent = {
  slug: "davos",
  order: 4,
  tier: 1,
  seo: {
    metaTitle: "Davos for Delegations: Beyond WEF Week | SKAAH",
    metaDescription:
      "Davos beyond WEF week: year-round congress support, summer leadership retreats and pre-WEF recces, run by a partner with four WEF years in the valley.",
    primaryKeyword: "delegation accommodation Davos",
  },
  cardTitle: "Davos",
  cardOneLiner:
    "The WEF-week address, and a year-round congress and alpine destination for the other fifty-one weeks.",
  badge: "WEF Week hub",
  h1: "Davos: fifty-one other weeks.",
  subline:
    "The world knows Davos for one week in January. This guide covers the rest: a year-round congress town and an alpine destination in its own right.",
  heroMedia: {
    slot: "davos-hero",
    subject:
      "Summer Davos: green valley floor under alpine peaks, a deliberate contrast to the winter frames",
    source: "new-shoot",
    alt: "The Davos valley in summer, green slopes under alpine peaks",
  },
  crossLinkBanner: {
    text: "Planning for WEF week? That operation has its own hub: accommodation, transport, hosting and the countdown to January.",
    cta: { label: "Go to Davos & WEF", href: "/davos-wef" },
  },
  whyGroups: [
    "Organisers who know Davos best use the other fifty-one weeks. Outside January this is a working congress town with real infrastructure: meeting halls, hotel capacity and suppliers who spend the whole year hosting groups, not just the famous week.",
    "The congress centre anchors a meeting calendar that runs well beyond winter, and the summer summit season suits leadership retreats particularly well: long days, a green valley and the kind of clear-headed distance from the office that mountain towns are for.",
    "Sports and wellness programmes give Davos an edge most cities cannot copy: altitude, air and open space built into the agenda rather than bolted onto it.",
    "We have worked four WEF years in this valley. That is why the other fifty-one run smoothly: we already know the rooms, the roads and the people.",
  ],
  venuesSnapshot: {
    intro:
      "The congress centre, hotel conference floors and alpine venues above the town. The table shows indicative archetypes; named venues and confirmed capacities follow commercial clearance [TO CONFIRM: named venue list + capacities].",
    archetypes: [
      { archetype: "Congress centre hall", capacity: "100 to 1,800 guests" },
      { archetype: "Hotel conference floor", capacity: "30 to 300 guests" },
      {
        archetype: "Alpine restaurant or mountain venue",
        capacity: "40 to 200 guests",
      },
      {
        archetype: "Wellness or sport facility",
        capacity: "20 to 100 guests",
      },
    ],
  },
  staysSnapshot: [
    "Hotel inventory runs the length of the valley, from congress-adjacent houses to quieter addresses toward the edges of town. Outside the winter peak, securing the right rooms is a planning exercise rather than a battle.",
    "Advance teams and long stays sit best in apartments and aparthotels, held under one master account with the same discipline we apply in Zurich.",
  ],
  gettingAround: [
    "Most programmes arrive through Zurich. We run the airport-to-valley transfer as one plan, by road or rail, with luggage moving separately when the schedule is tight.",
    "Inside the valley, distances are short; the discipline is timing, not geography. One movement plan covers hotels, venues and the mountain.",
    "Winter movements carry weather buffers as standard. Summer opens the passes, and the programme options widen with them.",
  ],
  whatWeRun: [
    "Year-round congress support",
    "Pre-WEF recces",
    "Summer leadership retreats",
  ],
  sampleDay: [
    {
      marker: "08:30",
      title: "Congress centre walk-through",
      description:
        "Halls, load-in routes and briefing rooms checked against the programme.",
    },
    {
      marker: "10:30",
      title: "Hotel and venue recce",
      description: "Rooms, function spaces and staging inspected with the team.",
    },
    { marker: "13:00", title: "Working lunch on a terrace above town" },
    { marker: "15:00", title: "Leadership session, valley views" },
    {
      marker: "18:30",
      title: "Alpine dinner",
      description: "Weather fallback held at valley level.",
    },
    { marker: "21:30", title: "Debrief and next-day sheet" },
  ],
  faqs: [
    {
      question: "Is Davos worth considering outside the winter season?",
      answer:
        "Strongly. Outside the winter peak and WEF week, availability opens up, negotiating positions improve and the valley shows a different character: green, quiet and built for concentration. For retreats and congress programmes, the out-of-season weeks are often the best value Davos offers.",
    },
    {
      question: "Does the altitude affect programme design?",
      answer:
        "It should shape it, not scare it. Davos sits high enough that pacing matters: we build gentler first days, realistic timings and hydration into the schedule, and we flag altitude in the joining instructions so no guest is surprised. Handled that way, the altitude becomes the asset it is meant to be.",
    },
    {
      question: "Where is the WEF-week information?",
      answer:
        "In our Davos & WEF hub, which carries the January operation in full: accommodation, transport, hosting and the countdown to the week itself. This page covers everything else the valley does for the rest of the year.",
    },
  ],
};
