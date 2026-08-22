import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { CookiePreferences } from "@/components/blocks/CookiePreferences";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Legal skeleton per docs/02-content/07 section B: category table plus
// consent state controls (CookiePreferences shares writeConsent with the
// banner, so both stay in sync).
const seo = {
  metaTitle: "Cookie Preferences | SKAAH Hospitality",
  metaDescription:
    "The cookies and browser storage this site uses, what each category does, and the controls for allowing or declining analytics.",
};

export const metadata: Metadata = pageMetadata(seo, "/cookies");

const categories: {
  category: string;
  purpose: string;
  duration: string;
}[] = [
  {
    category: "Necessary",
    purpose:
      "Keeps the site working: remembers your consent choice and holds an unfinished enquiry draft on your own device so the form can restore it. Always on.",
    duration: "Persistent, until cleared",
  },
  {
    category: "Analytics",
    purpose:
      "Measures how visitors use the site in aggregate so we can improve pages. Not used to identify you. Loads only after you allow it below.",
    duration: "Session",
  },
];

export default async function CookiesPage({
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
          { name: "Cookie Preferences", path: "/cookies" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Cookie Preferences"
        subline="What this site stores in your browser, and the controls for changing your choice."
      />

      <Section surface="light">
        <SectionHeading
          heading="What we store, and why"
          intro="This site keeps a small amount of information in your browser. It falls into 2 categories: necessary storage that the site needs to work, and optional analytics that only runs with your permission."
        />
        <div className="mt-10 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-navy-900 text-left">
                <th
                  scope="col"
                  className="py-3 pr-4 font-semibold text-navy-900"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="py-3 pr-4 font-semibold text-navy-900"
                >
                  Purpose
                </th>
                <th scope="col" className="py-3 font-semibold text-navy-900">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((row) => (
                <tr key={row.category} className="border-b border-ice-300">
                  <td className="py-3 pr-4 align-top font-medium text-navy-900">
                    {row.category}
                  </td>
                  <td className="py-3 pr-4 align-top leading-relaxed text-stone-500">
                    {row.purpose}
                  </td>
                  <td className="py-3 align-top text-stone-500">
                    {row.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prose-site mt-6 text-sm leading-relaxed text-stone-500">
          How we handle the personal data behind these categories is described
          in the{" "}
          <Link href="/privacy" className="link-draw font-medium text-navy-900">
            privacy policy
          </Link>
          .
        </p>
      </Section>

      <Section surface="ice">
        <SectionHeading
          heading="Your choices"
          intro="Necessary storage is always on. Analytics is up to you: switch it on or off and save."
        />
        <div className="mt-10">
          <CookiePreferences />
        </div>
      </Section>
    </>
  );
}
