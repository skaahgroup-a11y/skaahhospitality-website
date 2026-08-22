// Segmented enquiry wizard field spec per docs/02-content/07-enquiry-legal-media.md
// section A. This config drives both the client wizard and server validation.
import type { EnquirySegment } from "@/content-schemas/types";
import type { IconName } from "@/components/ui/Icon";

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "textarea"
  | "select"
  | "radio"
  | "checkboxes"
  | "checkbox";

export interface FieldOption {
  value: string;
  label: string;
}

export interface FieldSpec {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  maxLength?: number;
  helpText?: string;
  placeholder?: string;
}

export interface WizardStep {
  id: string;
  title: string;
  fields: FieldSpec[];
  withFiles?: boolean;
}

export interface SegmentSpec {
  segment: EnquirySegment;
  label: string;
  description: string;
  icon: IconName;
  ownerTeam: string;
  promise: string;
  maxUploadMB: number;
  steps: WizardStep[];
}

const DESTINATION_OPTIONS: FieldOption[] = [
  { value: "zurich", label: "Zurich" },
  { value: "geneva", label: "Geneva & Lake Geneva" },
  { value: "lucerne", label: "Lucerne" },
  { value: "davos", label: "Davos" },
  { value: "interlaken-jungfrau", label: "Interlaken & Jungfrau" },
  { value: "zermatt", label: "Zermatt" },
  { value: "st-moritz-engadin", label: "St. Moritz & Engadin" },
  { value: "ticino-lugano", label: "Ticino & Lugano" },
  { value: "advise-us", label: "Advise us" },
];

export const SEGMENTS: SegmentSpec[] = [
  {
    segment: "delegation",
    label: "Government delegation",
    description:
      "Official visits, protocol-aware planning and delegation-grade ground operations.",
    icon: "delegations",
    ownerTeam: "The delegations team",
    promise: "48 hours",
    maxUploadMB: 100,
    steps: [
      {
        id: "visit",
        title: "The visit",
        fields: [
          {
            id: "purpose",
            label: "Purpose of the visit",
            type: "radio",
            required: true,
            options: [
              { value: "davos-week", label: "Davos Week" },
              {
                value: "bilateral-trade",
                label: "Bilateral or trade mission",
              },
              { value: "other-official", label: "Other official visit" },
            ],
          },
          {
            id: "destinations",
            label: "Destination(s)",
            type: "checkboxes",
            options: DESTINATION_OPTIONS,
          },
          { id: "arrivalDate", label: "Arrival date", type: "date" },
          { id: "departureDate", label: "Departure date", type: "date" },
          {
            id: "datesNotFixed",
            label: "Dates not fixed yet",
            type: "checkbox",
          },
          {
            id: "sizeBand",
            label: "Delegation size band",
            type: "radio",
            required: true,
            options: [
              { value: "up-to-10", label: "Up to 10" },
              { value: "11-30", label: "11 to 30" },
              { value: "31-60", label: "31 to 60" },
              { value: "61-plus", label: "61 or more" },
            ],
          },
          {
            id: "principalsCount",
            label: "Number of principals",
            type: "number",
          },
        ],
      },
      {
        id: "needs",
        title: "What you need",
        fields: [
          {
            id: "needs",
            label: "Services required",
            type: "checkboxes",
            options: [
              { value: "accommodation", label: "Accommodation" },
              { value: "transport-convoy", label: "Transport & convoy" },
              { value: "protocol", label: "Protocol support" },
              {
                value: "visa-immigration",
                label: "Visa / immigration liaison",
              },
              {
                value: "catering",
                label: "Catering, including your own cuisine",
              },
              { value: "media", label: "Media & documentation" },
              {
                value: "bilateral-staging",
                label: "Bilateral / meeting staging",
              },
              { value: "full-programme", label: "Full programme" },
            ],
          },
          {
            id: "securityNotes",
            label: "Anything security or protocol we should know",
            type: "textarea",
            maxLength: 500,
          },
        ],
      },
      {
        id: "files",
        title: "Documents",
        withFiles: true,
        fields: [],
      },
    ],
  },
  {
    segment: "mice",
    label: "Event / MICE RFP",
    description:
      "Meetings, incentives, conferences and events. First response within one business day.",
    icon: "mice",
    ownerTeam: "The events team",
    promise: "one business day",
    maxUploadMB: 100,
    steps: [
      {
        id: "event",
        title: "The event",
        fields: [
          {
            id: "eventType",
            label: "Event type",
            type: "radio",
            required: true,
            options: [
              { value: "meeting", label: "Meeting" },
              { value: "incentive", label: "Incentive" },
              { value: "conference", label: "Conference" },
              { value: "gala", label: "Gala" },
              { value: "launch", label: "Launch" },
            ],
          },
          {
            id: "guestsBand",
            label: "Guests",
            type: "radio",
            required: true,
            options: [
              { value: "12-30", label: "12 to 30" },
              { value: "31-150", label: "31 to 150" },
              { value: "151-500", label: "151 to 500" },
              { value: "500-plus", label: "More than 500" },
            ],
          },
          { id: "nights", label: "Nights", type: "number" },
          {
            id: "dateFlexibility",
            label: "Month, dates or flexibility",
            type: "text",
            placeholder: "For example: March 2027, flexible within the month",
          },
          {
            id: "destinationPreference",
            label: "Destination preference",
            type: "select",
            options: DESTINATION_OPTIONS,
          },
        ],
      },
      {
        id: "budget-production",
        title: "Budget and production",
        fields: [
          {
            id: "budgetBand",
            label: "Indicative budget band (optional)",
            type: "select",
            helpText:
              "Bands are indicative, for orientation before an RFP. Every proposal is costed line by line.",
            options: [
              {
                value: "board-retreat",
                label: "Board retreat, 2 nights (12 to 30 guests)",
              },
              {
                value: "incentive",
                label: "Incentive, 3 nights (50 to 150 guests)",
              },
              {
                value: "conference-gala",
                label: "Conference day + gala (150 to 500 guests)",
              },
              { value: "other", label: "Other / advise us" },
            ],
          },
          {
            id: "productionNeeds",
            label: "Production needs",
            type: "checkboxes",
            options: [
              { value: "venue-search", label: "Venue search & contracting" },
              { value: "technical", label: "Technical production" },
              { value: "programme-design", label: "Programme design" },
              { value: "transfers", label: "Delegate travel & transfers" },
              { value: "rooms", label: "Room blocks" },
              { value: "catering", label: "Gala catering" },
              { value: "staffing", label: "On-site staffing" },
            ],
          },
        ],
      },
      {
        id: "files",
        title: "Your RFP",
        withFiles: true,
        fields: [],
      },
    ],
  },
  {
    segment: "stay",
    label: "Stay request",
    description:
      "Hotels, chalets and serviced apartments, blocked and managed.",
    icon: "stays",
    ownerTeam: "The stays team",
    promise: "48 hours",
    maxUploadMB: 100,
    steps: [
      {
        id: "stay",
        title: "The stay",
        fields: [
          {
            id: "destination",
            label: "Destination",
            type: "select",
            required: true,
            options: DESTINATION_OPTIONS,
          },
          { id: "checkIn", label: "Check-in", type: "date" },
          { id: "checkOut", label: "Check-out", type: "date" },
          {
            id: "roomsOccupants",
            label: "Rooms and occupants",
            type: "text",
            placeholder: "For example: 18 rooms, 24 guests",
          },
          {
            id: "standard",
            label: "Standard",
            type: "radio",
            options: [
              { value: "5-star", label: "5 star" },
              { value: "4-star-superior", label: "4 star superior" },
              { value: "serviced-apartment", label: "Serviced apartment" },
              { value: "chalet", label: "Chalet" },
            ],
          },
          {
            id: "specialRequirements",
            label: "Special requirements",
            type: "textarea",
            helpText:
              "Stays of 28 nights or more: mention it here and we will propose long-stay terms.",
          },
        ],
      },
    ],
  },
  {
    segment: "catering",
    label: "Catering brief",
    description:
      "Multi-cuisine kitchens, from working lunches to state-style banquets.",
    icon: "catering",
    ownerTeam: "The catering team",
    promise: "48 hours",
    maxUploadMB: 100,
    steps: [
      {
        id: "catering",
        title: "The brief",
        fields: [
          { id: "dates", label: "Date(s)", type: "text", required: true },
          {
            id: "venueStatus",
            label: "Venue",
            type: "radio",
            options: [
              { value: "booked", label: "Booked" },
              { value: "not-yet", label: "Not yet booked" },
            ],
          },
          { id: "guests", label: "Guests", type: "number", required: true },
          {
            id: "serviceStyle",
            label: "Service style",
            type: "radio",
            options: [
              { value: "banquet", label: "Banquet" },
              { value: "stations", label: "Live stations" },
              { value: "working", label: "Working meal" },
            ],
          },
          {
            id: "cuisines",
            label: "Cuisine requirements",
            type: "checkboxes",
            options: [
              { value: "regional-indian", label: "Regional Indian" },
              { value: "jain", label: "Jain" },
              { value: "halal", label: "Halal" },
              { value: "vegetarian", label: "Vegetarian" },
              {
                value: "swiss-international",
                label: "Swiss / international",
              },
              { value: "other", label: "Other" },
            ],
          },
          {
            id: "dietaryNotes",
            label: "Dietary or allergen notes",
            type: "textarea",
          },
          {
            id: "kitchenAccessUnknown",
            label: "Kitchen access at the venue is not yet known",
            type: "checkbox",
          },
        ],
      },
    ],
  },
  {
    segment: "agency",
    label: "Agency partnership",
    description:
      "White-label Swiss execution for agencies and incentive houses.",
    icon: "group",
    ownerTeam: "The partnerships team",
    promise: "48 hours",
    maxUploadMB: 100,
    steps: [
      {
        id: "agency",
        title: "Your agency",
        fields: [
          {
            id: "agencyName",
            label: "Agency name",
            type: "text",
            required: true,
          },
          { id: "markets", label: "Markets served", type: "text" },
          {
            id: "clientMix",
            label: "Client type mix",
            type: "text",
            placeholder: "For example: corporate incentives, some government",
          },
          {
            id: "opportunity",
            label: "First opportunity outline",
            type: "textarea",
          },
          {
            id: "volume",
            label: "Volume expectation",
            type: "radio",
            options: [
              { value: "one-off", label: "One-off" },
              { value: "seasonal", label: "Seasonal" },
              { value: "ongoing", label: "Ongoing" },
            ],
          },
        ],
      },
    ],
  },
  {
    segment: "general",
    label: "General enquiry",
    description: "Anything that does not fit the paths above.",
    icon: "mail",
    ownerTeam: "The SKAAH team",
    promise: "48 hours",
    maxUploadMB: 25,
    steps: [
      {
        id: "message",
        title: "Your message",
        withFiles: true,
        fields: [
          { id: "subject", label: "Subject", type: "text", required: true },
          {
            id: "message",
            label: "Message",
            type: "textarea",
            required: true,
          },
        ],
      },
    ],
  },
];

// Common final step fields (all segments), per the spec.
export const CONTACT_FIELDS: FieldSpec[] = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "organisation", label: "Organisation", type: "text", required: true },
  { id: "role", label: "Role", type: "text" },
  { id: "email", label: "E-mail", type: "email", required: true },
  { id: "phone", label: "Phone / WhatsApp", type: "tel" },
  {
    id: "preferredChannel",
    label: "Preferred channel",
    type: "radio",
    options: [
      { value: "email", label: "E-mail" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
  },
];

export const ACCEPTED_FILE_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".jpg",
  ".jpeg",
  ".png",
  ".mp4",
];

export function getSegmentSpec(segment: string): SegmentSpec | undefined {
  return SEGMENTS.find((entry) => entry.segment === segment);
}
