# Mémoire du projet

Ce fichier garde le contexte du projet d'une session à l'autre et d'un PC à l'autre. `CLAUDE.md` l'importe automatiquement.
**À mettre à jour en fin de session** : décisions prises, état, prochaines étapes. Les conventions de rédaction sont dans `CLAUDE.md`, pas ici.

## Origine et intention

- Projet personnel de Lolo, trentenaire résidant en Belgique. Il veut combler ses lacunes : salaire, impôts, sécurité sociale, immobilier, finance, comptabilité, société…
- Le guide grandit **question par question** : un mot entendu (« précompte immobilier », « quotité », « CP 200 »…) devient une fiche reliée aux autres. Il doit toujours rester adaptable.
- Le but est de comprendre le système assez pour savoir où chercher, pas de devenir expert.

## Décisions prises

| Date | Décision | Pourquoi |
| --- | --- | --- |
| 2026-10-02 | Site statique Astro 7 + Starlight, hébergé sur GitHub Pages (`loicsacre/guide-belgique`) | Contenu en Markdown versionné dans git, recherche plein texte incluse, pas de serveur. |
| 2026-10-02 | Fiches à plat dans `src/content/docs/fiches/`, le domaine est une métadonnée | Les URLs ne cassent pas quand on reclasse une fiche. |
| 2026-10-02 | Liens `[[slug]]` résolus au build ; slug inconnu = build en échec | Pas de liens morts. |
| 2026-10-02 | Le champ `nature` (stable / mixte / règle datée) + `valid_for` + `last_verified` | Une règle fiscale de 2026 ne doit pas passer pour éternelle. |
| 2026-10-02 | Parcours niveau 1 de 50 notions dans `src/data/parcours.yaml` | Ordre pédagogique + barre de progression + liste des notions planifiées. |
| 2026-10-02 | Pagination Starlight désactivée, remplacée par ← → du parcours | La pagination de Starlight suit la sidebar (par domaine), pas l'ordre pédagogique. |
| 2026-10-02 | Exemple chiffré fil rouge : 42 000 € imposables → 36 070 € net imposable → 9 616 € d'impôt | Les fiches fiscales se répondent (revenu imposable → tranches → quotité). |
| 2026-10-02 | 4 niveaux (Fondations / Compréhension / Approfondissement / Expert) en gardant les clés `essentiel/utile/approfondissement` + `expert` | Pas de réécriture des fiches existantes, labels adaptés dans `domains.mjs`. |
| 2026-10-02 | `status: relecture` plutôt que `draft` pour les fiches aux chiffres incertains | Publiées (utiles) mais signalées au lecteur et dans `npm run check`. |
| 2026-10-02 | Dans les situations, le « fil » est une liste numérotée avec liens `[[slug]]`, pas un bloc de code | Les blocs de code débordaient et les slugs n'étaient pas cliquables. |
| 2026-10-02 | Situations : étapes en frontmatter `etapes:` rendues en timeline ; notions dérivées automatiquement | Une seule source de vérité, réutilisable par le graphe (« Dans la vraie vie »). |
| 2026-10-02 | Documents annotés en MDX avec composants Paper/Row/Legend, données fictives explicites | Numéros cliquables → fiches ; aucun risque de donnée réelle. |
| 2026-10-02 | Outils = composants Astro avec `<script>` vanilla, un fichier par outil, avertissement automatique via `kind: outil` | Pas de framework, build statique, testable. |
| 2026-10-02 | Carte du système en SVG généré dans `systeme.astro` (nœuds/flèches en données) | Modifiable sans dessiner ; couleurs via variables Starlight (thèmes clair/sombre). |
| 2026-10-02 | Bloc « ponts entre domaines » dans le parcours | Les mots polysémiques (revenu, dette, contrat…) sont la principale source de confusion entre domaines. |

## État actuel

- **Passe 3 (2026-10-02, soir) — système pédagogique** : 110 fiches (6 ponts ajoutés : revenu, dette, contrat, responsabilite, statut-familial, residence-fiscale), **14 chaînes de vie** avec étapes chronologiques en frontmatter, **9 documents annotés** (fiche de paie, AER, facture énergie, offre de crédit, tableau d'amortissement, compromis, extrait bancaire, facture, contrat de travail), **6 outils** (crédit, budget, patrimoine, intérêts composés, épargne/réserve, brut→net), page **Le grand système** (SVG cliquable + flèches expliquées), accueil à six portes d'entrée, champ `organisme` sur toutes les fiches, section « Pourquoi ça existe » sur 15 fiches clés, pied de fiche « Dans la vraie vie » généré (situations / documents / outils citant la notion). Build : 143 pages.

- **104 fiches** couvrant les 104 notions du parcours (13 domaines, 13 blocs dans `parcours.yaml`) ; **6 situations** : premier-emploi, acheter-un-logement, louer-un-logement, declaration-fiscale, devenir-independant, couple-et-famille. Build : 114 pages.
- 4 niveaux pédagogiques (clés inchangées : essentiel = 1 Fondations, utile = 2 Compréhension, approfondissement = 3, expert = 4) ; champs `status` (publie / relecture / brouillon) et `tags`.
- 5 fiches en `status: relecture` (chiffres ou règles en mouvement à revérifier) : chomage (réforme limitation dans le temps), fiscalite-investissements (taxe plus-values 2026), peb (calendriers régionaux de rénovation obligatoire), voiture-taxes (formules TMC régionales), incapacite-de-travail (pourcentages indicatifs).
- Chiffres datés vérifiés le 2026-10-02 : ONSS 13,07 % ; barème IPP exercice 2026 (16 320 / 28 800 / 49 840 €, 25-50 %) ; quotité exemptée 10 910 € ; forfait frais 30 % max 5 930 € ; délais déclaration 2026 (30/06, 15/07, 16/10) ; chèques-repas 10 € dès 2026 ; droits d'enregistrement W 3 % / Fl 2 % (3 % en 2027) / Bxl abattement 200 000 € ; garantie locative 2/2/3 mois ; cotisations indépendant 20,5 % jusqu'à 75 024 €, minimum 926,48 €/trim ; pension légale 66 ans (67 en 2030), anticipée 63/42 ; TVA 21/12/6 %, franchise 25 000 € ; ISoc 25 % / 20 % PME avec rémunération ≥ 45 000 € ; précompte mobilier 30 %, exonération épargne 1 020 € ; garantie des dépôts 100 000 € ; succession ligne directe 3-30 % (Fl 27 %), réforme wallonne 2028 ; dons non enregistrés : rappel 3 ans (Fl, Bxl) / 5 ans (W).
- Exemples fil rouge réutilisés entre fiches : salaire 3 500 € brut ; 42 000 € imposables → 36 070 € → 9 616 € d'impôt ; achat 250 000 € avec crédit 200 000 € à 3 % sur 25 ans (948 €/mois ; 250 000 € → 1 185,53 €/mois).
- Publié : repo public `loicsacre/guide-belgique`, Pages via GitHub Actions → https://loicsacre.github.io/guide-belgique/ (chaque push sur `main` redéploie).

## Prochaines étapes

1. Repasser les 5 fiches `relecture` avec les sources officielles primaires (ONEM, SPF Finances, Régions).
2. Lacunes identifiées (à ajouter dans `parcours.yaml` puis rédiger) : allocations familiales régionales ; congés thématiques (parental, crédit-temps) ; travail étudiant et flexi-jobs ; télétravail et frais propres ; pension de survie et GRAPA ; allocations de chômage : montants ; aide sociale / CPAS / revenu d'intégration ; crédit auto et leasing privé ; achat sur plan (loi Breyne, TVA) ; seconde résidence et location (fiscalité du bailleur) ; assurance revenu garanti ; protection juridique ; divorce et contributions alimentaires (détail) ; ASBL ; comptabilité simplifiée de l'indépendant ; dette publique et budget de l'État ; télécom et abonnements ; mobilité (budget mobilité, vélo) ; permis d'urbanisme.
3. Idée en attente : décortiquer une vraie fiche de paie anonymisée de Lolo.
4. Idée en attente : page « carte des connaissances » (graphe des prérequis), page par niveau, page par tag.
5. Idée : script `npm run check:links` à lancer depuis le Mac (le proxy de la session cloud bloque node fetch).

## Pièges connus

- Sources : plusieurs pages profondes de finances.belgium.be, emploi.belgique.be et belgium.be n'ont pas pu être vérifiées. Les fiches pointent vers l'accueil de ces sites ou vers des pages confirmées. Lancer `npm run check:links` depuis un vrai PC.
- `js-yaml` doit rester en v4 : Starlight fait `import yaml from 'js-yaml'` et la v5 casse le build.
- Astro 7 utilise Sätteri par défaut : le plugin wiki-links passe par `unified()` de `@astrojs/markdown-remark` dans `astro.config.mjs`.
- Push sur le Mac de Lolo : `~/.ssh/config` pointe github.com vers `id_rsa.github` (absent) ; la clé qui marche est `~/.ssh/github_id` (`GIT_SSH_COMMAND="ssh -i ~/.ssh/github_id -o IdentitiesOnly=yes" git push`). Le token `gh` n'a pas le scope `workflow`.
- La CI fait `npm ci` (Node 22 / npm 10) : si « Missing … from lock file », régénérer le lock (`rm -rf node_modules package-lock.json && npm install`).
- Ne pas copier `node_modules` d'une machine à l'autre (binaires natifs) : `npm install` sur chaque PC.

## Journal des sessions

- **2026-10-02** — Cadrage du guide, structure en 15 parties, prompt maître (→ `CLAUDE.md`). Scaffold Astro Starlight, schéma de fiche, sidebar/glossaire/parcours automatiques, workflow Pages. 14 fiches + 1 situation.
- **2026-10-02 (soir)** — Mission « système pédagogique » : étapes de situations, documents annotés, outils, grand système, ponts, organisme, pourquoi-ça-existe, accueil six portes. Vérifié en navigateur (calculs des outils OK, pas d'erreur console).
- **2026-10-02 (suite)** — Mission « encyclopédie » : 4 niveaux, domaines banque et économie, champs status/tags, section « Pour aller plus loin » (fiches dont celle-ci est prérequis), parcours étendu à 104 notions en 13 blocs. 90 fiches et 5 situations ajoutées → 104 fiches, 6 situations, 114 pages. Vérifications factuelles : voir État actuel.
- **2026-10-02 (publication)** — Repo GitHub créé, push, Pages activé ; lockfile régénéré pour `npm ci`. Site en ligne.
