# SKAAH Hospitality Website: Claude Code Master Instructions

This repository specifies the complete build of **skaahhospitality.com** for SKAAH Hospitality GmbH (Opfikon, Zurich; part of SKAAH Group AG). It implements Statement of Work v1.3 (14 August 2026). Treat this file plus `/docs` as the single source of truth.

## Read order
1. `docs/01-scope.md` (what is being built, page inventory, acceptance criteria)
2. `docs/05-architecture.md` (stack, hosting, CMS, data residency; decisions are made, follow them)
3. `docs/04-uiux-frontend.md` (design tokens, components, templates, performance budgets)
4. `docs/02-content/` (final copy, image and video briefs per page; import as CMS seed content)
5. `docs/06-seo.md` (metadata, schema, redirects, analytics events)
6. `docs/07-implementation-plan.md` (epic and task order, definition of done, launch runbook)
7. `docs/08-server-requirements.md` (Hostpoint Switzerland server, GitHub deploy pipeline)
8. `docs/03-brand-logo.md` and `brand/logo/` (identity assets and usage rules)

## Non-negotiable guardrails
- **Language**: British English. Launch language is English only; build every string localisation-ready (next-intl message files, locale-prefixed routing under `/en`, no hard-coded UI text). Do not add other locales unless instructed.
- **Punctuation**: never use em dashes or en dashes in site copy, UI strings, metadata or code comments. Use commas, colons or parentheses.
- **Truth discipline**: never invent facts, numbers, client names or testimonials. Content files mark unverified values as `[TO CONFIRM: ...]`. Render these visibly on staging (amber highlight) and block production builds while any remain (see `docs/07`, gate G5).
- **Claim discipline**: no references to "international organisations" or UN-type bodies anywhere. State names (Maharashtra, Uttar Pradesh, Telangana, Karnataka, Assam, Kerala) appear only where content marks consent as granted; otherwise use the approved fallback: "Six Indian state government delegations, four WEF years, one Swiss partner."
- **Data residency (hard requirement)**: enquiry submissions, attachments, mail and backups live on the SKAAH Hostpoint Managed Flex Server in Switzerland. See `docs/05-architecture.md` §6 and `docs/08-server-requirements.md`.
- **Performance**: LCP under 2.0 s on 4G mobile with the hero film enabled, CLS under 0.1, INP under 200 ms. The film hero uses a static poster as the LCP element with deferred, muted, adaptive playback. Respect `prefers-reduced-motion` and Save-Data.
- **Accessibility**: WCAG 2.2 AA. Keyboard-complete, visible focus, 4.5:1 text contrast (gold on navy is decorative or large-text only).
- **Portability**: content lives in the CMS with a working `pnpm export:content` script producing JSON plus media files. This is tested at handover.

## Working style
- TypeScript strict; Next.js App Router; server components by default.
- Small, reviewed commits per task ID from `docs/07-implementation-plan.md` (for example `T3.4: build DestinationCard`).
- Every template ships with its JSON-LD, metadata and analytics events wired per `docs/06-seo.md`.
- When a spec is ambiguous, prefer the stricter reading of the SoW and leave a `// DECISION:` comment.

## Commands (target scripts to create in E0)
- `pnpm dev` local, `pnpm build` production, `pnpm lint`, `pnpm test`, `pnpm test:e2e`
- `pnpm seed:content` import `/docs/02-content` into the CMS
- `pnpm export:content` portability export (JSON + media)
- `pnpm check:claims` fails if forbidden claims, long dashes or `[TO CONFIRM:` appear in production build output
