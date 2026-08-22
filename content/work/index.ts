import type { CaseStudyContent } from "@/content-schemas/types";
import { sixDelegationsOneSwissPartner } from "./six-delegations-one-swiss-partner";
import { firstTimeDelegationDavos } from "./first-time-delegation-davos";
import { returningDelegationDoubledScale } from "./returning-delegation-doubled-scale";
import { twoDelegationsOneWeek } from "./two-delegations-one-week";
import { kitchenAt1560Metres } from "./kitchen-at-1560-metres";
import { bilateralProgrammeGenevaZurich } from "./bilateral-programme-geneva-zurich";

export const caseStudies: CaseStudyContent[] = [
  sixDelegationsOneSwissPartner,
  firstTimeDelegationDavos,
  returningDelegationDoubledScale,
  twoDelegationsOneWeek,
  kitchenAt1560Metres,
  bilateralProgrammeGenevaZurich,
].sort((a, b) => a.order - b.order);

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
