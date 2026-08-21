# 08 · Server Requirements: Hostpoint (Switzerland) + GitHub Deployment

Decision: the site runs on a **Hostpoint Managed Flex Server** in Switzerland. This document tells Mr. Khurram exactly what to order, what to enable, and how code flows from Claude Code through GitHub to the server. Verified against Hostpoint documentation, August 2026.

## 1. What to order
| Item | Requirement |
|---|---|
| Product | **Managed Flex Server**. Node.js applications require size **M or higher** (Hostpoint rule). |
| Recommended size | **Flex L** (headroom for Next.js SSR + Payload CMS + on-server builds + 100 MB uploads). Flex M is the functional minimum. Resource floor we need from the chosen tier: 4 vCPU, 8 GB RAM, 200 GB NVMe (minimum acceptable: 2 vCPU, 4 GB, 100 GB). Confirm current tier specs and pricing on Hostpoint's price list at order time (directional: Flex S from ~CHF 140/month up to XXL ~CHF 630, one-time setup fee applies). |
| SLA option | Recommended: 99.5% Platinum SLA once the site carries live delegation traffic; decide at order `[TO CONFIRM: CEO]`. |
| Included and relied on | Swiss data centre (FINMA-relevant, ISO 27001 certified), 24/7 monitoring, hourly snapshots for 24 h, backups up to 180 days, DDoS protection, unlimited mailboxes (5 GB each), free Let's Encrypt SSL, Control Panel. |

## 2. Platform facts the build must respect
- OS is **FreeBSD** (Hostpoint managed Unix platform). Apache and Nginx run in parallel; our app sits behind **Nginx custom mode (proxy for own application)**.
- The Node app listens on `127.0.0.1:<port>` (allowed range 1024-65535). We use **3001 production, 3002 staging**.
- Long-running processes are managed by Hostpoint **Custom Service Control** (supervisord): `hpservices supervisord add skaah-web` / `skaah-web-staging`, autostart, log rotation, `supervisorctl restart` on deploy.
- SSH access enabled for the deploy user; npm/pnpm available; Node LTS selected from Hostpoint's provided versions (target Node 22 LTS `[TO CONFIRM: available versions on server]`).
- **FreeBSD native-module note (critical)**: `sharp` (image processing) and `better-sqlite3` must be installed **on the server** (`pnpm install` over SSH), not shipped from Linux CI. Phase 0 spike S0 verifies both build on the Flex platform. Fallbacks if either fails: pre-generated image renditions in CI + `images.unoptimized` for the optimizer, and Payload's MongoDB adapter (pure-JS driver; Hostpoint documents running MongoDB on Flex via CSC).

## 3. Server layout
```
~/app/skaah-web/            releases/<git-sha>/  current -> symlink   shared/.env  shared/data/
~/app/skaah-web-staging/    same pattern, port 3002, basic-auth site
~/app/skaah-web/shared/data/sqlite/payload.db     (CMS + enquiry payloads)
~/app/skaah-web/shared/data/uploads/              (enquiry attachments, media originals)
```
Control Panel websites: `skaahhospitality.com` → proxy 3001 (Let's Encrypt, HSTS per Hostpoint Nginx guide) · `staging.skaahhospitality.com` → proxy 3002 + password protection · `www` → apex 301.

## 4. Services to enable in the Control Panel
- Mailboxes (Hostpoint mail cluster, Swiss): `enquiry@`, `delegations@`, `mice@`, `stays@`, `catering@`, `partners@`, `noreply@` `[TO CONFIRM: final list]`; SPF, DKIM, DMARC records set; the app sends transactional mail via authenticated Hostpoint SMTP (residency stays fully Swiss).
- DNS zone for skaahhospitality.com at Hostpoint (or keep registrar DNS with records pointed here) `[TO CONFIRM: where DNS lives]`; low-TTL plan for launch cutover; `skaahhospitality.ch` if registered: pure 301 in panel.
- Cron (or CSC job): nightly `pnpm export:content` archive to `~/backups/export-YYYYMMDD.tar.gz` (kept 30 days) on top of Hostpoint's own backups; weekly restore-file integrity check.
- Optional later: Valkey cache (not needed Phase 1).

## 5. Data residency & security mapping (SoW hard requirement)
Enquiry submissions (SQLite rows), attachments (local disk), transactional mail (Hostpoint SMTP) and backups (Hostpoint clusters) all remain **in Switzerland**. App-level controls per docs/05 §6: signed 30-day URLs for attachments, rate limiting, honeypot + time-trap, file-type sniffing, security headers via Nginx + app, least-privilege SSH deploy key, `.env` chmod 600, admin audit log. Retention purge job per privacy policy `[TO CONFIRM: months]`.

## 6. GitHub → Hostpoint pipeline (Claude Code pushes here)
- Repo: `github.com/skaah-group/skaahhospitality-website` (private, SKAAH-owned org; Mr. Hanuma Kuna admin, developer write). Branch model: trunk (`main`) + short-lived task branches named by task ID (T3.4-destination-card); PRs required into `main`.
- CI (GitHub Actions, on every PR): typecheck, lint, unit, axe, Lighthouse CI budgets, `check:claims`. Merge blocked on red.
- **Deploy staging** (on push to `main`): Action connects over SSH (deploy key secret), `git fetch` into `releases/<sha>` on the server, `pnpm install && pnpm build` **on the server** (FreeBSD-correct natives), run Payload migrations, health-check `127.0.0.1:3002/api/health`, flip `current` symlink, `supervisorctl restart skaah-web-staging`. Rollback = repoint symlink to previous release.
- **Deploy production** (on tag `v*`, manual approval environment in Actions): same flow against port 3001 after CEO gate G6.
- Actions secrets: `HOSTPOINT_SSH_HOST`, `HOSTPOINT_SSH_USER`, `HOSTPOINT_SSH_KEY`, `PROD_PATH`, `STAGING_PATH`. No secrets in the repo; server `.env` is the single runtime secret store.

## 7. Phase 0 spike S0 (run before any build epic; half a day)
1. SSH in; confirm Node LTS version and pnpm. 2. `pnpm add sharp better-sqlite3` in a scratch dir; confirm both install on FreeBSD. 3. Hello-world Next standalone on 3002 behind an Nginx custom-mode site; confirm TLS + HSTS. 4. CSC service registered; survives restart. 5. Test mail from Hostpoint SMTP passes SPF/DKIM to Gmail and Outlook. 6. 100 MB upload to disk through the proxy (adjust Nginx `client_max_body_size` via panel/support if needed). Record results in the repo `docs/decisions/S0.md`; trigger fallbacks from §2 only if a step fails.
