# skaahhospitality.com

The website of SKAAH Hospitality GmbH (Opfikon, Zurich; part of SKAAH Group AG): Switzerland's single accountable partner for government delegations and high-value corporate groups, proven at WEF Davos.

Built to Statement of Work v1.3. `CLAUDE.md` plus `/docs` are the single source of truth for scope, content, design and architecture.

## Stack

- Next.js 15 (App Router, React Server Components), TypeScript strict
- Tailwind CSS v4 with the design tokens from `docs/04-uiux-frontend.md`
- next-intl, English only at launch, localisation-ready under `/en`
- Typed content layer in `content/` mirroring the planned Payload CMS collections (`docs/05-architecture.md` section 4)
- Enquiry API with JSON payload persistence, triage flags, honeypot and time-trap, rate limiting and SMTP fan-out (`docs/05` sections 6 and 7)

## Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Local development |
| `pnpm build` | Staging build ([TO CONFIRM] markers render with an amber badge) |
| `pnpm build:production` | Production build, blocked while the claims gate fails |
| `pnpm lint` | ESLint |
| `pnpm test` | Vitest unit tests (enquiry flags, reference, file sniffing) |
| `pnpm check:claims` | Scans for long dashes, forbidden claims, unresolved markers |
| `pnpm seed:content` | CMS seed importer (skeleton until epic E2) |
| `pnpm export:content` | Portability export: content JSON plus media |

## Interim logo

At the client's request the SKAAH Group emblem stands in as the site logo until the SKAAH Hospitality identity is finalised. The delivered Hospitality lockups live in `brand/logo/` and `public/brand/`; the swap is a one-file change in `components/layout/SiteLogo.tsx` (see the DECISION note there).

## Build epics still open (docs/07)

- E0 T0.3/T0.8: Payload CMS 3 embedded at `/admin`; Hostpoint spike S0
- E2: CMS schema, seed importer, editor roles
- T4.3: direct-to-storage uploads once the CH/EU bucket exists (interim: attachments stream to `DATA_DIR` on Swiss disk)
- E5 T5.1: legacy redirect map from the skaah.com/hospitality crawl
- E6/E7: QA versus acceptance, launch runbook (`docs/08` has the server ordering and pipeline spec)

## Data and truth discipline

Content marked `[TO CONFIRM: ...]` renders visibly on staging and blocks `pnpm build:production` (SoW gate G5). Named Indian states never render without a consent flag; the approved fallback is used everywhere. Never use em dashes or en dashes in copy, UI strings, metadata or comments.

## Environments

Copy `.env.example` to `.env` and fill in what exists. Enquiry data, uploads and mail must stay on CH/EU infrastructure (hard requirement, `docs/05` section 6; server layout in `docs/08`).
