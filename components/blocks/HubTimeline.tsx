"use client";

import { useEffect, useRef } from "react";
import type { TimelineItem } from "@/content-schemas/types";
import { Timeline } from "@/components/blocks/Timeline";
import { trackEvent } from "@/lib/analytics";

// Hub countdown wrapper: renders C14 Timeline and fires hub_timeline_engage
// once when the countdown scrolls into view (docs/06 section 7), patterned on
// BudgetBandTable's rfp_band_view.
export function HubTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !fired.current) {
        fired.current = true;
        trackEvent("hub_timeline_engage");
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <Timeline items={items} />
    </div>
  );
}
