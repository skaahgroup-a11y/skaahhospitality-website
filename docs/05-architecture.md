# 05 · Technical Architecture Landscape

Decisions are made here so the build does not stall; alternates are recorded for the CTO's approval per SoW §12. Every choice satisfies: CH/EU residency for enquiry data (hard), no licence fees, portability tested at handover, editorial independence for Ms. Revathi, CWV budgets.

## 1. Stack (decided)
| Layer | Choice | Why | Approved alternate |
|---|---|---|---|
| Framework | Next.js 15, App Router, TypeScript | RSC performance, image/i18n maturity, Claude Code fluency | Astro (if interactivity stays minimal) |
| Styling | Tailwind CSS v4 + tokens (docs/04) | Speed, consistency | vanilla-extract |
| CMS | **Payload CMS 3** (self-hosted, MIT, embedded in the Next app at `/admin`) | Delivers the vendor's promised `custom dashboard, no licence fees` as configuration of an open-source system rather than bespoke code: admin UI for the editor, full data ownership, first-class export, CH/EU hostable. Directly satisfies SoW §9.2 portability where a truly bespoke CMS would breach it. | Keystatic (git-based) if the team prefers content-in-repo |
| Database | SQLite (better-sqlite3) via Payload adapter | Right-sized for this scale, zero extra service on the Flex server, single-file backup and portability | PostgreSQL if the platform later offers it; Payload MongoDB adapter as the FreeBSD fallback (docs/08 S2) |
| i18n | next-intl, `/en` prefix, message files | Localisation-ready per SoW §5.2 | none |
| Search (Insights/Work filters) | Build-time index + client filter (no service) | Scale is small | Pagefind |

## 2. Hosting (decided: Hostpoint Switzerland)
**Hostpoint Managed Flex Server** (size M minimum for Node.js; L recommended), Swiss data centre, Nginx custom-mode proxy to the Node process, Custom Service Control (supervisord) for the app, Hostpoint mail cluster for all transactional mail, local NVMe disk for SQLite and uploads. Full ordering spec, server layout, ports, spike checklist and pipeline: **docs/08-server-requirements.md**. Staging runs on the same server (port 3002, password-protected subdomain). Backups: Hostpoint hourly snapshots + up-to-180-day backups + our nightly export archive.

## 3. Environments & CI/CD
`local → preview (per PR) → staging (protected) → production`. GitHub repo `skaah-group/skaahhospitality-website` (private); trunk-based, PRs reviewed; CI: typecheck, lint, unit, axe, Lighthouse CI budgets (fail under thresholds), `check:claims` gate. Push to `main` auto-deploys staging; tag `v*` with manual approval deploys production; both over SSH with on-server FreeBSD builds, release symlinks and instant rollback (docs/08 S6). Secrets in platform vault; `.env.example` maintained.

## 4. Content model (Payload collections)
`pages` (structured blocks per template) · `services` (7) · `destinations` (tier flag) · `caseStudies` (consentGranted flag, metrics[] each with `verified: bool`) · `articles` · `experiences` (8) · `people` (leadership, consent flag) · `media` (alt, credit, source: archive|shoot|stock, consentStatus, manifestRef) · `faqs` (relatable) · `globals`: header, footer, contactBlock, promises, budgetBands, seoDefaults, noticeBar.
Field-level rules: named states render via a `ConsentGate` component reading `consentGranted`; any `metric.verified=false` renders `[TO CONFIRM]` badge on staging and fails the production claims gate.

## 5. Media pipeline
Stills: uploaded to CMS → stored in R2/MinIO → Next/Image optimisation (AVIF/WebP, responsive). Film: **Mux (EU-pinned)** or Cloudflare Stream for HLS + poster; MP4 fallback stored alongside; hero uses poster-first pattern (docs/04 §6). Fonts self-hosted. Public marketing assets may use global CDN; enquiry attachments never do.

## 6. Data residency & security (hard requirements)
Enquiry submissions (JSON), attachments and mail relay: CH/EU regions only, encrypted at rest and in transit; signed URLs (30-day) for attachment access; access limited to named mailboxes and the admin role. Security: security headers (CSP with nonces, HSTS, frame-ancestors none), rate limiting on `/api/enquiry` and upload endpoints, honeypot + time-trap, file-type sniffing + AV scan hook `[TO CONFIRM: ClamAV container in Option B / provider scanning in A]`, audit log of admin actions, least-privilege API keys, dependency scanning in CI. Retention: enquiry data `[TO CONFIRM: months]` then purge job.

## 7. Enquiry payload schema (persisted JSON, CRM-ready)
```json
{
  "reference": "SKH-20260814-0042",
  "segment": "delegation|mice|stay|catering|agency|general",
  "submittedAt": "ISO-8601",
  "contact": {"name":"","organisation":"","role":"","email":"","phone":"","preferredChannel":"email|phone|whatsapp"},
  "details": {"...segment-specific per docs/02-content/07"},
  "attachments": [{"file":"","bytes":0,"url":"signed"}],
  "flags": {"verifiedDomain":false,"manualCheck":false,"utm":{}},
  "consent": {"privacyVersion":"","acceptedAt":"ISO-8601"},
  "locale": "en"
}
```
Delivery fan-out: mailbox (per segment) + DB row + tracking-sheet webhook (Google Sheets API; interim CSV-by-mail if sheet not ready) + acknowledgement mail. Failures queue and retry (3×, alert on final failure).

## 8. Analytics & consent
Transactional mail: authenticated Hostpoint SMTP (Swiss). Analytics recommended: **Plausible (EU-hosted)** as primary (cookieless, lighter consent burden) with GA4 optional behind consent if the team requires Google reporting; Consent Mode v2 semantics respected either way. Events per docs/06 §7. Server logs privacy-trimmed.

## 9. Integration boundary (Phase 1)
In: mail, object storage, sheet webhook, analytics, video provider. Out (explicitly): CRM, payment, booking engines, call tracking, marketing automation. All forms persist CRM-ready payloads so Phase 2+ attaches without rebuilds.

## 10. Vendor note (custom CMS clause)
The vendor's `CMS & Custom Dashboard, purpose-built, no licence fees` is accepted **only** as: open-source system (Payload or approved equivalent), SKAAH-owned repo and data, standard export proven at handover, documented upgrade path. A bespoke closed CMS fails SoW §9.2 and is rejected at proposal review.
