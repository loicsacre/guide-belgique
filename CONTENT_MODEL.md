# Le modèle de contenu du guide (GBCF)

*Guide Belgique Content Format* : une convention interne, pas un nouveau format de fichier. Le contenu reste en Markdown + YAML ; ce qui change, c'est la **structure** qu'on exige de lui.

> Le même contenu peut se lire sur le site, sur papier, sur une liseuse. Le site reste un **manuel** (voir `CLAUDE.md`, « un manuel, pas une formation ») : ces formats sont des façons de l'emporter, jamais des étapes à franchir.

```text
                 sources (Markdown + frontmatter + src/data/*.yaml)
                                   │
                          astro build (HTML)
          ┌──────────────┬─────────┴───────┬───────────────────┐
          ↓              ↓                 ↓                   ↓
     site web       /imprimer/memo    /imprimer/fiche    /imprimer/livre
   (+ quiz de chapitre)  │                 │             │             │
                         ↓                 ↓             ↓             ↓
                    PDF A4 1 page    PDF A4 1-3 p.   PDF A5 cahier   EPUB 3
                                     (+ classeur)    (reMarkable)    (Kobo, Kindle…)
```

Rien n'est rédigé deux fois : `npm run export` (Chromium pour les PDF, `scripts/export.mjs` pour l'EPUB) part des pages HTML que le build produit déjà, avec les mêmes liens `[[slug]]`, le même autolink et les mêmes encadrés. Seules les feuilles de style changent : `custom.css` + `gbcf.css` (web), `print.css` (papier), `ebook.css` (liseuses).

## Cinq formes de savoir

Une grille d'écriture, utile surtout pour varier les questions d'un quiz. Elle n'est pas affichée comme un parcours.

| Savoir | Question | Type de contenu | Exemple |
| --- | --- | --- | --- |
| 🧠 Comprendre | Qu'est-ce que c'est, pourquoi ça existe ? | `fiche` | Qu'est-ce qu'une SRL ? |
| 🔧 Savoir faire | Par quelles étapes passer, dans quel ordre ? | `situation` | Créer une SRL |
| 📋 Savoir vérifier | Lire un document, repérer une erreur | `document` | Lire un extrait BCE |
| 🧮 Savoir calculer | Passer d'un chiffre à l'autre | `outil` | Du chiffre d'affaires au bénéfice |
| 🚨 Savoir réagir | Que faire quand quelque chose arrive ? | `reagir` *(à venir)* | J'ai reçu un courrier du SPF |

Le champ facultatif `savoir:` d'un contenu ou d'une question de quiz précise la forme quand elle diffère du défaut. Les clés sont dans `src/lib/domains.mjs` (`SAVOIRS`).

## Les blocs structurés (frontmatter)

Ils s'ajoutent aux champs existants (voir `CLAUDE.md`). Tous sont facultatifs : un contenu qui n'en a pas reste une page web normale. Sur le web, le mémo et la checklist sont **repliés en fin de page** (« À garder sous la main ») : ils servent surtout aux versions imprimables, pas à la lecture.

Dans les textes courts des blocs, on peut écrire `[[slug]]`, `[[slug|libellé]]` et `**gras**`, rien d'autre.

### `memo:` — l'essentiel sur une page

Doit tenir sur **une page A4** : `npm run export` le signale sinon.

```yaml
memo:
  idees:              # 3 au maximum : « 3 choses à comprendre »
    - titre: La société n'est pas toi
      texte: Elle a son propre compte, ses propres dettes, son propre impôt.
  chemin:             # les grandes étapes, très courtes, rendues en flèches
    - Plan financier
    - Acte notarié
  acteurs:            # qui fait quoi
    - qui: Le notaire
      role: acte constitutif, publication au Moniteur, inscription à la BCE
  documents:          # ce qu'on reçoit ou signe
    - nom: Extrait BCE
      quand: semaine 1
      texte: numéro d'entreprise, qui sert aussi de numéro de TVA
  chiffres:           # chaque chiffre dit sa nature (principe 0bis)
    - valeur: 20 %
      sens: taux réduit d'ISoc sur les premiers 100 000 €
      nature: legal   # legal 🔴 | repere 🟠 | fictif 🔵
  piege: Payer une dépense privée avec le compte de la société.
```

### `checklist:` — à cocher

Rendue sur le web (« Ta checklist »), sur la fiche pratique A4 et dans les livres.

```yaml
checklist:
  - phase: Préparer
    quand: Mois −2
    items:
      - Faire établir le [[tresorerie-cash-flow|plan financier]] sur 2 ans
      - Ouvrir le compte bloqué et y verser les apports en argent
```

Le mémo et la checklist **se rédigent** : ils ne se déduisent pas du récit. Le chemin peut reprendre les titres des `etapes`, les idées reprennent souvent « Ce que tu dois retenir », mais en plus court.

## Les quiz — `src/data/quiz/<id-du-chapitre>.yaml`

**Un quiz par chapitre**, jamais par fiche ni par situation : un fichier nommé d'après l'`id` du chapitre dans `parcours.yaml` (`entreprise.yaml` pour « Indépendant et société »). Il mélange les notions du chapitre et sa ou ses mises en situation. Sur le web, il est replié tout en bas de la page du chapitre (« Envie de vérifier ? ») : facultatif, rien n'est enregistré, l'explication suit chaque réponse. Dans les livres, il vient en fin de volume avec ses corrigés.

```yaml
titre: Indépendant et société, qu'as-tu retenu ?
questions:
  - id: ca-benefice          # unique dans le fichier
    type: qcm                # qcm | vrai-faux | ordre | nombre
    savoir: calculer         # facultatif
    question: Une SRL réalise 100 000 € de chiffre d'affaires et a 70 000 € de charges…
    choix: ['100 000 €', '70 000 €', '30 000 €', 'Impossible à savoir']
    reponse: 2               # index dans choix (0 = A)
    explication: Le chiffre d'affaires, ce sont les ventes…
    notions: [chiffre-affaires-marge-benefice]

  - id: capital-minimum
    type: vrai-faux          # « trouve l'erreur » : une affirmation, vraie ou fausse
    question: '« Pour créer une SRL, il faut un capital minimum de 18 550 €. »'
    reponse: false

  - id: ordre-creation
    type: ordre              # les éléments dans le BON ordre ; ils sont mélangés à l'affichage
    ordre: [Plan financier, Compte bloqué, Acte notarié, Numéro BCE]

  - id: isoc-calcul
    type: nombre             # réponse saisie, comparée avec une tolérance
    reponse: 8000
    unite: €
    tolerance: 0
```

Règles de rédaction :

- **L'explication est le cœur de la question** : elle dit pourquoi, pas seulement quoi. Elle doit se comprendre sans avoir lu la page.
- Mettre entre apostrophes une question ou une explication qui contient « : » (YAML).
- Varier les types et les formes de savoir. Une question « situation » (que fais-tu ?) vaut mieux que trois définitions.
- Les mauvaises réponses d'un QCM sont des erreurs que l'on fait vraiment, pas des pièges absurdes.
- Les chiffres suivent les mêmes règles que les pages : datés, vérifiés, ou signalés comme fictifs.

## Les petits livres — `src/data/livres.yaml`

Un livre = un ou plusieurs **chapitres du manuel**, dans le même ordre que le site : la vue d'ensemble du chapitre, ses fiches dans l'ordre de lecture, puis ses mises en situation et une page « Mes notes ». En fin de livre : les quiz facultatifs des chapitres, leurs corrigés, les sources.

```yaml
livres:
  - id: entreprise
    titre: Indépendant et société
    sous_titre: Comprendre le statut d'indépendant, la société…
    couleur: '#2f6f5e'
    chapitres: [entreprise]                       # ids de parcours.yaml
    fiches: [chiffre-affaires-marge-benefice]     # fiches d'autres chapitres, en complément (facultatif)
```

Les outils et documents annotés restent en ligne : les QR codes y renvoient.

## Où ça se trouve

| Quoi | Fichier |
| --- | --- |
| Schéma (validation au build) | `src/content.config.ts` (`memo`, `checklist`, `savoir`) |
| Contrôles (`npm run check`) | `scripts/check.mjs` : idées ≤ 3, nature des chiffres, slugs, structure des quiz, chapitres des livres |
| Rendu partagé | `src/components/gbcf/` : `Memo`, `Checklist`, `Quiz`, `FichePratique` |
| Pages papier | `src/pages/imprimer/` : `memo/[slug]`, `fiche/[slug]`, `fiches` (classeur), `livre/[id]` |
| Export PDF + EPUB | `scripts/export.mjs` → `dist/telechargements/` |
| Bibliothèque (téléchargements) | `src/pages/bibliotheque.astro` |

## Ajouter ces formats

1. Pour une mise en situation qui mérite une fiche pratique imprimable : ajouter `memo:` et `checklist:` dans son frontmatter. Ce n'est pas obligatoire.
2. Pour un chapitre : créer `src/data/quiz/<id>.yaml` (8 à 12 questions qui mélangent ses notions).
3. Pour un livre : ajouter le chapitre dans `src/data/livres.yaml`.
4. `npm run check`, puis `npm run build && npm run export` et regarder les PDF : mémo sur 1 page, fiche sur 3 pages au plus.
