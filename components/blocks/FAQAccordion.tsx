"use client";

import { useId, useState } from "react";
import type { Faq } from "@/content-schemas/types";
import { renderCopy } from "@/components/ui/Copy";
import { Icon } from "@/components/ui/Icon";

// C15: single-open accordion, chevron rotate, APG disclosure pattern.
// The matching FAQPage JSON-LD is emitted server-side by the page.
export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-ice-300 border-y border-ice-300">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const headerId = `${baseId}-h-${index}`;
        const panelId = `${baseId}-p-${index}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-navy-900"
              >
                {faq.question}
                <span
                  className={`shrink-0 text-gold-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Icon name="chevron-down" size={20} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-sm leading-relaxed text-stone-500"
            >
              {renderCopy(faq.answer)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
