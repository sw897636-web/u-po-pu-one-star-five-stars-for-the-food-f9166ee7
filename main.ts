// One Star, Five Stars for the Food — entry program (v2 final).
// Writes one original one-sentence alien tourist review of Earth
// (1-200 chars, no trailing newline) to entry.txt, deterministically,
// using only the Node standard library.
//
// v2: gravity sprained 3 of the reviewer's 7 ankles and Gary at Denny's
// #4417 screamed for 40 minutes — but the Moons Over My Hammy earned five
// stars, so we're taking the moon to go.
// Revised from v1 (beef noodles / dog waste) for a stronger alien voice and
// a harder twist in the last clause.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star: gravity sprained 3 of my 7 ankles and Gary at Denny's #4417 screamed for 40 minutes, but five stars for the Moons Over My Hammy, so we're taking your moon to go.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
