import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CTABand } from "@/components/blocks/CTABand";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { Copy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/content/experiences";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/06-experiences-insights-about-partner.md section A.
const seo = {
  metaTitle: "Signature Swiss Experiences for Groups | SKAAH",
  metaDescription:
    "Eight signature programmes for groups in Switzerland: private rail charters, alpine galas, lake evenings and Davos Week hosting, each designed and run by one Swiss partner.",
  primaryKeyword: "luxury group experiences Switzerland",
};

export const metadata: Metadata = pageMetadata(seo, "/experiences");

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
        ]}
      />
      <PageHero
        eyebrow="Experiences"
        title="Programmes worth the flight."
        subline="Editorial, not a catalogue: eight signature programmes we design and run, each adaptable to a delegation's dignity or an incentive's energy."
      />

      {/* Eight editorial rows, image alternating left and right (docs/04 section 4). */}
      <Section surface="light">
        <div className="space-y-16 md:space-y-24">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <MediaPlaceholder
                brief={experience.media}
                aspect="3:2"
                className={index % 2 === 1 ? "lg:order-last" : ""}
              />
              <div>
                <p className="eyebrow mb-3">{experience.destinationTag}</p>
                <h2 className="heading-2 text-navy-900">{experience.title}</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-500">
                  <Copy text={experience.description} />
                </p>
                {/* DECISION: the spec's "(cross-link hub)" note on Davos Week
                    Hosting renders as this link rather than as body copy. */}
                {experience.title === "Davos Week Hosting" ? (
                  <Link
                    href="/davos-week"
                    className="link-draw mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-900"
                  >
                    See the Davos &amp; Davos Week hub
                    <Icon name="arrow-right" size={18} />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        headline="Tell us the occasion; we will propose the programme."
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref="/enquiry"
      />
    </>
  );
}
