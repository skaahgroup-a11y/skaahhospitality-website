# 01 · Full Website Scope

Source authority: SKAAH Hospitality Statement of Work v1.3 (14 Aug 2026). This document translates it into build scope. Where this file and the SoW differ, the SoW governs.

## 1. Objective and positioning
Build a fast, quietly luxurious, enquiry-led website that positions SKAAH Hospitality as Switzerland's single accountable partner for government delegations and high-value corporate groups, and converts that positioning into qualified enquiries from day one.

- Outer brand promise: **"Switzerland, handled."**
- Working descriptor: **"The Swiss hospitality and logistics partner for government delegations and high-value corporate groups, proven at WEF Davos."**
- Segment priority (fixed for Phase 1): 1 Government delegations · 2 Corporate MICE · 3 Agency partnerships · 4 B2B and private clients.
- Brand pillars: Swiss precision · One partner · Cultural fluency · Quiet luxury · Responsible by design.
- Hero standard: reads as "delegation capability, evidenced by India", never "we serve Indian delegations".

## 2. KPIs (measured from launch)
| KPI | Target (first 2 quarters) |
|---|---|
| Qualified enquiries per month (all segments) | Baseline set in month 1, then +25% per quarter [TO CONFIRM: board target] |
| Delegation or MICE RFPs with attachments | Tracked per segment, weekly snapshot |
| First-response SLA met | 1 business day (MICE), 48 h (others), >95% |
| Core Web Vitals (mobile, field) | All green |
| Indexed pages with zero hreflang or schema errors | 100% |

## 3. Page inventory (27 designed and developed pages)
Matches the vendor page count. Every page has final copy and media briefs in `/docs/02-content`.

| # | Page | Route | Template |
|---|---|---|---|
| 1 | Home | `/` | home |
| 2 | Services landing | `/services` | services-landing |
| 3 | Government & Diplomatic Delegations (flagship) | `/services/government-delegations` | service |
| 4 | Meetings, Incentives & Events (MICE) | `/services/mice-events` | service |
| 5 | Travel, Transport & Immigration | `/services/travel-transport-immigration` | service |
| 6 | Stays: Hotels, Chalets & Serviced Apartments | `/services/stays` | service |
| 7 | Food & Catering (multi-cuisine kitchens) | `/services/food-catering` | service |
| 8 | Media & Production | `/services/media-production` | service |
| 9 | Branding, Marketing & Staffing | `/services/branding-staffing` | service |
| 10 | Davos & WEF Week hub | `/davos-wef` | hub |
| 11 | Destinations landing | `/destinations` | destinations-landing |
| 12 | Zurich (Tier 1 full guide) | `/destinations/zurich` | destination-full |
| 13 | Geneva & Lake Geneva (Tier 1) | `/destinations/geneva` | destination-full |
| 14 | Lucerne (Tier 1) | `/destinations/lucerne` | destination-full |
| 15 | Davos (Tier 1, cross-linked to hub) | `/destinations/davos` | destination-full |
| 16 | Interlaken & Jungfrau (Tier 2 overview) | `/destinations/interlaken-jungfrau` | destination-overview |
| 17 | Zermatt (Tier 2) | `/destinations/zermatt` | destination-overview |
| 18 | St. Moritz & Engadin (Tier 2) | `/destinations/st-moritz-engadin` | destination-overview |
| 19 | Ticino & Lugano (Tier 2) | `/destinations/ticino-lugano` | destination-overview |
| 20 | Work (case-study listing) | `/work` | work-listing |
| 21 | Case study template (6 seeded entries) | `/work/[slug]` | case-study |
| 22 | Experiences | `/experiences` | experiences |
| 23 | Insights listing | `/insights` | insights-listing |
| 24 | Insight article template (2 seeded, 10 briefed) | `/insights/[slug]` | article |
| 25 | About | `/about` | about |
| 26 | Partner with us | `/partners` | partner |
| 27 | Contact / Start your enquiry | `/enquiry` | enquiry |

Additional build surfaces (not counted in the 27, still required): Privacy `/privacy`, Imprint `/imprint`, Cookie preferences (modal + page `/cookies`), 404, 500, sitemap.xml, robots.txt, RSS for Insights.

## 4. Functional scope (Phase 1, enquiry-led)
1. **Segmented enquiry wizard** at `/enquiry` and embedded CTAs: Delegation programme (first) · Event / MICE RFP · Stay request · Catering brief · Agency partnership · General. Field spec in `docs/02-content/10-contact-enquiry.md`.
2. **Attachments** to 100 MB per submission via direct-to-storage upload (CH/EU bucket), secure-link fallback message for larger files.
3. **Delivery**: e-mail to per-segment mailboxes `[TO CONFIRM: addresses]` + structured JSON payload persisted (CRM-ready) + row appended to the shared tracking sheet (segment, date, status, owner, estimated value).
4. **Acknowledgement**: instant on-screen and e-mail, restating segment-tuned promises: first response within 1 business day for MICE RFPs, 48 hours for all other segments.
5. **Legitimacy triage (flag, never gate)**: official-domain detection (gov.in, nic.in, *.gov, embassy domains) sets a `verified-domain` flag; anomalies set `manual-check`; both visible in the payload and sheet.
6. **Spam control**: honeypot + time-trap + rate limiting; no visible CAPTCHA.
7. **WhatsApp click-to-chat and phone links** site-wide `[TO CONFIRM: numbers]`.
8. **Consent and analytics**: consent banner (FADP + GDPR, Consent Mode v2 semantics), analytics events per `docs/06-seo.md` §7.
9. **Editorial independence**: Ms. Revathi Meegada can create, edit and publish all content, imagery and SEO fields via the CMS after one training session.

## 5. Explicitly out of scope (Phase 1)
Online booking or payment · client login areas · CRM, call-tracking or e-mail-marketing integrations · AI concierge · newsletter automation beyond a simple signup capture · locales beyond English (build localisation-ready only).

## 6. Acceptance criteria (launch gate, SoW §13)
Severity rule: critical and major issues block launch; minor issues may launch if logged with an owner and a 30 day fix date (CEO approval, CTO sign-off).
1. All 27 pages + legal pages complete in English; zero `[TO CONFIRM]` markers in production.
2. Every enquiry segment tested end to end: submission, attachments, mailbox delivery, acknowledgement, JSON payload, sheet row, triage flags.
3. CWV pass (mobile) for Home, all 7 service pages and the Davos/WEF hub, film hero enabled; WCAG 2.2 AA audit, no critical issues.
4. Structured data validated error-free; 301 redirects from skaah.com/hospitality live; sitemap and robots correct.
5. Analytics and consent verified: events firing for all enquiry segments, WhatsApp and phone taps; banner behaviour correct in EU/CH.
6. Cross-browser and device matrix executed (see `docs/07`, §6) and documented.
7. Content approved by the CEO; permissions checklist complete for every named state (fallback copy live otherwise).
8. Editor trained; documentation handed over; `pnpm export:content` demonstrated; all accounts owned by SKAAH.

## 7. Governance interface
Approval flow with SLAs: staging delivery → first-line check, Ms. Revathi (2 business days) → technical review, Mr. Hanuma Kuna, and functional review, Mr. Varaprasad & Mr. Amar Kavi, in parallel (3 days) → CEO approval (2 days) → publish. 7 business day cap per round; overruns shift milestones day for day.

## 8. Dependencies consumed by this build
WEF Davos photo/film archive 2023-2026 with manifest · state naming consents (fallback otherwise) · per-segment mailboxes · WhatsApp number · verified company facts. Each receives a required-by date at kickoff.
