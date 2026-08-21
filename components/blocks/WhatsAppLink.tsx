"use client";

import { usePathname } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { whatsappHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppLink({
  variant = "outline",
  label = "WhatsApp us",
}: {
  variant?: "outline" | "plain";
  label?: string;
}) {
  const pathname = usePathname();
  const classes =
    variant === "outline"
      ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-gold-500 px-6 py-3 text-sm font-medium tracking-wide text-gold-500 transition-colors hover:bg-gold-500 hover:text-navy-950"
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
