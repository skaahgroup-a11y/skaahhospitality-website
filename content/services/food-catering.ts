// Content verbatim from docs/02-content/02-services.md section F (Food & Catering).
import type { ServiceContent } from "@/content-schemas/types";

export const foodCatering: ServiceContent = {
  slug: "food-catering",
  order: 5,
  icon: "catering",
  seo: {
    metaTitle: "Multi-Cuisine Event Catering in Switzerland | SKAAH",
    metaDescription:
      "Indian regional menus, Jain, halal and vegetarian tables, and Swiss fine dining from our own kitchens, working lunch to banquet. Proven at Davos Week.",
    primaryKeyword: "Indian catering Switzerland",
    secondaryKeywords: [
      "halal catering Zurich",
      "multi-cuisine event catering Switzerland",
    ],
  },
  cardTitle: "Food & Catering",
  cardOneLiner: "Multi-cuisine kitchens, including your delegation's own cuisine.",
  cardDescription:
    "Our own multi-cuisine kitchens serve Indian regional menus, Jain, halal and vegetarian tables, and Swiss and international fine dining, from working lunches to banquets.",
  h1: "The flavours of home, at Swiss standard.",
  subline:
    "Our own multi-cuisine kitchens serve Indian regional menus, Jain, halal and vegetarian tables, and Swiss and international fine dining, from working lunches to state-style banquets.",
  cta: { label: "Start a catering enquiry", href: "/enquiry?segment=catering" },
  whoThisServes:
    "Delegation offices planning official dinners, event organisers who need a gala done properly, and any group whose guests deserve their own cuisine, not an approximation of it.",
  capabilities: [
    {
      title: "Delegation dining programmes",
      description:
        "Every meal of a visit planned as one menu arc, from breakfast to the official dinner.",
    },
    {
      title: "Banquet & gala production",
      description:
        "Service choreography, staffing and plating for formal dinners at scale.",
    },
    {
      title: "Live stations",
      description:
        "Tandoor, dosa and chaat stations, cooked in front of guests, not reheated behind doors.",
    },
    {
      title: "Dietary law compliance",
      description:
        "Jain, halal and vegetarian tables and allergen protocols, treated as law, not preference.",
    },
    {
      title: "Venue kitchens & field kitchens at altitude",
      description:
        "We cook where the event is, including temporary kitchens in alpine venues.",
    },
    {
      title: "Chef teams",
      description:
        "Our own chefs across cuisines [TO CONFIRM: kitchen facts, chef count].",
    },
  ],
  processSteps: [
    {
      title: "Menu brief",
      description:
        "Cuisines, dietary laws and the shape of each occasion, gathered before anything is priced.",
    },
    {
      title: "Single costed menu plan",
      description:
        "One proposal across every meal of the visit, stated per occasion.",
    },
    {
      title: "Tasting and menu lock",
      description:
        "Menus tasted, adjusted and signed off in writing before the group travels.",
    },
    {
      title: "Service delivery",
      description:
        "A named chef lead runs the kitchen and the pass for the duration.",
    },
    {
      title: "Debrief",
      description:
        "What was served, what was loved and what changes next time, recorded for your next visit.",
    },
  ],
  proof: {
    lines: [
      "Six Indian delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Multi-cuisine catering delivered quietly through four Davos Januaries, at altitude and to protocol.",
    ],
    media: {
      slot: "catering-proof",
      subject: "Thali detail on white linen with alpine window light",
      source: "new-shoot",
      alt: "A thali arranged on white linen in soft alpine window light",
    },
  },
  faqs: [
    {
      question: "How are menus approved?",
      answer:
        "Menus are proposed against your brief, adjusted with your office and locked in writing before the visit; nothing is served that was not signed off.",
    },
    {
      question: "How do you source, and is your halal preparation certified?",
      answer:
        "Halal, Jain and vegetarian preparation runs under strict kitchen protocols, with sourcing documented for your office per event. [TO CONFIRM: sourcing and halal certification detail]",
    },
    {
      question: "Can we taste the menu before the event?",
      answer:
        "Yes. Tastings are part of the process for banquets and delegation programmes, in person where the calendar allows and documented where it does not.",
    },
    {
      question: "Which service styles do you offer?",
      answer:
        "Plated service, family style, buffets and live stations, chosen per occasion; a working lunch and a state-style banquet are not served the same way.",
    },
  ],
  relatedSlugs: ["government-delegations", "mice-events"],
  heroMedia: {
    slot: "catering-hero",
    subject: "Tandoor glow beside a plating pass in a working kitchen",
    source: "new-shoot",
    alt: "Chefs at a plating pass beside a glowing tandoor",
  },
};
