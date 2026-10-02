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

## État actuel

- 14 fiches rédigées (voir `npm run check` pour le décompte exact) :
  qui-fait-quoi, emploi-salarie, salaire-brut, cotisations-sociales, precompte-professionnel, salaire-net, fiche-de-paie, ipp, revenu-imposable, tranches-imposition, quotite-exemptee, declaration-fiscale, avertissement-extrait-de-role, budget.
- 1 situation : premier-emploi.
- Chiffres datés vérifiés le 2026-10-02 (exercice d'imposition 2026) : ONSS personnel 13,07 % ; barème 25/40/45/50 % avec seuils 16 320 / 28 800 / 49 840 € ; quotité exemptée 10 910 € ; forfait frais pro 30 % max 5 930 € ; déclaration papier 30/06/2026, Tax-on-web 15/07/2026, mandataire 16/10/2026 ; réserve d'épargne Wikifin 3 à 6 mois de net.
- Pas encore poussé sur GitHub au moment de cette note.

## Prochaines étapes

1. Pousser sur GitHub et activer Pages (Settings → Pages → Source : GitHub Actions).
2. Prochaines fiches suggérées : `personne-a-charge`, `centimes-additionnels`, `deduction-reduction-credit`, puis `impot-taxe-cotisation`, `securite-sociale`, `onss`.
3. Idée en attente : décortiquer une vraie fiche de paie anonymisée de Lolo.
4. Idée en attente : page « carte des connaissances » (graphe des prérequis).

## Pièges connus

- Sources : plusieurs pages profondes de finances.belgium.be, emploi.belgique.be et belgium.be n'ont pas pu être vérifiées. Les fiches pointent vers l'accueil de ces sites ou vers des pages confirmées. Lancer `npm run check:links` depuis un vrai PC.
- `js-yaml` doit rester en v4 : Starlight fait `import yaml from 'js-yaml'` et la v5 casse le build.
- Astro 7 utilise Sätteri par défaut : le plugin wiki-links passe par `unified()` de `@astrojs/markdown-remark` dans `astro.config.mjs`.
- Ne pas copier `node_modules` d'une machine à l'autre (binaires natifs) : `npm install` sur chaque PC.

## Journal des sessions

- **2026-10-02** — Cadrage du guide, structure en 15 parties, prompt maître (→ `CLAUDE.md`). Scaffold Astro Starlight, schéma de fiche, sidebar/glossaire/parcours automatiques, workflow Pages. 14 fiches + 1 situation.
