import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ServiceContent } from "@/content-schemas/types";
import { ServiceCard } from "@/components/blocks/ServiceCard";
import { Icon } from "@/components/ui/Icon";

// Related-services block: the two most adjacent services plus the hub link
// (docs/02-content/02 related-services logic).
export function RelatedServices({ services }: { services: ServiceContent[] }) {
  const t = useTranslations("common");
  return (
    <div>
      <h2 className="heading-2 mb-8">{t("relatedServices")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.cardTitle}
            description={service.cardOneLiner}
            href={`/services/${service.slug}`}
            icon={service.icon}
          />
        ))}
      </div>
      <p className="mt-8">
        <Link
          href="/davos-wef"
          className="link-draw inline-flex items-center gap-2 font-medium text-navy-900"
        >
          Davos & WEF Week hub
          <Icon name="arrow-right" size={18} />
        </Link>
      </p>
    </div>
  );
}
