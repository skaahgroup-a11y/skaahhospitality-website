#!/usr/bin/env node
// Claims gate (CLAUDE.md, docs/07 T0.4 and T6.7). Scans site source for:
//  1. em dashes and en dashes (forbidden in copy, UI strings, metadata,
//     code comments),
//  2. forbidden claims (references to international organisations or
//     UN-type bodies; named Indian states outside consent gating),
//  3. unresolved [TO CONFIRM markers.
// Dash and claim findings always fail. [TO CONFIRM markers fail only with
// --production (wired into pnpm build:production): staging renders them
// visibly, production must not ship them.

import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const root = process.cwd();
const productionGate = process.argv.includes("--production");

const SCAN_DIRS = ["app", "components", "content", "content-schemas", "lib", "messages", "i18n"];
const EXTENSIONS = new Set([".ts", ".tsx", ".json", ".css", ".mjs"]);

const NAMED_STATES = [
  "Maharashtra",
  "Uttar Pradesh",
  "Telangana",
  "Karnataka",
  "Assam",
  "Kerala",
];

const failures = [];

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      files.push(...walk(full));
    } else if (EXTENSIONS.has(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

// [TO CONFIRM markers live in copy, so the production gate scans the content
// layer and shared copy constants; component machinery that renders the
// markers (for example the Copy component's pattern) is exempt.
function markerGateApplies(relative) {
  return (
    relative.startsWith("content/") ||
    relative.startsWith("messages/") ||
    relative === "lib/site.ts"
  );
}

function scanFile(file) {
  const text = readFileSync(file, "utf8");
  const relative = file.slice(root.length + 1);
  const lines = text.split("\n");

  lines.forEach((line, index) => {
    const where = `${relative}:${index + 1}`;

    if (/[–—]/.test(line)) {
      failures.push(`${where}: long dash found (em or en dash)`);
    }
    if (/international organisation|international organization/i.test(line)) {
      failures.push(`${where}: forbidden claim (international organisations)`);
    }
    if (/United Nations|\bUN-type\b|\bUN agency\b/.test(line)) {
      failures.push(`${where}: forbidden claim (UN-type reference)`);
    }
    // Restricted trademark wordings: the event organiser's marks appear only
    // inside the independence disclaimer (content/disclaimer.ts), which
    // exists to state that no affiliation exists.
    if (
      relative !== "content/disclaimer.ts" &&
      /\bWEF\b|world economic forum/i.test(line)
    ) {
      failures.push(`${where}: restricted trademark wording (WEF marks)`);
    }
    for (const state of NAMED_STATES) {
      if (line.includes(state)) {
        failures.push(
          `${where}: named state "${state}" outside consent gating`,
        );
      }
    }
    if (
      productionGate &&
      markerGateApplies(relative) &&
      line.includes("[TO CONFIRM")
    ) {
      failures.push(`${where}: unresolved [TO CONFIRM marker`);
    }
  });
}

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(root, dir))) {
    scanFile(file);
  }
}

if (failures.length > 0) {
  console.error(`check:claims failed with ${failures.length} finding(s):\n`);
  for (const failure of failures) console.error(`  ${failure}`);
  console.error(
    productionGate
      ? "\nProduction builds are blocked until every finding is resolved (SoW gate G5)."
      : "\nFix dash and claim findings now; [TO CONFIRM markers are allowed on staging.",
  );
  process.exit(1);
}

console.log(
  productionGate
    ? "check:claims passed: no long dashes, forbidden claims or [TO CONFIRM markers."
    : "check:claims passed: no long dashes or forbidden claims ([TO CONFIRM markers permitted on staging).",
);
