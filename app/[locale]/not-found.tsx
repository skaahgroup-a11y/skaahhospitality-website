import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// 404 with the compass motif, linking to Services, Davos and Enquiry
// (docs/04 section 6 error states).
export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section
      data-surface="dark"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-32 text-center text-ice-100"
    >
      <span className="text-gold-500">
        <Icon name="compass" size={64} />
      </span>
      <h1 className="display-2 mt-8 text-white">{t("title")}</h1>
      <p className="mt-4 max-w-md text-ice-200">{t("body")}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/services" variant="gold">
          {t("toServices")}
        </ButtonLink>
        <ButtonLink href="/davos-wef" variant="outline-gold">
          {t("toDavos")}
        </ButtonLink>
        <ButtonLink href="/enquiry" variant="outline-gold">
          {t("toEnquiry")}
        </ButtonLink>
      </div>
    </section>
  );
}
