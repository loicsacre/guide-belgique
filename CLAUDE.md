# Guide de la vie adulte en Belgique — instructions pour l'assistant

Ce dépôt est un manuel personnel et évolutif pour comprendre la vie adulte en Belgique (travail, impôts, sécurité sociale, argent, crédit, immobilier, investissement, entreprise, assurances, famille, institutions). Le site est généré avec Astro Starlight et publié sur GitHub Pages.

Ce fichier sert aussi de **prompt maître** : il peut être collé tel quel dans les instructions d'un projet Claude.

## Mémoire du projet

@MEMORY.md

En début de session, lis `MEMORY.md` (état, décisions, prochaines étapes). En fin de session, **mets-le à jour** : nouvelles décisions dans le tableau, état actuel, prochaines étapes, une ligne dans le journal. Ne pas y dupliquer les conventions de ce fichier.

## Le lecteur

Un trentenaire résidant en Belgique, intelligent mais non spécialiste, qui part parfois de zéro. Objectif : comprendre ce qu'il lit, ce qu'on lui dit et les documents qu'il reçoit — pas devenir fiscaliste. Aucune question n'est « trop évidente ».

## Principes de rédaction

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
  index.mdx               accueil
  fiches/<slug>.md        une notion = une fiche (URL /fiches/<slug>/)
  situations/<slug>.md    une situation de vie = une checklist de notions
src/data/parcours.yaml    parcours niveau 1 : ordre pédagogique + notions planifiées
templates/fiche.md        modèle de fiche
```

- Les fiches sont **à plat** dans `fiches/` (le domaine est une métadonnée) : les liens ne cassent jamais quand on reclasse.
- La sidebar est générée depuis le frontmatter (`domain`, `sidebar.order`).
- Le glossaire, le parcours, les « voir aussi », « utilisé par » et la navigation ← → sont calculés automatiquement.

### Frontmatter d'une fiche

| Champ | Rôle |
| --- | --- |
| `title`, `short` | Titre, définition en une phrase (affichée en tête et dans le glossaire). |
| `kind: fiche` | Obligatoire. |
| `domain` | `systeme`, `travail`, `securite-sociale`, `fiscalite`, `argent`, `credit`, `immobilier`, `investissement`, `comptabilite`, `entreprise`, `assurances`, `famille`, `quotidien` (voir `src/lib/domains.mjs`). |
| `level` | `essentiel`, `utile`, `approfondissement`. |
| `nature` | `stable`, `mixte`, `regle-datee`. |
| `scope` | `federal`, `wallonie`, `bruxelles`, `flandre`, `communal`. |
| `aliases` | Sigles, synonymes, termes NL — alimentent le glossaire et la recherche. |
| `prerequisites`, `related` | Slugs. Une notion planifiée mais non rédigée s'affiche « à rédiger ». |
| `sources` | Au moins une source officielle `{ title, url, org }`. |
| `last_verified`, `valid_for` | Date de vérification, période de validité des règles datées. |

### Liens entre notions

Dans le texte : `[[slug]]` ou `[[slug|libellé]]` (dans un tableau : `[[slug\|libellé]]`). Un slug inconnu (ni fiche, ni `parcours.yaml`) fait échouer le build.

### Corps d'une fiche

Sections habituelles (adapter si une section n'apporte rien) : *En langage simple* → *Comment ça marche* (flux) → *Exemple concret* → *Ce que ça change pour toi* → *À ne pas confondre*. Qui paie / qui reçoit / quand en tableau quand c'est pertinent.

## Comment répondre aux demandes

| Demande | Action |
| --- | --- |
| « Explique-moi X » | Expliquer d'abord dans le chat. Indiquer les 1 à 5 prérequis manquants. Proposer ensuite la création ou la mise à jour de la fiche, sans l'imposer. |
| « Ajoute ceci au guide » | Rechercher et vérifier, puis créer la fiche (`npm run new -- <slug> <domaine>`) ou compléter l'existante. Ajouter les slugs révélés dans `parcours.yaml` ou dans `related`. Mettre à jour les fiches liées si nécessaire. |
| « Montre-moi le guide » | Résumer la structure : domaines, fiches rédigées, progression du parcours. |
| « Qu'est-ce que je devrais apprendre ensuite ? » | Partir de `parcours.yaml` et des prérequis des fiches existantes : proposer les 3 à 5 notions non rédigées les plus utiles. |
| « Vérifie le guide » | `npm run check`, puis revérifier les fiches signalées comme anciennes. |

Une question qui touche plusieurs domaines → montrer les connexions (ex. « j'achète une maison » → immobilier, crédit, notaire, droits d'enregistrement, assurances, fiscalité, budget, patrimoine).

## Commandes

```bash
npm install
npm run dev          # http://localhost:4321/guide-belgique/
npm run check        # cohérence : champs obligatoires, liens, fraîcheur
npm run check:links  # les URLs des sources répondent-elles encore ?
npm run build        # check + build statique dans dist/
npm run new -- quotite-emprunt credit
```

Toujours lancer `npm run check` après avoir ajouté ou modifié une fiche.

## Git

Messages de commit sur une seule ligne, en minuscules, par exemple : `fiche: quotite-emprunt` ou `parcours: ajout bloc assurances`.
