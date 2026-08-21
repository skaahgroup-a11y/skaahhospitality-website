// Content drafted from docs/02-content/04-destinations.md (Geneva & Lake
// Geneva, Tier 1). Claim rule per that spec: describe Geneva's diplomatic
// character only; never imply client work for the bodies based there.
import type { DestinationContent } from "@/content-schemas/types";

export const geneva: DestinationContent = {
  slug: "geneva",
  order: 2,
  tier: 1,
  seo: {
    metaTitle: "Geneva & Lake Geneva for Delegations & Conferences | SKAAH",
    metaDescription:
      "An organiser's guide to Geneva and Lake Geneva: congress capacity, palace-hotel stays, cross-border movement and what SKAAH runs along the Riviera.",
    primaryKeyword: "conference logistics Geneva",
  },
  cardTitle: "Geneva & Lake Geneva",
  cardOneLiner:
    "Diplomacy's home ground: lakefront congress capacity, with Montreux and Lausanne within the hour.",
  h1: "Geneva: diplomacy's home ground.",
  subline:
    "The world's meeting rooms sit here, alongside lakefront congress capacity and a Riviera that puts Montreux and Lausanne within the hour.",
  heroMedia: {
    slot: "geneva-hero",
    subject: "Jet d'Eau at dusk, seen from a distance across the lake",
    source: "new-shoot",
    alt: "The Jet d'Eau fountain at dusk, seen from a distance across Lake Geneva",
  },
  whyGroups: [
    "Geneva is where the world goes to talk. The city's working identity was built on formal conversation, and every organiser inherits the benefit: venues that understand protocol without being told, hotels that treat precedence as routine, and a service culture in which discretion is the default. The infrastructure of serious meetings already exists here; your programme simply plugs into it.",
    "The lakefront carries genuine congress capacity: plenary halls, exhibition space and breakout rooms within minutes of the principal hotels, so conference days lose less time to movement than they would in most cities. When the agenda slips, and agendas slip, that compact geography is what lets the day recover.",
    "There is also a rhythm to the city that suits structured programmes: mornings for plenaries, afternoons for bilaterals, evenings that step out along the lake. Geneva does not fight a formal agenda; it was built around one.",
    "The Riviera extends the map. Montreux and Lausanne sit within the hour, which turns a Geneva conference into a Lake Geneva programme: working sessions in the city, evenings along the shore, incentive days through the vineyards.",
    "For delegations, Geneva pairs naturally with Davos and with bilateral programmes elsewhere in Switzerland. We run the movements between them as one plan, not as separate bookings: one team holds the whole itinerary, so a change in Geneva ripples correctly through everything that follows.",
  ],
  venuesSnapshot: {
    intro:
      "Congress centres, palace-hotel ballrooms and vineyard estates in Lavaux. The table shows indicative archetypes; named venues and confirmed capacities follow commercial clearance [TO CONFIRM: named venue list + capacities].",
    archetypes: [
      { archetype: "Congress centre hall", capacity: "300 to 2,000 guests" },
      { archetype: "Palace-hotel ballroom", capacity: "100 to 600 guests" },
      { archetype: "Lakefront banqueting room", capacity: "80 to 300 guests" },
      { archetype: "Vineyard estate in Lavaux", capacity: "40 to 200 guests" },
      { archetype: "Boardroom or briefing suite", capacity: "8 to 40 guests" },
    ],
  },
  staysSnapshot: [
    "The right bank holds the palace hotels that formal programmes expect: banqueting under the same roof, delegation floors under master accounts, and front desks fluent in precedence.",
    "Principals who prefer quiet often sit better on the left bank, in smaller residences minutes from the meeting rooms: privacy first, spectacle second. We hold the movement plan between residence and meeting room, so the quiet choice never costs the schedule anything.",
    "For longer programmes we mix the two: the formal address for the delegation, quieter houses for principals and advance teams, one account across all of it.",
  ],
  gettingAround: [
    "Geneva Airport has its own protocols for formal arrivals; we prepare the arrangements in advance and walk the route before your party lands.",
    "Programmes that touch Evian or Chamonix cross into France, which changes vehicles, paperwork and timing [TO CONFIRM: cross-border service boundary]. We plan the border into the schedule rather than discovering it on the day.",
    "Lake transfers by boat turn movement into a programme moment; we schedule every sailing against the forecast and hold a road fallback for each one.",
    "Between Geneva, Lausanne and Montreux the rail line runs along the shore; for delegations we stage chauffeured movements, with the timetable held as the fallback.",
  ],
  whatWeRun: [
    "Conference and summit support",
    "Incentive programmes along the Riviera",
    "Delegation stops between Davos and bilateral programmes",
  ],
  sampleDay: [
    {
      marker: "08:30",
      title: "Arrivals at Geneva Airport",
      description: "Protocol arrangements prepared in advance, chauffeurs staged.",
    },
    {
      marker: "10:00",
      title: "Venue walk-through before doors",
      description: "Stage, seating and signage checked against the run sheet.",
    },
    {
      marker: "13:00",
      title: "Working lunch beside the lake",
      description:
        "Dietary requirements confirmed with the kitchen in advance.",
    },
    {
      marker: "15:00",
      title: "Bilateral meetings, right bank",
      description: "Cars staged early; the run sheet absorbs overruns.",
    },
    {
      marker: "17:30",
      title: "Lake transfer by boat",
      description: "Road fallback held against the weather.",
    },
    { marker: "20:00", title: "Dinner above the vineyards in Lavaux" },
  ],
  faqs: [
    {
      question: "What protocol standards can we expect from Geneva venues and hotels?",
      answer:
        "High ones, as routine. Geneva hosts formal programmes constantly, so flag protocol, seating precedence and structured arrivals are familiar territory for its venues and hotels. We still brief every supplier on your delegation's specific requirements, because familiarity is not the same as your standard. The combination of the city's habits and our run sheets is what makes protocol invisible on the day. On request we also run a short protocol briefing for your own staff before the programme opens.",
    },
    {
      question: "Is signage and staffing French or English?",
      answer:
        "Geneva works in French first, but its events industry operates comfortably in English and congress venues handle both as standard. We produce delegation-facing materials, signage and briefings in the languages your party requests, and we confirm language requirements with every venue and supplier during planning rather than assuming. Where a programme runs bilingual, the language split is written into the run sheet itself.",
    },
    {
      question: "When does Geneva offer the best value?",
      answer:
        "The spring and autumn shoulder seasons. The congress calendar loosens, rates ease and the lakefront remains at its best. Major congress weeks compress availability across the city, so if your dates are flexible, tell us early: we will map your target weeks against the calendar and tell you honestly where the value sits.",
    },
  ],
};
