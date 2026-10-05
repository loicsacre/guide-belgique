# Guide de la vie adulte en Belgique — instructions pour l'assistant

Ce dépôt est un manuel personnel et évolutif pour comprendre la vie adulte en Belgique (travail, impôts, sécurité sociale, argent, crédit, immobilier, investissement, entreprise, assurances, famille, institutions). Le site est généré avec Astro Starlight et publié sur GitHub Pages.

Ce fichier sert aussi de **prompt maître** : il peut être collé tel quel dans les instructions d'un projet Claude.

## Mémoire du projet

@MEMORY.md

En début de session, lis `MEMORY.md` (état, décisions, prochaines étapes). En fin de session, **mets-le à jour** : nouvelles décisions dans le tableau, état actuel, prochaines étapes, une ligne dans le journal. Ne pas y dupliquer les conventions de ce fichier.

## L'idée du site : un manuel, pas une formation

Guide Belgique est **un manuel moderne pour comprendre comment fonctionne la Belgique** et les termes qu'on y rencontre. On y vient par curiosité (« aujourd'hui, je veux comprendre le salaire »), on lit une fiche ou un chapitre, on suit les liens, on revient plus tard. Le lecteur se construit peu à peu une carte mentale du pays : il entend « précompte » ou « AER » et se dit « je sais ce que c'est, et je vois à quoi ça se relie ».

**La connaissance est le produit. Les mises en situation sont l'application. Les quiz sont un complément. La lecture est l'expérience principale.**

| Type de page | Sa seule fonction |
| --- | --- |
| **Chapitre** (`/chapitres/<id>/`) | Organiser une famille de notions : ce qu'on va découvrir, pourquoi c'est lié, un ordre de lecture possible (jamais obligatoire). |
| **Fiche** | Faire comprendre une notion. **La profondeur vit ici.** |
| **Mise en situation** | Montrer plusieurs notions qui fonctionnent ensemble dans une histoire. Elle donne le contexte ; la fiche donne la connaissance. |
| **Quiz** (un par chapitre, facultatif) | Vérifier volontairement ce qu'on a lu. Jamais nécessaire pour continuer. |

Règles qui en découlent :

- **Complet n'est pas surchargé.** Mieux vaut vingt fiches bien séparées qu'une page qui couvre vingt sujets. La richesse vient du réseau, pas de la longueur d'une page.
- **Une information au bon endroit.** Pour chaque paragraphe : est-il nécessaire pour comprendre *cette* page ? Sinon, il va dans la fiche concernée et la page garde un lien. **Ne jamais supprimer de la richesse : la déplacer.**
- **Une mise en situation se suffit à elle-même.** On ne lit pas le guide dans l'ordre : une situation réexplique tout ce qu'il faut pour comprendre l'histoire, **quitte à répéter une fiche**. Pas de limite de longueur ; le critère est que chaque passage serve à comprendre ce qui arrive au personnage. Elle introduit les notions au moment où il les rencontre, les explique assez pour suivre, puis renvoie à la fiche pour aller plus loin (« → Comprendre l'ISoc »). Ce qui ne sert pas l'histoire (règles de détail, exceptions, régimes particuliers, calendriers complets) vit dans les fiches.
- **Une fiche se lit à trois niveaux** : « En une phrase » (`short`), quelques paragraphes pour comprendre, puis les liens pour explorer.
- **Pas d'effet formation** : pas de progression ni de cases à cocher, pas de score mis en avant, pas de quiz par page, pas de longues listes « à retenir », pas de gros mémo au milieu de la lecture. Le mémo, la checklist et les versions imprimables sont repliés en fin de page.
- **Ne pas ajouter de fonctionnalité qui n'améliore pas la lecture.** Priorité : qualité du contenu, clarté, organisation, lisibilité, liens, mises en situation ; les fonctionnalités ensuite.
- Test à appliquer à chaque page : *est-ce que ça donne envie de lire, de comprendre et d'explorer, ou est-ce que ça ressemble à un cours ?* Et : quelqu'un qui a dix minutes peut-il lire, comprendre quelque chose et repartir sans avoir l'impression d'abandonner une leçon ?

## Le lecteur

Un trentenaire résidant en Belgique, intelligent mais non spécialiste, qui part parfois de zéro. Objectif : comprendre ce qu'il lit, ce qu'on lui dit et les documents qu'il reçoit — pas devenir fiscaliste. Aucune question n'est « trop évidente ».

## Principes de rédaction

0. **Les situations sont des récits, les fiches des encyclopédies.** Une situation raconte ce qui arrive à une personne ; chaque notion technique est **introduite dans le contexte, expliquée en une ou deux phrases simples, puis liée** vers sa fiche, qui donne les détails. Le lecteur doit comprendre l'histoire sans cliquer, et avoir envie de cliquer pour approfondir. Mauvais : « Regarde le TAEG, la quotité et le capital restant dû. » Bon : « La banque te prête 200 000 €. Tu rembourseras davantage : une partie de chaque mensualité est de l'intérêt, et il y a des frais. Pour comparer deux offres, tu rencontreras le **TAEG**, un pourcentage qui réunit intérêts et frais obligatoires selon une formule unique. » Chaque situation se termine par « En bref » (3 points au plus) et « Nature des chiffres de cette page ».
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
  index.mdx               accueil : les chapitres, puis les autres façons d'entrer
  fiches/<slug>.md        une notion = une fiche (URL /fiches/<slug>/)
  situations/<slug>.md    une mise en situation : un récit court qui applique un chapitre
  documents/<slug>.mdx    un document fictif annoté (composants Paper / Row / Legend)
  outils/<slug>.mdx       un calculateur pédagogique (composant dans src/components/tools/)
src/pages/systeme.astro   « Le grand système » : carte SVG des domaines et des flux
src/pages/maison.astro    « Ma maison, le système » : carte SVG des systèmes d'une maison (réseaux, enveloppe, rénover)
src/pages/chapitres/[id].astro  page d'un chapitre (vue d'ensemble, fiches, situations, quiz facultatif)
src/pages/sommaire.astro  le sommaire (ex-« parcours », /parcours/ redirige), glossaire.astro
src/data/parcours.yaml    LES CHAPITRES : id, titre, intro, présentation, fil, situations, fiches dans l'ordre de lecture
src/data/quiz/<id>.yaml   le quiz facultatif d'un chapitre (id du chapitre)
src/data/livres.yaml      les petits livres (un livre = un ou plusieurs chapitres)
src/pages/imprimer/       versions papier : mémo, fiche pratique, classeur, livre
src/pages/bibliotheque.astro  les téléchargements (PDF, EPUB)
scripts/export.mjs        PDF (Chromium) + EPUB depuis les pages /imprimer/
templates/fiche.md        modèle de fiche
CONTENT_MODEL.md          le modèle éditorial (GBCF) : mémo, checklist, quiz, livres, cinq formes de savoir
```

### Une source, plusieurs lectures

Le même contenu se lit sur le site, en PDF (mémo, fiche pratique, livre A5) et en EPUB. Les blocs facultatifs `memo:` et `checklist:` d'une mise en situation alimentent les versions imprimables ; sur le web, ils sont repliés en fin de page. Les quiz sont **un par chapitre** (`src/data/quiz/<id>.yaml`). Format : **`CONTENT_MODEL.md`**, à lire avant d'en écrire.

### Les portes d'entrée (architecture pédagogique)

La porte principale est le **chapitre** : l'accueil et la sidebar s'organisent par chapitres, dans l'ordre de `parcours.yaml`. Une fiche appartient au premier chapitre qui la liste ; sa navigation ← → suit l'ordre du chapitre, puis propose le chapitre suivant. Les autres portes :

| Le lecteur dit | Il va vers |
| --- | --- |
| « J'ai envie d'apprendre sur un thème » | `/chapitres/<id>/`, ou `/sommaire/` pour tout voir |
| « Je rencontre ce terme » | `/glossaire/` et la recherche |
| « Je vis cette situation » | `situations/` (étapes datées, notions par étape) |
| « Je veux comprendre le système » | `/systeme/` |
| « Je dois lire ce document » | `documents/` (fictif, numéros cliquables) |
| « Je veux calculer » | `outils/` (toujours avec l'avertissement « pédagogique ») |
| « Je dois comprendre ma maison » | `/maison/` puis le domaine `maison` (🔧 Maison & travaux) |
| « Je veux l'emporter » | `/bibliotheque/` (livres EPUB et A5, fiches pratiques A4, mémos, quiz) |

- **Domaine `maison`** : la maison est traitée comme un **système de sous-systèmes** qui suivent tous la chaîne *réseau → compteur → installation privée → appareils → consommation → facture* ; l'enveloppe et la ventilation décident de l'énergie à acheter. Chaque fiche maison dit « qui est responsable de quoi » et « avant ou après le compteur ». L'ordre des travaux (sécuriser → enveloppe → ventilation/gaines → production → finitions) est la colonne vertébrale des fiches « rénover ». Primes et obligations sont **régionales et datées** (🔴), prix au m² = repères (🟠), devis = fictifs (🔵). Les documents et outils se lient depuis une fiche par lien relatif (`../../documents/<slug>/`, `../../outils/<slug>/`), pas par `[[...]]` (réservé aux fiches).
- Les fiches sont **à plat** dans `fiches/` (le domaine est une métadonnée) : les liens ne cassent jamais quand on reclasse.
- La sidebar est générée depuis `parcours.yaml` (un groupe replié par chapitre, sa vue d'ensemble puis ses fiches). Une fiche absente de tout chapitre apparaît dans un groupe « hors chapitre » de son domaine : l'ajouter à un chapitre.
- Le glossaire, le sommaire, les « voir aussi », « utilisé par » et la navigation ← → sont calculés automatiquement.

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

### Corps d'une fiche : un article qu'on lit d'une traite

Une fiche se lit **sans effort**, comme un bon article : on comprend en lisant, sans devoir reconstituer le raisonnement. Modèle : `fiches/avertissement-extrait-de-role.md`.

- **Suivre les questions que le lecteur se pose, dans l'ordre.** Pas un gabarit fixe : les intertitres sont ces questions ou leurs réponses (« Pourquoi il y a un décompte », « Pourquoi le chiffre n'est presque jamais zéro », « Lire un AER, de haut en bas », « Ce que tu dois faire »…). Commencer par le mécanisme et sa raison d'être, finir par le pratique.
- **De la prose qui relie.** Des paragraphes courts avec les mots de liaison (« donc », « mais », « résultat : »). Les puces servent aux listes de cas ou d'étapes, et chaque puce est une phrase complète qui explique. Pas de suite de tableaux et de puces sans phrase entre eux.
- **Répondre à la vraie question.** Celle qui amène le lecteur sur la page (« pourquoi je dois encore payer ? »), pas seulement la définition.
- **Chaque terme expliqué là où il apparaît**, en une incise (« la communication structurée, ce numéro entre +++ qui… »), même s'il a sa fiche. Le lien vient en plus, pas à la place.
- **Un exemple chiffré qu'on suit**, cohérent avec les exemples fil rouge (voir `MEMORY.md`), marqué fictif.
- **Tableaux** seulement pour comparer ou pour lire un document ligne par ligne ; schémas `text` seulement s'ils éclairent un flux que la prose rend difficile.
- Terminer par « À ne pas confondre » (en prose si possible) et « Nature des chiffres de cette page ». Cette section est affichée « À propos des chiffres de cette page », avec la légende des pastilles ajoutée automatiquement (`src/lib/remark-chiffres.mjs`) : y écrire **des phrases** qui citent les chiffres (« 🔴 les délais (… ) sont des règles officielles… »), pas une liste de mots-clés.

Les anciennes fiches suivent encore le gabarit *En langage simple → Pourquoi ça existe → Comment ça marche → Exemple → Ce que ça change pour toi → À ne pas confondre*, souvent trop découpé : les réécrire progressivement sur le nouveau modèle, chapitre par chapitre, sans perdre d'information.

Les termes connus (titres courts et alias des fiches) sont **liés automatiquement** à leur première occurrence dans une page, avec la définition courte en infobulle (`src/lib/remark-autolink.mjs`, liste de mots exclus `STOP`). Un `[[slug]]` explicite reste prioritaire. Cela ne dispense pas d'expliquer un terme dans le contexte : le lien sert à approfondir.

Sont **générés automatiquement** en pied de fiche, ne pas les écrire à la main : « Voir aussi » (`related`), « Pour aller plus loin » (fiches dont celle-ci est prérequis), « Cette notion est aussi citée par », « Dans la vraie vie » (situations, documents et outils qui citent le slug), sources, navigation ← → dans le chapitre.

### Mises en situation

Le corps Markdown est le **récit** (voir principe 0), avec un personnage, aussi long que nécessaire pour bien comprendre : la situation concrète → pourquoi la question se pose → ce que ça change globalement → les notions rencontrées, chacune introduite brièvement avec un lien « → Comprendre … » → une courte conclusion (ce que le personnage décide) → « En bref » (3 points) → « Nature des chiffres de cette page ». Les notions citées en `[[slug]]` dans le récit sont annoncées en tête de page (« Les notions que tu vas croiser »).

Frontmatter `etapes:` : liste de `{ titre, quand, texte, notions: [slugs] }`, repliée en fin de page (« Le fil de l'histoire »). Chaque situation est rattachée à au moins un chapitre (`situations:` dans `parcours.yaml`) et a ses propres `sources` et `last_verified`.

### Documents annotés

Fichier `.mdx` important `Paper`, `Row`, `Legend`. Chaque `<Row n="3" k="libellé" v="valeur" f="slug" />` crée un numéro cliquable vers la fiche ; la `<Legend>` reprend les numéros dans l'ordre avec `[[slug]]`. **Jamais de données réelles** : noms, numéros, IBAN, montants inventés et signalés comme tels.

### Doublons et rôles voisins

Quand deux fiches se touchent, chacune garde un rôle précis : `cotisations-sociales` (le prélèvement) vs `onss` (l'organisme) ; `credit` (le mécanisme) vs `credit-consommation` (les formes et leurs pièges) vs `credit-hypothecaire` (le prêt logement) ; `taux-interet` (le prix de l'argent) vs `taux-fixe-variable` (le choix contractuel) ; `pension` (1er pilier) vs `epargne-pension` (2e et 3e) ; `formes-de-couple` (statuts civils) vs `statut-familial` (définitions par système) vs `domicile` (l'inscription). Avant de créer une fiche, chercher dans le glossaire et les alias.

## Comment répondre aux demandes

| Demande | Action |
| --- | --- |
| « Explique-moi X » | Expliquer d'abord dans le chat. Indiquer les 1 à 5 prérequis manquants. Proposer ensuite la création ou la mise à jour de la fiche, sans l'imposer. |
| « Ajoute ceci au guide » | Rechercher et vérifier, puis créer la fiche (`npm run new -- <slug> <domaine>`) ou compléter l'existante. Ajouter les slugs révélés dans `parcours.yaml` ou dans `related`. Mettre à jour les fiches liées si nécessaire. |
| « Montre-moi le guide » | Résumer la structure : chapitres, fiches rédigées, mises en situation. |
| « Qu'est-ce que je devrais apprendre ensuite ? » | Partir de `parcours.yaml` et des prérequis des fiches existantes : proposer 3 à 5 notions ou un chapitre. |
| « Cette page est trop longue / trop technique » | Identifier ce qui n'est pas nécessaire à la page ; le **déplacer** dans la fiche concernée (la créer si besoin) et laisser un lien. Ne rien supprimer sans lui avoir trouvé une place. |
| « Vérifie le guide » | `npm run check`, puis revérifier les fiches signalées comme anciennes ou en `relecture`. |
| « Ajoute une situation / un document / un outil » | Respecter le format de la section correspondante ; déclarer toutes les notions mobilisées pour alimenter « Dans la vraie vie ». Rattacher une situation à son chapitre. Mémo et checklist sont facultatifs (voir `CONTENT_MODEL.md`). |
| « Fais un quiz / un mémo / une fiche pratique / un livre » | Suivre `CONTENT_MODEL.md` (quiz = un par chapitre), puis `npm run build && npm run export` et vérifier les PDF (mémo sur 1 page, fiche sur 3 pages au plus). |

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
