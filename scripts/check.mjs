#!/usr/bin/env node
// Contrôle de cohérence du guide : métadonnées obligatoires, liens entre notions, fraîcheur.
// Lancé par `npm run check` et avant chaque build.
import { loadFiches, loadSituations, loadDocuments, loadOutils, loadParcours, knownNotions, loadAllQuiz, loadLivres } from '../src/lib/fiches.mjs';
import { CHIFFRE_KEYS, DOMAIN_KEYS, LEVEL_KEYS, NATURE_KEYS, SAVOIR_KEYS, SCOPE_KEYS, STATUS_KEYS } from '../src/lib/domains.mjs';

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
  if (d.status && !STATUS_KEYS.includes(d.status)) errors.push(`${w} : statut "${d.status}" inconnu`);
  for (const sc of [].concat(d.scope ?? [])) if (!SCOPE_KEYS.includes(sc)) errors.push(`${w} : scope "${sc}" inconnu (${SCOPE_KEYS.join(', ')})`);
  if (d.tags && !Array.isArray(d.tags)) errors.push(`${w} : tags doit être une liste`);
  if (d.status && d.status !== 'publie') warnings.push(`${w} : statut ${d.status}`);
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
  for (const e of s.data.etapes ?? []) checkRefs(`${w} (étape ${e.titre})`, e.notions);
  if (!(s.data.etapes ?? []).length) warnings.push(`${w} : aucune étape (etapes:) définie`);
  checkRefs(`${w} (corps)`, wikiRefs(s.body));
}
for (const s of loadDocuments()) {
  const w = `documents/${s.slug}`;
  if (s.data.kind !== 'document') errors.push(`${w} : kind doit valoir "document"`);
  checkRefs(w, s.data.notions);
  checkRefs(`${w} (corps)`, wikiRefs(s.body));
  for (const m of s.body.matchAll(/f="([a-z0-9-]+)"/g)) if (!notions.has(m[1])) errors.push(`${w} : notion inconnue "${m[1]}" (attribut f)`);
}
for (const s of loadOutils()) {
  const w = `outils/${s.slug}`;
  if (s.data.kind !== 'outil') errors.push(`${w} : kind doit valoir "outil"`);
  checkRefs(w, s.data.notions);
  checkRefs(`${w} (corps)`, wikiRefs(s.body));
}
// Modèle éditorial : mémo, checklist, quiz, livres (voir CONTENT_MODEL.md).
const allContent = [...fiches.map((x) => ['fiches', x]), ...loadSituations().map((x) => ['situations', x]), ...loadDocuments().map((x) => ['documents', x]), ...loadOutils().map((x) => ['outils', x])];
const strings = (v) => (typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(strings) : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : []);
for (const [sub, c] of allContent) {
  const w = `${sub}/${c.slug}`;
  const { memo, checklist, savoir } = c.data;
  if (savoir && !SAVOIR_KEYS.includes(savoir)) errors.push(`${w} : savoir "${savoir}" inconnu`);
  if (memo) {
    if ((memo.idees ?? []).length > 3) errors.push(`${w} : memo.idees — 3 idées maximum`);
    for (const ch of memo.chiffres ?? []) if (!CHIFFRE_KEYS.includes(ch.nature)) errors.push(`${w} : memo.chiffres "${ch.valeur}" — nature ${CHIFFRE_KEYS.join('/')}`);
    checkRefs(`${w} (memo)`, strings(memo).flatMap(wikiRefs));
  }
  if (checklist) checkRefs(`${w} (checklist)`, strings(checklist).flatMap(wikiRefs));
}
const contentSlugs = new Set(allContent.map(([, c]) => c.slug));
const QTYPES = ['qcm', 'vrai-faux', 'ordre', 'nombre'];
let qCount = 0;
for (const q of loadAllQuiz()) {
  const w = `quiz/${q.slug}`;
  if (!contentSlugs.has(q.slug)) errors.push(`${w} : aucun contenu nommé "${q.slug}"`);
  const ids = new Set();
  for (const x of q.questions ?? []) {
    qCount++;
    const wq = `${w}#${x.id}`;
    if (!x.id || ids.has(x.id)) errors.push(`${wq} : id manquant ou en double`);
    ids.add(x.id);
    if (!QTYPES.includes(x.type)) errors.push(`${wq} : type ${x.type} inconnu (${QTYPES.join(', ')})`);
    if (x.savoir && !SAVOIR_KEYS.includes(x.savoir)) errors.push(`${wq} : savoir "${x.savoir}" inconnu`);
    if (!x.question || !x.explication) errors.push(`${wq} : question et explication obligatoires`);
    if (x.type === 'qcm' && !(Array.isArray(x.choix) && Number.isInteger(x.reponse) && x.reponse >= 0 && x.reponse < x.choix.length)) errors.push(`${wq} : qcm — choix[] et reponse (index) valides requis`);
    if (x.type === 'vrai-faux' && typeof x.reponse !== 'boolean') errors.push(`${wq} : vrai-faux — reponse true/false`);
    if (x.type === 'ordre' && !(Array.isArray(x.ordre) && x.ordre.length >= 3)) errors.push(`${wq} : ordre — au moins 3 éléments dans le bon ordre`);
    if (x.type === 'nombre' && typeof x.reponse !== 'number') errors.push(`${wq} : nombre — reponse numérique`);
    checkRefs(wq, x.notions);
  }
}
const sitSlugs = new Set(loadSituations().map((x) => x.slug));
for (const l of loadLivres()) {
  for (const ch of l.chapitres ?? []) if (!sitSlugs.has(ch)) errors.push(`livres.yaml (${l.id}) : situation "${ch}" inconnue`);
  for (const f of l.fiches ?? []) if (!fiches.some((x) => x.slug === f)) errors.push(`livres.yaml (${l.id}) : fiche "${f}" inconnue`);
}

const docCount = loadDocuments().length, sitCount = loadSituations().length, outilCount = loadOutils().length;

const written = [...seen].filter((s) => fiches.some((f) => f.slug === s)).length;
for (const m of warnings) console.warn(`⚠️  ${m}`);
for (const m of errors) console.error(`❌ ${m}`);
console.log(`\n${fiches.length} fiches · ${sitCount} situations · ${docCount} documents · ${outilCount} outils · ${qCount} questions de quiz · ${loadLivres().length} livre(s) · parcours : ${written}/${seen.size} · ${errors.length} erreur(s), ${warnings.length} avertissement(s)`);
process.exit(errors.length ? 1 : 0);
