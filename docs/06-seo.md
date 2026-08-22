# 06 · SEO Plan

Honesty first (SoW §7.1): public volume data for Swiss delegation/MICE terms is thin; the keyword map is directional and gets validated in Phase 0 via Search Console + a small paid-search probe. The plan assumes a near-zero authority start (section-level 301s transfer little) and builds authority deliberately. MICE cluster receives equal investment to the delegation cluster.

## 1. Keyword map (primary → page; secondaries in content files)
| Cluster | Primary keyword | Page |
|---|---|---|
| Delegations | government delegation support Switzerland | /services/government-delegations |
| Delegations | WEF Davos logistics partner | /davos-wef |
| Delegations | delegation accommodation Davos | /destinations/davos + hub §3 |
| MICE | DMC Switzerland | /services/mice-events |
| MICE | incentive travel Switzerland | /destinations/lucerne + article 6 |
| MICE | corporate event management Zurich | /destinations/zurich |
| MICE | conference logistics Geneva | /destinations/geneva |
| Transport | group transport Switzerland | /services/travel-transport-immigration |
| Stays | group accommodation Switzerland · serviced apartments Zurich Airport | /services/stays · article 9 |
| Catering | Indian catering Switzerland · halal catering Zurich | /services/food-catering |
| Partner | Swiss ground partner for agencies | /partners |
| Corridor | India Switzerland business travel TEPA | article 10 |
Brand: `SKAAH Hospitality` variants → Home/About own all SERP features (sitelinks via IA, Organization schema, GBP).

## 2. On-page rules (every template)
One `h1` = primary keyword naturally phrased · metaTitle ≤60 chars ends `| SKAAH` (Home as written) · metaDescription ≤155 with promise or proof · canonical self · descriptive slugs as in scope table · breadcrumbs with schema · image alt literal (no stuffing) · internal links: every service ↔ hub ↔ 1+ destination ↔ 1+ case study ↔ 1+ article (link plan lives in each content file's cross-links) · anchor text natural, no exact-match farming.

## 3. Structured data (JSON-LD per template; validate zero-error)
- Sitewide `Organization` + `WebSite`: name SKAAH Hospitality GmbH, url, logo (icon PNG), sameAs (LinkedIn `[TO CONFIRM]`, skaah.com), parentOrganization SKAAH Group AG.
- `/about` + footer NAP: `LocalBusiness` (type: `TravelAgency`) with Opfikon address `[TO CONFIRM: exact address]`, geo, areaServed CH, telephone `[TO CONFIRM]`.
- Service pages: `Service` (provider → Organization, areaServed CH, serviceType per page).
- Hub + service FAQs: `FAQPage` (only questions visibly on page).
- Articles: `Article` (author → Organization until personal consent, datePublished/Modified).
- Case studies: `Article` subtype with `about` service; images array.
- Breadcrumbs: `BreadcrumbList` everywhere except Home.
Example (service):
```json
{"@context":"https://schema.org","@type":"Service","name":"Government & Diplomatic Delegation Support","provider":{"@type":"Organization","name":"SKAAH Hospitality GmbH"},"areaServed":"CH","serviceType":"Delegation logistics and protocol","url":"https://skaahhospitality.com/en/services/government-delegations"}
```

## 4. Technical SEO (acceptance-tested)
XML sitemap (per-locale-ready) + robots (staging: full disallow + basic auth) · canonical + trailing-slash policy consistent · 404/410 correct · pagination `rel` handled via crawlable links · hreflang matrix auto-generated when locale >1, validated zero-error · CWV budgets per docs/04 §6 (SEO-critical) · OG/Twitter cards per page with 1200×630 branded frame template (E1 task) · RSS for Insights.

## 5. Migration & redirects (launch day)
| From | To | Type |
|---|---|---|
| skaah.com/hospitality | skaahhospitality.com/en | 301 |
| skaah.com/hospitality/* (each legacy URL, crawl at kickoff `[TO CONFIRM: list]`) | closest new page | 301 |
| skaahhospitality.ch/* (if registered) | same path .com | 301, pure redirect only |
| non-www + http | https://www or apex per DNS decision | 301 |
Post-launch: Search Console for both properties, submit sitemap, monitor coverage weekly for 8 weeks.

## 6. Authority baseline (launch fortnight; assumes zero start)
Google Business Profile (Opfikon) complete with photos · Switzerland Tourism meetings/MICE directory listing · Cvent/venue-adjacent directories where free `[TO CONFIRM: chosen list]` · LinkedIn company page aligned · skaah.com group link (footer/summary page) · launch note to existing clients and partners (mail, WhatsApp) · 2 guest/PR placements targeted in India-Switzerland trade media `[TO CONFIRM: targets]`.

## 7. Measurement plan (events; Plausible custom events or GA4)
`enquiry_start` {segment} · `enquiry_step` {segment,step} · `enquiry_submit` {segment, verifiedDomain} · `enquiry_attachment` {count,totalMB} · `whatsapp_click` {page} · `phone_click` · `rfp_band_view` (MICE table) · `hub_timeline_engage` · `case_study_read` (75% scroll) · `article_read` (75%) · `partner_cta_click` · `film_play` / `film_pause`.
Dashboards: weekly pipeline snapshot pairs sheet data with `enquiry_submit` by segment; KPI review per scope §2.

## 8. Editorial calendar (first 6 months; from content file 02.06 list)
M1: publish seeds 1-2 (cornerstone + catering playbook) · M2: articles 3-4 (visas, ZRH VIP arrivals) · M3: 5-6 (one-road, incentive budgets) · M4: 7-8 (rail-first, protocol for hosts) · M5: 9-10 (apartments vs hotels, TEPA corridor) · M6: 11-12 (Geneva vs Zurich, field kitchens) + refresh hub for next WEF season. Each: 1 internal link from a money page, OG frame, share to LinkedIn. Quarterly: keyword re-weighting from Search Console; MICE vs delegation performance reviewed per SoW §11.
