"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

// Fires a read event once at 75% scroll depth (docs/06 section 7). Renders
// nothing; mount once per article or case-study page (QA finding SS-13).
export function ReadTracker({
  event,
  slug,
}: {
  event: Extract<AnalyticsEvent, "article_read" | "case_study_read">;
  slug: string;
}) {
  useEffect(() => {
    let fired = false;
    function onScroll() {
      if (fired) return;
      const doc = document.documentElement;
      const progress =
        (window.scrollY + window.innerHeight) / Math.max(doc.scrollHeight, 1);
      if (progress >= 0.75) {
        fired = true;
        trackEvent(event, { slug });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [event, slug]);

  return null;
}
