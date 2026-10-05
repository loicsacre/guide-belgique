// Helpers côté Astro : index des fiches (via la collection) + parcours.
import { getCollection, type CollectionEntry } from 'astro:content';
import { loadParcours } from './fiches.mjs';

export type Entry = CollectionEntry<'docs'>;
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const ficheHref = (slug: string) => `${BASE}/fiches/${slug}/`;
export const slugOf = (e: Entry) => e.id.replace(/^(fiches|situations|documents|outils)\//, '');
export const hrefOf = (e: Entry) => `${BASE}/${e.id}/`;

export type Chapitre = {
  id: string;
  emoji?: string;
  title: string;
  intro?: string;
  presentation?: string;
  fil?: string;
  situations?: string[];
  notions: { slug: string; title: string }[];
};
export const chapitreHref = (id: string) => `${BASE}/chapitres/${id}/`;

/** Temps de lecture estimé (≈ 200 mots/minute), arrondi, au moins 1 minute. */
export const readingTime = (body = '') => Math.max(1, Math.round(body.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length / 200));

export async function getIndex() {
  const all = await getCollection('docs');
  const fiches = new Map(
    all.filter((e) => e.data.kind === 'fiche' && !e.data.draft).map((e) => [slugOf(e), e] as const),
  );
  const parcours = loadParcours() as { blocs: Chapitre[] };
  const planned = new Map(parcours.blocs.flatMap((b) => b.notions).map((n) => [n.slug, n.title] as const));
  const titleOf = (slug: string) => fiches.get(slug)?.data.title ?? planned.get(slug) ?? slug;
  const situations = all.filter((e) => e.data.kind === 'situation');
  const documents = all.filter((e) => e.data.kind === 'document');
  const outils = all.filter((e) => e.data.kind === 'outil');
  const notionsOf = (e: Entry) => new Set([...e.data.notions, ...e.data.etapes.flatMap((x) => x.notions)]);
  /** Situations / documents / outils qui mobilisent une notion. */
  const usedBy = (slug: string) => ({
    situations: situations.filter((e) => notionsOf(e).has(slug)),
    documents: documents.filter((e) => notionsOf(e).has(slug)),
    outils: outils.filter((e) => notionsOf(e).has(slug)),
  });
  const chapitres = parcours.blocs;
  const chapitreOf = (slug: string) => chapitres.find((c) => c.notions.some((n) => n.slug === slug)) ?? null;
  /** Ordre de lecture d'une fiche dans son chapitre : précédente, suivante (rédigées seulement). */
  const voisins = (slug: string) => {
    const c = chapitreOf(slug);
    if (!c) return { chapitre: null, prev: null, next: null, nextChapitre: null };
    const order = c.notions.map((n) => n.slug).filter((s) => fiches.has(s));
    const i = order.indexOf(slug);
    const ci = chapitres.indexOf(c);
    return {
      chapitre: c,
      prev: i > 0 ? order[i - 1] : null,
      next: i >= 0 && i < order.length - 1 ? order[i + 1] : null,
      nextChapitre: i === order.length - 1 ? chapitres[ci + 1] ?? null : null,
    };
  };
  return { all, fiches, parcours, chapitres, chapitreOf, voisins, planned, titleOf, situations, documents, outils, notionsOf, usedBy };
}

export const fmtDate = (d?: Date) =>
  d ? new Intl.DateTimeFormat('fr-BE', { month: 'long', year: 'numeric' }).format(d) : undefined;
