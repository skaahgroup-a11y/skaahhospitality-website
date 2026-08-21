import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo/meta";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { TrustRow } from "@/components/blocks/TrustRow";
import { PhoneLink } from "@/components/blocks/PhoneLink";
import { WhatsAppLink } from "@/components/blocks/WhatsAppLink";
import { Copy } from "@/components/ui/Copy";
import { CONTACT, RESPONSE_PROMISE } from "@/lib/site";

const seo = {
  metaTitle: "Start Your Enquiry | SKAAH Hospitality",
  metaDescription:
    "Tell us about your visit: delegation, event, stay, catering or partnership. First response within 48 hours; Event and MICE RFPs within one business day.",
};

export const metadata: Metadata = pageMetadata(seo, "/enquiry");

export default async function EnquiryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("enquiry");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Start your enquiry", path: "/enquiry" },
        ]}
      />
      <div className="container-site pb-20 pt-8 md:pb-28">
        <h1 className="display-2 max-w-3xl text-navy-900">{t("title")}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
          {t("intro")}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_20rem]">
          {/* The wrapper reserves the wizard's initial height so client
              hydration does not push the side rail down (CLS budget 0.1,
              QA finding PF-05). */}
          <div className="min-h-[34rem]">
            <Suspense
              fallback={
                <div className="min-h-[34rem] rounded-sm border border-ice-300 bg-white p-8 text-sm text-stone-500 shadow-card">
                  Loading the enquiry form
                </div>
              }
            >
              <EnquiryWizard />
            </Suspense>
          </div>

          {/* Side rail: contact block, promise, office note (mobile: below). */}
          <aside className="space-y-8 lg:pt-2">
            <div className="rounded-sm border border-ice-300 bg-ice-100 p-6">
              <p className="eyebrow mb-4">Contact</p>
              <address className="space-y-3 text-sm not-italic text-navy-900">
                <p>{CONTACT.office}</p>
                <p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="link-draw font-medium"
                  >
                    {CONTACT.email}
                  </a>{" "}
                  <Copy text={CONTACT.emailConfirm} />
                </p>
              </address>
              <div className="mt-5">
                <WhatsAppLink variant="outline" surface="light" />
              </div>
              <p className="mt-4 text-sm text-stone-500">
                {t("prefCall")} <PhoneLink />
              </p>
            </div>

            <div className="rounded-sm border border-ice-300 bg-white p-6">
              <p className="eyebrow mb-3">Our promise</p>
              <p className="text-sm leading-relaxed text-stone-500">
                {RESPONSE_PROMISE}
              </p>
            </div>

            <div className="border-t border-ice-300 pt-6">
              <TrustRow
                items={[
                  { icon: "shield", label: "CH/EU data handling" },
                  { icon: "pin", label: t("officeNote") },
                ]}
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
