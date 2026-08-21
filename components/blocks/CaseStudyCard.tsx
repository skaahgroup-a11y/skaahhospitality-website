import { Link } from "@/i18n/navigation";
import type { CaseStudyContent } from "@/content-schemas/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";

const segmentLabels: Record<string, string> = {
  delegation: "Delegation",
  mice: "MICE",
  stay: "Stay",
  catering: "Catering",
  agency: "Agency",
  general: "General",
};

// C10: case-study card with segment tag, year, destination, one-line outcome.
export function CaseStudyCard({ study }: { study: CaseStudyContent }) {
  const thumbnail = study.gallery[0];
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-ice-200 bg-white shadow-card transition-shadow hover:shadow-lg"
    >
      {thumbnail ? (
        <MediaPlaceholder brief={thumbnail} aspect="3:2" showBrief={false} />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
          <span className="rounded-sm bg-ice-100 px-2 py-0.5 font-medium uppercase tracking-wider text-navy-900">
            {segmentLabels[study.segment] ?? study.segment}
          </span>
          <span>{study.year}</span>
          <span aria-hidden="true">·</span>
          <span>{study.destination}</span>
        </p>
        <h3 className="heading-3 mt-3 text-navy-900">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          <Copy text={study.oneLineOutcome} />
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
          <Icon name="arrow-right" size={18} />
        </span>
      </div>
    </Link>
  );
}
