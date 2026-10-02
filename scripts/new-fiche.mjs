#!/usr/bin/env node
// Usage : npm run new -- <slug> [domaine]
// Crée src/content/docs/fiches/<slug>.md depuis templates/fiche.md (titre repris de parcours.yaml si présent).
import fs from 'node:fs';
import { knownNotions } from '../src/lib/fiches.mjs';

const [slug, domain = 'TODO'] = process.argv.slice(2);
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage : npm run new -- <slug-en-kebab-case> [domaine]');
  process.exit(1);
}
const dest = `src/content/docs/fiches/${slug}.md`;
if (fs.existsSync(dest)) { console.error(`${dest} existe déjà`); process.exit(1); }
const title = knownNotions().get(slug)?.title ?? slug;
const today = new Date().toISOString().slice(0, 10);
const tpl = fs.readFileSync('templates/fiche.md', 'utf8')
  .replace('__TITLE__', title).replace('__DOMAIN__', domain).replace('__DATE__', today);
fs.writeFileSync(dest, tpl);
console.log(`✅ ${dest} créé`);
