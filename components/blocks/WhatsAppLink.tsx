"use client";

import { usePathname } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { whatsappHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppLink({
  variant = "outline",
  surface = "dark",
  label = "WhatsApp us",
}: {
  variant?: "outline" | "plain";
  surface?: "dark" | "light";
  label?: string;
}) {
  const pathname = usePathname();
  // gold-400 carries AA on navy, gold-700 on light (QA AC-05).
  const outlineColours =
    surface === "dark"
      ? "border-gold-500 text-gold-400 hover:bg-gold-400 hover:text-navy-950"
      : "border-gold-600 text-gold-700 hover:bg-gold-400 hover:text-navy-950";
  const classes =
    variant === "outline"
      ? `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-6 py-3 text-sm font-medium tracking-wide transition-colors ${outlineColours}`
      : "link-draw inline-flex items-center gap-2 text-sm font-medium";

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { page: pathname })}
      className={classes}
    >
      <Icon name="whatsapp" size={18} />
      {label}
    </a>
  );
}
