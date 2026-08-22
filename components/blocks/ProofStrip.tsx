import type { Stat } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";

// C04: stat cards with gold serif numerals; labels in stone (docs/04).
export function ProofStrip({
  heading,
  stats,
  link,
}: {
  heading?: string;
  stats: Stat[];
  link?: { label: string; href: string };
}) {
  return (
    <div>
      {heading ? <h2 className="heading-2 mb-10">{heading}</h2> : null}
      <dl className="grid gap-px overflow-hidden rounded-sm border border-ice-300 bg-ice-300 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8">
            <dd className="font-display text-5xl font-medium text-gold-600">
              <Copy text={stat.value} />
            </dd>
            <dt className="mt-3 text-sm leading-snug text-stone-500">
              <Copy text={stat.label} />
            </dt>
          </div>
        ))}
      </dl>
      {link ? (
        <p className="mt-8">
          <Link
            href={link.href}
            className="link-draw inline-flex items-center gap-2 font-medium text-navy-900"
          >
            {link.label}
            <Icon name="arrow-right" size={18} />
          </Link>
        </p>
      ) : null}
    </div>
  );
}
