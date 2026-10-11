// Downloads sample stock photos (Unsplash) into public/images/ so the site ships
// real local image files — no hotlinking. Re-run any time with: npm run fetch:images
//
// All images are from Unsplash (https://unsplash.com/license — free to use).
// Attribution for each photo lives in src/data/assets.ts. These are SAMPLE images
// used as illustrative placeholders, not personal photographs.

import { mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'public/images');

const U = (id, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/** path (under public/images) -> unsplash photo id */
const MANIFEST = {
  // Hero collage
  'hero/alps.jpg': '1506905925346-21bda4d32df4',
  'hero/books.jpg': '1512820790803-83ca734da794',
  'hero/coffee.jpg': '1495474472287-4d71bcdd2085',
  'hero/street.jpg': '1467269204594-9661b134dd2b',

  // Travel · Switzerland
  'travel/switzerland/cover.jpg': '1530122037265-a5f1f91d3b99',
  'travel/switzerland/ridge.jpg': '1491555103944-7c647fd857e6',
  'travel/switzerland/snow.jpg': '1464822759023-fed622ff2c3b',
  'travel/switzerland/valley.jpg': '1527668752968-14dc70a27c95',
  'travel/switzerland/train.jpg': '1474487548417-781cb71495f3',
  'travel/switzerland/cafe.jpg': '1498579150354-977475b7ea0b',

  // Travel · Germany
  'travel/germany/cover.jpg': '1467269204594-9661b134dd2b',
  'travel/germany/timber.jpg': '1599946347371-68eb71b16afc',
  'travel/germany/town.jpg': '1528728329032-2972f65dfb3f',
  'travel/germany/forest.jpg': '1513836279014-a89f7a76ae86',
  'travel/germany/cake.jpg': '1559925393-8be0ec4767c8',
  'travel/germany/flowers.jpg': '1444723121867-7a241cacace9',

  // Travel · Austria
  'travel/austria/cover.jpg': '1516550893923-42d28e5677af',
  'travel/austria/village.jpg': '1605540436563-5bca919ae766',
  'travel/austria/lavender.jpg': '1476900543704-4312b78632f8',
  'travel/austria/cafe.jpg': '1521017432531-fbd92d768814',

  // Travel · Prague
  'travel/prague/cover.jpg': '1541849546-216549ae216d',
  'travel/prague/rooftops.jpg': '1519677100203-a0e668c92439',
  'travel/prague/street.jpg': '1458150945447-7fb764c11a92',
  'travel/prague/bookshop.jpg': '1526243741027-444d633d7365',
  'travel/prague/food.jpg': '1414235077428-338989a2e8c0',

  // Travel · India
  'travel/india/cover.jpg': '1526772662000-3f88f10405ff',
  'travel/india/hills.jpg': '1597074866923-dc0589150358',
  'travel/india/arch.jpg': '1524492412937-b28074a5d7da',
  'travel/india/food.jpg': '1596040033229-a9821ebd058d',
  'travel/india/market.jpg': '1532375810709-75b1da00537c',

  // Library
  'books/library.jpg': '1507842217343-583bb7270b66',
  'books/stack.jpg': '1512820790803-83ca734da794',
  'books/reading.jpg': '1524995997946-a1c2e315a42f',

  // Food
  'food/bowl.jpg': '1476224203421-9ac39bcb3327',
  'food/cooking.jpg': '1504674900247-0877df9cc836',
  'food/table.jpg': '1509042239860-f550ce710b93',

  // Everyday
  'everyday/coffee.jpg': '1495474472287-4d71bcdd2085',
  'everyday/plant.jpg': '1485955900006-10f4d324d411',
  'everyday/window.jpg': '1416339306562-f3d12fefd36f',
  'everyday/forest.jpg': '1470071459604-3b5ec3a7fe05',

  // Profession
  'profession/code.jpg': '1498050108023-c5249f4df085',
  'profession/screen.jpg': '1555066931-4365d14bab8c',
  'profession/night.jpg': '1519681393784-d120267933ba',
};

async function download(path, id) {
  const dest = resolve(OUT, path);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(U(id));
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength < 3000) throw new Error(`Suspiciously small file for ${path}`);
  await writeFile(dest, buf);
  return buf.byteLength;
}

async function main() {
  const entries = Object.entries(MANIFEST);
  let ok = 0;
  let bytes = 0;
  const failures = [];
  await Promise.all(
    entries.map(async ([path, id]) => {
      try {
        // Skip if already present (keeps re-runs fast). Delete to re-fetch.
        const dest = resolve(OUT, path);
        try {
          const s = await stat(dest);
          if (s.size > 3000) {
            ok++;
            bytes += s.size;
            return;
          }
        } catch {
          /* not present — download */
        }
        const size = await download(path, id);
        ok++;
        bytes += size;
        console.log(`  ✓ ${path} (${(size / 1024).toFixed(0)} KB)`);
      } catch (err) {
        failures.push(`${path}: ${err.message}`);
        console.error(`  ✗ ${path} — ${err.message}`);
      }
    }),
  );
  console.log(`\n${ok}/${entries.length} images ready · ${(bytes / 1024 / 1024).toFixed(1)} MB total`);
  if (failures.length) {
    console.error(`\n${failures.length} failed:`);
    failures.forEach((f) => console.error('  - ' + f));
    process.exit(1);
  }
}

main();
