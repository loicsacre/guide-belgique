import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { CHIFFRE_KEYS, DOMAIN_KEYS, LEVEL_KEYS, NATURE_KEYS, SAVOIR_KEYS, SCOPE_KEYS, STATUS_KEYS } from './lib/domains.mjs';

const etape = z.object({
  titre: z.string(),
  quand: z.string().optional(),
  texte: z.string().optional(),
  notions: z.array(z.string()).default([]),
});

const source = z.object({
  title: z.string(),
  url: z.string().url(),
  org: z.string().optional(),
});

// Modèle éditorial (GBCF) : blocs structurés réutilisés par le web, le mémo, la fiche imprimable et les livres.
// Textes courts ; [[slug|libellé]] et **gras** autorisés. Voir CONTENT_MODEL.md.
const memo = z.object({
  idees: z.array(z.object({ titre: z.string(), texte: z.string() })).max(3).default([]),
  chemin: z.array(z.string()).default([]),
  acteurs: z.array(z.object({ qui: z.string(), role: z.string() })).default([]),
  documents: z.array(z.object({ nom: z.string(), quand: z.string().optional(), texte: z.string().optional() })).default([]),
  chiffres: z.array(z.object({ valeur: z.string(), sens: z.string(), nature: z.enum(CHIFFRE_KEYS as [string, ...string[]]) })).default([]),
  piege: z.string().optional(),
});

const checklist = z.array(
  z.object({
    phase: z.string(),
    quand: z.string().optional(),
    items: z.array(z.string()),
  }),
);

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        kind: z.enum(['fiche', 'situation', 'document', 'outil', 'page']).default('page'),
        organisme: z.string().optional(),
        etapes: z.array(etape).default([]),
        domain: z.enum(DOMAIN_KEYS as [string, ...string[]]).optional(),
        level: z.enum(LEVEL_KEYS as [string, ...string[]]).optional(),
        nature: z.enum(NATURE_KEYS as [string, ...string[]]).optional(),
        scope: z.array(z.enum(SCOPE_KEYS as [string, ...string[]])).default([]),
        status: z.enum(STATUS_KEYS as [string, ...string[]]).default('publie'),
        tags: z.array(z.string()).default([]),
        short: z.string().optional(),
        aliases: z.array(z.string()).default([]),
        prerequisites: z.array(z.string()).default([]),
        related: z.array(z.string()).default([]),
        notions: z.array(z.string()).default([]),
        sources: z.array(source).default([]),
        last_verified: z.coerce.date().optional(),
        valid_for: z.string().optional(),
        savoir: z.enum(SAVOIR_KEYS as [string, ...string[]]).optional(),
        memo: memo.optional(),
        checklist: checklist.default([]),
      }),
    }),
  }),
};
