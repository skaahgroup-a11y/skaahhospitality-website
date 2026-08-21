# 02.07 · Enquiry (`/enquiry`) · Legal pages · Media plan

## A · Contact / Start your enquiry
metaTitle: `Start Your Enquiry | SKAAH Hospitality`
H1: `Tell us about your visit.`
Intro: `Choose the path that fits. Every enquiry receives a first response within 48 hours; Event and MICE RFPs within one business day.`
Side rail: contact block, WhatsApp CTA, `Prefer a call?` line, office note `Opfikon, by Zurich Airport`.

### Wizard step 0: segment picker (cards, order fixed)
`Government delegation` · `Event / MICE RFP` · `Stay request` · `Catering brief` · `Agency partnership` · `General enquiry`

### Field spec per segment (all steps show progress, back is lossless, drafts autosave to localStorage)
Common final step (all segments): name* · organisation* · role · email* · phone/WhatsApp · preferred channel (email/phone/WhatsApp) · consent checkbox* (privacy policy link) · honeypot + time-trap (hidden).

**Delegation** (3 steps):
1. Visit: purpose (WEF week / bilateral or trade mission / other official visit) · destination(s) multi · arrival + departure dates (or `dates not fixed`) · delegation size band (≤10 / 11-30 / 31-60 / 61+) · principals count.
2. Needs: checkboxes: accommodation · transport & convoy · protocol support · visa/immigration liaison · catering incl. own cuisine · media & documentation · bilateral/meeting staging · full programme. Free text `Anything security or protocol we should know` (500 ch).
3. Files: attachments to 100 MB total (pdf, doc/x, xls/x, ppt/x, jpg, png, mp4) + note `Larger files: we will send a secure upload link.`
Payload flags: `verifiedDomain` (gov.in, nic.in, *.gov.*, embassy list), `manualCheck` heuristics (free-mail + delegation-size 61+ + no organisation).

**MICE RFP** (3 steps): event type (meeting/incentive/conference/gala/launch) · guests band · nights · month/date flexibility · destination preference or `advise us` · budget band optional (uses published bands) · production needs checkboxes · attachments as above. Promise line repeated: one business day.

**Stay**: destination · check-in/out · rooms & occupants · standard (5* / 4* superior / serviced apartment / chalet) · length-of-stay note for 28+ nights · special requirements.

**Catering**: date(s) · venue status (booked/not yet) · guests · service style (banquet/stations/working) · cuisine requirements checkboxes (regional Indian, Jain, halal, vegetarian, Swiss/international, other) · dietary/allergen note · kitchen access unknown toggle.

**Agency**: agency name* · markets served · client type mix · first opportunity outline (free text) · volume expectation (one-off / seasonal / ongoing).

**General**: subject + message + optional attachment (25 MB).

### Confirmations
On-screen: `Received. [Segment owner team] replies within [promise]. Reference [SKH-YYYYMMDD-####].`
Email (per segment, EN): mirrors reference, restates promise, lists what to prepare next, one contact signature block. Templates live in CMS.

### Routing & storage (build spec)
Email to per-segment mailbox `[TO CONFIRM]` · JSON payload persisted (schema in docs/05 §7) · webhook appends row to tracking sheet `[TO CONFIRM: Google Sheet ID or CSV-over-mail interim]` · attachments to CH/EU bucket with 30-day signed links.

## B · Legal pages (skeletons; counsel finalises)
**Privacy (`/privacy`)**: controller = SKAAH Hospitality GmbH, Opfikon `[TO CONFIRM: address, register no.]` · data collected via enquiry forms and analytics · purposes · legal bases (FADP + GDPR) · storage location: Switzerland/EU · retention `[TO CONFIRM: months]` · processors list (host, email, analytics; final per stack) · rights + contact `privacy@skaahhospitality.com [TO CONFIRM]`.
**Imprint (`/imprint`)**: company name, seat, register and VAT numbers `[TO CONFIRM]`, managing director(s) `[TO CONFIRM]`, contact.
**Cookies (`/cookies`)**: category table (necessary, analytics), consent state controls, links to banner reopening.

## C · Media plan (photo & film, whole site)
**Sources**: 1) WEF Davos archive 2023-2026 (primary proof; use only frames with manifest rows: filename, event, year, location, consent status, caption). 2) Phase 1 brand shoot (2 days: Zurich/Opfikon operations day, one alpine day) shot list below. 3) Licensed stock strictly as labelled fallback for Tier 2 destination heroes and Experiences until the shoot replaces them.
**Phase 1 shoot list (priority order)**: operations table top-down · kitchen pass and tandoor sequence · fleet detail (no plates) · Opfikon apartment interiors · team briefing (faces consented) · leadership portraits · Zurich Airport exterior dawn · one alpine set (Lucerne lake + summit) covering Home, Services, Experiences gaps.
**Film**: hero master 25 s (edit from archive + shoot) with 3 poster-frame options graded to spec; Davos hub ambient 45-60 s; case-study cuts 30-45 s each as material allows. All silent at autoplay, captions burned where speech appears in optional sound-on versions.
**Specs**: stills delivered 4000 px+ long edge, AVIF/WebP renditions generated at build; film 1080p minimum (4K master), H.265 + poster JPG; every asset carries alt text and credit fields in the CMS.
