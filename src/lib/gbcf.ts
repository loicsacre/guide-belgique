// Guide Belgique Content Format — helpers de rendu partagés par le web, les pages d'impression et les livres.
// Une source (frontmatter + Markdown + src/data/*.yaml) → plusieurs lectures. Voir CONTENT_MODEL.md.
import { getIndex, slugOf, type Entry } from './notions';
import { loadLivres, loadQuiz } from './fiches.mjs';

export const SITE_URL = 'https://loicsacre.github.io/guide-belgique';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Texte court du modèle → HTML : [[slug]], [[slug|libellé]], **gras**. */
export async function inlineRenderer() {
  const { fiches, titleOf } = await getIndex();
  const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (text = '') =>
    esc(text)
      .replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, slug, label) => {
        const t = label ?? titleOf(slug);
        return fiches.has(slug) ? `<a href="${BASE}/fiches/${slug}/">${t}</a>` : `<em class="notion-todo">${t}</em>`;
      })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** Retire la syntaxe du modèle (pour un texte brut : titres, attributs). */
export const plain = (text = '') => text.replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([a-z0-9-]+)\]\]/g, '$1').replace(/\*\*/g, '');

export type Question = {
  id: string;
  type: 'qcm' | 'vrai-faux' | 'ordre' | 'nombre';
  savoir?: string;
  question: string;
  choix?: string[];
  ordre?: string[];
  reponse?: number | boolean;
  unite?: string;
  tolerance?: number;
  explication: string;
  notions?: string[];
};
export type Quiz = { slug: string; titre?: string; questions: Question[] };

export const getQuiz = (slug: string) => loadQuiz(slug) as Quiz | null;

/** Réponse attendue, en texte, pour les versions papier. */
export function answerText(q: Question) {
  if (q.type === 'qcm') return `${String.fromCharCode(65 + (q.reponse as number))}. ${q.choix![q.reponse as number]}`;
  if (q.type === 'vrai-faux') return q.reponse ? 'Vrai' : 'Faux';
  if (q.type === 'nombre') return `${(q.reponse as number).toLocaleString('fr-BE')}${q.unite ? ` ${q.unite}` : ''}`;
  return q.ordre!.map((x, i) => `${i + 1}. ${x}`).join(' → ');
}

/** Mélange déterministe (même ordre au build et à l'impression). */
export function shuffled<T>(list: T[], seed: string): T[] {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const a = list.map((v, i) => ({ v, k: ((h ^ (i * 2654435761)) >>> 0) % 997 }));
  const out = a.sort((x, y) => x.k - y.k).map((x) => x.v);
  // jamais déjà dans le bon ordre
  return out.every((v, i) => v === list[i]) ? [...out.slice(1), out[0]] : out;
}

export type Livre = { id: string; titre: string; sous_titre?: string; couleur?: string; chapitres: string[]; fiches?: string[] };
export const getLivres = () => loadLivres() as Livre[];

/** Un livre résolu : ses chapitres (situations) et les fiches mobilisées, dans l'ordre du parcours. */
export async function resolveLivre(livre: Livre) {
  const { situations, fiches, parcours, notionsOf } = await getIndex();
  const chapitres = livre.chapitres.map((s) => situations.find((e) => slugOf(e) === s)!).filter(Boolean);
  const wanted = new Set<string>([...(livre.fiches ?? []), ...chapitres.flatMap((c) => [...notionsOf(c), ...wikiSlugs(c)])]);
  const order = parcours.blocs.flatMap((b) => b.notions.map((n) => n.slug));
  const rank = (s: string) => (order.indexOf(s) + 1 || 9999);
  const annexes = [...wanted].filter((s) => fiches.has(s)).sort((a, b) => rank(a) - rank(b)).map((s) => fiches.get(s)!);
  return { chapitres, annexes };
}

const wikiSlugs = (e: Entry) => [...(e.body ?? '').matchAll(/\[\[([a-z0-9-]+)/g)].map((m) => m[1]);

/** Les contenus qui ont une fiche pratique (une checklist ou un mémo). */
export async function practicalEntries() {
  const { all } = await getIndex();
  return all
    .filter((e) => e.data.memo || e.data.checklist?.length)
    .sort((a, b) => (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999));
}

/** Fichiers produits par `npm run export` (dist/telechargements/). */
export const downloads = {
  memo: (slug: string) => `telechargements/memo-${slug}.pdf`,
  fiche: (slug: string) => `telechargements/fiche-${slug}.pdf`,
  livrePdf: (id: string) => `telechargements/livre-${id}-a5.pdf`,
  livreEpub: (id: string) => `telechargements/livre-${id}.epub`,
  fiches: 'telechargements/fiches-pratiques-a4.pdf',
};
