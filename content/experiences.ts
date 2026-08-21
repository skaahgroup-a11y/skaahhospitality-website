// Content verbatim from docs/02-content/06-experiences-insights-about-partner.md
// section A: eight signature programmes, editorial treatment.
import type { ExperienceContent } from "@/content-schemas/types";

export const experiences: ExperienceContent[] = [
  {
    title: "The Private Rail Charter",
    description:
      "A chartered panoramic train as the venue itself; boardroom at 2,000 metres, lunch service between tunnels.",
    destinationTag: "Alpine rail",
    media: {
      slot: "exp-rail-charter",
      subject:
        "Chartered panoramic train crossing an Alpine viaduct, table service visible through the glass",
      treatment: "Glacier/GoldenLine imagery, licensed until shoot",
      source: "licensed-stock-fallback",
      alt: "Panoramic train crossing an Alpine viaduct",
    },
  },
  {
    title: "An Alpine Gala",
    description:
      "Summit hall, brass and candlelight, Swiss-Indian fusion menu from our own kitchens.",
    destinationTag: "Alpine summits",
    media: {
      slot: "exp-alpine-gala",
      subject:
        "Summit hall dressed for a gala: long tables, brass instruments, candlelight",
      source: "new-shoot",
      alt: "Gala dinner set in a candlelit summit hall",
    },
  },
  {
    title: "Chocolate & Watchmaking, Privately",
    description: "Ateliers opened after hours; craft as diplomacy.",
    destinationTag: "Zurich & Geneva",
    media: {
      slot: "exp-ateliers",
      subject:
        "Watchmaker's bench under a single lamp, tools laid out for an after-hours visit",
      source: "new-shoot",
      alt: "Watchmaking atelier bench prepared for a private evening visit",
    },
  },
  {
    title: "The Lake Evening",
    description:
      "Paddle-steamer buyout on Lucerne or Geneva, speeches under way at 12 knots.",
    destinationTag: "Lucerne or Geneva",
    media: {
      slot: "exp-lake-evening",
      subject: "Paddle steamer under way at dusk, deck lights on the water",
      source: "new-shoot",
      alt: "Paddle steamer under way on a Swiss lake at dusk",
    },
  },
  {
    title: "WEF-Week Hosting",
    description:
      "A delegation lounge run to protocol during the world's busiest week.",
    destinationTag: "Davos",
    media: {
      slot: "exp-wef-hosting",
      subject:
        "Calm delegation lounge interior during WEF week, staff briefing in the background",
      source: "new-shoot",
      alt: "Delegation lounge prepared for WEF week hosting in Davos",
    },
  },
  {
    title: "The Vineyard Table",
    description:
      "Lavaux terraces, long table above the lake, sunset timed to the minute.",
    destinationTag: "Lavaux",
    media: {
      slot: "exp-vineyard-table",
      subject: "Long table set on a Lavaux vineyard terrace above the lake at sunset",
      source: "new-shoot",
      alt: "Long dining table on the Lavaux vineyard terraces at sunset",
    },
  },
  {
    title: "High-Altitude Team Day",
    description:
      "Cogwheels, guides and a summit lunch that outperforms any ballroom.",
    destinationTag: "High Alps",
    media: {
      slot: "exp-team-day",
      subject:
        "Cogwheel train arriving at a summit station, group and mountain guides on the platform",
      source: "new-shoot",
      alt: "Group arriving by cogwheel railway for a summit team day",
    },
  },
  {
    title: "A Swiss Winter, Properly",
    description:
      "Sleighs, fondue chalets and torchlit descents for groups that earned it.",
    destinationTag: "Winter resorts",
    media: {
      slot: "exp-swiss-winter",
      subject: "Torchlit descent above a fondue chalet, horse-drawn sleighs waiting",
      source: "new-shoot",
      alt: "Torchlit winter descent with sleighs waiting outside a chalet",
    },
  },
];
