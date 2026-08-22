import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { Copy } from "@/components/ui/Copy";
import { CONTACT, ORG } from "@/lib/site";

// Legal skeleton per docs/02-content/07 section B. Counsel finalises the
// wording; [TO CONFIRM: ...] markers block production via gate G5.
const seo = {
  metaTitle: "Imprint | SKAAH Hospitality",
  metaDescription:
    "Company information for SKAAH Hospitality GmbH: registered seat in Opfikon (Zurich), Switzerland, register details and contact.",
};

export const metadata: Metadata = pageMetadata(seo, "/imprint");

const companyRows: { label: string; value: string }[] = [
  { label: "Company", value: `${ORG.name}, part of ${ORG.parent}` },
  {
    label: "Registered seat",
    value: "Opfikon (Zurich), Switzerland [TO CONFIRM: registered address]",
  },
  {
    label: "Commercial register",
    value: "CHE-473.516.098",
  },
  { label: "VAT number", value: "[TO CONFIRM: VAT number]" },
  { label: "Managing director(s)", value: "[TO CONFIRM: managing director(s)]" },
];

export default async function ImprintPage({
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
          { name: "Imprint", path: "/imprint" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Imprint"
        subline="Company information required under Swiss law for the operator of this website."
      />

      <Section surface="light">
        <div className="max-w-3xl">
          <h2 className="heading-3 text-navy-900">Company details</h2>
          <dl className="mt-6">
            {companyRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b border-ice-300 py-4 first:border-t sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-navy-900">
                  {row.label}
                </dt>
                <dd className="text-sm leading-relaxed text-stone-500">
                  <Copy text={row.value} />
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-14 heading-3 text-navy-900">Contact</h2>
          <div className="prose-site mt-4 text-sm leading-relaxed text-stone-500">
            <p>{CONTACT.office}</p>
            <p className="mt-2">
              Email{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-draw font-medium text-navy-900"
              >
                {CONTACT.email}
              </a>{" "}
              <Copy text={CONTACT.emailConfirm} />
            </p>
            <p className="mt-2">
              Phone <Copy text={CONTACT.phoneConfirm} />
            </p>
            <p className="mt-2">
              WhatsApp <Copy text={CONTACT.whatsappConfirm} />
            </p>
          </div>

          <h2 className="mt-14 heading-3 text-navy-900">Group</h2>
          <p className="prose-site mt-4 text-sm leading-relaxed text-stone-500">
            {ORG.name} is part of {ORG.parent}.
          </p>
        </div>
      </Section>
    </>
  );
}
