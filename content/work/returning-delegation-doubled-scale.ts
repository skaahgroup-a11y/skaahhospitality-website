// CS3 per docs/02-content/05-work-case-studies.md. Angle: year-on-year growth
// handled without growing the client's own effort; continuity as the product.
// Consent not granted, so generic phrasing throughout.
import type { CaseStudyContent } from "@/content-schemas/types";

export const returningDelegationDoubledScale: CaseStudyContent = {
  slug: "returning-delegation-doubled-scale",
  order: 3,
  title: "Returning delegation, doubled scale",
  consentGranted: false,
  segment: "delegation",
  year: "[TO CONFIRM: year]",
  destination: "Davos",
  groupSizeBand: "[TO CONFIRM: size band]",
  oneLineOutcome:
    "A returning delegation scaled up its Davos programme without growing its own planning effort.",
  brief:
    "A delegation that had already run one WEF week with us returned with a larger brief: more principals, more meetings and a fuller programme, in a valley that had not grown to match. The ask underneath the growth was continuity: the same standards, the same operations lead and the same way of working, with the extra scale absorbed on our side of the table. Because the playbook, the supplier relationships and the protocol notes already existed, the second year started from an updated plan rather than a blank page. The delegation's own team scaled its week without scaling its workload, which is exactly what continuity is for.",
  hard: [
    "Growth in every line of the brief, against a valley whose capacity does not grow with it.",
    "Rising expectations: a second year is measured against the first, not against the market.",
    "Keeping the client's own planning effort flat while the operation behind it scaled.",
  ],
  did: [
    "Reopened the previous year's playbook with the delegation office and updated it, rather than starting again.",
    "Extended accommodation blocks early, using standing relationships to hold delegation-grade beds at scale.",
    "Scaled the movement plan and marshalling team to the larger programme.",
    "Expanded the cuisine programme from our own kitchens as guest numbers grew.",
    "Kept the same operations lead, so institutional memory stayed with the delegation's week.",
    "Delivered the documentation pack to the same standard and cadence as the first year.",
  ],
  outcome: {
    stats: [
      {
        value: "[TO CONFIRM: year-on-year growth in delegation scale]",
        label: "growth against the previous year",
        verified: false,
      },
      {
        value: "[TO CONFIRM: guest-nights managed]",
        label: "guest-nights managed across the week",
        verified: false,
      },
      {
        value: "[TO CONFIRM: added client-side planning effort]",
        label: "extra planning effort required from the delegation office",
        verified: false,
      },
    ],
    summary:
      "The delegation grew its Davos week and its own workload did not grow with it. Continuity, held in one partner, is what let the operation scale on our side of the table.",
  },
  gallery: [
    {
      slot: "cs3-01",
      subject:
        "Two laminated run sheets side by side on the operations table, contents not legible",
      composition: "top-down",
      source: "wef-archive",
      alt: "Run sheets from two consecutive years on the operations table",
      treatment: "cool daylight, documents not legible",
    },
    {
      slot: "cs3-02",
      subject:
        "Marshals briefing an enlarged driver team at a staging area, plates out of frame",
      source: "wef-archive",
      alt: "Marshals briefing drivers before a delegation movement",
      treatment:
        "cool alpine light, deep navy shadows; no number plates readable",
    },
    {
      slot: "cs3-03",
      subject: "A longer kitchen pass in full evening service",
      source: "wef-archive",
      alt: "The kitchen pass during a full evening service",
      treatment: "warm pass light against navy shadow",
    },
    {
      slot: "cs3-04",
      subject:
        "Hotel lobby with delegation arrivals at scale, faces away from camera",
      source: "wef-archive",
      alt: "Delegation guests arriving at a Davos hotel",
      treatment: "restrained gold accents, faces not identifiable",
    },
    {
      slot: "cs3-05",
      subject: "An operations lead on the radio at night on the Promenade",
      source: "wef-archive",
      alt: "An operations lead coordinating an evening movement in Davos",
      treatment: "gold as street light, deep navy shadows",
    },
  ],
  servicesUsed: [
    "government-delegations",
    "stays",
    "travel-transport-immigration",
    "food-catering",
  ],
  seo: {
    metaTitle: "Returning Delegation, Doubled Scale at WEF | SKAAH",
    metaDescription:
      "A returning state delegation scaled up its WEF Davos week year on year. Continuity as the product: same partner, same standards, no added client effort.",
    primaryKeyword: "returning delegation Davos case study",
    secondaryKeywords: [
      "delegation logistics continuity",
      "scaling a WEF delegation",
    ],
  },
};
