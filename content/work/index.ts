import type { CaseStudyContent } from "@/content-schemas/types";
import { sixStatesOneSwissPartner } from "./six-states-one-swiss-partner";
import { firstTimeStateDelegationWef } from "./first-time-state-delegation-wef";
import { returningDelegationDoubledScale } from "./returning-delegation-doubled-scale";
import { twoDelegationsOneWeek } from "./two-delegations-one-week";
import { kitchenAt1560Metres } from "./kitchen-at-1560-metres";
import { bilateralProgrammeGenevaZurich } from "./bilateral-programme-geneva-zurich";

export const caseStudies: CaseStudyContent[] = [
  sixStatesOneSwissPartner,
  firstTimeStateDelegationWef,
  returningDelegationDoubledScale,
  twoDelegationsOneWeek,
  kitchenAt1560Metres,
  bilateralProgrammeGenevaZurich,
].sort((a, b) => a.order - b.order);

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
