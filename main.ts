import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Angle: omniscience vs. timidity — it knows everything, yet double-checks the obvious.
const line =
  "My agent has read the entire internet, twice, and still asks if I'm sure I want to delete the file I just told it to delete.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
