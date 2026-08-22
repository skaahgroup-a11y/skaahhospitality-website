import type { Capability } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";

// C08: 2 by 4 capability grid on service pages, icon + title + 1-2 lines.
export function CapabilityGrid({ items }: { items: Capability[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.title}>
          <span className="text-gold-600">
            <Icon name="check" size={20} />
          </span>
          <h3 className="mt-2 font-medium text-navy-900">
            <Copy text={item.title} />
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
            <Copy text={item.description} />
          </p>
        </li>
      ))}
    </ul>
  );
}
