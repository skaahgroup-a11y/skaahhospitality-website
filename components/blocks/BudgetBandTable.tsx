"use client";

import { useEffect, useRef } from "react";
import { Copy } from "@/components/ui/Copy";
import { trackEvent } from "@/lib/analytics";

// C09: MICE indicative budget bands, CMS-editable, footnote slot. Fires
// rfp_band_view once when scrolled into view (docs/06 section 7).
export function BudgetBandTable({
  rows,
  footnote,
}: {
  rows: { format: string; guests: string; band: string }[];
  footnote: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !fired.current) {
        fired.current = true;
        trackEvent("rfp_band_view");
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-navy-900 text-left">
              <th scope="col" className="py-3 pr-4 font-semibold text-navy-900">
                Format
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold text-navy-900">
                Guests
              </th>
              <th scope="col" className="py-3 font-semibold text-navy-900">
                Indicative per-person band
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.format} className="border-b border-ice-300">
                <td className="py-3 pr-4 font-medium text-navy-900">
                  {row.format}
                </td>
                <td className="py-3 pr-4 text-stone-500">{row.guests}</td>
                <td className="py-3 text-stone-500">
                  <Copy text={row.band} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-stone-400">
        <Copy text={footnote} />
      </p>
    </div>
  );
}
