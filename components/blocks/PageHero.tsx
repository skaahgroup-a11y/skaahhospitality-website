import type { MediaBrief, Cta } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";
import { ButtonLink } from "@/components/ui/Button";

// Inner-page hero: navy surface standing in for full-bleed photography until
// the archive and shoot assets land (media brief carried for the swap).
export function PageHero({
  eyebrow,
  title,
  subline,
  cta,
  secondaryCta,
  media,
  children,
}: {
  eyebrow?: string;
  title: string;
  subline?: string;
  cta?: Cta;
  secondaryCta?: Cta;
  media?: MediaBrief;
  children?: React.ReactNode;
}) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  return (
    <section
      data-surface="dark"
      className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pb-16 pt-32 text-ice-100 md:pb-24 md:pt-44"
    >
      <div className="container-site">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="display-2 max-w-4xl text-white">
          <Copy text={title} />
        </h1>
        {subline ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ice-200">
            <Copy text={subline} />
          </p>
        ) : null}
        {cta || secondaryCta ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {cta ? (
              <ButtonLink href={cta.href} variant="gold">
                {cta.label}
              </ButtonLink>
            ) : null}
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="outline-gold">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
        {children}
        {media && !isProduction ? (
          <p className="mt-8 text-xs text-ice-200/60">
            Awaiting hero media ({media.source}): {media.subject}
          </p>
        ) : null}
      </div>
    </section>
  );
}
