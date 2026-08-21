// CS2 per docs/02-content/05-work-case-studies.md. Consent not granted, so
// generic phrasing throughout ("the delegation office", "a first-time state
// delegation"); the named variant waits for written consent.
import type { CaseStudyContent } from "@/content-schemas/types";

export const firstTimeStateDelegationDavos: CaseStudyContent = {
  slug: "first-time-state-delegation-davos",
  order: 2,
  title: "A first-time state delegation at Davos Week",
  consentGranted: false,
  segment: "delegation",
  year: "[TO CONFIRM: year]",
  destination: "Davos",
  groupSizeBand: "[TO CONFIRM: size band]",
  oneLineOutcome:
    "A first-time delegation ran its Davos week to a playbook it did not have to write.",
  brief:
    "A first-time delegation of [TO CONFIRM: size] arrived with [TO CONFIRM: days] of programme and no Davos playbook. We supplied the playbook. Davos Week punishes first-timers: accommodation is contracted out long before a first enquiry lands, distances that look short on a map take longer in January, and an investment programme needs rooms, staging and timing that the town does not hand over easily. Working with the delegation office from the first call, we ran the advance work, held the beds, staged the meetings and fed the delegation properly, so the officials could spend the week on the programme rather than on the town.",
  hard: [
    "First-timer compression: decisions a returning delegation spreads over a year had to land in weeks.",
    "A late accommodation market, with delegation-grade beds in the valley largely contracted out.",
    "An investment programme that needed credible rooms, staging and timing in a town with none to spare.",
  ],
  did: [
    "Ran an advance recce with the delegation office before the season closed in.",
    "Built a block strategy split across the valley, held under one master account.",
    "Sourced, set and rehearsed investor-meeting rooms ahead of the programme.",
    "Served a cuisine programme from our own kitchens, matched to the delegation's requirements.",
    "Delivered the documentation pack the same week, ready for the office's own reporting.",
  ],
  outcome: {
    stats: [
      {
        value: "[TO CONFIRM: meetings held]",
        label: "meetings held across the programme",
        verified: false,
      },
      {
        value: "[TO CONFIRM: on-time movements %]",
        label: "movements completed on time",
        verified: false,
      },
      {
        value: "[TO CONFIRM: guests hosted]",
        label: "guests hosted through the week",
        verified: false,
      },
    ],
    summary:
      "The delegation ran its first Davos Week to a plan it did not have to invent. The final figures are with operations for sign-off; the playbook now belongs to the delegation.",
  },
  gallery: [
    {
      slot: "cs2-01",
      subject:
        "Advance recce: two planners walking an empty snow-covered venue forecourt",
      source: "davos-archive",
      alt: "Planners walking a venue forecourt during an advance recce",
      treatment:
        "cool alpine light, deep navy shadows, restrained gold accents",
    },
    {
      slot: "cs2-02",
      subject: "Investor meeting room set and checked before first use",
      source: "davos-archive",
      alt: "A prepared investor meeting room before the first session",
      treatment: "cool daylight, no saturation push",
    },
    {
      slot: "cs2-03",
      subject: "Delegation luggage arriving at scale in a hotel service area",
      source: "davos-archive",
      alt: "Delegation luggage arriving at a Davos hotel",
      treatment: "cool alpine light, deep navy shadows",
    },
    {
      slot: "cs2-04",
      subject: "Kitchen line during an evening delegation dinner",
      source: "davos-archive",
      alt: "The kitchen line during an evening delegation dinner",
      treatment: "warm pass light against navy shadow",
    },
    {
      slot: "cs2-05",
      subject:
        "Delegation members walking to an evening engagement, backs to camera",
      source: "davos-archive",
      alt: "Delegation members walking to an evening engagement",
      treatment: "gold as lantern light, faces not identifiable",
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
    metaTitle: "A First-Time State Delegation at Davos | SKAAH",
    metaDescription:
      "How a first-time state delegation ran Davos Week in Davos without a playbook of its own: advance recce, accommodation blocks, meeting rooms and cuisine.",
    primaryKeyword: "first-time delegation Davos Week",
    secondaryKeywords: [
      "Davos delegation planning",
      "Davos Week accommodation delegations",
    ],
  },
};
