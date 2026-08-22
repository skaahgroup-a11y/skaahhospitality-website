import type { TimelineItem } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";

// C14: horizontal on desktop, vertical on mobile (Davos countdown, sample days).
export function Timeline({
  items,
  orientation = "responsive",
}: {
  items: TimelineItem[];
  orientation?: "responsive" | "vertical";
}) {
  const horizontal = orientation === "responsive";
  return (
    <ol
      className={`relative ${
        horizontal
          ? "grid gap-8 md:grid-cols-3 lg:grid-cols-6"
          : "space-y-8 border-l border-gold-500 pl-6"
      }`}
    >
      {items.map((item) => (
        <li
          key={item.marker + item.title}
          className={
            horizontal
              ? "border-l border-gold-500 pl-4 md:border-l-0 md:border-t md:pl-0 md:pt-4"
              : "relative"
          }
        >
          {!horizontal ? (
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border border-gold-500 bg-white"
            />
          ) : null}
          <p className="font-display text-2xl font-medium text-gold-600">
            {item.marker}
          </p>
          <h3 className="mt-1 font-medium text-navy-900">
            <Copy text={item.title} />
          </h3>
          {item.description ? (
            <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
              <Copy text={item.description} />
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
