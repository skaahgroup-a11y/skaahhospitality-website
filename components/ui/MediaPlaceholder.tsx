import type { MediaBrief } from "@/content-schemas/types";
import { Icon } from "@/components/ui/Icon";

// Placeholder media wired pending the WEF archive and Phase 1 shoot
// (docs/07 T2.4). Carries the media brief so the CMS swap is one-to-one:
// the alt text and brief ship now, the photography replaces the gradient.
const aspects = {
  "3:2": "aspect-[3/2]",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-video",
  "21:9": "aspect-[21/9]",
} as const;

export function MediaPlaceholder({
  brief,
  aspect = "3:2",
  className = "",
  showBrief = true,
}: {
  brief: MediaBrief;
  aspect?: keyof typeof aspects;
  className?: string;
  showBrief?: boolean;
}) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  return (
    <figure
      role="img"
      aria-label={brief.alt}
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 ${aspects[aspect]} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-gold-500/40">
        <Icon name="compass" size={48} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/70 to-transparent" />
      {showBrief && !isProduction ? (
        <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs leading-snug text-ice-200/90">
          <span className="font-medium text-gold-500">
            Awaiting media ({brief.source}):
          </span>{" "}
          {brief.subject}
        </figcaption>
      ) : null}
    </figure>
  );
}
