// Home page content, verbatim from docs/02-content/01-home.md.
import type {
  SeoFields,
  Stat,
  MediaBrief,
  FilmBrief,
  Step,
} from "@/content-schemas/types";
import type { TrustItem } from "@/components/blocks/TrustRow";
import type { SegmentTile } from "@/components/blocks/SegmentRouter";

export const homeSeo: SeoFields = {
  metaTitle:
    "Swiss Hospitality & Logistics for Delegations & Corporate Groups | SKAAH",
  metaDescription:
    "One accountable Swiss partner for government delegations and corporate groups: events, stays, transport, cuisine and media. Proven at Davos Week.",
  primaryKeyword: "government delegation support Switzerland",
  secondaryKeywords: [
    "Swiss hospitality and logistics partner",
    "DMC Switzerland delegations",
    "Davos Week logistics partner",
  ],
};

export const homeHero = {
  eyebrow: "Swiss Hospitality & Logistics · Opfikon, Zurich",
  headline: "Switzerland, handled.",
  subline:
    "One accountable partner for government delegations and high-value corporate groups: events, stays, transport, cuisine, media and people, delivered with Swiss precision.",
  proofLine:
    "Proven at Davos Week: six Indian delegations across four consecutive Davos Weeks.",
  primaryCta: {
    label: "Start a delegation enquiry",
    href: "/enquiry?segment=delegation",
  },
  secondaryCta: { label: "Explore our services", href: "/services" },
};

export const homeTrustItems: TrustItem[] = [
  { icon: "clock", label: "First response within 48 hours" },
  { icon: "shield", label: "CH/EU data handling" },
  { icon: "group", label: "A SKAAH Group company" },
];

export const homeFilm: FilmBrief = {
  duration: "18-25 s loop",
  content:
    "Dawn over Davos rooftops in snow, convoy of black vehicles on a cleared alpine road (distance, no plates readable), white-gloved hands placing name cards in Devanagari and English, kitchen pass with tandoor glow, flags being straightened, delegation walking away from camera into a lit venue.",
  audio: "none at autoplay",
  poster: "The dawn Davos wide with gold light.",
  fallback: "Poster only when reduced motion or Save-Data.",
};

export const homePoster: MediaBrief = {
  slot: "hero-poster",
  subject: "Dawn over Davos rooftops in snow with gold light",
  source: "davos-archive",
  alt: "Dawn over Davos rooftops in winter",
  treatment: "Cool alpine light, deep navy shadows, restrained gold accents",
};

export const homeProof = {
  heading: "Evidence, not adjectives.",
  stats: [
    {
      value: "6",
      label: "Indian delegations supported",
      verified: true,
    },
    {
      value: "4",
      label: "consecutive Davos Week years, 2023 to 2026",
      verified: true,
    },
    {
      value: "1",
      label: "accountable Swiss partner across every service",
      verified: true,
    },
    {
      value: "[TO CONFIRM: guests hosted or vehicle-movements figure]",
      label: "[TO CONFIRM: matching label]",
      verified: false,
    },
  ] satisfies Stat[],
  link: { label: "See the work", href: "/work" },
  backgroundBrief: {
    slot: "proof-bg",
    subject: "Night-time Davos Promenade with security lighting",
    composition: "wide, people as silhouettes",
    source: "davos-archive",
    alt: "Davos Promenade at night during Davos Week",
    treatment: "deep navy grade",
  } satisfies MediaBrief,
};

export const homeServicesSection = {
  heading: "Everything a visit needs. One relationship.",
  intro:
    "From protocol to plates, we plan and run the whole stay, so your team manages one partner, not twelve suppliers.",
};

export const homeFlagship = {
  heading: "Trusted where the world watches.",
  body: "Every January, Davos becomes the most demanding week in Swiss hospitality. For four consecutive Davos Weeks we have handled the ground reality for six Indian delegations: accommodation blocks, protocol-aware transport, multi-cuisine catering and documentation, delivered quietly and on time.",
  cta: { label: "Read the Davos Week guide", href: "/davos-week" },
};

export const homeDestinationsSection = {
  heading: "Switzerland, destination by destination.",
};

export const homeSegmentsSection = {
  heading: "Built around who you are.",
  tiles: [
    {
      icon: "delegations",
      label: "Government delegation",
      line: "Protocol-aware planning and delegation-grade ground operations.",
      href: "/enquiry?segment=delegation",
    },
    {
      icon: "mice",
      label: "Corporate organiser",
      line: "Meetings, incentives and events, produced end to end.",
      href: "/services/mice-events",
    },
    {
      icon: "group",
      label: "Agency partner",
      line: "White-label Swiss execution under your brand or ours.",
      href: "/partners",
    },
    {
      icon: "stays",
      label: "Private client",
      line: "Stays and programmes handled with the same discretion.",
      href: "/enquiry?segment=stay",
    },
  ] satisfies SegmentTile[],
};

export const homeSteps: Step[] = [
  {
    title: "Brief us",
    description:
      "Share dates, party size and objectives. 10 minutes, one form or one call.",
  },
  {
    title: "One proposal",
    description:
      "A single costed plan across every service, with named owners.",
  },
  {
    title: "We run it",
    description: "On-ground leadership, daily reporting, one invoice.",
  },
];

export const homeInsightsSection = {
  heading: "Planning intelligence.",
};

export const homeClosing = {
  headline: "Tell us about your visit.",
  body: "A delegation, a summit, an incentive or a private stay: send the outline and receive a considered response within 48 hours, one business day for MICE RFPs.",
  cta: { label: "Start your enquiry", href: "/enquiry" },
};
