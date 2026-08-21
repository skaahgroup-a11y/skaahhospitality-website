import type { ServiceContent } from "@/content-schemas/types";
import { governmentDelegations } from "./government-delegations";
import { miceEvents } from "./mice-events";
import { travelTransportImmigration } from "./travel-transport-immigration";
import { stays } from "./stays";
import { foodCatering } from "./food-catering";
import { mediaProduction } from "./media-production";
import { brandingStaffing } from "./branding-staffing";

// Order fixed per docs/02-content/01-home.md section H3.
export const services: ServiceContent[] = [
  governmentDelegations,
  miceEvents,
  travelTransportImmigration,
  stays,
  foodCatering,
  mediaProduction,
  brandingStaffing,
].sort((a, b) => a.order - b.order);

export function getService(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}
