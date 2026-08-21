"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { whatsappHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

// C18: appears after 600 px of scroll, hidden on /enquiry (docs/04 section 3).
export function WhatsAppFab() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/enquiry")) return null;

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      onClick={() => trackEvent("whatsapp_click", { page: pathname })}
      className={`fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-card transition-all duration-200 hover:bg-green-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="whatsapp" size={24} />
    </a>
  );
}
