// Content drafted from docs/02-content/04-destinations.md (Zermatt, Tier 2
// overview; full guide expands in Phase 4).
import type { DestinationContent } from "@/content-schemas/types";

export const zermatt: DestinationContent = {
  slug: "zermatt",
  order: 6,
  tier: 2,
  seo: {
    metaTitle: "Zermatt for Executive Retreats & Incentives | SKAAH",
    metaDescription:
      "Car-free logistics under the Matterhorn: how groups, luggage and programmes actually move in Zermatt, and what SKAAH runs in the village.",
  },
  cardTitle: "Zermatt",
  cardOneLiner:
    "Car-free under the Matterhorn: logistics planned differently, for a backdrop nothing else matches.",
  h1: "Zermatt: car-free, world-famous.",
  subline:
    "The most recognisable backdrop in the Alps, in a village where the logistics work differently and therefore need planning.",
  heroMedia: {
    slot: "zermatt-hero",
    subject: "Matterhorn at dawn, seen from the village",
    source: "licensed-stock-fallback",
    alt: "The Matterhorn at dawn, seen from the village of Zermatt",
  },
  whyGroups: [
    "Zermatt gives a programme the single most recognisable mountain in the Alps, and asks for different logistics in return. The village is car-free, so every arrival, transfer and case of luggage follows its own choreography. Planned properly, guests never notice the machinery; that is the point. We plan Zermatt from the luggage backwards: once the cases move correctly, everything else falls into place. For executive retreats and incentives the reward is a setting that needs no staging: no traffic, no noise, and a mountain that makes every frame of the programme look deliberate.",
  ],
  organiserFacts: [
    {
      title: "The Matterhorn backdrop",
      description:
        "Few settings anywhere compete with the view. Programmes here trade on it: dinners, launches and film moments composed around the mountain itself. Golden hour is a scheduling decision here; we build the programme around the light.",
    },
    {
      title: "Car-free logistics",
      description:
        "Vehicles stop at Täsch; the village runs on the shuttle train and electro-taxis. Organisers must plan luggage differently, and we build that choreography into the programme from day one: guests one way, cases another, both timed to land together. Arrival and departure days carry firmer timings here than elsewhere in Switzerland, so we set them early and hold them.",
    },
    {
      title: "Venues on the Gornergrat",
      description:
        "The Gornergrat holds venues with the mountain filling the windows. Trains up are scheduled services, so summit dinners are booked like venues, not like excursions, and weather fallbacks are part of the plan from the start. If the cloud closes in, the evening moves to the village on a decision made early, not to a cancellation made late.",
    },
  ],
  whatWeRun: [
    "Executive retreats",
    "Film-worthy incentives",
    "Luggage choreography",
  ],
};
