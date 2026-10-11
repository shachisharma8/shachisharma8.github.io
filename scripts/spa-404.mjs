// GitHub Pages serves 404.html for any path it can't find as a file. For a
// single-page app that means deep links / refreshes (e.g. /person/library)
// would 404 — unless 404.html is the app shell itself. Copying index.html to
// 404.html lets the SPA boot and let React Router render the right page.
import { copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const index = resolve(dist, 'index.html');

if (!existsSync(index)) {
  console.error('dist/index.html not found — run the build first.');
  process.exit(1);
}

copyFileSync(index, resolve(dist, '404.html'));
console.log('✓ Created dist/404.html (SPA fallback for GitHub Pages)');
