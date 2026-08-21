// CS6 per docs/02-content/05-work-case-studies.md. Angle: range beyond WEF
// week (multi-city movement, meeting staging, media handling). The spec marks
// all facts [TO CONFIRM]; if the engagement cannot be verified in the archive,
// this slot holds for the first post-launch engagement and the site launches
// with 5 case studies (still within the committed 4 to 6 range).
import type { CaseStudyContent } from "@/content-schemas/types";

export const bilateralProgrammeGenevaZurich: CaseStudyContent = {
  slug: "bilateral-programme-geneva-zurich",
  order: 6,
  title: "Beyond Davos: a bilateral programme in Geneva and Zurich",
  consentGranted: false,
  segment: "delegation",
  year: "[TO CONFIRM: year]",
  destination: "Geneva & Zurich",
  groupSizeBand: "[TO CONFIRM: size band]",
  oneLineOutcome:
    "A government delegation ran a bilateral programme across Geneva and Zurich under one plan and one operations lead.",
  brief:
    "Davos in January is the proving ground, but most of the year's work happens elsewhere. This engagement moved a government delegation between Geneva and Zurich for a bilateral programme: meetings staged in both cities, movements timed to the Swiss rail and road network, media handled to the delegation's rules and one operations lead accountable across the whole itinerary. Multi-city work changes the problem: the playbook must travel with the delegation, and every handover between cities is a seam where a plan can slip. Our answer is the same as in Davos: one partner, one plan, no seams. [TO CONFIRM: engagement exists in archive; otherwise hold this slot for the first post-launch engagement]",
  hard: [
    "2 cities, one programme: venues, hotels and movements had to hold together across the itinerary.",
    "Intercity timing: meetings in Geneva and Zurich on the same programme leave no slack for a late departure.",
    "Media handling across changing venues, cleared to the delegation's rules at each stop.",
  ],
  did: [
    "Planned the full itinerary as one programme, with a single operations lead across both cities.",
    "Staged bilateral meetings in Geneva and Zurich, with rooms, staging and interpreters arranged in advance.",
    "Ran intercity movements to a rehearsed schedule across rail and road.",
    "Held delegation-grade accommodation in both cities under one master account.",
    "Handled photography and film to the delegation's clearance rules, with a documentation pack at the close.",
  ],
  outcome: {
    stats: [
      {
        value: "[TO CONFIRM: meetings staged]",
        label: "meetings staged across the 2 cities",
        verified: false,
      },
      {
        value: "[TO CONFIRM: intercity movements completed]",
        label: "intercity movements completed to schedule",
        verified: false,
      },
      {
        value: "[TO CONFIRM: guests hosted]",
        label: "guests hosted across the programme",
        verified: false,
      },
    ],
    summary:
      "The Davos discipline travels: the same planning, protocol and accountability applied across a 2-city programme. Figures await operations sign-off before this entry publishes with numbers attached.",
  },
  gallery: [
    {
      slot: "cs6-01",
      subject:
        "Delegation vehicles waiting outside a Geneva venue, lake mist behind, plates out of frame",
      source: "wef-archive",
      alt: "Vehicles waiting outside a Geneva venue in morning mist",
      treatment:
        "cool lake light, deep navy shadows; no number plates readable",
    },
    {
      slot: "cs6-02",
      subject: "Team members working on an intercity train between cities",
      source: "wef-archive",
      alt: "Team members working on an intercity train",
      treatment: "cool daylight through rail windows, documents not legible",
    },
    {
      slot: "cs6-03",
      subject:
        "A meeting room prepared for a bilateral session in Zurich, flags in position",
      source: "wef-archive",
      alt: "A meeting room prepared for a bilateral session in Zurich",
      treatment: "cool daylight, restrained gold accents",
    },
    {
      slot: "cs6-04",
      subject: "The Zurich Airport apron at dawn on departure day",
      source: "wef-archive",
      alt: "The Zurich Airport apron at dawn",
      treatment: "gold as dawn light, deep navy shadows",
    },
  ],
  servicesUsed: [
    "government-delegations",
    "travel-transport-immigration",
    "stays",
    "media-production",
  ],
  seo: {
    metaTitle: "A Bilateral Programme in Geneva & Zurich | SKAAH",
    metaDescription:
      "Beyond WEF week: a government delegation moved between Geneva and Zurich for a bilateral programme, with meetings, movements and media under one plan.",
    primaryKeyword: "government delegation Geneva Zurich",
    secondaryKeywords: [
      "bilateral meeting staging Switzerland",
      "multi-city delegation logistics",
    ],
  },
};
