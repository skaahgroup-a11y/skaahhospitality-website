// Content drafted from docs/02-content/04-destinations.md (St. Moritz &
// Engadin, Tier 2 overview; full guide expands in Phase 4).
import type { DestinationContent } from "@/content-schemas/types";

export const stMoritzEngadin: DestinationContent = {
  slug: "st-moritz-engadin",
  order: 7,
  tier: 2,
  seo: {
    metaTitle: "St. Moritz & Engadin for Premium Events | SKAAH",
    metaDescription:
      "Palace hotels, a twice-Olympic valley and a winter calendar that competes for beds: the organiser's view of St. Moritz and the Engadin, with SKAAH.",
  },
  cardTitle: "St. Moritz & Engadin",
  cardOneLiner:
    "The twice-Olympic valley: palace-hotel polish for ultra-premium incentives and brand events.",
  h1: "St. Moritz & Engadin: alpine polish.",
  subline:
    "A twice-Olympic valley where palace hotels set the standard and the winter calendar sets the pace.",
  heroMedia: {
    slot: "st-moritz-engadin-hero",
    subject: "Frozen lake with white turf event scene in winter",
    source: "licensed-stock-fallback",
    alt: "White turf event scene on the frozen lake at St. Moritz in winter",
    treatment: "Seasonal frame; hold a summer alternative for warm-season use.",
  },
  whyGroups: [
    "St. Moritz does not do understatement, and neither do the programmes that come here. The Engadin has hosted the Winter Olympics twice, the palace-hotel tradition runs deeper than almost anywhere in the Alps, and in winter the event calendar competes hard for every bed. That last point is the organiser's real briefing: dates decide everything.",
  ],
  organiserFacts: [
    {
      title: "A twice-Olympic valley",
      description:
        "The Engadin has staged the Winter Olympics twice; sport, spectacle and altitude are part of the valley's working vocabulary.",
    },
    {
      title: "Palace-hotel density",
      description:
        "The concentration of palace hotels gives ultra-premium programmes their natural register here: service depth is the default, not the upgrade.",
    },
    {
      title: "A winter calendar that competes for beds",
      description:
        "Winter event weeks compress availability across the valley. Book early, hold rooms firmly, and let us tell you honestly which weeks to avoid.",
    },
  ],
  whatWeRun: [
    "Ultra-premium incentives",
    "Brand events",
    "Private celebrations",
  ],
};
