import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Copy } from "@/components/ui/Copy";
import {
  SERVICE_LINKS,
  DESTINATION_LINKS,
  COMPANY_LINKS,
} from "@/content/global";
import { INDEPENDENCE_DISCLAIMER } from "@/content/disclaimer";
import { PhoneLink } from "@/components/blocks/PhoneLink";
import { CONTACT, DESCRIPTOR, GROUP_LINE, ORG } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer data-surface="dark" className="bg-navy-950 text-ice-100">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <SiteLogo variant="light" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ice-200">
              {DESCRIPTOR}
            </p>
          </div>

          <nav aria-label={t("services")}>
            <p className="eyebrow mb-4">{t("services")}</p>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-draw text-sm text-ice-200 hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("destinations")}>
            <p className="eyebrow mb-4">{t("destinations")}</p>
            <ul className="space-y-2.5">
              {DESTINATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-draw text-sm text-ice-200 hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label={t("company")}>
              <p className="eyebrow mb-4">{t("company")}</p>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-draw text-sm text-ice-200 hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              <p className="eyebrow mb-4">{t("contact")}</p>
              <address className="space-y-2.5 text-sm not-italic text-ice-200">
                <p>{CONTACT.office}</p>
                <p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="link-draw hover:text-gold-400"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p>
                  WhatsApp <Copy text={CONTACT.whatsappConfirm} />
                </p>
                <p>
                  <PhoneLink />
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-800 pt-8">
          <div className="flex flex-col gap-4 text-sm text-ice-200 md:flex-row md:items-center md:justify-between">
            <p>
              <a
                href={ORG.groupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw hover:text-gold-400"
              >
                {GROUP_LINE}
              </a>
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy" className="link-draw hover:text-gold-400">
                  {t("legalPrivacy")}
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="link-draw hover:text-gold-400">
                  {t("legalImprint")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="link-draw hover:text-gold-400">
                  {t("legalCookies")}
                </Link>
              </li>
              <li>
                <span className="text-ice-300">
                  {t("linkedin")} <Copy text="[TO CONFIRM: LinkedIn URL]" />
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-6 max-w-4xl text-xs leading-relaxed text-ice-300">
            <Copy text={INDEPENDENCE_DISCLAIMER} />
          </p>
          <p className="mt-4 text-xs text-ice-300">
            {String(year)} {ORG.name}. {t("allRights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
