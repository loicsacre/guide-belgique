// Helpers côté Astro : index des fiches (via la collection) + parcours.
import { getCollection, type CollectionEntry } from 'astro:content';
import { loadParcours } from './fiches.mjs';

export type Entry = CollectionEntry<'docs'>;
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const ficheHref = (slug: string) => `${BASE}/fiches/${slug}/`;
export const slugOf = (e: Entry) => e.id.replace(/^(fiches|situations|documents|outils)\//, '');
export const hrefOf = (e: Entry) => `${BASE}/${e.id}/`;

export async function getIndex() {
  const all = await getCollection('docs');
  const fiches = new Map(
    all.filter((e) => e.data.kind === 'fiche' && !e.data.draft).map((e) => [slugOf(e), e] as const),
  );
  const parcours = loadParcours() as { blocs: { title: string; intro?: string; notions: { slug: string; title: string }[] }[] };
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
  return { all, fiches, parcours, planned, titleOf, situations, documents, outils, notionsOf, usedBy };
}

export const fmtDate = (d?: Date) =>
  d ? new Intl.DateTimeFormat('fr-BE', { month: 'long', year: 'numeric' }).format(d) : undefined;
