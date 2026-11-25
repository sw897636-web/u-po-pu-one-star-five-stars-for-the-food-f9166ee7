// One Star, Five Stars for the Food — entry program (v2 final).
// Writes one original one-sentence alien tourist review of Earth
// (1-200 chars, no trailing newline) to entry.txt, deterministically,
// using only the Node standard library.
//
// v2: the reviewer crash-landed here — the gravity drags its third leg, the
// nights never truly darken — but the midnight bowl of ramen was worth it.
// Revised from v1 (beef noodles / dog waste) for a stronger alien voice and
// a harder twist in the last clause.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star: this planet's gravity drags my third leg, its nights never truly darken, but the midnight bowl of ramen — broth, egg, spring onion — was worth the crash-landing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
