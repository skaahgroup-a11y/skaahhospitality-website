// Content drafted from docs/02-content/04-destinations.md (Ticino & Lugano,
// Tier 2 overview; full guide expands in Phase 4). Local presence phrasing is
// gated behind its [TO CONFIRM] marker.
import type { DestinationContent } from "@/content-schemas/types";

export const ticinoLugano: DestinationContent = {
  slug: "ticino-lugano",
  order: 8,
  tier: 2,
  seo: {
    metaTitle: "Ticino & Lugano for Retreats & Launches | SKAAH",
    metaDescription:
      "Switzerland in Italian: lakefront conference capacity, a Mediterranean register and real shoulder-season value in Ticino and Lugano, with SKAAH.",
  },
  cardTitle: "Ticino & Lugano",
  cardOneLiner:
    "Switzerland in Italian: lakefront conference capacity and a Mediterranean register south of the Alps.",
  h1: "Ticino & Lugano: Switzerland, in Italian.",
  subline:
    "South of the Alps the register changes: Italian-speaking, lake-warm and quietly excellent value in the shoulder seasons.",
  heroMedia: {
    slot: "ticino-lugano-hero",
    subject: "Lugano lakefront in the evening, promenade lights on the water",
    source: "licensed-stock-fallback",
    alt: "Lugano lakefront in the evening with promenade lights on the water",
  },
  whyGroups: [
    "Cross the Alps and Switzerland changes language, menu and mood without changing its standards. Ticino runs formal programmes with a Mediterranean register: lakefront conference rooms, piazza evenings and service in Italian, with Swiss precision underneath. For boards and launch teams it is the change of scene that still counts as Switzerland on the invitation, and the easiest register shift in the country: the same rail network and the same contracting standards, with a different language on the menu. [TO CONFIRM: how to phrase local presence]",
  ],
  organiserFacts: [
    {
      title: "A Mediterranean register",
      description:
        "South of the Alps the mood softens: Italian-speaking service, outdoor evenings and a pace that suits retreats and celebrations. Menus, music and venues can lean Italian while contracts, timings and standards stay Swiss. The programme reads as abroad while operating as home, which is the whole appeal.",
    },
    {
      title: "Lakefront conference capacity",
      description:
        "Lugano carries genuine lakefront conference capacity, so working sessions and reward moments share the same shoreline, with mornings in the conference room and evenings on the water minutes apart. The compact geography keeps movement short, which is exactly what a board agenda wants.",
    },
    {
      title: "Shoulder-season value",
      description:
        "Spring and autumn offer strong value: warm enough for the lakefront, quieter than the summer peak, and kinder to budgets. For programmes that can move their dates, Ticino is the calendar's quiet win. Brief us with flexible dates and we will map the value honestly before anything is contracted.",
    },
  ],
  whatWeRun: [
    "Board retreats",
    "Product launches",
    "Dolce-vita incentives",
  ],
};
