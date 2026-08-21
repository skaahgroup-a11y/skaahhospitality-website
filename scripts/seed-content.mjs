#!/usr/bin/env node
// Seed importer skeleton (docs/07 T0.6, fleshed out in T2.3). Once Payload
// CMS is embedded (epic E2), this parses /docs/02-content and the content/
// modules into CMS entries. Until then the typed content layer under
// content/ is the seed itself and the site reads it directly.
console.log(
  "seed:content: Payload CMS is not yet embedded (epic E2). The typed content layer under content/ currently serves as the seed; run pnpm export:content for the portability export.",
);
