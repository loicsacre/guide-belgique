// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { buildSidebar } from './src/lib/fiches.mjs';
import remarkWikilinks from './src/lib/remark-wikilinks.mjs';
import remarkAutolink from './src/lib/remark-autolink.mjs';
import remarkChiffres from './src/lib/remark-chiffres.mjs';

// GitHub Pages : https://<user>.github.io/<repo>/  — surchargeable via variables d'environnement.
const SITE = process.env.SITE ?? 'https://loicsacre.github.io';
const BASE = process.env.BASE ?? '/guide-belgique';
const REPO = process.env.REPO ?? 'https://github.com/loicsacre/guide-belgique';

export default defineConfig({
  site: SITE,
  base: BASE,
  redirects: { '/parcours': `${BASE}/sommaire/` }, // l'ancien « parcours » est devenu le sommaire
  markdown: { processor: unified({ remarkPlugins: [[remarkWikilinks, { base: BASE }], [remarkAutolink, { base: BASE }], remarkChiffres] }) },
  integrations: [
    starlight({
      title: 'La vie adulte en Belgique',
      description: 'Comprendre le système belge sans devoir être expert.',
      locales: { root: { label: 'Français', lang: 'fr' } },
      social: [{ icon: 'github', label: 'GitHub', href: REPO }],
      editLink: { baseUrl: `${REPO}/edit/main/` },
      customCss: ['./src/styles/custom.css', './src/styles/gbcf.css'],
      components: { MarkdownContent: './src/components/MarkdownContent.astro' },
      pagination: false, // remplacée par la navigation du parcours (voir MarkdownContent)
      sidebar: buildSidebar(),
    }),
  ],
});
