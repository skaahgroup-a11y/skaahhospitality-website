# 07 · Technical Implementation Plan

Claude Code executes epics in order; tasks are commit-sized with IDs. Definition of done for the project = SoW §13 acceptance list (mirrored in docs/01 §6). Gates G1-G6 mark review points for the governance chain (SLA flow in docs/01 §7).

## E0 · Scaffold (gate G1: repo review)
T0.1 Init Next.js 15 TS strict + Tailwind v4 + tokens from docs/04 §1 · T0.2 next-intl `/en` routing, `messages/en.json` seeded with UI strings · T0.3 Payload 3 embedded at `/admin`, Postgres connection, auth, roles (admin, editor) · T0.4 CI: typecheck, lint, Vitest, Playwright shell, axe, Lighthouse CI budgets, `check:claims` script (scans build output for em/en dashes, forbidden claims, `[TO CONFIRM:`) · T0.5 Envs per docs/05 §3 with `.env.example` · T0.6 `pnpm seed:content` + `pnpm export:content` skeletons · T0.7 GitHub repo + Actions pipelines (CI on PR; staging deploy on main; production on tag v* with approval) wired to Hostpoint over SSH per docs/08 · T0.8 Run spike S0 on the Flex server and record `docs/decisions/S0.md`.

## E1 · Design system (G2: CTO design-token sign-off)
T1.1 Type + colour + spacing utilities, prose styles · T1.2 C01 Header (all states) + C02 Footer · T1.3 UI primitives: buttons, links, inputs, select, checkbox, textarea, file drop, badges, tables · T1.4 Icon set (7 services + trust + UI) · T1.5 Motion utilities + reduced-motion · T1.6 Favicons + OG frame template from `/brand/logo` · T1.7 Storybook (or route `/dev/ui`) with visual snapshots C01-C16.

## E2 · CMS schema & seed (G3: editor walkthrough with Ms. Revathi)
T2.1 Collections + globals per docs/05 §4 with field validation (alt required, metric.verified, consentGranted) · T2.2 ConsentGate + ClaimBadge components · T2.3 Seed importer parses `/docs/02-content` into entries (services, destinations, hub sections, case studies, experiences, articles, FAQs, globals) · T2.4 Media collection with source/consent/manifestRef fields; placeholder assets wired pending archive · T2.5 Roles: editor can publish everything except globals.seoDefaults.

## E3 · Templates & pages
T3.1 home · T3.2 services-landing · T3.3 service ×7 · T3.4 hub (incl. C14 timeline, sticky nav) · T3.5 destinations landing + destination-full ×4 · T3.6 destination-overview ×4 · T3.7 work-listing + filters · T3.8 case-study · T3.9 experiences · T3.10 insights listing + article (TOC, RSS) · T3.11 about · T3.12 partner · T3.13 legal ×3 + 404/500 · T3.14 sitemap/robots/canonicals/breadcrumbs · T3.15 JSON-LD per docs/06 §3 · T3.16 metadata from CMS with fallbacks.

## E4 · Enquiry system (G4: end-to-end demo, all six segments)
T4.1 C17 wizard shell: segment picker, progress, lossless back, localStorage drafts · T4.2 Per-segment steps + validation per docs/02-content/07 · T4.3 Direct-to-storage uploads (signed URLs, 100 MB meter, type sniffing, per-file progress, retry) · T4.4 `/api/enquiry`: rate limit, honeypot/time-trap, flags (verifiedDomain, manualCheck), reference generator SKH-date-#### · T4.5 Fan-out: mailbox mail (per segment), DB persist (schema docs/05 §7), sheet webhook (+CSV interim), acknowledgement mail templates (CMS-editable) · T4.6 Failure queue + retry + alerting · T4.7 WhatsApp FAB + phone links with events · T4.8 e2e: six segment paths incl. 100 MB upload, flag cases, failure fallback screen.

## E5 · SEO, analytics, consent
T5.1 Redirect map live (docs/06 §5) incl. legacy crawl import · T5.2 Plausible (EU) + optional GA4 behind consent; C24 banner + preferences page; Consent Mode semantics · T5.3 Events per docs/06 §7 wired and asserted in e2e · T5.4 OG images generated per page · T5.5 Search Console verification files; RSS.

## E6 · QA vs acceptance (G5: staging sign-off; claims gate = zero `[TO CONFIRM]`)
T6.1 Content QA: copy vs docs/02 (spot 100%), links, alt, no long dashes · T6.2 CWV field-like runs (Moto G class, 4G throttle) Home + 7 services + hub, film enabled; fix to budget · T6.3 WCAG 2.2 AA audit (axe + manual keyboard/screen-reader passes), no critical · T6.4 Cross-matrix: Chrome/Safari/Firefox/Edge latest; iOS Safari, Android Chrome; 360/768/1024/1440 · T6.5 Enquiry re-verification on production infra; restore drill of DB+bucket backups · T6.6 `pnpm export:content` demonstrated; admin walkthrough recorded · T6.7 Claims gate run: production build fails on any `[TO CONFIRM]`; resolve with client (facts, mailboxes, WhatsApp, consents).

## E7 · Launch runbook (G6: CEO approval to publish)
T7.1 Freeze + final content import · T7.2 DNS and SSL cutover in the Hostpoint Control Panel (low TTL day before; apex/www policy; Let's Encrypt verified; HSTS) · T7.3 301s live and spot-tested from real legacy URLs · T7.4 robots opened, sitemap submitted, GBP published, directory listings live · T7.5 Monitoring: uptime check, error alerting, weekly Search Console coverage watch; 48 h hypercare window with same-day fixes · T7.6 Handover pack: accounts inventory (all SKAAH-owned), envs, backup schedule, editor guide, export proof, warranty window start per SoW §12.

## Test matrix summary
Unit: form logic, flags, reference gen, claims scanner. e2e: 6 enquiry paths, nav, consent flows, redirects, 404. Non-functional: Lighthouse CI budgets, axe CI, upload 100 MB on 4G, mail deliverability (SPF/DKIM/DMARC pass `[TO CONFIRM: DNS access]`).

## Environment variables (maintained in `.env.example`)
`DATABASE_URL` · `PAYLOAD_SECRET` · `S3_ENDPOINT/BUCKET/KEY/SECRET (EU)` · `MAIL_PROVIDER creds` · `SEGMENT_MAILBOXES json` · `SHEET_WEBHOOK_URL` · `PLAUSIBLE_DOMAIN` · `GA4_ID?` · `MUX/STREAM creds` · `WHATSAPP_NUMBER` · `SITE_URL`.
