import { Icon, type IconName } from "@/components/ui/Icon";

export interface TrustItem {
  icon: IconName;
  label: string;
}

// C27: icons plus short labels, used under the hero and on the enquiry rail.
export function TrustRow({ items }: { items: TrustItem[] }) {
  return (
    <ul className="flex flex-wrap gap-x-10 gap-y-4">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3 text-sm">
          <span className="text-gold-500">
            <Icon name={item.icon} size={20} />
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
