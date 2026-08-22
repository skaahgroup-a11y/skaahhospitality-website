import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";

// C28: partner value grid on /partners.
export function PartnerValueGrid({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-sm border border-ice-200 bg-white p-6 shadow-card"
        >
          <span className="text-gold-600">
            <Icon name="check" size={22} />
          </span>
          <h3 className="mt-3 font-medium text-navy-900">
            <Copy text={item.title} />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-500">
            <Copy text={item.description} />
          </p>
        </li>
      ))}
    </ul>
  );
}
