#!/usr/bin/env node
// Vérifie que les URLs des sources répondent encore (les sites officiels se réorganisent souvent).
// Usage : npm run check:links
import { loadFiches } from '../src/lib/fiches.mjs';

const urls = new Map();
for (const f of loadFiches())
  for (const s of f.data.sources ?? []) urls.set(s.url, [...(urls.get(s.url) ?? []), f.slug]);

const probe = async (url) => {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (r.ok || method === 'GET') return r.status;
    } catch (e) {
      if (method === 'GET') return e.name === 'TimeoutError' ? 'timeout' : e.message;
    }
  }
};

let broken = 0;
await Promise.all(
  [...urls].map(async ([url, slugs]) => {
    const status = await probe(url);
    const ok = typeof status === 'number' && status < 400;
    if (!ok) broken++;
    console.log(`${ok ? '✅' : '❌'} ${status}  ${url}  (${slugs.join(', ')})`);
  }),
);
console.log(`\n${urls.size} URL(s), ${broken} en échec`);
process.exit(broken ? 1 : 0);
