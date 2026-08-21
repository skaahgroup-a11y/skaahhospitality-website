import { Link } from "@/i18n/navigation";
import type { MediaBrief } from "@/content-schemas/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Icon } from "@/components/ui/Icon";

// C13: destination card with the badge slot (WEF Week hub on Davos).
export function DestinationCard({
  title,
  oneLiner,
  href,
  badge,
  media,
}: {
  title: string;
  oneLiner: string;
  href: string;
  badge?: string;
  media: MediaBrief;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-ice-200 bg-white shadow-card transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <MediaPlaceholder brief={media} aspect="3:2" showBrief={false} />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-sm bg-gold-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="heading-3 text-navy-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          {oneLiner}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
          <Icon name="arrow-right" size={18} />
        </span>
      </div>
    </Link>
  );
}
