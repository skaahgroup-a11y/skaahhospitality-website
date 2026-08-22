import type { Stat } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";

// C12: outcome stat cards; unverified metrics surface their [TO CONFIRM]
// marker through Copy and fail the production claims gate.
export function StatCards({
  stats,
  surface = "light",
}: {
  stats: Stat[];
  surface?: "light" | "dark";
}) {
  return (
    <dl className="grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-sm border p-6 ${
            surface === "dark"
              ? "border-navy-800 bg-navy-950/60"
              : "border-ice-300 bg-white shadow-card"
          }`}
        >
          <dd
            className={`font-display text-4xl font-medium ${
              surface === "dark" ? "text-gold-500" : "text-gold-600"
            }`}
          >
            <Copy text={stat.value} />
          </dd>
          <dt
            className={`mt-2 text-sm leading-snug ${
              surface === "dark" ? "text-ice-200" : "text-stone-500"
            }`}
          >
            <Copy text={stat.label} />
          </dt>
        </div>
      ))}
    </dl>
  );
}
