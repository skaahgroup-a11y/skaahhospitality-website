import { Link } from "@/i18n/navigation";
import { NOTICE_BAR } from "@/content/global";

// C29 NoticeBar: optional seasonal notice, toggled from the noticeBar global
// (docs/04 section 3). CMS-editable once Payload lands (epic E2); until then
// the toggle lives in content/global.ts and ships disabled.
export function NoticeBar() {
  if (!NOTICE_BAR.enabled || !NOTICE_BAR.message) return null;

  return (
    <div
      data-surface="dark"
      className="border-b border-gold-500/40 bg-navy-800 text-center text-sm text-ice-100"
    >
      <div className="container-site py-2">
        {NOTICE_BAR.href ? (
          <Link href={NOTICE_BAR.href} className="link-draw">
            {NOTICE_BAR.message}
          </Link>
        ) : (
          <span>{NOTICE_BAR.message}</span>
        )}
      </div>
    </div>
  );
}
