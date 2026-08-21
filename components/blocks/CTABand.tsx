import { ButtonLink } from "@/components/ui/Button";
import { Copy } from "@/components/ui/Copy";
import { WhatsAppLink } from "@/components/blocks/WhatsAppLink";

// C16: navy band, serif headline, gold button + WhatsApp secondary.
export function CTABand({
  headline,
  body,
  ctaLabel,
  ctaHref,
  showWhatsApp = true,
}: {
  headline: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section
      data-surface="dark"
      className="bg-navy-900 py-16 text-ice-100 md:py-24"
    >
      <div className="container-site text-center">
        <h2 className="display-2 text-white">{headline}</h2>
        {body ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ice-200">
            <Copy text={body} />
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={ctaHref} variant="gold">
            {ctaLabel}
          </ButtonLink>
          {showWhatsApp ? <WhatsAppLink variant="outline" /> : null}
        </div>
      </div>
    </section>
  );
}
