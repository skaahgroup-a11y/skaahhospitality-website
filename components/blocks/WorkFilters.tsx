"use client";

import { useMemo, useState } from "react";
import type { CaseStudyContent } from "@/content-schemas/types";
import { CaseStudyCard } from "@/components/blocks/CaseStudyCard";
import { Button } from "@/components/ui/Button";

// Work listing filter bar per docs/02-content/05: Segment, Destination, Year,
// Group size band. Client-side only; the full grid is server-rendered content
// passed down as props, so SEO sees every card.

const ALL = "all";

const segmentLabels: Record<string, string> = {
  delegation: "Delegation",
  mice: "MICE",
  stay: "Stay",
  catering: "Catering",
  agency: "Agency",
  general: "General",
};

type FacetId = "segment" | "destination" | "year" | "groupSizeBand";

const facets: { id: FacetId; label: string }[] = [
  { id: "segment", label: "Segment" },
  { id: "destination", label: "Destination" },
  { id: "year", label: "Year" },
  { id: "groupSizeBand", label: "Group size band" },
];

// DECISION: facet values still marked [TO CONFIRM: ...] are excluded from the
// option lists (a native select cannot render the staging badge); the studies
// carrying them still appear under "All" and vanish only when a confirmed
// value is selected, which is the truthful behaviour.
function facetOptions(studies: CaseStudyContent[], facet: FacetId): string[] {
  const seen: string[] = [];
  for (const study of studies) {
    const value = study[facet];
    if (value.includes("[TO CONFIRM")) continue;
    if (!seen.includes(value)) seen.push(value);
  }
  return seen;
}

export function WorkFilters({ studies }: { studies: CaseStudyContent[] }) {
  const [selection, setSelection] = useState<Record<FacetId, string>>({
    segment: ALL,
    destination: ALL,
    year: ALL,
    groupSizeBand: ALL,
  });

  const options = useMemo(
    () =>
      Object.fromEntries(
        facets.map((facet) => [facet.id, facetOptions(studies, facet.id)]),
      ) as Record<FacetId, string[]>,
    [studies],
  );

  const filtered = studies.filter((study) =>
    facets.every(
      (facet) =>
        selection[facet.id] === ALL ||
        study[facet.id] === selection[facet.id],
    ),
  );

  const hasActiveFilters = facets.some((facet) => selection[facet.id] !== ALL);

  function clearFilters() {
    setSelection({
      segment: ALL,
      destination: ALL,
      year: ALL,
      groupSizeBand: ALL,
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        {facets.map((facet) => (
          <div key={facet.id} className="flex flex-col gap-1.5">
            <label
              htmlFor={`work-filter-${facet.id}`}
              className="text-xs font-medium uppercase tracking-wider text-stone-500"
            >
              {facet.label}
            </label>
            <select
              id={`work-filter-${facet.id}`}
              value={selection[facet.id]}
              onChange={(event) =>
                setSelection((previous) => ({
                  ...previous,
                  [facet.id]: event.target.value,
                }))
              }
              className="min-h-11 rounded-sm border border-ice-300 bg-white px-3 py-2 text-sm text-navy-900"
            >
              <option value={ALL}>All</option>
              {options[facet.id].map((value) => (
                <option key={value} value={value}>
                  {facet.id === "segment"
                    ? (segmentLabels[value] ?? value)
                    : value}
                </option>
              ))}
            </select>
          </div>
        ))}
        {hasActiveFilters ? (
          <Button variant="outline-navy" onClick={clearFilters}>
            Clear filters
          </Button>
        ) : null}
      </div>

      <p className="mt-6 text-sm text-stone-500" aria-live="polite">
        Showing {filtered.length} of {studies.length} engagements
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      ) : (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500">
          No engagements match these filters. Clear the filters to see all the
          work.
        </p>
      )}
    </div>
  );
}
