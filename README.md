# 🇧🇪 La vie adulte en Belgique

Manuel personnel et évolutif : travail, impôts, sécurité sociale, argent, crédit, immobilier… Chaque terme rencontré devient une fiche reliée aux autres.

- **Stack** : Astro 7 + Starlight, Markdown, GitHub Pages
- **Conventions et prompt maître** : [`CLAUDE.md`](./CLAUDE.md)

## Démarrer

```bash
npm install
npm run dev     # http://localhost:4321/guide-belgique/
```

## Ajouter une fiche

```bash
npm run new -- quotite-emprunt credit   # crée src/content/docs/fiches/quotite-emprunt.md depuis templates/fiche.md
npm run check                           # vérifie métadonnées, liens [[slug]], fraîcheur
```

Le parcours niveau 1, et donc la barre de progression, se trouve dans `src/data/parcours.yaml`.

## Lire autrement : PDF et EPUB

Le même contenu existe en mémo d'une page, en fiche pratique A4, en petit livre A5 (cahier, reMarkable) et en EPUB (Kobo, Kindle, Apple Books). Voir [`CONTENT_MODEL.md`](./CONTENT_MODEL.md).

```bash
npm run build
npx playwright-core install chromium   # une fois (sinon Google Chrome installé est utilisé)
npm run export                         # → dist/telechargements/
```

En ligne, GitHub Actions les produit à chaque déploiement : page « Bibliothèque » du site.

## Publier sur GitHub Pages

```bash
npm run deploy                       # check + build + commit + push → GitHub Actions déploie
npm run deploy -- "fiche: quotite"   # avec un message de commit
```

Première fois :

1. Crée le dépôt `guide-belgique` sur GitHub et pousse la branche `main`.
2. *Settings → Pages → Source : GitHub Actions*.
3. Chaque push sur `main` déploie sur `https://loicsacre.github.io/guide-belgique/`.

Autre nom de dépôt ou de domaine : adapte `SITE`, `BASE` et `REPO` dans `astro.config.mjs` (ou en variables d'environnement dans le workflow).

> Ce guide explique des mécanismes généraux. Ce n'est pas un conseil fiscal, juridique ou financier personnalisé.
