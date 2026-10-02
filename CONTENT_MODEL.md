# Le modèle de contenu du guide (GBCF)

*Guide Belgique Content Format* : une convention interne, pas un nouveau format de fichier. Le contenu reste en Markdown + YAML ; ce qui change, c'est la **structure** qu'on exige de lui.

> Tout contenu du guide doit pouvoir être lu comme une page web, une fiche imprimable, un chapitre de livre et un module d'apprentissage.

```text
                 sources (Markdown + frontmatter + src/data/*.yaml)
                                   │
                          astro build (HTML)
          ┌──────────────┬─────────┴───────┬───────────────────┐
          ↓              ↓                 ↓                   ↓
     site web       /imprimer/memo    /imprimer/fiche    /imprimer/livre
   (+ quiz web)          │                 │             │             │
                         ↓                 ↓             ↓             ↓
                    PDF A4 1 page    PDF A4 1-3 p.   PDF A5 cahier   EPUB 3
                                     (+ classeur)    (reMarkable)    (Kobo, Kindle…)
```

Rien n'est rédigé deux fois : `npm run export` (Chromium pour les PDF, `scripts/export.mjs` pour l'EPUB) part des pages HTML que le build produit déjà, avec les mêmes liens `[[slug]]`, le même autolink et les mêmes encadrés. Seules les feuilles de style changent : `custom.css` + `gbcf.css` (web), `print.css` (papier), `ebook.css` (liseuses).

## Cinq formes de savoir

Chaque type de contenu répond par défaut à une question. Les quiz mélangent les cinq.

| Savoir | Question | Type de contenu | Exemple |
| --- | --- | --- | --- |
| 🧠 Comprendre | Qu'est-ce que c'est, pourquoi ça existe ? | `fiche` | Qu'est-ce qu'une SRL ? |
| 🔧 Savoir faire | Par quelles étapes passer, dans quel ordre ? | `situation` | Créer une SRL |
| 📋 Savoir vérifier | Lire un document, repérer une erreur | `document` | Lire un extrait BCE |
| 🧮 Savoir calculer | Passer d'un chiffre à l'autre | `outil` | Du chiffre d'affaires au bénéfice |
| 🚨 Savoir réagir | Que faire quand quelque chose arrive ? | `reagir` *(à venir)* | J'ai reçu un courrier du SPF |

Le champ facultatif `savoir:` d'un contenu ou d'une question de quiz précise la forme quand elle diffère du défaut. Les clés sont dans `src/lib/domains.mjs` (`SAVOIRS`).

## Les blocs structurés (frontmatter)

Ils s'ajoutent aux champs existants (voir `CLAUDE.md`). Tous sont facultatifs : un contenu qui n'en a pas reste une page web normale.

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

## Les quiz — `src/data/quiz/<slug>.yaml`

Un fichier par contenu, du même nom que la page (`creer-societe.yaml` pour `situations/creer-societe.md`). Le quiz s'affiche en bas de la page web (interactif, explication après chaque réponse), en fin de chapitre dans les livres, et les corrigés en fin de livre.

```yaml
titre: As-tu compris comment fonctionne une société ?
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

Un livre = une suite de situations (les chapitres), plus toutes les fiches qu'elles mobilisent (déduites des `notions`, des `etapes` et des `[[liens]]`, rangées dans l'ordre du parcours).

```yaml
livres:
  - id: entreprise
    titre: Créer son entreprise
    sous_titre: De l'indépendant à la société…
    couleur: '#2f6f5e'
    chapitres: [devenir-independant, creer-societe]
    fiches: []          # fiches en plus, facultatif
```

Chaque chapitre contient : le récit, le fil en bref, le mémo, la checklist, le quiz (questions), une page « Mes notes ». Les outils et documents annotés restent en ligne : le QR code de chaque chapitre y renvoie.

## Où ça se trouve

| Quoi | Fichier |
| --- | --- |
| Schéma (validation au build) | `src/content.config.ts` (`memo`, `checklist`, `savoir`) |
| Contrôles (`npm run check`) | `scripts/check.mjs` : idées ≤ 3, nature des chiffres, slugs, structure des quiz, chapitres des livres |
| Rendu partagé | `src/components/gbcf/` : `Memo`, `Checklist`, `Quiz`, `FichePratique`, `Formats` |
| Pages papier | `src/pages/imprimer/` : `memo/[slug]`, `fiche/[slug]`, `fiches` (classeur), `livre/[id]` |
| Export PDF + EPUB | `scripts/export.mjs` → `dist/telechargements/` |
| Bibliothèque (téléchargements) | `src/pages/bibliotheque.astro` |

## Ajouter le format à un contenu existant

1. Ajouter `memo:` et `checklist:` dans le frontmatter.
2. Créer `src/data/quiz/<slug>.yaml` (6 à 10 questions).
3. Si la situation a sa place dans un livre, l'ajouter dans `src/data/livres.yaml`.
4. `npm run check`, puis `npm run build && npm run export` et regarder les PDF : mémo sur 1 page, fiche sur 3 pages au plus.
