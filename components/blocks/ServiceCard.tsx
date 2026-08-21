import { Link } from "@/i18n/navigation";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { MediaBrief } from "@/content-schemas/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

// C05: image top (3:2), serif title, one-liner, arrow-underline hover.
export function ServiceCard({
  title,
  description,
  href,
  icon,
  media,
}: {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  media?: MediaBrief;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-ice-200 bg-white shadow-card transition-shadow hover:shadow-lg"
    >
      {media ? (
        <MediaPlaceholder brief={media} aspect="3:2" showBrief={false} />
      ) : (
        <div className="flex aspect-[3/2] items-center justify-center bg-gradient-to-br from-navy-900 to-navy-950 text-gold-500">
          <Icon name={icon} size={44} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="heading-3 flex items-start gap-3 text-navy-900">
          <span className="mt-1 shrink-0 text-gold-600">
            <Icon name={icon} size={20} />
          </span>
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
          {description}
        </p>
        <span className="link-draw mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
          <Icon name="arrow-right" size={18} />
        </span>
      </div>
    </Link>
  );
}
