"use client";

// Analytics events per docs/06 section 7. Plausible custom events are the
// primary channel; calls are no-ops until the visitor allows analytics and
// NEXT_PUBLIC_PLAUSIBLE_DOMAIN is configured.

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

export type AnalyticsEvent =
  | "enquiry_start"
  | "enquiry_step"
  | "enquiry_submit"
  | "enquiry_attachment"
  | "whatsapp_click"
  | "phone_click"
  | "rfp_band_view"
  | "hub_timeline_engage"
  | "case_study_read"
  | "article_read"
  | "partner_cta_click"
  | "film_play"
  | "film_pause";

export function trackEvent(event: AnalyticsEvent, props?: EventProps): void {
  if (typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}

export const CONSENT_STORAGE_KEY = "skaah-consent-v1";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  acceptedAt: string;
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics,
    acceptedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("skaah:consent", { detail: state }));
  } catch {
    // Storage unavailable (private mode): the banner will show again.
  }
  return state;
}
