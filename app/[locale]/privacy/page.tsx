import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { Copy } from "@/components/ui/Copy";

// Legal skeleton per docs/02-content/07 section B. Counsel finalises the
// wording; [TO CONFIRM: ...] markers block production via gate G5.
const seo = {
  metaTitle: "Privacy Policy | SKAAH Hospitality",
  metaDescription:
    "How SKAAH Hospitality GmbH collects, uses, stores and protects personal data under the Swiss FADP and the EU GDPR.",
};

export const metadata: Metadata = pageMetadata(seo, "/privacy");

const PRIVACY_EMAIL =
  "privacy@skaahhospitality.com [TO CONFIRM: privacy mailbox]";

interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

const sections: LegalSection[] = [
  {
    heading: "Who is responsible",
    paragraphs: [
      "The controller for the personal data described on this page is SKAAH Hospitality GmbH, Glärnischstrasse 39, 8152 Opfikon, Switzerland, registered under CHE-473.516.098. SKAAH Hospitality GmbH is part of SKAAH Group AG.",
      `Questions about this policy or about your personal data can be sent to ${PRIVACY_EMAIL}.`,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "We collect personal data in two ways: through the enquiry forms on this site and through website analytics.",
    ],
    list: [
      "Enquiry forms: the details you enter, such as your name, organisation, role, email address, phone or WhatsApp number, preferred contact channel, the content of your enquiry and any files you attach.",
      "Analytics: aggregated data about how visitors use the site, collected only after you allow analytics in the cookie settings. It is not used to identify you.",
    ],
  },
  {
    heading: "Why we use it",
    paragraphs: ["We use personal data to:"],
    list: [
      "respond to your enquiry and prepare a proposal,",
      "plan and deliver the services you engage us for,",
      "keep the records that Swiss law requires,",
      "understand how the site is used so we can improve it.",
    ],
  },
  {
    heading: "Legal bases",
    paragraphs: [
      "We process personal data under the Swiss Federal Act on Data Protection (FADP) and, where it applies, the EU General Data Protection Regulation (GDPR). Depending on the situation, processing rests on:",
    ],
    list: [
      "steps taken at your request before a contract, and the performance of a contract (handling your enquiry and delivering services),",
      "your consent (analytics, and the consent you give when you submit an enquiry form),",
      "our legitimate interest in running and securing this website,",
      "compliance with legal obligations.",
    ],
  },
  {
    heading: "Where your data is stored",
    paragraphs: [
      "Enquiry submissions, attachments and related mail are stored on managed infrastructure in Switzerland. Some of the providers listed below may process data in the EU. We do not store enquiry data outside Switzerland and the EU.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry data for [TO CONFIRM: months] after our last exchange, unless an active engagement or a legal obligation requires a longer period. After that, the data is deleted or anonymised.",
    ],
  },
  {
    heading: "Processors we work with",
    paragraphs: [
      "We share personal data only with the service providers that run this website and our communications, each bound by a data processing agreement:",
    ],
    list: [
      "our hosting provider (website, enquiry storage and backups),",
      "our email provider (enquiry routing and replies),",
      "our analytics provider (aggregated usage statistics, loaded only after consent).",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: ["Depending on where you are, you have the right to:"],
    list: [
      "access the personal data we hold about you and receive a copy,",
      "have inaccurate data corrected,",
      "have your data deleted,",
      "restrict or object to processing,",
      "receive your data in a portable format,",
      "withdraw consent at any time, without affecting processing that happened before the withdrawal.",
    ],
  },
];

const rightsContact = [
  `To exercise any of these rights, write to ${PRIVACY_EMAIL}. We respond to every request.`,
  "You can also lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC) or, where the GDPR applies, with your local supervisory authority.",
];

export default async function PrivacyPage({
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
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subline="How SKAAH Hospitality GmbH handles personal data collected through this website."
      />

      <Section surface="light">
        <div className="max-w-3xl">
          {sections.map((section) => (
            <section key={section.heading} className="mt-14 first:mt-0">
              <h2 className="heading-3 text-navy-900">
                <Copy text={section.heading} />
              </h2>
              <div className="prose-site mt-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-stone-500">
                    <Copy text={paragraph} />
                  </p>
                ))}
              </div>
              {section.list ? (
                <ul className="prose-site mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                      />
                      <span className="leading-relaxed text-stone-500">
                        <Copy text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.heading === "Your rights" ? (
                <div className="prose-site mt-4">
                  {rightsContact.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-relaxed text-stone-500"
                    >
                      <Copy text={paragraph} />
                    </p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="heading-3 text-navy-900">Cookies</h2>
            <p className="prose-site mt-4 leading-relaxed text-stone-500">
              Details of the cookies and similar technologies this site uses,
              and the controls for changing your choice at any time, are on the{" "}
              <Link
                href="/cookies"
                className="link-draw font-medium text-navy-900"
              >
                cookie preferences page
              </Link>
              .
            </p>
          </section>

          <section className="mt-14">
            <h2 className="heading-3 text-navy-900">Changes to this policy</h2>
            <p className="prose-site mt-4 leading-relaxed text-stone-500">
              We update this page whenever our processing changes. The version
              published here is always the current one.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
