// Content verbatim from docs/02-content/02-services.md section G (Media & Production).
import type { ServiceContent } from "@/content-schemas/types";

export const mediaProduction: ServiceContent = {
  slug: "media-production",
  order: 6,
  icon: "media",
  seo: {
    metaTitle: "Event Photography & Film Production in Switzerland | SKAAH",
    metaDescription:
      "Photography and film for delegations and corporate programmes: consent-aware, same-day edits, secure delivery. Documented properly, cleared correctly.",
    primaryKeyword: "event photography Switzerland",
  },
  cardTitle: "Media & Production",
  cardOneLiner: "Photography and film that document the visit properly.",
  cardDescription:
    "Stills and film crews for delegations and corporate programmes: consent-aware, protocol-literate, with same-day edits and secure delivery.",
  h1: "Documented properly, cleared correctly.",
  subline:
    "Photography and film for delegations and corporate programmes: consent-aware, protocol-literate, delivered fast enough to matter.",
  // DECISION: no dedicated enquiry segment exists for media; route to the
  // general enquiry rather than mislabel the lead.
  cta: { label: "Start a media enquiry", href: "/enquiry" },
  whoThisServes:
    "Delegation communications officers, corporate marketing teams, event owners who need the record as much as the event, and agencies that need a Swiss production partner on the ground.",
  capabilities: [
    {
      title: "Stills & film crews",
      description:
        "Photographers and film crews who know when to shoot and when to lower the camera.",
    },
    {
      title: "Same-day edits & highlight films",
      description:
        "Selects and highlight cuts delivered while the visit still matters.",
    },
    {
      title: "Consent & clearance workflow",
      description:
        "Who may be photographed, what may be published and who signs it off, agreed before the first frame.",
    },
    {
      title: "Secure delivery & archiving",
      description:
        "Assets delivered through controlled channels and archived to your retention rules.",
    },
    {
      title: "Pavilion content & screens",
      description:
        "Films, loops and stills produced for pavilions and event screens (see Branding, Marketing & Staffing).",
    },
  ],
  processSteps: [
    {
      title: "Coverage brief",
      description:
        "The moments that matter, the faces that may not appear and the formats needed, agreed in advance.",
    },
    {
      title: "Single costed plan",
      description:
        "One proposal across crews, edit and delivery, with named owners.",
    },
    {
      title: "Clearance lock",
      description:
        "Consent rules, accreditation and shot lists locked before the visit begins.",
    },
    {
      title: "Coverage delivery",
      description:
        "A named producer runs crews to the run-sheet, with same-day edits where briefed.",
    },
    {
      title: "Delivery and archive",
      description:
        "Assets handed over securely, the archive closed to your rules, debrief before the week ends.",
    },
  ],
  proof: {
    lines: [
      "Six Indian state government delegations. Four consecutive Davos Weeks. One Swiss partner.",
      "Delegation weeks are documented to the client's rules, not to ours: a discipline learned across four consecutive Davos Weeks.",
    ],
  },
  faqs: [
    {
      question: "Who owns the images and footage?",
      answer:
        "Rights sit where the contract puts them, agreed before the shoot; delegation work is typically cleared for the client's use, with publication controlled by your office. [TO CONFIRM: standard rights terms]",
    },
    {
      question: "How fast can edited material be delivered?",
      answer:
        "Same-day selects and highlight edits are part of the standard offer where the brief calls for them; full galleries and final films follow on timelines agreed in the proposal.",
    },
    {
      question: "Can crews work inside security perimeters?",
      answer:
        "Yes, within the rules of your detail and the Swiss authorities: accreditation, movement plans and no-shoot lists are prepared in advance, and our crews follow them without being reminded.",
    },
    {
      question: "How is consent handled for guests?",
      answer:
        "Through a clearance workflow agreed before the event: who may appear, in which contexts and who approves publication. Where consent is absent, faces stay out of frame.",
    },
  ],
  relatedSlugs: ["branding-staffing", "mice-events"],
  heroMedia: {
    slot: "media-hero",
    subject: "Gimbal operator silhouetted against venue lights",
    source: "new-shoot",
    alt: "A camera operator with a gimbal silhouetted against event lighting",
  },
};
