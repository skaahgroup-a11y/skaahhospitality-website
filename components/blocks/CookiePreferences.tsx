"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/analytics";

// Cookie preference controls for /cookies (docs/02-content/07 section B).
// Reads the stored choice, lets the visitor switch analytics on or off and
// saves through the same writeConsent path as the consent banner, so the
// banner and this page always agree.
export function CookiePreferences() {
  const [analytics, setAnalytics] = useState(false);
  const [stored, setStored] = useState<"unknown" | "none" | "saved">(
    "unknown",
  );
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent) {
      setAnalytics(consent.analytics);
      setStored("saved");
    } else {
      setStored("none");
    }
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent).detail as ConsentState;
      setAnalytics(detail.analytics);
      setStored("saved");
    };
    window.addEventListener("skaah:consent", onChange);
    return () => window.removeEventListener("skaah:consent", onChange);
  }, []);

  const save = () => {
    writeConsent(analytics);
    setJustSaved(true);
  };

  return (
    <div className="max-w-2xl rounded-sm border border-ice-300 bg-white p-6 shadow-card md:p-8">
      {stored !== "unknown" ? (
        <p className="text-sm leading-relaxed text-stone-500">
          {stored === "none"
            ? "No choice is saved in this browser yet. Necessary storage is always on."
            : analytics
              ? "Your saved choice: necessary and analytics."
              : "Your saved choice: necessary only."}
        </p>
      ) : null}

      <div className="mt-6 space-y-5">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="preferences-necessary"
            checked
            disabled
            className="mt-1 h-4 w-4"
          />
          <label htmlFor="preferences-necessary" className="text-sm">
            <span className="font-medium text-navy-900">Necessary</span>
            <span className="block leading-relaxed text-stone-500">
              Always on. Required for the site to work, including remembering
              this choice.
            </span>
          </label>
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="preferences-analytics"
            checked={analytics}
            onChange={(event) => {
              setAnalytics(event.target.checked);
              setJustSaved(false);
            }}
            className="mt-1 h-4 w-4 accent-[var(--color-gold-500)]"
          />
          <label htmlFor="preferences-analytics" className="text-sm">
            <span className="font-medium text-navy-900">Analytics</span>
            <span className="block leading-relaxed text-stone-500">
              Aggregated usage statistics that help us improve the site. Loads
              only after you allow it.
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button variant="primary" onClick={save}>
          Save choice
        </Button>
        <p aria-live="polite" className="text-sm text-stone-500">
          {justSaved ? "Saved. Your choice applies immediately." : ""}
        </p>
      </div>

      <p className="mt-6 border-t border-ice-300 pt-4 text-xs leading-relaxed text-stone-500">
        Saving is never final: you can reopen and change your choices at any
        time by returning to this page. If you clear your browser storage, the
        consent banner appears again on your next visit.
      </p>
    </div>
  );
}
