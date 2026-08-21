"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/site";

// 500-class error state (docs/04 section 6).
export default function ErrorPage({ reset }: { reset: () => void }) {
  const t = useTranslations("error");
  return (
    <section
      data-surface="dark"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-navy-950 px-6 py-32 text-center text-ice-100"
    >
      <h1 className="display-2 text-white">{t("title")}</h1>
      <p className="mt-4 max-w-md text-ice-200">{t("body")}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button variant="gold" onClick={reset}>
          {t("retry")}
        </Button>
        <a
          href={`mailto:${CONTACT.email}`}
          className="link-draw text-sm text-ice-200"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
}
