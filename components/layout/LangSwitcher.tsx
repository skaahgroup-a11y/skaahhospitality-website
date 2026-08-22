"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

// C26 LangSwitcher: built but hidden until more than one locale exists
// (docs/04 section 3). When locales are added to i18n/routing.ts this
// renders automatically; mount point is the site header.
export function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  if (routing.locales.length < 2) return null;

  return (
    <label className="flex items-center gap-2 text-xs text-ice-200">
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) =>
          router.replace(pathname, { locale: event.target.value })
        }
        className="rounded-sm border border-navy-800 bg-navy-900 px-2 py-1 text-ice-100"
      >
        {routing.locales.map((entry) => (
          <option key={entry} value={entry}>
            {entry.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
