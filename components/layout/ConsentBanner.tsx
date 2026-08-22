"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { readConsent, writeConsent } from "@/lib/analytics";

// C24: blocking consent banner, two-choice plus preferences (FADP and GDPR,
// Consent Mode v2 semantics). Analytics loads only after opt-in.
export function ConsentBanner() {
  const t = useTranslations("consent");
  const [state, setState] = useState<"pending" | "hidden" | "open">("pending");
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  useEffect(() => {
    const consent = readConsent();
    if (consent) {
      setAnalyticsAllowed(consent.analytics);
      setState("hidden");
    } else {
      setState("open");
    }
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent).detail as { analytics: boolean };
      setAnalyticsAllowed(detail.analytics);
      setState("hidden");
    };
    window.addEventListener("skaah:consent", onChange);
    return () => window.removeEventListener("skaah:consent", onChange);
  }, []);

  const decide = (analytics: boolean) => {
    writeConsent(analytics);
    setAnalyticsAllowed(analytics);
    setState("hidden");
  };

  return (
    <>
      {analyticsAllowed && plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      {state === "open" ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("title")}
          data-surface="dark"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-500 bg-navy-950 text-ice-100 shadow-card"
        >
          <div className="container-site py-6">
            <h2 className="heading-3">{t("title")}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ice-200">
              {t("body")}{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy policy
              </Link>
            </p>

            {showPreferences ? (
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    id="consent-necessary"
                    className="mt-1 h-4 w-4"
                  />
                  <label htmlFor="consent-necessary" className="text-sm">
                    <span className="font-medium">{t("necessaryLabel")}</span>
                    <span className="block text-ice-200">
                      {t("necessaryDesc")}
                    </span>
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent-analytics"
                    checked={analyticsAllowed}
                    onChange={(event) =>
                      setAnalyticsAllowed(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[var(--color-gold-500)]"
                  />
                  <label htmlFor="consent-analytics" className="text-sm">
                    <span className="font-medium">{t("analyticsLabel")}</span>
                    <span className="block text-ice-200">
                      {t("analyticsDesc")}
                    </span>
                  </label>
                </div>
                <Button variant="gold" onClick={() => decide(analyticsAllowed)}>
                  {t("save")}
                </Button>
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="gold" onClick={() => decide(true)}>
                  {t("acceptAll")}
                </Button>
                <Button variant="outline-gold" onClick={() => decide(false)}>
                  {t("necessaryOnly")}
                </Button>
                <Button
                  variant="outline-gold"
                  onClick={() => setShowPreferences(true)}
                >
                  {t("preferences")}
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
