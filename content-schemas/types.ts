// Content types mirror the Payload collections planned in docs/05 section 4 so
// the seed importer (epic E2) can move this content into the CMS losslessly.
// Strings may contain inline [TO CONFIRM: ...] markers; render them through
// the Copy component so staging shows the amber badge.

import type { IconName } from "@/components/ui/Icon";

export type MediaSource = "davos-archive" | "new-shoot" | "licensed-stock-fallback";

export interface MediaBrief {
  slot: string;
  subject: string;
  composition?: string;
  source: MediaSource;
  alt: string;
  treatment?: string;
}

export interface FilmBrief {
  duration: string;
  content: string;
  audio: "none at autoplay";
  poster: string;
  fallback: string;
}

export interface SeoFields {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
}

export interface Cta {
  label: string;
  href: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  // Unverified metrics render a [TO CONFIRM] badge on staging and fail the
  // production claims gate (docs/05 section 4).
  verified: boolean;
}

export interface Step {
  title: string;
  description: string;
}

export interface TimelineItem {
  marker: string;
  title: string;
  description?: string;
}

export type EnquirySegment =
  | "delegation"
  | "mice"
  | "stay"
  | "catering"
  | "agency"
  | "general";

export interface ServiceContent {
  slug: string;
  order: number;
  seo: SeoFields;
  cardTitle: string;
  cardOneLiner: string;
  cardDescription: string;
  h1: string;
  subline: string;
  cta: Cta;
  whoThisServes: string;
  capabilities: Capability[];
  processSteps: Step[];
  proof: {
    heading?: string;
    lines: string[];
    media?: MediaBrief;
  };
  budgetBands?: {
    rows: { format: string; guests: string; band: string }[];
    footnote: string;
  };
  faqs: Faq[];
  relatedSlugs: [string, string];
  heroMedia: MediaBrief;
  icon: IconName;
}

export interface VenueArchetype {
  archetype: string;
  capacity: string;
}

export interface DestinationContent {
  slug: string;
  order: number;
  tier: 1 | 2;
  seo: SeoFields;
  cardTitle: string;
  cardOneLiner: string;
  badge?: string;
  h1: string;
  subline: string;
  heroMedia: MediaBrief;
  crossLinkBanner?: { text: string; cta: Cta };
  whyGroups?: string[];
  venuesSnapshot?: { intro: string; archetypes: VenueArchetype[] };
  staysSnapshot?: string[];
  gettingAround?: string[];
  whatWeRun: string[];
  sampleDay?: TimelineItem[];
  organiserFacts?: { title: string; description: string }[];
  faqs?: Faq[];
}

export interface CaseStudyContent {
  slug: string;
  order: number;
  title: string;
  // Named states render only where consentGranted is true; otherwise the
  // approved fallback phrasing is used (CLAUDE.md claim discipline).
  consentGranted: boolean;
  segment: EnquirySegment;
  year: string;
  destination: string;
  groupSizeBand: string;
  oneLineOutcome: string;
  brief: string;
  hard: string[];
  did: string[];
  outcome: { stats: Stat[]; summary: string };
  gallery: MediaBrief[];
  servicesUsed: string[];
  seo: SeoFields;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ArticleContent {
  slug: string;
  title: string;
  dek: string;
  authorRole: string;
  readMinutes: number;
  datePublished: string;
  dateModified: string;
  status: "seeded" | "briefed";
  primaryKeyword: string;
  seo: SeoFields;
  sections: ArticleSection[];
  faqs?: Faq[];
  relatedSlugs?: string[];
}

export interface ExperienceContent {
  title: string;
  description: string;
  destinationTag: string;
  media: MediaBrief;
}
