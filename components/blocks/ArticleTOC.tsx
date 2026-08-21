import { useTranslations } from "next-intl";

// C20: table of contents for articles of 1,200 words and above.
export function ArticleTOC({
  headings,
}: {
  headings: { id: string; label: string }[];
}) {
  const t = useTranslations("common");
  return (
    <nav
      aria-label={t("onThisPage")}
      className="rounded-sm border border-ice-300 bg-ice-100 p-6"
    >
      <p className="eyebrow mb-4">{t("onThisPage")}</p>
      <ol className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="link-draw text-navy-900 hover:text-gold-600"
            >
              {heading.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
