import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { DOMAIN_KEYS, LEVEL_KEYS, NATURE_KEYS, SCOPE_KEYS, STATUS_KEYS } from './lib/domains.mjs';

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
      }),
    }),
  }),
};
