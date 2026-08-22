import type { MediaBrief } from "@/content-schemas/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

// C22: snap-scrolling gallery with captions; placeholder frames carry the
// media briefs until archive frames with manifest rows land.
export function GalleryScroller({ frames }: { frames: MediaBrief[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6">
      <ul className="flex snap-x snap-mandatory gap-4 pb-4">
        {frames.map((frame) => (
          <li
            key={frame.slot}
            className="w-80 shrink-0 snap-start md:w-[26rem]"
          >
            <MediaPlaceholder brief={frame} aspect="3:2" />
            <p className="mt-2 text-xs leading-snug text-stone-500">
              {frame.alt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
