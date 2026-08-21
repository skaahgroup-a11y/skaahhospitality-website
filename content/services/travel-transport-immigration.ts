// Content verbatim from docs/02-content/02-services.md section D
// (Travel, Transport & Immigration).
import type { ServiceContent } from "@/content-schemas/types";

export const travelTransportImmigration: ServiceContent = {
  slug: "travel-transport-immigration",
  order: 3,
  icon: "transport",
  seo: {
    metaTitle:
      "Group Travel, Transport & Immigration Support in Switzerland | SKAAH",
    metaDescription:
      "Group travel in Switzerland: visa and documentation support, meet-and-assist at Zurich and Geneva, fleets, coaches and rail. Proven at Davos Week.",
    primaryKeyword: "group transport Switzerland",
  },
  cardTitle: "Travel, Transport & Immigration",
  cardOneLiner: "Visas, arrivals, fleets and rail, timed to the minute.",
  cardDescription:
    "Visa and documentation support, meet-and-assist at Zurich and Geneva, chauffeured fleets, coach logistics and Swiss rail, held together by 24-hour movement control.",
  h1: "Arrivals to departures, timed to the minute.",
  subline:
    "Visas and documentation support, meet-and-greet at Zurich and Geneva, chauffeured fleets, coaches and charters, and rail done the Swiss way.",
  // DECISION: no dedicated enquiry segment exists for transport; route to the
  // general enquiry rather than mislabel the lead.
  cta: { label: "Start a transport enquiry", href: "/enquiry" },
  whoThisServes:
    "Delegation advance teams, corporate travel managers, event organisers moving guests between cities, and anyone whose programme depends on people arriving where they should, when they should.",
  capabilities: [
    {
      title: "Visa & immigration documentation support",
      description:
        "Checklists, supporting documentation and coordination with the right Swiss offices [TO CONFIRM: exact service boundary with legal counsel].",
    },
    {
      title: "Airport meet & assist",
      description:
        "Named greeters at Zurich and Geneva, from the arrivals hall to the car without a wasted minute.",
    },
    {
      title: "Chauffeur & executive fleet",
      description:
        "Executive cars and vans with vetted, briefed drivers, staged to the day's sheet.",
    },
    {
      title: "Coach logistics",
      description:
        "Coaches for group moves, with marshalling, signage and luggage plans that hold.",
    },
    {
      title: "Private rail & charters",
      description:
        "Reserved carriages and private charters, booked and managed as part of one movement plan.",
    },
    {
      title: "Luggage logistics at delegation scale",
      description:
        "Tagged, tracked and moved separately, so bags reach rooms while the programme keeps moving.",
    },
    {
      title: "24-hour movement control",
      description:
        "One desk watching every movement, flight and forecast for the duration of the visit.",
    },
  ],
  processSteps: [
    {
      title: "Movement brief",
      description:
        "Manifests, dates and priorities gathered; routes and timings planned before the first arrival.",
    },
    {
      title: "Single costed plan",
      description:
        "One movement plan across fleet, coach, rail and luggage, with named owners.",
    },
    {
      title: "Schedule rehearsal",
      description:
        "Timings, staging points and contingencies rehearsed before the group travels.",
    },
    {
      title: "Delivery under movement control",
      description:
        "A 24-hour movement desk runs every transfer, adjusting live to flights and weather.",
    },
    {
      title: "Debrief and handover",
      description:
        "Same-week debrief, with what the movements taught us folded into your next visit.",
    },
  ],
  proof: {
    lines: [
      "Six Indian state government delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Protocol-aware transport across four Davos Januaries, from Zurich Airport to the Graubünden valley.",
    ],
  },
  faqs: [
    {
      question: "How are your vehicles and drivers vetted?",
      answer:
        "Drivers are vetted, briefed to the day's sheet and dressed to standard; vehicles are prepared for the season and checked before every movement. [TO CONFIRM: fleet standards and vetting detail]",
    },
    {
      question: "Do your drivers speak our language?",
      answer:
        "English, German, French, Italian and Hindi on the ground, more on request. [TO CONFIRM: actual list]",
    },
    {
      question: "How do you handle winter driving in Graubünden?",
      answer:
        "With respect. Winter equipment, mountain-experienced drivers, weather watch and timing buffers are standard on every Graubünden movement, and we hold rail as the fallback when the road misbehaves.",
    },
    {
      question: "What happens when a flight is delayed?",
      answer:
        "The movement desk tracks every inbound flight, so greeters, cars and the day's schedule adjust before your guests land. Delays cost minutes, not the plan.",
    },
    {
      question: "Can you support our visa applications?",
      answer:
        "We provide documentation support and coordination; we are not a law firm, and where legal advice is needed we work alongside your counsel. [TO CONFIRM: exact service boundary with legal counsel]",
    },
  ],
  relatedSlugs: ["government-delegations", "stays"],
  heroMedia: {
    slot: "travel-hero",
    subject: "Zurich Airport apron at dawn, marshaller guiding an aircraft",
    source: "new-shoot",
    alt: "Marshaller guiding an aircraft on the Zurich Airport apron at dawn",
  },
};
