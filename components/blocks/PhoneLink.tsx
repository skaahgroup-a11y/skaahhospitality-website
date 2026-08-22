"use client";

import { usePathname } from "@/i18n/navigation";
import { Copy } from "@/components/ui/Copy";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/site";

// Renders the office phone number as a tel: link firing phone_click
// (docs/06 section 7) once NEXT_PUBLIC_PHONE_NUMBER is configured; until
// then the [TO CONFIRM] marker renders so the missing fact stays visible
// (QA finding SS-13: phone_click had no call site).
export function PhoneLink({ label = "Phone" }: { label?: string }) {
  const pathname = usePathname();
  if (!CONTACT.phoneNumber) {
    return (
      <span>
        {label} <Copy text={CONTACT.phoneConfirm} />
      </span>
    );
  }
  return (
    <a
      href={`tel:${CONTACT.phoneNumber}`}
      onClick={() => trackEvent("phone_click", { page: pathname })}
      className="link-draw"
    >
      {label} {CONTACT.phoneNumber}
    </a>
  );
}
