"use client";

import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

// Agency CTA on /partners: fires the partner_cta_click analytics event
// (docs/06 section 7) before following the localised link.
export function PartnerCta({
  href,
  variant = "gold",
  children,
}: {
  href: string;
  variant?: "primary" | "gold" | "outline-gold" | "outline-navy";
  children: ReactNode;
}) {
  return (
    <ButtonLink
      href={href}
      variant={variant}
      onClick={() => trackEvent("partner_cta_click")}
    >
      {children}
    </ButtonLink>
  );
}
