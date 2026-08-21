Sheet 9 (CMS and editorial independence), CE-01 to CE-10
Status: Blocked, pre-CMS.

Reason: Payload CMS 3 is not yet embedded in the application. The CMS is
epic E2 of docs/07-implementation-plan.md (tasks T0.3, T2.1 to T2.5) and
remains open; content currently lives in the typed content layer under
content/ (mirroring the planned CMS collections per docs/05 section 4)
so that the seed import into Payload is lossless when E2 lands.

Consequences for this sheet:
- CE-01 to CE-09: no admin surface exists for an editor to exercise, and
  role boundaries (CE-09) and validation (CE-03) are Payload features
  that do not exist yet. All Blocked.
- CE-10 (run the export): the export procedure itself exists and works
  today (pnpm export:content, proven under CA-12); what is blocked is
  the editorial-independence condition, Ms. Revathi running it unaided
  after training. Cross-reference: QA-Evidence/CA-12/.

Retest trigger: completion of epic E2 plus the editor training session
(docs/01 section 4.9).
