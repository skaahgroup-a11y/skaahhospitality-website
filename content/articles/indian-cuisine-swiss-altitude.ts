// Seed article 2 drafted from docs/02-content/06 section B and the Food &
// Catering service spec (docs/02-content/02 section F). Dietary law content is
// written as observed practice; certification detail stays behind its
// [TO CONFIRM] marker until verified.
import type { ArticleContent } from "@/content-schemas/types";

export const indianCuisineSwissAltitude: ArticleContent = {
  slug: "indian-cuisine-swiss-altitude",
  title: "Bringing Indian Cuisine to Swiss Altitude: A Catering Playbook",
  dek: "How we serve Indian regional menus, Jain and halal tables and Swiss fine dining at alpine venues: menu governance, dietary law in practice, kitchen logistics and the tasting protocol that locks a menu before anyone travels.",
  authorRole: "SKAAH Hospitality operations team",
  readMinutes: 7,
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  status: "seeded",
  primaryKeyword: "Indian catering Switzerland",
  seo: {
    metaTitle: "Indian Catering in Switzerland: The Playbook | SKAAH",
    metaDescription:
      "Indian catering in Switzerland done properly: menu governance, Jain and halal practice, kitchen logistics at altitude and the tasting protocol we run.",
    primaryKeyword: "Indian catering Switzerland",
    secondaryKeywords: [
      "halal catering Zurich",
      "multi-cuisine event catering Switzerland",
    ],
  },
  sections: [
    {
      heading: "Why cuisine is an operations question",
      paragraphs: [
        "For a delegation far from home, food is the moment a visit shows whether it was planned with care. A guest who sits down in an alpine venue in January and finds their own cuisine done properly, not approximated, understands immediately that everything else has been thought through too. The reverse is just as legible, and no view can rescue it.",
        "That is why we run our own multi-cuisine kitchens rather than outsourcing the plate: Indian regional menus, Jain, halal and vegetarian tables, and Swiss and international fine dining, from working lunches to state-style banquets. This playbook sets out how we make that work in practice: how menus are governed, how dietary law is observed in the kitchen, how a kitchen moves up a mountain, and how a tasting turns a proposal into a locked menu.",
      ],
    },
    {
      heading: "Menu governance: one arc, locked in writing",
      paragraphs: [
        "We plan every meal of a visit as one menu arc, from the first breakfast to the official dinner. An arc prevents the quiet failures of piecemeal catering: the dish that appears twice in the same week, the banquet that outshines the bilateral lunch it was meant to follow, the regional preference within a delegation that nobody balanced. It also lets service style be chosen per occasion, because a working lunch and a state-style banquet are not served the same way: plated service, family style, buffets and live stations each have their place in the week.",
        "Governance is deliberately unglamorous. Menus are proposed against a written brief, adjusted with your office, and locked in writing before the group travels. Nothing is served that was not signed off, and any change after lock goes through the same sign-off it would have needed before. Sourcing is documented for your office per event, so every answer about what is on the plate has paper behind it.",
        "The arc should also decide where Switzerland appears on the plate. A visit here should taste of here at least once, and the best programmes move deliberately between tables: the delegation's own cuisine when comfort matters most, Swiss and international fine dining when the occasion calls for it, and live stations (tandoor, dosa, chaat) cooked in front of guests when the evening should feel generous rather than formal.",
      ],
      list: [
        "One menu arc across the whole visit, stated per occasion.",
        "Service style chosen per occasion: plated, family style, buffet or live stations.",
        "Menu lock in writing; late changes pass through the same sign-off.",
        "Sourcing documented per event for your office.",
      ],
    },
    {
      heading: "Jain and halal law in practice",
      paragraphs: [
        "We treat dietary law as law, not preference, and the difference shows in the kitchen rather than on the menu card. Jain dining is strictly vegetarian and, in most observance, excludes root vegetables such as onion, garlic and potato. Observance varies between individuals and with the religious calendar, so we confirm requirements against the actual guest list rather than assuming a single standard, and we build the Jain table as its own preparation line: dedicated utensils and surfaces, and ingredient verification that reaches down to stocks, pastes and spice blends, which is where hidden ingredients usually sit.",
        "Halal service follows the same logic. Ingredients come from verified suppliers, no alcohol is used anywhere in preparation (including in sauces, marinades and desserts), and halal lines are kept separate from non-halal preparation. Where a delegation requires formal certification, we arrange it [TO CONFIRM: halal certification details].",
        "The final discipline is respect at the point of service. Labelling is clear, live stations are briefed, and service staff can answer ingredient questions accurately, because no guest should have to ask twice or study a buffet card with doubt. Vegetarian tables and allergen protocols run under the same regime: the same separation, the same verification, the same paper trail.",
      ],
      list: [
        "Separate preparation lines: dedicated utensils and surfaces, not just separate serving dishes.",
        "Ingredient verification to the level of stocks, pastes and spice blends.",
        "No alcohol in halal preparation, including sauces, marinades and desserts.",
        "Certification where required [TO CONFIRM: halal certification details].",
        "Clear labelling and briefed service staff at every table and station.",
      ],
    },
    {
      heading: "Kitchen logistics at altitude",
      paragraphs: [
        "We cook where the event is, including temporary kitchens in alpine venues, and altitude changes more than the view. Venue kitchens above the valley are usually smaller than the menu deserves, power and water are finite, and everything the menu needs travels up the mountain on a schedule the venue sets, not the chef. Water also boils at a lower temperature up high, so cooking times lengthen and some techniques change; a tandoor behaves differently at a summit than beside the runway.",
        "The playbook, then, starts before the menu does. We recce the kitchen before the menu is locked and write the menu to the kitchen that will cook it, not the other way around. Preparation that can be done in the valley is done in the valley, with finishing at altitude where capacity is tight. The cold chain is held and documented on the way up, freight is planned in both directions because what goes up must come down, and for exposed venues a weather fallback is held at valley level, so the dinner survives the forecast.",
        "Staff logistics ride on the same plan. Chefs and service teams move on the venue's clock, arrive before the first delivery and stay until the last crate is down, and a named chef lead runs the kitchen and the pass for the duration, so that every question on the mountain has one answer.",
      ],
      list: [
        "Recce the venue kitchen first; write the menu to the kitchen that will cook it.",
        "Prepare below, finish above, where altitude capacity is tight.",
        "Hold and document the cold chain uphill; plan freight in both directions.",
        "Keep a weather fallback at valley level for exposed venues.",
      ],
    },
    {
      heading: "The tasting protocol",
      paragraphs: [
        "A tasting is not theatre; it is the meeting where the menu stops being our proposal and becomes your decision. Tastings are part of the process for banquets and delegation programmes, held in person where the calendar allows and documented with photographs and tasting notes where it does not. We ask that the people at the table are the people who can decide, so the menu locks in the room rather than in a later email chain.",
        "Each dish is tasted against the brief, and heat and seasoning are set by the delegation's own palate, recorded course by course, never assumed. Adjustments are written down as they are agreed, a second tasting follows where changes are material, and the written menu lock follows the final tasting. After the visit itself we debrief: what was served, what was loved and what changes next time, recorded as the starting point for your next visit.",
        "For a delegation that returns each year, that record compounds. The debrief of the last visit becomes the first document of the next menu, which is how a second January tastes better than the first without a single conversation being repeated.",
      ],
    },
    {
      heading: "One kitchen conversation",
      paragraphs: [
        "If you take one practical step from this playbook, take this: bring us the guest list and its dietary laws early, before the venue if you can, because the menu shapes the logistics as often as the logistics shape the menu. Our kitchens have delivered multi-cuisine catering quietly through four WEF Januaries, at altitude and to protocol, and the same discipline scales down to a single working lunch.",
        "Every enquiry receives a first response within 48 hours, and event and MICE RFPs within one business day. Tell us the occasion, and we will propose the menu.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Jain, halal and vegetarian tables be served at the same event?",
      answer:
        "Yes. Separate preparation lines and clear labelling let one event serve every table properly, and that is how most delegation dinners run.",
    },
    {
      question: "Is your halal preparation certified?",
      answer:
        "Halal preparation runs under strict kitchen protocols, with sourcing documented for your office per event. [TO CONFIRM: halal certification details]",
    },
    {
      question: "Can we taste the menu before the event?",
      answer:
        "Yes. Tastings are part of the process for banquets and delegation programmes, in person where the calendar allows and documented where it does not.",
    },
    {
      question: "Do you cook on site at alpine venues?",
      answer:
        "Yes. We cook where the event is, including temporary kitchens at alpine venues, with menus written to the kitchen that will cook them.",
    },
  ],
  relatedSlugs: ["wef-delegation-countdown"],
};
