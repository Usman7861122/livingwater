// Writes dist/sitemap.xml with https://livingwaterclinic.com URLs (skips redirects and the 404 page).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = 'https://livingwaterclinic.com';
const dist = new URL('../dist', import.meta.url).pathname;
const urls = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (name !== 'index.html') continue;
    if (readFileSync(p, 'utf8').includes('http-equiv="refresh"')) continue; // redirect page
    const rel = '/' + relative(dist, dir).split('\\').join('/');
    urls.push(SITE + (rel === '/' ? '/' : rel + '/'));
  }
})(dist);
urls.sort();
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
