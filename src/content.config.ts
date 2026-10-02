import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { DOMAIN_KEYS, LEVEL_KEYS, NATURE_KEYS, SCOPE_KEYS } from './lib/domains.mjs';

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
        kind: z.enum(['fiche', 'situation', 'page']).default('page'),
        domain: z.enum(DOMAIN_KEYS as [string, ...string[]]).optional(),
        level: z.enum(LEVEL_KEYS as [string, ...string[]]).optional(),
        nature: z.enum(NATURE_KEYS as [string, ...string[]]).optional(),
        scope: z.array(z.enum(SCOPE_KEYS as [string, ...string[]])).default([]),
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
