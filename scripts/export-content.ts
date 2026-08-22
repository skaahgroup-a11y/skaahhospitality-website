// Portability export (CLAUDE.md guardrails, docs/07 T0.6): dumps the content
// layer to JSON plus a media-brief manifest under exports/. When Payload CMS
// lands (epic E2), this script reads from the CMS API instead; the output
// shape stays the same so the handover test does not change.
import { mkdirSync, writeFileSync, cpSync, existsSync } from "fs";
import { join } from "path";

async function main() {
  const root = process.cwd();
  const outDir = join(root, "exports", new Date().toISOString().slice(0, 10));
  mkdirSync(outDir, { recursive: true });

  // Every content module is imported without a fallback: a missing module
  // must fail the export loudly, never silently thin the archive (QA CA-12).
  const { services } = await import("../content/services/index");
  const { destinations } = await import("../content/destinations/index");
  const { caseStudies } = await import("../content/work/index");
  const { articles } = await import("../content/articles/index");
  const { experiences } = await import("../content/experiences");
  const home = await import("../content/home");
  const davosWeek = await import("../content/davos-week");
  const globals = await import("../content/global");
  const disclaimer = await import("../content/disclaimer");

  const write = (name: string, data: unknown) =>
    writeFileSync(join(outDir, name), JSON.stringify(data, null, 2), "utf8");

  write("services.json", services);
  write("destinations.json", destinations);
  write("case-studies.json", caseStudies);
  write("articles.json", articles);
  write("experiences.json", experiences);
  write("home.json", home);
  write("davos-week.json", davosWeek);
  write("globals.json", globals);
  write("disclaimer.json", disclaimer);

  // Media: brand assets ship with the export; content photography follows
  // the CMS media collection in epic E2.
  const brandDir = join(root, "public", "brand");
  if (existsSync(brandDir)) {
    cpSync(brandDir, join(outDir, "media", "brand"), { recursive: true });
  }

  console.log(`export:content written to ${outDir}`);
}

main().catch((error) => {
  console.error("export:content failed:", error);
  process.exit(1);
});
