import { Link } from "@/i18n/navigation";
import { Icon, type IconName } from "@/components/ui/Icon";

export interface SegmentTile {
  icon: IconName;
  label: string;
  line: string;
  href: string;
}

// C06: four tiles, icon + label + line, deep links with ?segment= param.
export function SegmentRouter({ tiles }: { tiles: SegmentTile[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map((tile) => (
        <li key={tile.label}>
          <Link
            href={tile.href}
            className="group flex h-full flex-col rounded-sm border border-ice-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
          >
            <span className="text-gold-600">
              <Icon name={tile.icon} size={28} />
            </span>
            <span className="heading-3 mt-4 text-navy-900">{tile.label}</span>
            <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
              {tile.line}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
              <Icon name="arrow-right" size={18} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
