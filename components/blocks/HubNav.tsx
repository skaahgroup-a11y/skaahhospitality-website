"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// Hub template (docs/04 section 4): sticky in-page nav with 8 anchors, sitting
// below the fixed site header (h-16 mobile, h-20 desktop). Same-page anchors
// use plain <a> elements; localisation is not involved for fragment links.
export function HubNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const t = useTranslations("common");
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        const first = visible[0];
        if (first) setActiveId(first.target.id);
      },
      // Track the band just below the header + nav so the highlighted anchor
      // matches the section the reader is actually in.
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={t("onThisPage")}
      className="sticky top-16 z-30 border-b border-ice-300 bg-white/95 backdrop-blur md:top-20"
    >
      <div className="container-site overflow-x-auto">
        <ol className="flex min-w-max items-center gap-1 py-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-block whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "border-gold-500 font-medium text-navy-900"
                      : "border-transparent text-stone-500 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
