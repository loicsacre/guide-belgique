// Lecture "brute" des fiches (hors Astro) : utilisée par astro.config (sidebar, wiki-links),
// par les pages (parcours) et par scripts/check.mjs. Source unique de vérité = les fichiers.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { DOMAINS } from './domains.mjs';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'src/content/docs');

function readDir(sub) {
  const dir = path.join(DOCS, sub);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith('_'))
    .map((f) => {
      const file = path.join(dir, f);
      const raw = fs.readFileSync(file, 'utf8');
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const data = (m && yaml.load(m[1])) || {};
      const slug = f.replace(/\.mdx?$/, '');
      return { slug, id: `${sub}/${slug}`, file, data, body: m ? raw.slice(m[0].length) : raw };
    });
}

export const loadFiches = () => readDir('fiches');
export const loadSituations = () => readDir('situations');

export function loadParcours() {
  return yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/parcours.yaml'), 'utf8'));
}

/** Toutes les notions connues : fiches rédigées + notions planifiées dans le parcours. */
export function knownNotions() {
  const map = new Map();
  for (const bloc of loadParcours().blocs)
    for (const n of bloc.notions) map.set(n.slug, { slug: n.slug, title: n.title, written: false });
  for (const f of loadFiches()) map.set(f.slug, { slug: f.slug, title: f.data.title, written: !f.data.draft });
  return map;
}

const byOrder = (a, b) =>
  (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999) ||
  String(a.data.title).localeCompare(String(b.data.title), 'fr');

/** Sidebar générée depuis le frontmatter : un groupe par domaine qui contient au moins une fiche. */
export function buildSidebar() {
  const fiches = loadFiches().filter((f) => !f.data.draft);
  const groups = DOMAINS.map((d) => ({
    label: `${d.emoji} ${d.label}`,
    items: fiches.filter((f) => f.data.domain === d.key).sort(byOrder).map((f) => ({ slug: f.id })),
  })).filter((g) => g.items.length);

  const situations = loadSituations().sort(byOrder).map((s) => ({ slug: s.id }));

  return [
    {
      label: 'Commencer',
      items: [
        { label: 'Accueil', link: '/' },
        { label: 'Parcours', link: '/parcours/' },
        { label: 'Glossaire', link: '/glossaire/' },
      ],
    },
    ...(situations.length ? [{ label: '🧭 Situations de vie', items: situations }] : []),
    ...groups,
  ];
}
