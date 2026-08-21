# 04 · UI/UX Design & Frontend Development

Design intent: quiet luxury with an operations backbone. Reference bar: match the clarity of Bucher Events, planitswiss and Kuoni Tumlare; exceed them with art direction closer to MySwitzerland, Black Tomato and Aman. Nothing decorative that slows the page.

## 1. Design tokens (Tailwind v4 `@theme`)
```css
--color-navy-950:#0E2C4A; --color-navy-900:#164069; /* brand blue ink (never black) */
--color-navy-800:#1E4F80; --color-navy-700:#2A6094;
--color-ice-50:#F8FAFB;  --color-ice-100:#F4F6F8;  /* backgrounds */
--color-ice-200:#E7ECF0; --color-ice-300:#D9E0E7;
--color-gold-500:#BFA05A; /* bright, lines & accents on navy */
--color-gold-600:#9A7B2D; /* deep, text-capable on ice (AA large) */
--color-green-700:#175A43; --color-green-600:#1E6E52; /* alpine green: success, ESG accents, landscape motif */
--color-stone-500:#5C6670; --color-stone-400:#8A939C; /* secondary text */
--color-white:#FFFFFF; --color-error:#B4232A; --color-success:#1E6E52;
--font-display:"Cormorant Garamond",Georgia,serif;
--font-sans:"Inter",system-ui,sans-serif;
--radius-sm:2px; --radius-md:4px; /* sharp, architectural */
--shadow-card:0 1px 2px rgb(15 23 32/.06),0 8px 24px rgb(15 23 32/.08);
--container-max:1200px; --container-wide:1440px; --gutter:24px;
```
Type scale (rem, desktop / mobile): display-1 4.5/2.75 (Cormorant 500, lh 1.05, tracking -0.01em) · display-2 3/2.25 · h2 2.25/1.75 · h3 1.5/1.25 · h4 1.125 · body-lg 1.125 (Inter 400, lh 1.65) · body 1 · small .875 · eyebrow .8125 caps, tracking .14em, gold-600.
Spacing: 4 px base; section paddings 96-128 px desktop, 56-72 px mobile. Grid: 12 columns, 24 px gutters.
Contrast rules: body text navy-900 on ice or white; on navy use ice-100 text; gold never for body text; green only for success states, ESG accents and the landscape motif, never large panels; gold-600 permitted for eyebrows/large text on light (AA large), gold-500 on navy for lines, icons, numerals ≥24 px.

## 2. Art direction
- Photography full-bleed or in 3:2 / 4:5 cards; navy multiply scrim (0-45%) for text legibility; no rounded hero corners.
- Gold appears as hairlines (1 px rules), numerals, icon strokes and the compass motif; never as filled panels.
- Iconography: 1.5 px stroke line icons, custom set for the 7 services + trust row (draw in E1; Lucide as interim).
- Motion: fade+8 px rise on scroll-in (240 ms, ease-out, stagger 60 ms); hero film cross-fades from poster; underline draw on link hover; all disabled under `prefers-reduced-motion`.

## 3. Component inventory (build IDs → docs/07 tasks)
`C01 Header`: transparent over hero → solid navy-900 with hairline after 24 px scroll; left logo (horizontal lockup, mono-white), centre nav (Services ▾, Davos & WEF, Destinations ▾, Work, Experiences, Insights, About), right `Start an enquiry` gold-outline button + WhatsApp icon. Mobile: full-screen navy sheet, large serif links, contact block at foot.
`C02 Footer`: navy-950; 4 columns (Services, Destinations, Company, Contact block) + descriptor line, group line, legal row, LinkedIn.
`C03 HeroFilm`: poster `<img>` as LCP, `<video>` injected post-LCP (muted, loop, playsInline, preload=none), pause/play control bottom-right, scrim, eyebrow/H1/sub/CTAs/trust row slots. Save-Data & reduced-motion → poster only.
`C04 ProofStrip`: 3-4 stat cards, gold numerals (Cormorant), labels stone; optional background image with 70% navy scrim.
`C05 ServiceCard`: image top (3:2), title serif, one-liner, arrow-underline hover.
`C06 SegmentRouter`: 4 tiles, icon + label + line, deep links with `?segment=` param.
`C07 StepRow`: numbered 3-step how-we-work.
`C08 CapabilityGrid`: 2×4 (service pages), icon + title + 1-2 lines.
`C09 BudgetBandTable`: MICE bands, CMS-editable, footnote slot.
`C10 CaseStudyCard` + `C11 CaseStudyMetaRow` + `C12 StatCards` (outcome).
`C13 DestinationCard` (badge slot for `WEF Week hub`).
`C14 Timeline` (Davos 180-day countdown; horizontal desktop, vertical mobile).
`C15 FAQAccordion` (single-open, chevron rotate, schema-linked).
`C16 CTABand`: navy, serif headline, gold button + WhatsApp secondary.
`C17 EnquiryWizard`: segment picker → per-segment steps (spec 02.07); progress bar, lossless back, localStorage draft, direct-to-storage uploader with per-file progress and 100 MB meter, success screen with reference code.
`C18 WhatsAppFAB`: bottom-right, appears after 600 px scroll, hidden on `/enquiry`.
`C19 InsightCard`, `C20 ArticleTOC`, `C21 PullQuote`, `C22 GalleryScroller` (snap, captions), `C23 FilmBlock` (click-to-play, poster), `C24 ConsentBanner` (blocking, two-choice + preferences), `C25 Breadcrumbs` (schema), `C26 LangSwitcher` (built, hidden until locale >1), `C27 TrustRow`, `C28 PartnerValueGrid`, `C29 NoticeBar` (optional seasonal, CMS-toggled).

## 4. Template layouts (wireframe order)
`home`: C03 → C04 → services grid (C05×7) → flagship band (navy, C12 inline) → destinations teaser (C13×4+tile) → C06 → C07 → insights teaser (C19×3) → C16.
`service`: hero (image, H1, sub, CTA) → who-this-serves (prose 60ch) → C08 → process (C07 variant 5-step) → proof band → C15 → related (C05×2 + hub link) → C16.
`hub (davos-wef)`: hero → sticky in-page nav (8 anchors) → sections with C14 at §2, gallery C22, proof rail → C15 → C16.
`destination-full`: hero → why-groups (prose) → venue snapshot table → stays snapshot → getting-around (map optional Phase 2, static image Phase 1) → what-we-run chips → sample-day C14 vertical → C15 → C16.
`destination-overview`: hero → 3 fact cards → what-we-run chips → C16 (`Full guide coming` variant).
`work-listing`: intro → filter bar (segment/destination/year/size) → C10 grid → C16.
`case-study`: hero + C11 → brief → hard (3 bullets) → did (bullets) → outcome C12 → C22 → C23 optional → services chips → C16.
`experiences`: intro → 8 editorial rows alternating image left/right → C16.
`insights-listing`: featured (latest cornerstone) → grid C19 → pagination.
`article`: title block → C20 (≥1200 words) → prose (max 68ch) → inline C16 mini → related.
`about`: hero (portrait-free) → who-we-are → pillars (5 cards) → leadership cards → group band (quiet) → ESG → careers line.
`partner`: hero → C28 → 3-step → who-we-work-with logos/text → C16 (agency variant).
`enquiry`: two-column: C17 left, side rail right (contact block, promise, office note); mobile stacks rail below.

## 5. Accessibility (WCAG 2.2 AA, acceptance-tested)
Semantic landmarks and one `h1` per page · full keyboard paths incl. wizard and accordions · visible 2 px gold focus ring on navy, navy ring on light · form fields with programmatic labels, error text + `aria-describedby`, no colour-only errors · accordion/menu ARIA patterns per APG · alt text from CMS mandatory (empty alt only for pure decoration) · target size ≥24 px · film has pause control and never conveys sole meaning · language attribute `en` · skip-to-content link.

## 6. Frontend standards
- Next.js App Router, TypeScript strict, React Server Components default; client components only for C03 video swap, C15, C17, C18, C22, C24, menus.
- Styling: Tailwind v4 with the tokens above; no inline hex; class order via prettier-plugin-tailwindcss.
- Images: `next/image`, AVIF/WebP, `sizes` mandatory, blur placeholders from CMS; hero poster `priority` and preloaded.
- Film: poster is the LCP element; video injected after `requestIdleCallback` post-LCP; `connection.saveData` and reduced-motion gate; HLS via provider (docs/05 §5) with MP4 fallback.
- Performance budgets (CI-enforced, Lighthouse CI mobile): LCP <2.0 s, CLS <0.1, INP <200 ms, JS ≤170 KB gz on content routes, ≤240 KB on `/enquiry`; fonts: 2 families × ≤3 weights, `font-display: swap`, self-hosted, preloaded WOFF2.
- Folder structure: `app/(site)/[routes]`, `components/{layout,blocks,forms,ui}`, `lib/{cms,seo,analytics,upload}`, `content-schemas/`, `messages/en.json`, `e2e/`.
- Testing: unit (Vitest) for lib + form logic; Playwright e2e per docs/07 §6; axe-core pass in CI; visual snapshots for C01-C16 states.
- Errors/empty states designed: 404 (compass motif, links to Services/Davos/Enquiry), 500, form failure (retains data, offers WhatsApp/email fallback), upload failure per file.
