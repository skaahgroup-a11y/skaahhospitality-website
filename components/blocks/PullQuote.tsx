import { Copy } from "@/components/ui/Copy";

// C21: pull quote, rendered only where consent is granted.
export function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <blockquote className="border-l-2 border-gold-500 pl-6">
      <p className="font-display text-2xl font-medium leading-snug text-navy-900">
        <Copy text={quote} />
      </p>
      {attribution ? (
        <footer className="mt-3 text-sm text-stone-500">
          <Copy text={attribution} />
        </footer>
      ) : null}
    </blockquote>
  );
}
