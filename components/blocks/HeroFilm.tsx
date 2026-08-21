import type { Cta, FilmBrief, MediaBrief } from "@/content-schemas/types";
import { ButtonLink } from "@/components/ui/Button";
import { Copy } from "@/components/ui/Copy";
import { TrustRow, type TrustItem } from "@/components/blocks/TrustRow";

// C03 HeroFilm: the poster is the LCP element; the film is injected after
// idle, gated on Save-Data and prefers-reduced-motion (docs/04 section 6).
// DECISION: until the hero film master and poster are delivered (docs/02
// media plan), this renders the poster treatment as a gradient stand-in and
// carries the film brief; the video swap client component attaches when the
// provider assets exist.
export function HeroFilm({
  eyebrow,
  headline,
  subline,
  proofLine,
  primaryCta,
  secondaryCta,
  trustItems,
  film,
  poster,
}: {
  eyebrow: string;
  headline: string;
  subline: string;
  proofLine?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  trustItems: TrustItem[];
  film?: FilmBrief;
  poster?: MediaBrief;
}) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[92vh] flex-col justify-center bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-ice-100"
    >
      {/* Navy multiply scrim slot over future photography (docs/04 section 2). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(191,160,90,0.14),transparent_55%)]"
      />
      <div className="container-site relative pb-24 pt-36 md:pt-40">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="display-1 max-w-4xl text-white">{headline}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ice-200 md:text-xl">
          {subline}
        </p>
        {proofLine ? (
          <p className="mt-5 max-w-2xl border-l-2 border-gold-500 pl-4 text-sm text-gold-500">
            <Copy text={proofLine} />
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href={primaryCta.href} variant="gold">
            {primaryCta.label}
          </ButtonLink>
          {secondaryCta ? (
            <ButtonLink href={secondaryCta.href} variant="outline-gold">
              {secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
        <div className="mt-14 border-t border-navy-800 pt-7">
          <TrustRow items={trustItems} />
        </div>
        {film && poster && !isProduction ? (
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ice-200/50">
            Awaiting hero film ({film.duration}): {film.content} Poster (LCP):{" "}
            {poster.subject}
          </p>
        ) : null}
      </div>
    </section>
  );
}
