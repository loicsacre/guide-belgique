#!/usr/bin/env node
// Contrôle de cohérence du guide : métadonnées obligatoires, liens entre notions, fraîcheur.
// Lancé par `npm run check` et avant chaque build.
import { loadFiches, loadSituations, loadParcours, knownNotions } from '../src/lib/fiches.mjs';
import { DOMAIN_KEYS, LEVEL_KEYS, NATURE_KEYS } from '../src/lib/domains.mjs';

const errors = [];
const warnings = [];
const notions = knownNotions();
const fiches = loadFiches();
const MAX_AGE_DAYS = { 'regle-datee': 365, mixte: 365, stable: 3 * 365 };

const seen = new Set();
for (const b of loadParcours().blocs)
  for (const n of b.notions) {
    if (seen.has(n.slug)) errors.push(`parcours.yaml : slug en double "${n.slug}"`);
    seen.add(n.slug);
  }

const checkRefs = (where, list = []) => {
  for (const s of list) if (!notions.has(s)) errors.push(`${where} : notion inconnue "${s}"`);
};
const wikiRefs = (body) => [...body.matchAll(/\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1]);

for (const f of fiches) {
  const d = f.data;
  const w = `fiches/${f.slug}`;
  if (d.kind !== 'fiche') errors.push(`${w} : kind doit valoir "fiche"`);
  for (const k of ['title', 'short', 'domain', 'level', 'nature', 'last_verified'])
    if (!d[k]) errors.push(`${w} : champ "${k}" manquant`);
  if (d.domain && !DOMAIN_KEYS.includes(d.domain)) errors.push(`${w} : domaine "${d.domain}" inconnu`);
  if (d.level && !LEVEL_KEYS.includes(d.level)) errors.push(`${w} : niveau "${d.level}" inconnu`);
  if (d.nature && !NATURE_KEYS.includes(d.nature)) errors.push(`${w} : nature "${d.nature}" inconnue`);
  if (!d.sources?.length) errors.push(`${w} : au moins une source officielle est requise`);
  if (d.nature !== 'stable' && !d.valid_for) warnings.push(`${w} : "valid_for" conseillé pour une règle datée`);
  if (!seen.has(f.slug)) warnings.push(`${w} : absente de parcours.yaml (normal hors niveau 1)`);
  checkRefs(w, d.prerequisites);
  checkRefs(w, d.related);
  checkRefs(`${w} (corps)`, wikiRefs(f.body));
  if (d.last_verified) {
    const age = (Date.now() - new Date(d.last_verified).getTime()) / 86400000;
    if (age > (MAX_AGE_DAYS[d.nature] ?? 365)) warnings.push(`${w} : vérifiée il y a ${Math.round(age)} jours — à revérifier`);
  }
}

for (const s of loadSituations()) {
  const w = `situations/${s.slug}`;
  if (s.data.kind !== 'situation') errors.push(`${w} : kind doit valoir "situation"`);
  checkRefs(w, s.data.notions);
  checkRefs(`${w} (corps)`, wikiRefs(s.body));
}

const written = [...seen].filter((s) => fiches.some((f) => f.slug === s)).length;
for (const m of warnings) console.warn(`⚠️  ${m}`);
for (const m of errors) console.error(`❌ ${m}`);
console.log(`\n${fiches.length} fiches · niveau 1 : ${written}/${seen.size} · ${errors.length} erreur(s), ${warnings.length} avertissement(s)`);
process.exit(errors.length ? 1 : 0);
