// CS1 flagship aggregate per docs/02-content/05-work-case-studies.md.
// Consent-independent: written entirely in fallback phrasing, no state names.
import type { CaseStudyContent } from "@/content-schemas/types";

export const sixDelegationsOneSwissPartner: CaseStudyContent = {
  slug: "six-delegations-one-swiss-partner",
  order: 1,
  title: "Six delegations, one Swiss partner",
  consentGranted: false,
  segment: "delegation",
  year: "2023 to 2026",
  destination: "Davos",
  // DECISION: the aggregate entry spans six delegations of different sizes,
  // so no single size band applies (docs/02-content/05, CS1).
  groupSizeBand: "Varies by delegation",
  oneLineOutcome:
    "6 Indian delegations across 4 consecutive Davos Weeks, delivered by one Swiss partner.",
  brief:
    "Across four consecutive Davos Weeks, six Indian delegations engaged SKAAH as their single Swiss partner for the hardest week in the calendar: Davos in January. Each delegation arrived with its own protocol, its own precedence order, its own cuisine and its own programme of meetings and bilaterals. Each needed beds, vehicles, kitchens and staging in a valley where capacity is contracted out months ahead. Our answer was the same every year: one contract, one costed plan, one operations lead accountable around the clock, and a team that had already walked the ground. This entry aggregates those engagements; individual delegations are named only with written consent.",
  hard: [
    "Beds, vehicles and kitchen capacity in the valley are contracted out months ahead of Davos Week.",
    "6 different protocols, precedence orders and cuisines, with no room to blur one delegation into another.",
    "One road into the valley and a security map that redraws it daily.",
  ],
  did: [
    "Held accommodation blocks under master accounts, delegation-grade and managed as one line item.",
    "Ran marshalled, protocol-aware movements for every arrival, transfer and departure.",
    "Served regional Indian, Jain, halal and Swiss tables from our own multi-cuisine kitchens.",
    "Staged bilaterals and programme moments, from meeting rooms to signings.",
    "Documented each engagement to consent-aware rules, photography and film cleared by the client.",
    "Assigned a 24-hour operations lead per delegation for the duration of the week.",
  ],
  outcome: {
    stats: [
      { value: "6", label: "Indian delegations", verified: true },
      { value: "4", label: "Davos Weeks, 2023 to 2026", verified: true },
      {
        value:
          "[TO CONFIRM: third aggregate metric, e.g. guest-nights or movements]",
        label: "awaiting operations sign-off",
        verified: false,
      },
    ],
    summary:
      "One Swiss partner delivered 6 Indian delegations across 4 consecutive Davos Weeks. The pattern is the product: capacity held early, protocol respected in the detail, and one office answerable for the whole week.",
  },
  // 6 archive frames per the media plan pointer; no frame ships without a
  // manifest row and consent review (docs/02-content/05).
  gallery: [
    {
      slot: "cs1-01",
      subject: "Davos Promenade in snow during Davos Week, wide establishing",
      composition: "wide establishing",
      source: "davos-archive",
      alt: "The snow-covered Davos Promenade during Davos Week",
      treatment:
        "cool alpine light, deep navy shadows, restrained gold accents",
    },
    {
      slot: "cs1-02",
      subject:
        "Convoy marshals with clipboards at a dawn staging area, plates out of frame",
      source: "davos-archive",
      alt: "Marshals preparing vehicles at dawn before a delegation movement",
      treatment:
        "cool alpine light, deep navy shadows; no number plates readable",
    },
    {
      slot: "cs1-03",
      subject: "Kitchen pass in full service, gloved hands plating a course",
      source: "davos-archive",
      alt: "Chefs plating a course at the kitchen pass during evening service",
      treatment: "warm pass light against navy shadow, no saturation push",
    },
    {
      slot: "cs1-04",
      subject:
        "Bilateral meeting room set and empty before a signing, flags in position",
      source: "davos-archive",
      alt: "A meeting room prepared for a bilateral signing",
      treatment: "cool daylight, restrained gold accents",
    },
    {
      slot: "cs1-05",
      subject:
        "Delegation walking away from camera into a lit venue at night, backs and silhouettes only",
      source: "davos-archive",
      alt: "A delegation entering a lit venue in the evening",
      treatment: "gold as light from the doorway, faces not identifiable",
    },
    {
      slot: "cs1-06",
      subject: "Luggage logistics at scale in a hotel service corridor",
      source: "davos-archive",
      alt: "Delegation luggage staged for a coordinated departure",
      treatment: "cool alpine light, deep navy shadows",
    },
  ],
  servicesUsed: [
    "government-delegations",
    "stays",
    "travel-transport-immigration",
    "food-catering",
    "media-production",
  ],
  seo: {
    metaTitle: "Six States, One Swiss Partner: Davos Week | SKAAH",
    metaDescription:
      "Across 4 Davos Weeks, 6 Indian delegations engaged SKAAH as one Swiss partner for Davos in January: the aggregate case study.",
    primaryKeyword: "Davos Week delegation case study",
    secondaryKeywords: [
      "government delegation Davos",
      "delegation logistics Davos",
    ],
  },
};
