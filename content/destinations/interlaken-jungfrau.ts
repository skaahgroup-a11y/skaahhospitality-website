// Content drafted from docs/02-content/04-destinations.md (Interlaken &
// Jungfrau, Tier 2 overview; full guide expands in Phase 4).
import type { DestinationContent } from "@/content-schemas/types";

export const interlakenJungfrau: DestinationContent = {
  slug: "interlaken-jungfrau",
  order: 5,
  tier: 2,
  seo: {
    metaTitle: "Interlaken & Jungfrau for Groups & Incentives | SKAAH",
    metaDescription:
      "Two lakes, high-altitude rail and venues at both levels: what organisers need to know about Interlaken and the Jungfrau region, and what SKAAH runs there.",
  },
  cardTitle: "Interlaken & Jungfrau",
  cardOneLiner:
    "Two lakes and Europe's high-altitude rail showpiece, with congress and alpine venues between them.",
  h1: "Interlaken & Jungfrau: altitude with infrastructure.",
  subline:
    "Two lakes below, Europe's high-altitude rail showpiece above, and working venues at both levels.",
  heroMedia: {
    slot: "interlaken-jungfrau-hero",
    subject: "Jungfrau railway viaduct climbing through the high alpine landscape",
    source: "licensed-stock-fallback",
    alt: "Jungfrau railway viaduct climbing through a high alpine landscape",
  },
  whyGroups: [
    "Interlaken carries a particular resonance for Indian groups: this is Bollywood-heritage scenery, familiar to many guests before the flight is ever booked. For organisers, the practical appeal is just as strong: a single programme day can move from the waterline to high-alpine snow and be back at the hotel for dinner. The infrastructure is the point: this altitude comes with rail timetables, engineered viaducts and venues that work, not with improvisation. We run the pairing of lake and summit as one movement plan, with weather fallbacks agreed before anyone boards a train.",
  ],
  organiserFacts: [
    {
      title: "Two lakes, one high-alpine showpiece",
      description:
        "The town sits between two lakes with Europe's high-altitude rail showpiece above it, so water-level and high-alpine programme elements combine within a single day. Boats and mountain trains are scheduled services with fixed capacities, so both halves of the day are booked like venues and held in one run sheet.",
    },
    {
      title: "Venues at both altitudes",
      description:
        "A congress hall in town plus alpine venues up the mountain give organisers plenary space and reward moments inside one region, without a change of base. Staging, catering and technical kit travel up the mountain as part of the plan, not as an afterthought.",
    },
    {
      title: "Reaching it",
      description:
        "Around 2 h 15 from Zurich Airport by rail [TO CONFIRM: rail journey time]. On mountain days, luggage moves ahead by road so the group travels light, and arrival day can already carry programme content instead of being written off to travel.",
    },
  ],
  whatWeRun: [
    "Incentives",
    "Bollywood-heritage programmes for Indian groups",
    "High-alpine dinners",
  ],
};
