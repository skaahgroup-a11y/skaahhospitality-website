// Global navigation and footer structures, mirroring the CMS globals
// (docs/05 section 4: header, footer, contactBlock, promises).

export interface NavLink {
  label: string;
  href: string;
}

export const SERVICE_LINKS: NavLink[] = [
  {
    label: "Government & Diplomatic Delegations",
    href: "/services/government-delegations",
  },
  { label: "Meetings, Incentives & Events", href: "/services/mice-events" },
  {
    label: "Travel, Transport & Immigration",
    href: "/services/travel-transport-immigration",
  },
  { label: "Stays", href: "/services/stays" },
  { label: "Food & Catering", href: "/services/food-catering" },
  { label: "Media & Production", href: "/services/media-production" },
  {
    label: "Branding, Marketing & Staffing",
    href: "/services/branding-staffing",
  },
];

export const DESTINATION_LINKS: NavLink[] = [
  { label: "Zurich", href: "/destinations/zurich" },
  { label: "Geneva & Lake Geneva", href: "/destinations/geneva" },
  { label: "Lucerne", href: "/destinations/lucerne" },
  { label: "Davos", href: "/destinations/davos" },
  {
    label: "Interlaken & Jungfrau",
    href: "/destinations/interlaken-jungfrau",
  },
  { label: "Zermatt", href: "/destinations/zermatt" },
  { label: "St. Moritz & Engadin", href: "/destinations/st-moritz-engadin" },
  { label: "Ticino & Lugano", href: "/destinations/ticino-lugano" },
];

// C29 NoticeBar global (docs/05 section 4): CMS-toggled once Payload lands;
// disabled by default.
export const NOTICE_BAR: {
  enabled: boolean;
  message: string;
  href?: string;
} = {
  enabled: false,
  message: "",
};

export const COMPANY_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experiences", href: "/experiences" },
  { label: "Insights", href: "/insights" },
  { label: "Partner with us", href: "/partners" },
  { label: "Davos Week", href: "/davos-week" },
];
