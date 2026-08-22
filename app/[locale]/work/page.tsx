import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CTABand } from "@/components/blocks/CTABand";
import { WorkFilters } from "@/components/blocks/WorkFilters";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/content/work";
import { RESPONSE_PROMISE } from "@/lib/site";

// Content per docs/02-content/05-work-case-studies.md (listing).
const seo = {
  metaTitle: "Our Work: Delegations & Events in Switzerland | SKAAH",
  metaDescription:
    "Selected engagements across Switzerland, told the way we run them: the brief, what made it hard and what happened. Names appear only with written consent.",
  primaryKeyword: "delegation and event case studies Switzerland",
};

export const metadata: Metadata = pageMetadata(seo, "/work");

export default async function WorkPage({
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
          { name: "Work", path: "/work" },
        ]}
      />
      <PageHero
        eyebrow="Our work"
        title="Evidence, filed properly."
        subline="Selected engagements, told the way we run them: the brief, what made it hard, and what happened. Names appear only with written consent; the work stands either way."
        media={{
          slot: "work-hero",
          subject:
            "Documentation packs, run sheets and archive binders on an operations table, contents not legible",
          composition: "top-down",
          source: "davos-archive",
          alt: "Delegation documentation prepared for handover",
        }}
      />

      <Section surface="light">
        {/* Heading-order fix (QA AC-09): grids jump h1 to card h3 without it. */}
        <h2 className="sr-only">Selected engagements</h2>
        <WorkFilters studies={caseStudies} />
      </Section>

      <CTABand
        headline="Tell us about your visit."
        body={RESPONSE_PROMISE}
        ctaLabel="Start your enquiry"
        ctaHref="/enquiry"
      />
    </>
  );
}
