"use client";

import { useEffect } from "react";
import { Copy } from "@/components/ui/Copy";
import { trackEvent } from "@/lib/analytics";

// Case-study hero meta row (year, destination, segment, group size band) per
// docs/02-content/05. Sits inside the dark PageHero surface.
// DECISION: this is the template's one client component, so it also carries
// the case_study_read analytics event (75% scroll depth, docs/06 section 7).

const segmentLabels: Record<string, string> = {
  delegation: "Delegation",
  mice: "MICE",
  stay: "Stay",
  catering: "Catering",
  agency: "Agency",
  general: "General",
};

export function CaseStudyMetaRow({
  slug,
  year,
  destination,
  segment,
  groupSizeBand,
}: {
  slug: string;
  year: string;
  destination: string;
  segment: string;
  groupSizeBand: string;
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
        trackEvent("case_study_read", { slug });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  const items = [
    { label: "Year", value: year },
    { label: "Destination", value: destination },
    { label: "Segment", value: segmentLabels[segment] ?? segment },
    { label: "Group size band", value: groupSizeBand },
  ];

  return (
    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-medium uppercase tracking-wider text-ice-200/60">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm text-ice-100">
            <Copy text={item.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
