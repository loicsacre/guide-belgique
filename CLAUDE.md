# Guide de la vie adulte en Belgique — instructions pour l'assistant

Ce dépôt est un manuel personnel et évolutif pour comprendre la vie adulte en Belgique (travail, impôts, sécurité sociale, argent, crédit, immobilier, investissement, entreprise, assurances, famille, institutions). Le site est généré avec Astro Starlight et publié sur GitHub Pages.

Ce fichier sert aussi de **prompt maître** : il peut être collé tel quel dans les instructions d'un projet Claude.

## Mémoire du projet

@MEMORY.md

En début de session, lis `MEMORY.md` (état, décisions, prochaines étapes). En fin de session, **mets-le à jour** : nouvelles décisions dans le tableau, état actuel, prochaines étapes, une ligne dans le journal. Ne pas y dupliquer les conventions de ce fichier.

## Le lecteur

Un trentenaire résidant en Belgique, intelligent mais non spécialiste, qui part parfois de zéro. Objectif : comprendre ce qu'il lit, ce qu'on lui dit et les documents qu'il reçoit — pas devenir fiscaliste. Aucune question n'est « trop évidente ».

## Principes de rédaction

0. **Les situations sont des récits, les fiches des encyclopédies.** Une situation raconte ce qui arrive à une personne, étape par étape ; chaque notion technique est **introduite dans le contexte, expliquée immédiatement en langage simple, illustrée si utile, puis seulement liée** vers la fiche. Le lecteur doit comprendre l'histoire sans cliquer. Mauvais : « Regarde le TAEG, la quotité et le capital restant dû. » Bon : « La banque te prête 200 000 €. Tu rembourseras davantage : une partie de chaque mensualité est de l'intérêt, et il y a des frais. Pour comparer deux offres, tu rencontreras le **TAEG**, un pourcentage qui réunit intérêts et frais obligatoires selon une formule unique. » Chaque situation se termine par « Ce que tu dois retenir » et « Nature des chiffres de cette page ».
0bis. **Aucune règle magique.** Toute affirmation chiffrée dit sa nature : 🔴 règle légale ou administrative (datée, régionalisée), 🟠 repère pratique ou pratique bancaire (ordre de grandeur, à expliquer), 🔵 exemple fictif (chiffres inventés, signalés). « Il faut rester 7 ans » est interdit ; « on cite souvent 7 à 10 ans : c'est le temps typique, à prix stable, pour amortir les frais d'entrée ; le point d'équilibre dépend de… » est attendu, suivi d'une démonstration chiffrée ou d'un lien vers l'outil qui la fait.

1. **Montrer les flux, pas des définitions isolées.** Qui paie, qui reçoit, quand, pourquoi, ce qui se passe si on ne fait rien. Schémas texte (`text`), tableaux, exemples chiffrés.
2. **Contexte belge strict.** Signaler explicitement quand une règle est régionale (Wallonie / Bruxelles / Flandre) et ne jamais présenter une règle régionale comme belge.
3. **Distinguer la nature de l'information** :
   - concept stable → `nature: stable` ;
   - montants, taux, dates → `nature: mixte` ou `regle-datee` + `valid_for`, et dans le texte un bloc `:::note[Règle datée — <période>]` ;
   - ce qui dépend de la situation personnelle → bloc `:::caution[Dépend de ta situation]`.
4. **Exactitude.** Vérifier toute règle susceptible d'avoir changé sur une source officielle récente (SPF Finances, SPF Emploi, ONSS, INAMI, SFP, belgium.be, Wikifin/FSMA, administrations régionales). Mettre à jour `last_verified`. Les chiffres inventés pour illustrer sont marqués **fictif**.
5. **Pas de conseil personnalisé.** Expliquer les mécanismes, pas dire quoi faire dans un cas fiscal, juridique ou financier précis.
6. **Progressif.** Simple d'abord, précis ensuite. Ne pas noyer une notion de base sous du vocabulaire de niveau 3. Donner le terme officiel et le terme courant (et le terme néerlandais dans `aliases` quand il est utile).
7. Ton : tutoiement, phrases courtes, analogies justes. Ne pas simplifier au point d'être faux.

## Structure du contenu

```
src/content/docs/
  index.mdx               accueil : sept portes d'entrée
  fiches/<slug>.md        une notion = une fiche (URL /fiches/<slug>/)
  situations/<slug>.md    une chaîne de vie : étapes chronologiques (frontmatter `etapes:`) + notions
  documents/<slug>.mdx    un document fictif annoté (composants Paper / Row / Legend)
  outils/<slug>.mdx       un calculateur pédagogique (composant dans src/components/tools/)
src/pages/systeme.astro   « Le grand système » : carte SVG des domaines et des flux
src/pages/maison.astro    « Ma maison, le système » : carte SVG des systèmes d'une maison (réseaux, enveloppe, rénover)
src/pages/parcours.astro  parcours, glossaire.astro
src/data/parcours.yaml    tous les blocs et notions planifiées (16 blocs, dont « ponts » et les deux blocs maison)
src/data/quiz/<slug>.yaml le quiz d'un contenu (même nom que la page)
src/data/livres.yaml      les petits livres (chapitres = situations)
src/pages/imprimer/       versions papier : mémo, fiche pratique, classeur, livre
src/pages/bibliotheque.astro  les téléchargements (PDF, EPUB)
scripts/export.mjs        PDF (Chromium) + EPUB depuis les pages /imprimer/
templates/fiche.md        modèle de fiche
CONTENT_MODEL.md          le modèle éditorial (GBCF) : mémo, checklist, quiz, livres, cinq formes de savoir
```

### Une source, plusieurs lectures

Chaque contenu peut être lu comme page web, fiche imprimable, chapitre de livre et quiz. Les blocs structurés `memo:` et `checklist:` (frontmatter) et le quiz (`src/data/quiz/<slug>.yaml`) alimentent tous ces formats ; leur format est décrit dans **`CONTENT_MODEL.md`**, à lire avant d'en écrire. Une nouvelle situation reçoit d'emblée son mémo, sa checklist et 6 à 10 questions de quiz.

### Les portes d'entrée (architecture pédagogique)

| Le lecteur dit | Il va vers |
| --- | --- |
| « Je pars de zéro » | `/parcours/` |
| « Je rencontre ce terme » | `/glossaire/` et la recherche |
| « Je vis cette situation » | `situations/` (étapes datées, notions par étape) |
| « Je veux comprendre le système » | `/systeme/` |
| « Je dois lire ce document » | `documents/` (fictif, numéros cliquables) |
| « Je veux calculer » | `outils/` (toujours avec l'avertissement « pédagogique ») |
| « Je dois comprendre ma maison » | `/maison/` puis le domaine `maison` (🔧 Maison & travaux) |
| « Je veux l'emporter » | `/bibliotheque/` (livres EPUB et A5, fiches pratiques A4, mémos, quiz) |

- **Domaine `maison`** : la maison est traitée comme un **système de sous-systèmes** qui suivent tous la chaîne *réseau → compteur → installation privée → appareils → consommation → facture* ; l'enveloppe et la ventilation décident de l'énergie à acheter. Chaque fiche maison dit « qui est responsable de quoi » et « avant ou après le compteur ». L'ordre des travaux (sécuriser → enveloppe → ventilation/gaines → production → finitions) est la colonne vertébrale des fiches « rénover ». Primes et obligations sont **régionales et datées** (🔴), prix au m² = repères (🟠), devis = fictifs (🔵). Les documents et outils se lient depuis une fiche par lien relatif (`../../documents/<slug>/`, `../../outils/<slug>/`), pas par `[[...]]` (réservé aux fiches).
- Les fiches sont **à plat** dans `fiches/` (le domaine est une métadonnée) : les liens ne cassent jamais quand on reclasse.
- La sidebar est générée depuis le frontmatter (`domain`, `sidebar.order`).
- Le glossaire, le parcours, les « voir aussi », « utilisé par » et la navigation ← → sont calculés automatiquement.

### Frontmatter d'une fiche

| Champ | Rôle |
| --- | --- |
| `title`, `short` | Titre, définition en une phrase (affichée en tête et dans le glossaire). |
| `kind: fiche` | Obligatoire. |
| `domain` | `systeme`, `travail`, `securite-sociale`, `fiscalite`, `argent`, `banque`, `credit`, `immobilier`, `investissement`, `comptabilite`, `entreprise`, `assurances`, `famille`, `maison`, `quotidien` (voir `src/lib/domains.mjs`). |
| `level` | `essentiel`, `utile`, `approfondissement`. |
| `nature` | `stable`, `mixte`, `regle-datee`. |
| `scope` | `belgique` (valable partout, hors règle fédérale : technique, pratique), `federal`, `wallonie`, `bruxelles`, `flandre`, `communal`. |
| `aliases` | Sigles, synonymes, termes NL — alimentent le glossaire et la recherche. |
| `prerequisites`, `related` | Slugs. Une notion planifiée mais non rédigée s'affiche « à rédiger ». |
| `organisme` | Qui s'en occupe (SPF Finances, ONSS, Région, ta banque…) : affiché en badge. |
| `status`, `tags` | `publie` / `relecture` / `brouillon` ; mots-clés libres. |
| `sources` | Au moins une source officielle `{ title, url, org }`. |
| `last_verified`, `valid_for` | Date de vérification, période de validité des règles datées. |
| `savoir`, `memo`, `checklist` | Facultatifs : forme de savoir, mémo d'une page, checklist par phases (voir `CONTENT_MODEL.md`). |

### Liens entre notions

Dans le texte : `[[slug]]` ou `[[slug|libellé]]` (dans un tableau : `[[slug\|libellé]]`). Un slug inconnu (ni fiche, ni `parcours.yaml`) fait échouer le build.

### Corps d'une fiche

Sections habituelles (adapter si une section n'apporte rien) : *En langage simple* → *Pourquoi ça existe* → *Comment ça marche* (flux) → *Exemple concret* → *Ce que ça change pour toi* → *À ne pas confondre*. Qui paie / qui reçoit / quand en tableau quand c'est pertinent.

Les termes connus (titres courts et alias des fiches) sont **liés automatiquement** à leur première occurrence dans une page, avec la définition courte en infobulle (`src/lib/remark-autolink.mjs`, liste de mots exclus `STOP`). Un `[[slug]]` explicite reste prioritaire. Cela ne dispense pas d'expliquer un terme dans le contexte : le lien sert à approfondir.

Sont **générés automatiquement** en pied de fiche, ne pas les écrire à la main : « Voir aussi » (`related`), « Pour aller plus loin » (fiches dont celle-ci est prérequis), « Cette notion est aussi citée par », « Dans la vraie vie » (situations, documents et outils qui citent le slug), sources, navigation ← → du parcours.

### Situations (chaînes de vie)

Frontmatter `etapes:` : liste de `{ titre, quand, texte, notions: [slugs] }` dans l'ordre chronologique, rendue en fin de page comme « Le fil en bref ». Le corps Markdown est le **récit** (voir principe 0) : situation humaine → problème → mécanismes introduits au moment utile → variantes (« Et si… ? ») → « Ce que tu dois retenir » → « Nature des chiffres de cette page ». Chaque situation a ses propres `sources` (affichées en pied de page) et `last_verified`.

### Documents annotés

Fichier `.mdx` important `Paper`, `Row`, `Legend`. Chaque `<Row n="3" k="libellé" v="valeur" f="slug" />` crée un numéro cliquable vers la fiche ; la `<Legend>` reprend les numéros dans l'ordre avec `[[slug]]`. **Jamais de données réelles** : noms, numéros, IBAN, montants inventés et signalés comme tels.

### Doublons et rôles voisins

Quand deux fiches se touchent, chacune garde un rôle précis : `cotisations-sociales` (le prélèvement) vs `onss` (l'organisme) ; `credit` (le mécanisme) vs `credit-consommation` (les formes et leurs pièges) vs `credit-hypothecaire` (le prêt logement) ; `taux-interet` (le prix de l'argent) vs `taux-fixe-variable` (le choix contractuel) ; `pension` (1er pilier) vs `epargne-pension` (2e et 3e) ; `formes-de-couple` (statuts civils) vs `statut-familial` (définitions par système) vs `domicile` (l'inscription). Avant de créer une fiche, chercher dans le glossaire et les alias.

## Comment répondre aux demandes

| Demande | Action |
| --- | --- |
| « Explique-moi X » | Expliquer d'abord dans le chat. Indiquer les 1 à 5 prérequis manquants. Proposer ensuite la création ou la mise à jour de la fiche, sans l'imposer. |
| « Ajoute ceci au guide » | Rechercher et vérifier, puis créer la fiche (`npm run new -- <slug> <domaine>`) ou compléter l'existante. Ajouter les slugs révélés dans `parcours.yaml` ou dans `related`. Mettre à jour les fiches liées si nécessaire. |
| « Montre-moi le guide » | Résumer la structure : domaines, fiches rédigées, progression du parcours. |
| « Qu'est-ce que je devrais apprendre ensuite ? » | Partir de `parcours.yaml` et des prérequis des fiches existantes : proposer les 3 à 5 notions non rédigées les plus utiles. |
| « Vérifie le guide » | `npm run check`, puis revérifier les fiches signalées comme anciennes ou en `relecture`. |
| « Ajoute une situation / un document / un outil » | Respecter le format de la section correspondante ; déclarer toutes les notions mobilisées pour alimenter « Dans la vraie vie ». Pour une situation : `memo`, `checklist` et quiz (voir `CONTENT_MODEL.md`). |
| « Fais un quiz / un mémo / une fiche pratique / un livre » | Suivre `CONTENT_MODEL.md`, puis `npm run build && npm run export` et vérifier les PDF (mémo sur 1 page, fiche sur 3 pages au plus). |

Une question qui touche plusieurs domaines → montrer les connexions (ex. « j'achète une maison » → immobilier, crédit, notaire, droits d'enregistrement, assurances, fiscalité, budget, patrimoine).

## Commandes

```bash
npm install
npm run dev          # http://localhost:4321/guide-belgique/
npm run check        # cohérence : champs obligatoires, liens, fraîcheur
npm run check:links  # les URLs des sources répondent-elles encore ?
npm run build        # check + build statique dans dist/
npm run new -- quotite-emprunt credit
npm run export       # après build : PDF (mémos, fiches, livres A5) + EPUB dans dist/telechargements/
npm run deploy -- "message"   # check + build + commit + push (merge, jamais de rebase)
```

Toujours lancer `npm run check` après avoir ajouté ou modifié une fiche.

## Git

Messages de commit sur une seule ligne, en minuscules, par exemple : `fiche: quotite-emprunt` ou `parcours: ajout bloc assurances`.
