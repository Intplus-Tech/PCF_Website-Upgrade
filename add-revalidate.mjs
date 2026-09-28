#!/usr/bin/env node
/**
 * Adds `export const revalidate = 60;` to every page that reads from Sanity,
 * and flips `useCdn` to false in the Sanity client.
 *
 * Safe to run more than once — it skips anything already done, and never
 * overwrites a whole file. Run from the project root:
 *
 *   node add-revalidate.mjs
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";

const REVALIDATE_SECONDS = 60;

// Every page that fetches from Sanity. layout.tsx is included because it
// calls getEvents() for the Plan Your Visit panel.
const PAGES = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/ministries/page.tsx",
  "src/app/ministries/[slug]/page.tsx",
  "src/app/events/page.tsx",
  "src/app/media/page.tsx",
  "src/app/contact/page.tsx",
];

const CLIENT = "src/sanity/client.ts";

let changed = 0;
let skipped = 0;
let missing = 0;

function addRevalidate(path) {
  if (!existsSync(path)) {
    console.log(`  missing   ${path}`);
    missing++;
    return;
  }

  const src = readFileSync(path, "utf8");

  if (/export\s+const\s+revalidate\s*=/.test(src)) {
    console.log(`  already   ${path}`);
    skipped++;
    return;
  }

  const lines = src.split("\n");

  // Insert after the final top-level import statement.
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*import\s/.test(lines[i])) lastImport = i;
  }

  if (lastImport === -1) {
    console.log(`  NO IMPORTS — skipped, add by hand: ${path}`);
    skipped++;
    return;
  }

  lines.splice(
    lastImport + 1,
    0,
    "",
    "// Refetch Sanity content at most once a minute, so published changes",
    "// appear without waiting for a redeploy.",
    `export const revalidate = ${REVALIDATE_SECONDS};`
  );

  writeFileSync(path, lines.join("\n"), "utf8");
  console.log(`  updated   ${path}`);
  changed++;
}

function disableCdn(path) {
  if (!existsSync(path)) {
    console.log(`  missing   ${path}  (set useCdn: false by hand)`);
    missing++;
    return;
  }

  const src = readFileSync(path, "utf8");

  if (/useCdn\s*:\s*false/.test(src)) {
    console.log(`  already   ${path}  (useCdn already false)`);
    skipped++;
    return;
  }

  if (!/useCdn\s*:\s*true/.test(src)) {
    console.log(`  CHECK     ${path}  (no useCdn found — set it to false by hand)`);
    skipped++;
    return;
  }

  writeFileSync(path, src.replace(/useCdn\s*:\s*true/, "useCdn: false"), "utf8");
  console.log(`  updated   ${path}  (useCdn -> false)`);
  changed++;
}

console.log("\nAdding revalidate to Sanity-backed pages:\n");
PAGES.forEach(addRevalidate);

console.log("\nSanity client:\n");
disableCdn(CLIENT);

console.log(
  `\nDone. ${changed} changed, ${skipped} skipped, ${missing} not found.\n`
);
console.log("Next: npm run build   (check it compiles)");
console.log("Then: git add -A && git commit -m 'Revalidate Sanity content' && git push\n");
