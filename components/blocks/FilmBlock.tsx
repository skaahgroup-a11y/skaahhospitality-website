"use client";

import { useState } from "react";
import type { FilmBrief, MediaBrief } from "@/content-schemas/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Icon } from "@/components/ui/Icon";
import { trackEvent } from "@/lib/analytics";

// C23 FilmBlock: click-to-play with a poster frame (docs/04 section 3).
// DECISION: until the film masters and the streaming provider (Mux EU or
// Cloudflare Stream, docs/05 section 5) exist, src is optional; without it
// the block renders the poster treatment with the film brief carried for the
// asset swap, and the play control stays hidden.
export function FilmBlock({
  poster,
  film,
  src,
}: {
  poster: MediaBrief;
  film: FilmBrief;
  src?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!src) {
    return <MediaPlaceholder brief={poster} aspect="16:9" />;
  }

  return (
    <div className="relative overflow-hidden rounded-sm">
      {playing ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full"
          onPlay={() => trackEvent("film_play")}
          onPause={() => trackEvent("film_pause")}
        >
          {film.content}
        </video>
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            trackEvent("film_play");
          }}
          aria-label={`Play film: ${poster.alt}`}
          className="group relative block w-full"
        >
          <MediaPlaceholder brief={poster} aspect="16:9" showBrief={false} />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-950/70 text-gold-400 transition-transform group-hover:scale-110">
              <Icon name="arrow-right" size={28} />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
