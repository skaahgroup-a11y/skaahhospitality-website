import type { ReactNode } from "react";

// Truth discipline (CLAUDE.md): [TO CONFIRM: ...] markers render visibly with
// an amber highlight on staging. The production build is blocked while any
// remain via scripts/check-claims.mjs, so this badge never ships publicly.
const TO_CONFIRM_PATTERN = /(\[TO CONFIRM:[^\]]*\])/g;

export function renderCopy(text: string): ReactNode {
  if (!text.includes("[TO CONFIRM")) return text;
  const parts = text.split(TO_CONFIRM_PATTERN);
  return parts.map((part, index) =>
    part.startsWith("[TO CONFIRM") ? (
      <mark
        key={index}
        className="rounded-sm bg-amber-200 px-1 py-0.5 text-xs font-medium text-amber-900"
      >
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function Copy({ text }: { text: string }) {
  return <>{renderCopy(text)}</>;
}
