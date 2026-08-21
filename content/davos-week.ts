// Content drafted from docs/02-content/03-davos-week-hub.md (the evergreen
// authority page). Hero, metadata, calendar markers and FAQs are verbatim from
// the spec; the 8 H2 sections are drafted long-form from the spec's outlines.
// Claim discipline: fallback phrasing only, no named states, no named hotels.
// DECISION: the spec's bare accommodation marker and the section 7 sign-off
// marker are carried with descriptive [TO CONFIRM: ...] text so the staging
// badge and the production claims gate both catch them (docs/07 gate G5).
import type {
  SeoFields,
  Cta,
  Faq,
  Capability,
  Stat,
  TimelineItem,
  MediaBrief,
  FilmBrief,
} from "@/content-schemas/types";
import type { IconName } from "@/components/ui/Icon";

export interface HubProseSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface HubLesson {
  situation: string;
  practice: string;
}

export interface HubCrossLink {
  title: string;
  description: string;
  href: string;
  icon: IconName;
}

export const davosWeekSeo: SeoFields = {
  metaTitle: "Davos Week Logistics: The Delegation Guide | SKAAH",
  metaDescription:
    "How delegations and corporate groups actually operate in Davos during Davos Week: accommodation, transport, catering and protocol, from the Swiss partner behind six state delegations across four consecutive Davos Weeks.",
  primaryKeyword: "Davos Week logistics partner",
  secondaryKeywords: [
    "delegation accommodation Davos",
    "Davos Week planning",
    "Davos Week ground transport",
  ],
};

export const davosWeekHero: {
  eyebrow: string;
  h1: string;
  subline: string;
  cta: Cta;
  media: MediaBrief;
} = {
  eyebrow: "Davos Week",
  h1: "Davos in January: a working guide.",
  subline:
    "The most demanding week in Swiss hospitality, explained by the partner that has run it for six Indian state government delegations across four consecutive Davos Weeks.",
  cta: {
    label: "Plan your Davos Week with us",
    href: "/enquiry?segment=delegation&context=davos-week",
  },
  media: {
    slot: "davos-hero",
    subject: "Pre-dawn Davos Promenade, snow banks, barriers and light rigs",
    source: "davos-archive",
    alt: "Davos Promenade prepared for Davos Week before dawn",
  },
};

// Sticky in-page nav: 8 anchors in section order (docs/04 hub template).
export const davosWeekNav: { id: string; label: string }[] = [
  { id: "on-the-ground", label: "On the ground" },
  { id: "calendar", label: "The calendar" },
  { id: "accommodation", label: "Accommodation" },
  { id: "movement", label: "Movement" },
  { id: "catering", label: "Catering" },
  { id: "protocol", label: "Protocol" },
  { id: "lessons", label: "Five lessons" },
  { id: "how-we-run", label: "How we run it" },
];

// Section 1 of 8.
export const davosWeekGround: HubProseSection = {
  id: "on-the-ground",
  heading: "What Davos Week really is on the ground",
  paragraphs: [
    "For most of the year, Davos is a working congress town in an alpine valley. For one week in January it becomes the most demanding address in Swiss hospitality. The population multiplies. The valley keeps its one road in. Security perimeters redraw the town daily, so a distance that looks like a short walk on the map can turn into a long detour through a checkpoint, and a venue that sat a few minutes away in December can sit behind an accreditation line in January.",
    "Every scarce resource in town obeys the same rule: it is contracted months out or it is gone. Beds, vehicles, kitchen capacity, trained staff, meeting rooms and even storage are spoken for long before the week begins. None of this is hidden; the town runs on it. Organisations that arrive assuming problems can be solved locally discover that the local solutions were sold in the autumn.",
    "The teams that succeed treat Davos as an operation, not a trip. They plan against the constraints instead of hoping around them, they secure capacity early and precisely, and they arrive with decisions already made, so the week itself is execution rather than negotiation. That is the discipline this guide describes. We have run it for 6 Indian state government delegations across 4 Davos Weeks, and the pattern holds every year: the week rewards preparation and punishes improvisation. The sections below walk through the parts that decide the outcome: the calendar, the beds, the movements, the food and the protocol.",
  ],
};

// Section 2 of 8: the working countdown, markers verbatim from the spec.
export const davosWeekCalendar: {
  id: string;
  heading: string;
  intro: string[];
  items: TimelineItem[];
  outro: string[];
} = {
  id: "calendar",
  heading: "The calendar that matters",
  intro: [
    "Davos Week is decided long before January. The countdown below is the working calendar we hold for delegations and corporate groups, and it exists because every one of its deadlines is enforced by the town, not by us. Miss the 180-day mark and the accommodation strategy becomes a compromise. Miss the 120-day mark and the remaining blocks and vehicles carry premiums that no negotiation will remove.",
  ],
  items: [
    {
      marker: "180 days",
      title: "Accommodation strategy and budget envelope",
    },
    { marker: "120 days", title: "Blocks and vehicle contracts signed" },
    { marker: "90 days", title: "Programme and protocol draft" },
    { marker: "60 days", title: "Catering menus and staffing locked" },
    { marker: "30 days", title: "Rehearsal of movements" },
    { marker: "Week 0", title: "24-hour operations rhythm" },
  ],
  outro: [
    "Two things are worth reading out of this calendar. First, the expensive decisions are the early ones: strategy and budget at 180 days, signatures at 120 days. Everything after that is refinement. Second, the final 30 days contain no new decisions at all; they are for rehearsal, because a movement that has been walked in advance behaves differently from one that exists only on paper.",
    "If you are already inside these windows, treat the calendar as a diagnosis, not a verdict. Late is solvable, and the FAQ below says what it costs. Our first conversation with a late-starting delegation is usually about which of these milestones can still be recovered, and in which order.",
  ],
};

// Section 3 of 8.
export const davosWeekAccommodation: HubProseSection = {
  id: "accommodation",
  heading: "Accommodation reality",
  paragraphs: [
    "No delegation of any size stays in one building during Davos Week, and it is rarely wise to try. The working pattern is a split: a core in Davos itself, close to the programme; a second group in Klosters, one reliable connection down the line; and the remainder along the valley corridor, where capacity is more available and the budget goes further. The art is matching people to places: principals and protocol staff near the centre, advance and support teams where the beds are, and everyone on a movement plan that makes the geography irrelevant.",
    "Each ring of the split trades something. Davos itself buys proximity, costs the most and contracts the earliest. Klosters buys calm: a delegation can breathe there in a way the Promenade does not allow, at the price of a scheduled connection. The valley corridor buys capacity and value, and demands the most disciplined transport plan. There is no single right answer; there is a right answer for each delegation, and it falls out of the programme, the precedence list and the budget envelope.",
    "Commercially, everything sits under a master account: one negotiated agreement per property, one line of accountability, and no official settling a bill in a lobby at midnight. Operationally, floor protocol does the quiet work: who stays on which floor and in what order, where the delegation office works, and where the delegation's own staff sit. We hold both, and we brief each property before arrival, so the hotel experiences the delegation as one organised guest rather than many individual ones. We name specific properties only inside a live proposal [TO CONFIRM: named hotels await commercial clearance].",
  ],
};

// Section 4 of 8.
export const davosWeekMovement: HubProseSection = {
  id: "movement",
  heading: "Movement and the one-road problem",
  paragraphs: [
    "One road connects Davos to the rest of Switzerland, and during Davos Week that road carries everything: principals, staff, supplies and the security operation itself. Closures happen, sometimes scheduled and sometimes not. A movement plan that assumes the road is open is not a plan; it is a hope. We time convoys against the published security picture and then against our own reading of it, and every movement we run carries a fallback that assumes the closure has already happened.",
    "Inside the town, shuttle discipline matters more than vehicle count. A modest fleet running a fixed loop to a timetable moves a delegation better than a large fleet waiting on calls, because waiting vehicles attract waiting passengers and the loop collapses. We fix the rhythm, publish it inside the delegation and hold it, so nobody stands in the snow wondering where the car is.",
    "Rail is the underrated arrival. The train reaches the valley on its own right of way, indifferent to road traffic, it carries no convoy overhead, and for many members of a delegation it is faster door to door. We use it deliberately: principals by road where protocol requires it, everyone else by rail where it serves them better.",
    "Luggage moves separately from principals, always. Cases travel on their own vehicle and their own schedule, tagged and reconciled at both ends, so arrivals stay light and checkpoints stay quick. It is the least glamorous discipline in this guide and one of the most valuable: a principal who lands, moves and arrives unencumbered starts the week differently.",
  ],
};

// Section 5 of 8.
export const davosWeekCatering: HubProseSection = {
  id: "catering",
  heading: "Catering at altitude",
  paragraphs: [
    "Kitchen capacity is the scarcest commodity in Davos in January. The town's kitchens are excellent and entirely spoken for: they cook for the houses that own them and for the events contracted onto them months before. A delegation that needs its own table, its own cuisine and its own timings cannot assume a share of that capacity, because there is no spare share to have.",
    "This is why we bring our own. SKAAH runs its own multi-cuisine capability through Davos Week, including regional Indian, Jain and halal tables alongside Swiss and continental service. Dietary rules are treated as requirements, not preferences: a Jain table is planned from the ingredients upward, halal service is sourced and kept properly separate, and a regional cuisine is cooked by people who know it rather than approximated from a general menu.",
    "Feeding a delegation properly during Davos Week is a logistics exercise before it is a culinary one. Ingredients come up the same one road as everything else, cold chain and storage are planned like any other movement, and service times flex around a programme that will change daily. We build the catering plan into the operations plan rather than beside it, which is the difference between dinner arriving because the schedule held and dinner arriving because the kitchen was told the schedule had slipped.",
  ],
};

// Section 6 of 8.
export const davosWeekProtocol: HubProseSection = {
  id: "protocol",
  heading: "Protocol in a compressed town",
  paragraphs: [
    "Davos in January compresses more seniority into fewer square metres than anywhere else in Switzerland, and ordinary precedence rules strain under the load. When everyone is a principal, order of address, seating and who waits for whom must be settled before the week, not negotiated during it. We prepare precedence for each engagement in advance, in writing, and we rehearse the moments where it becomes visible: arrivals, greetings, seating, signings and photographs.",
    "Bilateral meetings need rooms, and during Davos Week rooms are scarce in exactly the way beds and kitchens are. A bilateral programme is therefore an inventory exercise: spaces held early, set to a consistent standard, and turned around between meetings on a schedule of minutes. Flags, nameplates and titles are checked against the delegation's own protocol office, twice, because a wrong flag or a misspelt title photographs badly and travels quickly.",
    "Gifting follows rules that vary by delegation and by counterpart, so we manage it as inventory with provenance: what is given, to whom, and recorded properly. Documentation follows the client's rules, not ours: photography and film are cleared in advance, consent governs what is captured and what is kept, and anything sensitive is handled on the delegation's own terms. Discretion is not a promise we add at the end; it is the default the whole operation is built on.",
  ],
};

// Section 7 of 8: 5 lessons, fallback-safe, one sentence of situation plus one
// of practice; the operations sign-off marker is appended once for the set.
export const davosWeekLessons: {
  id: string;
  heading: string;
  intro: string;
  items: HubLesson[];
  confirm: string;
} = {
  id: "lessons",
  heading: "What four consecutive Davos Weeks taught us",
  intro:
    "Four consecutive Davos Weeks produce specific lessons. These are ours, stated as practice rather than war stories, and each one is now standard in every Davos Week plan we write.",
  items: [
    {
      situation:
        "The security perimeter you plan against in December is never quite the perimeter you operate against in January.",
      practice:
        "Every movement plan we write carries a fallback that assumes the closure has already happened, and drivers are briefed on the fallback before the primary.",
    },
    {
      situation:
        "An accommodation strategy that starts late is the most common way a Davos Week goes wrong before it begins.",
      practice:
        "We put the bed strategy and the budget envelope on paper at the 180-day mark, and we treat every later start as a recovery exercise with a plan of its own.",
    },
    {
      situation:
        "For a delegation with its own cuisine, kitchen capacity runs out before bed capacity does.",
      practice:
        "We bring our own multi-cuisine kitchens to the week rather than negotiating for a share of the town's.",
    },
    {
      situation:
        "Luggage that travels with principals slows every arrival and complicates every checkpoint.",
      practice:
        "Cases move on their own vehicle and their own schedule, reconciled at both ends, so principals move light and on time.",
    },
    {
      situation:
        "By the second evening, a week without a fixed daily rhythm has become a week of improvisation.",
      practice:
        "We run the same cycle every day, morning briefing, movements, service and evening debrief, so surprises land inside a structure built to absorb them.",
    },
  ],
  confirm: "[TO CONFIRM: each lesson signed off by operations]",
};

// Section 8 of 8: the operating model, with the section CTA.
export const davosWeekOperatingModel: {
  id: string;
  heading: string;
  intro: string[];
  items: Capability[];
  outro: string;
  cta: Cta;
} = {
  id: "how-we-run",
  heading: "How SKAAH runs Davos Week",
  intro: [
    "Everything above condenses into one operating model, and it is deliberately simple, because Davos Week punishes complexity. You get one accountable lead, a fixed daily rhythm, a short escalation path and a debrief that closes the loop while the week is still warm. The same model has carried 6 Indian state government delegations across 4 Davos Weeks, and it serves corporate groups without modification.",
  ],
  items: [
    {
      title: "One lead",
      description:
        "A named operations lead, accountable for the whole week and reachable around the clock. One person answers, whatever the question touches.",
    },
    {
      title: "A daily rhythm",
      description:
        "The same cycle every day: morning briefing, movements, service, evening debrief and the next-day sheet issued before the town sleeps.",
    },
    {
      title: "A short escalation path",
      description:
        "When something moves, and something always moves, the decision reaches the person who can take it in minutes, not meetings.",
    },
    {
      title: "A debrief that sticks",
      description:
        "A same-week debrief with the delegation office: what ran, what changed and what next January should inherit. Returning delegations start from that document.",
    },
  ],
  outro:
    "If January is on your calendar, the useful next step is a conversation with the countdown above open on the table. Tell us where you stand against it, and we will tell you honestly what is comfortable, what is recoverable and what it will cost.",
  cta: {
    label: "Plan your Davos Week with us",
    href: "/enquiry?segment=delegation&context=davos-week",
  },
};

// Proof rail: fallback proof line (from lib/site), 2 stat cards awaiting
// operations sign-off, and the 2 strongest case studies.
export const davosWeekProofStats: Stat[] = [
  {
    value: "[TO CONFIRM: movements run]",
    label: "movements run across 4 Davos Weeks",
    verified: false,
  },
  {
    value: "[TO CONFIRM: guest-nights managed]",
    label: "guest-nights managed in the valley",
    verified: false,
  },
];

export const davosWeekCaseStudies: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Six states, one Swiss partner",
    description:
      "The aggregate record: 6 state government delegations across 4 consecutive Davos Weeks, delivered by one Swiss partner.",
    href: "/work/six-states-one-swiss-partner",
  },
  {
    title: "A first-time state delegation at Davos Week",
    description:
      "A first-time delegation ran its Davos week to a playbook it did not have to write.",
    href: "/work/first-time-state-delegation-davos",
  },
];

// FAQs verbatim from the spec; rendered with FAQAccordion + FAQPage JSON-LD.
export const davosWeekFaqs: Faq[] = [
  {
    question: "When should we book for Davos Week?",
    answer:
      "Accommodation strategy should be settled 6 months out; serious blocks sign at 4 months. Late is solvable, but expensive.",
  },
  {
    question: "Can you support a first-time delegation?",
    answer:
      "Yes. First-timers are most of the value we add: the guide above is the short version of our advance briefing.",
  },
  {
    question: "Do you only work with Indian delegations?",
    answer:
      "No. Our proof is Indian state delegations; our capability is delegation-grade operations for any government or corporate group.",
  },
  {
    question: "Do you handle participation in the annual meeting itself?",
    answer:
      "No. Accreditation and participation sit with the meeting's organiser; we handle everything around the week on the ground.",
  },
];

// Cross-links per the spec: Davos destination, Government Delegations, Stays,
// Food & Catering and Insights.
export const davosWeekCrossLinks: HubCrossLink[] = [
  {
    title: "Davos beyond January",
    description:
      "The valley for the other fifty-one weeks: congress seasons, leadership retreats and pre-season recces.",
    href: "/destinations/davos",
    icon: "pin",
  },
  {
    title: "Government & Diplomatic Delegations",
    description:
      "Protocol, immigration liaison, secure ground transport and delegation-grade planning.",
    href: "/services/government-delegations",
    icon: "delegations",
  },
  {
    title: "Stays",
    description:
      "Hotels, chalets and serviced apartments, blocked and managed under one master account.",
    href: "/services/stays",
    icon: "stays",
  },
  {
    title: "Food & Catering",
    description:
      "Multi-cuisine kitchens, including your delegation's own cuisine.",
    href: "/services/food-catering",
    icon: "catering",
  },
  {
    title: "Insights",
    description:
      "Playbooks and guides from the team that runs the week: reading for the months before January.",
    href: "/insights",
    icon: "document",
  },
];

// Media set: 6 archive frames (docs/02-content/03, media set).
export const davosWeekGallery: { heading: string; frames: MediaBrief[] } = {
  heading: "The week, on file",
  frames: [
    {
      slot: "davos-convoy",
      subject: "Convoy staging area before dawn, marshals checking a run sheet",
      source: "davos-archive",
      alt: "Vehicles staged before dawn for a delegation movement during Davos Week",
    },
    {
      slot: "davos-kitchen",
      subject: "Kitchen pass in full service, plated courses under the lamps",
      source: "davos-archive",
      alt: "Chefs at the kitchen pass during a Davos Week service",
    },
    {
      slot: "davos-promenade",
      subject: "Davos Promenade at night during Davos Week, snow banks and lit facades",
      source: "davos-archive",
      alt: "The Davos Promenade at night during Davos Week",
    },
    {
      slot: "davos-signage",
      subject: "Team installing event signage in falling snow",
      source: "davos-archive",
      alt: "Event signage being installed in falling snow in Davos",
    },
    {
      slot: "davos-luggage",
      subject: "Luggage operation, tagged cases lined up in a service corridor",
      source: "davos-archive",
      alt: "Tagged delegation luggage lined up during a Davos Week arrival",
    },
    {
      slot: "davos-control",
      subject: "Operations room with radios, screens and the week's run sheets",
      source: "davos-archive",
      alt: "The operations room during Davos Week",
    },
  ],
};

// Optional ambient film (deferred load; not rendered until the asset lands).
export const davosWeekAmbientFilm: FilmBrief = {
  duration: "40 to 60 seconds",
  content:
    "A Davos Week day compressed: staging before dawn, movements, service, the Promenade at night",
  audio: "none at autoplay",
  poster: "davos-film-poster",
  fallback: "Static hero image when reduced motion or Save-Data is set",
};

export const davosWeekClosing: {
  headline: string;
  ctaLabel: string;
  ctaHref: string;
} = {
  headline: "January rewards the prepared.",
  ctaLabel: "Plan your Davos Week with us",
  ctaHref: "/enquiry?segment=delegation&context=davos-week",
};
