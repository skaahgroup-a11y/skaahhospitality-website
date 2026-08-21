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
    "Cross the Alps and Switzerland changes language, menu and mood without changing its standards. Ticino runs formal programmes with a Mediterranean register: lakefront conference rooms, piazza evenings and service in Italian, with Swiss precision underneath. [TO CONFIRM: how to phrase local presence]",
  ],
  organiserFacts: [
    {
      title: "A Mediterranean register",
      description:
        "South of the Alps the mood softens: Italian-speaking service, outdoor evenings and a pace that suits retreats and celebrations.",
    },
    {
      title: "Lakefront conference capacity",
      description:
        "Lugano carries genuine lakefront conference capacity, so working sessions and reward moments share the same shoreline.",
    },
    {
      title: "Shoulder-season value",
      description:
        "Spring and autumn offer strong value: warm enough for the lakefront, quieter than the summer peak, and kinder to budgets.",
    },
  ],
  whatWeRun: [
    "Board retreats",
    "Product launches",
    "Dolce-vita incentives",
  ],
};
