import type { DestinationContent } from "@/content-schemas/types";
import { zurich } from "./zurich";
import { geneva } from "./geneva";
import { lucerne } from "./lucerne";
import { davos } from "./davos";
import { interlakenJungfrau } from "./interlaken-jungfrau";
import { zermatt } from "./zermatt";
import { stMoritzEngadin } from "./st-moritz-engadin";
import { ticinoLugano } from "./ticino-lugano";

export const destinations: DestinationContent[] = [
  zurich,
  geneva,
  lucerne,
  davos,
  interlakenJungfrau,
  zermatt,
  stMoritzEngadin,
  ticinoLugano,
].sort((a, b) => a.order - b.order);

export function getDestination(slug: string): DestinationContent | undefined {
  return destinations.find((destination) => destination.slug === slug);
}
