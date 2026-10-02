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
| 2026-10-02 | Situations = récits (concept introduit en contexte avant le lien) ; fiches = encyclopédie | Le lecteur décrochait entre une affirmation (« 7 ans ») et une fiche qui ne la démontrait pas. |
| 2026-10-02 | Autolink avec infobulle plutôt que liens manuels partout | Couvre les 110 fiches sans réécriture ; `STOP` évite les mots trop génériques. |
| 2026-10-02 | Bloc « ponts entre domaines » dans le parcours | Les mots polysémiques (revenu, dette, contrat…) sont la principale source de confusion entre domaines. |
| 2026-10-02 | « Une source, plusieurs lectures » : modèle éditorial GBCF (`CONTENT_MODEL.md`) — web, mémo A4, fiche pratique A4, livre A5, EPUB, quiz | Lolo veut lire le guide sur liseuse, reMarkable et papier sans maintenir plusieurs contenus. |
| 2026-10-02 | On étend le frontmatter (`memo`, `checklist`, `savoir`) et on ajoute `src/data/quiz/` et `livres.yaml`, sans dossier par contenu | Garde les URLs, les plugins et la validation existants ; pas de nouveau format de fichier. |
| 2026-10-02 | Les PDF et l'EPUB partent du HTML rendu par Astro (pages `/imprimer/`), pas du Markdown brut | Pandoc sur le Markdown perdait `[[liens]]`, autolink, encadrés et composants MDX. |
| 2026-10-02 | PDF via Chromium (playwright-core), EPUB écrit en Node (jszip), sans pandoc | Même chaîne sur le Mac, dans le cloud et en CI ; EPUB validé par epubcheck. |
| 2026-10-02 | Cinq formes de savoir : comprendre (fiche), faire (situation), vérifier (document), calculer (outil), réagir (à venir) | Taxonomie commune aux quiz et aux portes d'entrée ; seul « réagir » manque comme type. |
| 2026-10-02 | Le mémo et la checklist se rédigent à la main, situation par situation | Ils ne se déduisent pas du récit ; d'où un pilote avant de généraliser. |

## État actuel

- **Passe 5 (2026-10-02, tard) — domaine 🔧 Maison & travaux** : 22 fiches (12 « comprendre » : maison-systemes, electricite-maison, eau-maison, chauffage-maison, eau-chaude-sanitaire, pompe-a-chaleur, ventilation-maison, isolation-maison, toiture-maison, chassis-vitrage, humidite-maison, panneaux-solaires ; 10 « rénover » : diagnostic-maison, audit-logement, ordre-des-travaux, budget-renovation, primes-renovation, permis-urbanisme, choisir-entrepreneur, devis-travaux, reception-travaux, entretien-maison), 2 récits (`comprendre-ma-maison`, `renover-ma-maison`, même maison de 1972 en fil rouge : 248 000 €, PEB E 310, PV électrique négatif, bouquet 1 ≈ 41 000 € / primes R2 ≈ 7 500 €), 3 documents (`certificat-peb`, `controle-electrique`, `devis-renovation`), 2 outils (`simulateur-renovation` → ToolRenovation, `budget-maison` → ToolMaisonAnnuel), page `/maison/` (carte SVG), 7e porte sur l'accueil, blocs « Comprendre sa maison » et « Rénover sa maison » dans `parcours.yaml` (132/132). Faits vérifiés : RGIE contrôle 25 ans / 18 mois après PV négatif à la vente ; entretien chaudière W gaz 3 ans, Bxl & Fl 2 ans, mazout 1 an partout ; primes Habitation W : R1 ≤ 26 900 ×6, R2 ≤ 38 300 ×4, R3 ≤ 50 600 ×3, R4 ≤ 114 400 ×2, plafond 70 %/50 %, bases toiture 20 €/m², murs 8,80, châssis 26, PAC 600, VMC D 680, élec 320, audit 110, audit valable 8 ans, régime jusqu'au 30/09/2026 puis régime permanent ; RC décennale obligatoire (loi 31/05/2017, dès 01/07/2018) ; dispenses de permis W depuis 01/09/2019 ; échelle PEB W A++ … G > 510 ; TVA 6 % > 10 ans. Build : 175 pages, 0 lien interne cassé.
- **Passe 6 (2026-10-02, nuit) — une source, plusieurs lectures (pilote)** : modèle GBCF documenté dans `CONTENT_MODEL.md`. Pilote complet sur `creer-societe` : mémo, checklist par phases, quiz de 10 questions (QCM, vrai/faux, ordre, calcul), bandeau « Lire autrement » en tête de page, quiz interactif en bas. Pages papier `/imprimer/memo|fiche|fiches|livre/`, page `/bibliotheque/`, premier petit livre « Créer son entreprise » (devenir-independant + creer-societe + 27 fiches). `npm run export` produit mémo (1 page), fiche (3 pages), classeur, livre A5 (~107 pages, pages de notes, QR codes) et EPUB (epubcheck sans erreur). La CI installe Chromium et lance l'export : à vérifier au premier push. Branche `formats-gbcf` fusionnée dans `main` après la passe maison ; pas encore poussé.

- **Passe 4 (2026-10-02, nuit) — profondeur pédagogique** : les 14 situations réécrites en **récits** (concepts introduits en contexte, « Et si… ? », « Ce que tu dois retenir », « Nature des chiffres », sources propres). `louer-vs-acheter` démontre le point d'équilibre (3/7/15 ans × prix stable/+2 %/−1 %) et un 7e outil `louer-ou-acheter` le simule. **Autolink** : première occurrence d'un terme connu liée à sa fiche avec la définition courte en infobulle. Sources affichées en pied de toutes les pages (situations, documents, outils). Règles « magiques » (tiers des revenus, 7 ans, 10 % d'apport) requalifiées en repères. Site publié : https://loicsacre.github.io/guide-belgique/ (déploiement via `npm run deploy`).

- **Passe 3 (2026-10-02, soir) — système pédagogique** : 110 fiches (6 ponts ajoutés : revenu, dette, contrat, responsabilite, statut-familial, residence-fiscale), **14 chaînes de vie** avec étapes chronologiques en frontmatter, **9 documents annotés** (fiche de paie, AER, facture énergie, offre de crédit, tableau d'amortissement, compromis, extrait bancaire, facture, contrat de travail), **6 outils** (crédit, budget, patrimoine, intérêts composés, épargne/réserve, brut→net), page **Le grand système** (SVG cliquable + flèches expliquées), accueil à six portes d'entrée, champ `organisme` sur toutes les fiches, section « Pourquoi ça existe » sur 15 fiches clés, pied de fiche « Dans la vraie vie » généré (situations / documents / outils citant la notion). Build : 143 pages.

- **104 fiches** couvrant les 104 notions du parcours (13 domaines, 13 blocs dans `parcours.yaml`) ; **6 situations** : premier-emploi, acheter-un-logement, louer-un-logement, declaration-fiscale, devenir-independant, couple-et-famille. Build : 114 pages.
- 4 niveaux pédagogiques (clés inchangées : essentiel = 1 Fondations, utile = 2 Compréhension, approfondissement = 3, expert = 4) ; champs `status` (publie / relecture / brouillon) et `tags`.
- 5 fiches en `status: relecture` (chiffres ou règles en mouvement à revérifier) : chomage (réforme limitation dans le temps), fiscalite-investissements (taxe plus-values 2026), peb (calendriers régionaux de rénovation obligatoire), voiture-taxes (formules TMC régionales), incapacite-de-travail (pourcentages indicatifs).
- Chiffres datés vérifiés le 2026-10-02 : ONSS 13,07 % ; barème IPP exercice 2026 (16 320 / 28 800 / 49 840 €, 25-50 %) ; quotité exemptée 10 910 € ; forfait frais 30 % max 5 930 € ; délais déclaration 2026 (30/06, 15/07, 16/10) ; chèques-repas 10 € dès 2026 ; droits d'enregistrement W 3 % / Fl 2 % (3 % en 2027) / Bxl abattement 200 000 € ; garantie locative 2/2/3 mois ; cotisations indépendant 20,5 % jusqu'à 75 024 €, minimum 926,48 €/trim ; pension légale 66 ans (67 en 2030), anticipée 63/42 ; TVA 21/12/6 %, franchise 25 000 € ; ISoc 25 % / 20 % PME avec rémunération ≥ 45 000 € ; précompte mobilier 30 %, exonération épargne 1 020 € ; garantie des dépôts 100 000 € ; succession ligne directe 3-30 % (Fl 27 %), réforme wallonne 2028 ; dons non enregistrés : rappel 3 ans (Fl, Bxl) / 5 ans (W).
- Exemples fil rouge réutilisés entre fiches : salaire 3 500 € brut ; 42 000 € imposables → 36 070 € → 9 616 € d'impôt ; achat 250 000 € avec crédit 200 000 € à 3 % sur 25 ans (948 €/mois ; 250 000 € → 1 185,53 €/mois).
- Publié : repo public `loicsacre/guide-belgique`, Pages via GitHub Actions → https://loicsacre.github.io/guide-belgique/ (chaque push sur `main` redéploie).

## Prochaines étapes

0. **Formats** : relire le pilote (PDF, EPUB sur une vraie liseuse, reMarkable), puis généraliser `memo` + `checklist` + quiz aux 13 autres situations ; d'autres livres (Travail & salaire, Argent & crédit, Acheter un logement, Comprendre sa maison) ; le type `reagir` (« J'ai reçu un courrier du SPF », « Fuite d'eau ») ; un quiz « reconnaître un document » à partir des composants Paper.
0bis. **Maison au format GBCF** : `memo`, `checklist` et quiz pour `comprendre-ma-maison` et `renover-ma-maison`, puis un livre « Comprendre sa maison » dans `livres.yaml`.

1. Repasser les 5 fiches `relecture` avec les sources officielles primaires (ONEM, SPF Finances, Régions).
2. Maison : à l'usage, vérifier le régime permanent des primes wallonnes dès octobre 2026 (montants dans `primes-renovation`, `isolation-maison`, `chassis-vitrage`, `pompe-a-chaleur`, `ToolRenovation.astro`) ; idées de suite : fiches « J'ai un problème » (panne de chauffage, fuite, disjoncteur qui saute), gaz (odeur, Cerga), sécurité incendie, piscine/annexe, mitoyenneté et voisinage, achat sur plan / loi Breyne détaillée.
3. Lacunes identifiées (à ajouter dans `parcours.yaml` puis rédiger) : allocations familiales régionales ; congés thématiques (parental, crédit-temps) ; travail étudiant et flexi-jobs ; télétravail et frais propres ; pension de survie et GRAPA ; allocations de chômage : montants ; aide sociale / CPAS / revenu d'intégration ; crédit auto et leasing privé ; achat sur plan (loi Breyne, TVA) ; seconde résidence et location (fiscalité du bailleur) ; assurance revenu garanti ; protection juridique ; divorce et contributions alimentaires (détail) ; ASBL ; comptabilité simplifiée de l'indépendant ; dette publique et budget de l'État ; télécom et abonnements ; mobilité (budget mobilité, vélo) ; permis d'urbanisme.
4. Idée en attente : décortiquer une vraie fiche de paie anonymisée de Lolo.
5. Idée en attente : page « carte des connaissances » (graphe des prérequis), page par niveau, page par tag.
6. Idée : script `npm run check:links` à lancer depuis le Mac (le proxy de la session cloud bloque node fetch).

## Pièges connus

- Sources : plusieurs pages profondes de finances.belgium.be, emploi.belgique.be et belgium.be n'ont pas pu être vérifiées. Les fiches pointent vers l'accueil de ces sites ou vers des pages confirmées. Lancer `npm run check:links` depuis un vrai PC.
- `js-yaml` doit rester en v4 : Starlight fait `import yaml from 'js-yaml'` et la v5 casse le build.
- Astro 7 utilise Sätteri par défaut : le plugin wiki-links passe par `unified()` de `@astrojs/markdown-remark` dans `astro.config.mjs`.
- Push sur le Mac de Lolo : `~/.ssh/config` pointe github.com vers `~/.ssh/github_id` (corrigé le 2026-10-02 ; `id_rsa.github` est refusée par GitHub). Le token `gh` n'a pas le scope `workflow`.
- La CI fait `npm ci` (Node 22 / npm 10) : si « Missing … from lock file », régénérer le lock (`rm -rf node_modules package-lock.json && npm install`).
- `device_bash` (session cloud) : un seul gros heredoc python → `spawn E2BIG` ; écrire les fiches une par une (`cat > f <<'EOF'`). Les `title:`/`texte:` YAML contenant « : » doivent être entre guillemets.
- Ne pas copier `node_modules` d'une machine à l'autre (binaires natifs) : `npm install` sur chaque PC. **Jamais de `npm install` via `device_bash`** : la VM est Linux, elle remplace les binaires macOS du dossier et casse `npm run dev` sur le Mac (arrivé le 2026-10-02).
- Un seul fichier au schéma invalide (ex. `scope: [belgique]` avant son ajout) vide toute la collection : Starlight répond alors « slug … does not exist » sur la première page de la sidebar. Lancer `npm run build`, qui affiche la vraie erreur.
- `npm run export` cherche Chromium : celui de Playwright (`npx playwright-core install chromium`), sinon Google Chrome installé, sinon `CHROME_PATH`. En session cloud : `CHROME_PATH=/opt/pw-browsers/chromium-*/chrome-linux/chrome`.
- Quiz YAML : mettre entre apostrophes une question ou explication qui contient « : ».
- EPUB : `export.mjs` nettoie le HTML (blocs expressive-code → `<pre>`, `align` → style, liens internes → fichiers du livre). Valider avec `epubcheck` (pip) après un changement de rendu.

## Journal des sessions
- **2026-10-02 (tard)** — Mission « Maison & travaux » (scope complet) : 22 fiches, 2 récits, 3 documents, 2 outils, carte /maison/, intégration accueil/système/fiches liées. Build vérifié (175 pages, captures OK, pas d'erreur console). Non commité : `npm run deploy` à lancer par Lolo.

- **2026-10-02** — Cadrage du guide, structure en 15 parties, prompt maître (→ `CLAUDE.md`). Scaffold Astro Starlight, schéma de fiche, sidebar/glossaire/parcours automatiques, workflow Pages. 14 fiches + 1 situation.
- **2026-10-02 (nuit)** — Mission « profondeur pédagogique » : récits, autolink, sources partout, outil louer/acheter, requalification des repères.
- **2026-10-02 (soir)** — Mission « système pédagogique » : étapes de situations, documents annotés, outils, grand système, ponts, organisme, pourquoi-ça-existe, accueil six portes. Vérifié en navigateur (calculs des outils OK, pas d'erreur console).
- **2026-10-02 (suite)** — Mission « encyclopédie » : 4 niveaux, domaines banque et économie, champs status/tags, section « Pour aller plus loin » (fiches dont celle-ci est prérequis), parcours étendu à 104 notions en 13 blocs. 90 fiches et 5 situations ajoutées → 104 fiches, 6 situations, 114 pages. Vérifications factuelles : voir État actuel.
- **2026-10-02 (publication)** — Repo GitHub créé, push, Pages activé ; lockfile régénéré pour `npm ci`. Site en ligne.
- **2026-10-02 (formats)** — Mission « une source, plusieurs lectures » : modèle GBCF, pilote `creer-societe` (mémo, checklist, quiz), pages d'impression, export PDF/EPUB, bibliothèque, livre « Créer son entreprise ». Correction factuelle : apports en argent sur compte bloqué avant l'acte, registre UBO dans le mois.
