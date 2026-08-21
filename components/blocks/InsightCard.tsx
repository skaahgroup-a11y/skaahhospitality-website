import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { ArticleContent } from "@/content-schemas/types";
import { Icon } from "@/components/ui/Icon";

// C19: insight card for listings and the Home teaser.
export function InsightCard({ article }: { article: ArticleContent }) {
  const t = useTranslations("common");
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex h-full flex-col rounded-sm border border-ice-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
    >
      <p className="text-xs uppercase tracking-wider text-gold-600">
        {t("readTime", { minutes: article.readMinutes })}
      </p>
      <h3 className="heading-3 mt-3 text-navy-900">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
        {article.dek}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-transform group-hover:translate-x-1">
        {t("readMore")}
        <Icon name="arrow-right" size={18} />
      </span>
    </Link>
  );
}
