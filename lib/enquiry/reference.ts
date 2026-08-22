import { promises as fs } from "fs";
import path from "path";
import { dataDir } from "./store";

// Reference format SKH-YYYYMMDD-#### (docs/02-content/07 confirmations).
export function formatReference(date: Date, sequence: number): string {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  return `SKH-${yyyy}${mm}${dd}-${String(sequence).padStart(4, "0")}`;
}

interface CounterFile {
  date: string;
  sequence: number;
}

// File-backed daily counter. Single Node process on the Flex server (docs/08),
// so a simple read-modify-write is sufficient for Phase 1.
export async function nextReference(now = new Date()): Promise<string> {
  const dir = dataDir();
  await fs.mkdir(dir, { recursive: true });
  const counterPath = path.join(dir, "reference-counter.json");
  const today = now.toISOString().slice(0, 10);

  let counter: CounterFile = { date: today, sequence: 0 };
  try {
    const raw = await fs.readFile(counterPath, "utf8");
    const parsed = JSON.parse(raw) as CounterFile;
    if (parsed.date === today) counter = parsed;
  } catch {
    // First enquiry of the day (or first ever): start at zero.
  }

  counter.sequence += 1;
  await fs.writeFile(counterPath, JSON.stringify(counter), "utf8");
  return formatReference(now, counter.sequence);
}
