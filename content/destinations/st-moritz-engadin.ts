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
    "St. Moritz does not do understatement, and neither do the programmes that come here. The Engadin has hosted the Winter Olympics twice, the palace-hotel tradition runs deeper than almost anywhere in the Alps, and in winter the event calendar competes hard for every bed. That last point is the organiser's real briefing: dates decide everything, so bring us your target weeks before anything else. In this valley, the calendar is the strategy. Handled early, the effort pays: the houses know how to host at the highest level, the scenery needs no dressing, and the programmes that commit firmly get the weeks everyone else wanted.",
  ],
  organiserFacts: [
    {
      title: "A twice-Olympic valley",
      description:
        "The Engadin has staged the Winter Olympics twice; sport, spectacle and altitude are part of the valley's working vocabulary. Winter offers spectacle outdoors as standard; summer opens the same valley for quieter retreats and private celebrations.",
    },
    {
      title: "Palace-hotel density",
      description:
        "The concentration of palace hotels gives ultra-premium programmes their natural register here: service depth is the default, not the upgrade. When one house cannot hold the whole group, split-property programmes work well across the valley. The choice of house is a programme decision as much as an accommodation one, and we make it with you early.",
    },
    {
      title: "A winter calendar that competes for beds",
      description:
        "Winter event weeks compress availability across the valley. Book early, hold rooms firmly, and let us tell you honestly which weeks to avoid. We contract allocations under one master account, so late changes stay administrative rather than structural.",
    },
  ],
  whatWeRun: [
    "Ultra-premium incentives",
    "Brand events",
    "Private celebrations",
  ],
};
