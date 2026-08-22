import type { Step } from "@/content-schemas/types";
import { Copy } from "@/components/ui/Copy";

// C07: numbered step row; 3 steps on Home, 5-step variant on service pages.
export function StepRow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-3 lg:gap-10 [&:has(li:nth-child(5))]:md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span className="font-display text-4xl font-medium text-gold-600">
            {index + 1}
          </span>
          <h3 className="heading-3 mt-3 text-navy-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-500">
            <Copy text={step.description} />
          </p>
        </li>
      ))}
    </ol>
  );
}
