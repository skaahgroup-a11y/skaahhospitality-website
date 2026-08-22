import type { VenueArchetype } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";

// Destination venue snapshot: archetypes with capacity ranges, no venue
// names without commercial clearance (docs/02-content/04).
export function VenueTable({ archetypes }: { archetypes: VenueArchetype[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-navy-900 text-left">
            <th scope="col" className="py-3 pr-4 font-semibold text-navy-900">
              Venue archetype
            </th>
            <th scope="col" className="py-3 font-semibold text-navy-900">
              Capacity range
            </th>
          </tr>
        </thead>
        <tbody>
          {archetypes.map((venue) => (
            <tr key={venue.archetype} className="border-b border-ice-300">
              <td className="py-3 pr-4 font-medium text-navy-900">
                <Copy text={venue.archetype} />
              </td>
              <td className="py-3 text-stone-500">
                <Copy text={venue.capacity} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
