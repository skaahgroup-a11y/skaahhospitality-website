// CS4 per docs/02-content/05-work-case-studies.md. Angle: parallel delegations
// with separated teams, information walls and shared infrastructure; the
// ethics of serving neighbours. Consent not granted, generic phrasing only.
import type { CaseStudyContent } from "@/content-schemas/types";

export const twoDelegationsOneWeek: CaseStudyContent = {
  slug: "two-delegations-one-week",
  order: 4,
  title: "Two delegations, one week, zero collisions",
  consentGranted: false,
  segment: "delegation",
  year: "[TO CONFIRM: year]",
  destination: "Davos",
  groupSizeBand: "[TO CONFIRM: size band]",
  oneLineOutcome:
    "2 delegations ran parallel programmes in the same Davos Week, served by separated teams with information walls between them.",
  brief:
    "In one Davos Week, 2 Indian delegations engaged us at the same time. Serving neighbours is a test of ethics before it is a test of logistics: each delegation competes for the same investors, the same venues and the same headlines, and each is entitled to a partner that behaves as if it were the only client. We ran the week as 2 separate operations: separated teams, separate operations leads, information walls between them, and a shared infrastructure layer of kitchens, vehicles and supplier capacity managed so that neither programme ever queued behind the other. Neither delegation's plans, guests or meetings were visible to the other at any point.",
  hard: [
    "2 programmes drawing on the same finite pool of beds, vehicles, rooms and kitchen capacity.",
    "Commercial and political sensitivity: neighbouring delegations competing for the same investors in the same week.",
    "One shared briefing or one misdirected document would have compromised both relationships.",
  ],
  did: [
    "Stood up 2 fully separated delivery teams, each with its own 24-hour operations lead.",
    "Built information walls: separate channels, separate documents and no cross-visibility of either programme.",
    "Partitioned accommodation blocks and meeting venues so the programmes never crossed.",
    "Ran shared infrastructure (kitchens, vehicle pool, supplier capacity) through a neutral planning cell balancing both programmes.",
    "Deconflicted movements daily against the security map so neither delegation waited for the other.",
    "Documented each engagement separately, with consent and clearance handled per delegation.",
  ],
  outcome: {
    stats: [
      {
        value: "[TO CONFIRM: combined movements completed]",
        label: "movements completed across both programmes",
        verified: false,
      },
      {
        value: "[TO CONFIRM: combined guests hosted]",
        label: "guests hosted across the 2 delegations",
        verified: false,
      },
      {
        value: "[TO CONFIRM: collisions between the 2 programmes]",
        label: "collisions between the 2 programmes",
        verified: false,
      },
    ],
    summary:
      "Both delegations ran full programmes in the same valley in the same week, and neither ever saw the other inside its own operation. The figures are with operations for sign-off; the information walls held, which was the brief.",
  },
  gallery: [
    {
      slot: "cs4-01",
      subject:
        "2 colour-coded run-sheet boards in separate operations rooms, contents not legible",
      source: "davos-archive",
      alt: "Separate operations boards for 2 parallel delegation programmes",
      treatment: "cool daylight, documents not legible",
    },
    {
      slot: "cs4-02",
      subject:
        "Vehicles staged at dawn for one of the parallel movements, plates out of frame",
      source: "davos-archive",
      alt: "Vehicles staged at dawn for one of 2 parallel delegation movements",
      treatment:
        "cool alpine light, deep navy shadows; no number plates readable",
    },
    {
      slot: "cs4-03",
      subject: "2 distinct menu lines in preparation in the same kitchen",
      source: "davos-archive",
      alt: "2 menu lines in preparation in the same kitchen",
      treatment: "warm pass light against navy shadow",
    },
    {
      slot: "cs4-04",
      subject: "2 operations leads at work on the Promenade, radios in hand",
      source: "davos-archive",
      alt: "2 operations leads coordinating separate programmes in Davos",
      treatment: "cool alpine light, faces not identifiable",
    },
    {
      slot: "cs4-05",
      subject: "An unbranded venue entrance prepared for a private programme",
      source: "davos-archive",
      alt: "An unbranded venue entrance prepared for a private programme",
      treatment: "gold as doorway light, deep navy shadows",
    },
  ],
  servicesUsed: [
    "government-delegations",
    "travel-transport-immigration",
    "stays",
    "food-catering",
  ],
  seo: {
    metaTitle: "Two Delegations, One Week, Zero Collisions | SKAAH",
    metaDescription:
      "Serving 2 delegations in the same Davos Week: separated teams, information walls and shared infrastructure, with no collisions between programmes.",
    primaryKeyword: "parallel delegations Davos Week",
    secondaryKeywords: [
      "multi-client delegation operations",
      "delegation information walls",
    ],
  },
};
