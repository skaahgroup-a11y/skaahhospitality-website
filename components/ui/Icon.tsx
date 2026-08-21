import type { SVGProps } from "react";

// Custom 1.5 px stroke line icons (docs/04 section 2). Drawn in-house for the
// 7 services, the trust row and UI chrome; refined further in task T1.4.
export type IconName =
  | "delegations"
  | "mice"
  | "transport"
  | "stays"
  | "catering"
  | "media"
  | "branding"
  | "clock"
  | "shield"
  | "group"
  | "arrow-right"
  | "chevron-down"
  | "whatsapp"
  | "phone"
  | "mail"
  | "close"
  | "menu"
  | "check"
  | "upload"
  | "compass"
  | "pin"
  | "calendar"
  | "document";

const paths: Record<IconName, React.ReactNode> = {
  delegations: (
    <>
      <path d="M5 20h14M6 20v-8m4 8v-8m4 8v-8m4 8v-8" />
      <path d="M4 9l8-5 8 5H4z" />
    </>
  ),
  mice: (
    <>
      <rect x="3" y="6" width="18" height="11" rx="1" />
      <path d="M8 21h8M12 17v4M7 10h6M7 13h10" />
    </>
  ),
  transport: (
    <>
      <path d="M4 16V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z" />
      <circle cx="8" cy="19" r="1.4" />
      <circle cx="16" cy="19" r="1.4" />
      <path d="M4 12h16" />
    </>
  ),
  stays: (
    <>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 15h18M3 18v1m18-1v1M7 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  catering: (
    <>
      <path d="M4 17h16" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 10V8m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M3 20h18" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="8" width="13" height="10" rx="1.5" />
      <path d="M16 12l5-3v8l-5-3" />
      <circle cx="8" cy="13" r="2.5" />
    </>
  ),
  branding: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M7 21v-2a5 5 0 0 1 10 0v2" />
      <path d="M12 11v3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  group: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v3m0 11v3M3.5 12h3m11 0h3" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m-5-6 6 6-6 6" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  whatsapp: (
    <>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5z" />
      <path d="M9 8.8c-.3 2.2 2 5.6 4.6 6.2.8.2 1.9-.2 2.1-1l.1-.6-2-1-1 .8c-1-.5-1.9-1.4-2.3-2.4l.8-.9-1-2-.7.1c-.4.1-.6.4-.6.8z" />
    </>
  ),
  phone: (
    <path d="M5 4h4l1.5 4L8 9.5a12 12 0 0 0 6.5 6.5l1.5-2.5 4 1.5v4a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 0 1 5 4z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  upload: (
    <>
      <path d="M12 16V5m0 0-4.5 4.5M12 5l4.5 4.5" />
      <path d="M4 16v3a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="1.5" />
      <path d="M4 10h16M8 4v4m8-4v4" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.5h8l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
