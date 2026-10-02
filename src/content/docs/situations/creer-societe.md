---
title: Je crée une société
kind: situation
description: 'Du calcul d''opportunité à la première assemblée générale : plan financier, notaire, fonds propres, rémunération de dirigeant, ISoc, dividendes et obligations annuelles.'
etapes:
- titre: Vérifier que ça vaut le coup
  quand: Mois −3
  texte: Bénéfice durable > 60-80 000 € dont tu n'as pas besoin pour vivre ; simulation par un comptable incluant les frais de structure.
  notions:
  - personne-physique-vs-societe
  - impot-des-societes
  - cotisations-independant
- titre: Préparer le plan financier
  quand: Mois −2
  texte: 'Obligatoire pour une SRL : prévisions sur 2 ans, fonds propres suffisants (plus de capital minimum, mais responsabilité des fondateurs si insuffisants). Les apports en argent sont versés sur un compte bloqué au nom de la société en formation ; la banque remet une attestation au notaire.'
  notions:
  - tresorerie-cash-flow
  - actif-passif-bilan
  - chiffre-affaires-marge-benefice
- titre: Passer l'acte chez le notaire
  quand: Jour 0
  texte: Statuts, apports, nomination de l'administrateur ; publication au Moniteur ; inscription BCE et TVA.
  notions:
  - notaire-acte-authentique
  - regime-matrimonial
- titre: Ouvrir les circuits
  quand: Semaine 1
  texte: Le compte bloqué devient le compte de la société ; registre UBO dans le mois ; logiciel de facturation Peppol, assurances (RC, revenu garanti du dirigeant).
  notions:
  - bce-numero-entreprise
  - compte-a-vue
  - facturation
- titre: Fixer ta rémunération
  quand: Mois 1
  texte: Rémunération de dirigeant (cotisations + IPP comme un indépendant) ; ≥ 45 000 € pour le taux ISoc réduit ; avantages (voiture, GSM) imposés en ATN.
  notions:
  - cotisations-independant
  - personne-physique-vs-societe
  - avantages-extralegaux
- titre: Tenir la comptabilité
  quand: Toute l'année
  texte: Comptabilité en partie double, factures d'achat au nom de la société, DNA, TVA périodique.
  notions:
  - amortissement-comptable
  - frais-professionnels
  - tva
- titre: Payer l'impôt par anticipation
  quand: Chaque trimestre
  texte: Versements anticipés trimestriels, sinon majoration (sauf les 3 premiers exercices).
  notions:
  - impot-des-societes
- titre: Clôturer l'exercice
  quand: Année +1
  texte: 'Comptes annuels approuvés en AG (6 mois), déposés à la BNB (7 mois), déclaration ISoc ; décider : réserves ou dividendes (30 %, 15 % VVPR-bis, 5 % via réserve de liquidation).'
  notions:
  - actif-passif-bilan
  - impot-des-societes
  - precompte-mobilier
savoir: faire
memo:
  idees:
  - titre: La société n'est pas toi
    texte: Elle a son propre compte, ses propres dettes, son propre impôt. Son argent n'est pas le tien tant qu'il n'est pas sorti.
  - titre: Le gain vient de ce que tu laisses dedans
    texte: Le bénéfice laissé dans la société est taxé à 20-25 % au lieu de 50 %. Si tu as besoin de tout pour vivre, il n'y a pas de gain, seulement des frais.
  - titre: Chaque sortie est taxée une seconde fois
    texte: Rémunération (cotisations + IPP), dividende (précompte mobilier) ou liquidation. Le calcul honnête compare ce qui arrive dans ta poche.
  chemin:
  - Simulation
  - Plan financier
  - Compte bloqué
  - Acte notarié
  - Moniteur + BCE
  - TVA + UBO
  - Rémunération
  - Comptabilité
  - Comptes annuels + ISoc
  acteurs:
  - qui: Toi
    role: associée et administratrice, tu signes et tu réponds de la gestion
  - qui: Le comptable
    role: plan financier, comptabilité en partie double, déclarations TVA et ISoc
  - qui: Le notaire
    role: acte constitutif, publication au Moniteur, inscription à la BCE
  - qui: La banque
    role: compte bloqué et attestation, puis compte de la société
  - qui: Le SPF Finances
    role: TVA, impôt des sociétés, versements anticipés, registre UBO
  - qui: La caisse d'assurances sociales
    role: tes cotisations de dirigeante, calculées sur ta rémunération
  - qui: La Banque nationale
    role: reçoit les comptes annuels et les rend publics
  documents:
  - nom: Plan financier
    quand: avant l'acte
    texte: prévisions sur 2 ans, remis au notaire, non publié
  - nom: Attestation bancaire
    quand: avant l'acte
    texte: prouve que les apports en argent sont versés et bloqués
  - nom: Acte constitutif et statuts
    quand: jour 0
    texte: les règles de la société, publiées au Moniteur
  - nom: Extrait BCE
    quand: semaine 1
    texte: numéro d'entreprise, qui sert aussi de numéro de TVA
  - nom: Comptes annuels
    quand: chaque année
    texte: bilan et compte de résultats, déposés à la BNB, publics
  chiffres:
  - valeur: 20 %
    sens: taux réduit d'ISoc sur les premiers 100 000 € de bénéfice (petite société, rémunération ≥ 45 000 €)
    nature: legal
  - valeur: 25 %
    sens: taux normal de l'impôt des sociétés
    nature: legal
  - valeur: 45 000 €
    sens: rémunération minimale d'un dirigeant pour le taux réduit
    nature: legal
  - valeur: 30 %
    sens: précompte mobilier normal sur un dividende
    nature: legal
  - valeur: 6 / 7 mois
    sens: approbation des comptes en AG, puis dépôt à la BNB, après la clôture
    nature: legal
  - valeur: 60-80 000 €
    sens: bénéfice durable à partir duquel on commence à en parler
    nature: repere
  - valeur: 3 000-6 000 €
    sens: coût annuel de la structure (comptable, dépôt, assurances, banque)
    nature: repere
  piege: Payer une dépense privée avec le compte de la société. C'est un emprunt à ta société (compte courant débiteur) qui coûte des intérêts, ou un avantage taxé chez toi.
checklist:
- phase: Avant de décider
  quand: Mois −3
  items:
  - Calculer de combien j'ai besoin pour vivre chaque mois
  - Faire simuler personne physique vs société par un comptable, sur 3 ans
  - Vérifier que la rémunération de 45 000 € est tenable
  - Si marié·e, regarder le [[regime-matrimonial|régime matrimonial]] avec le notaire
- phase: Préparer
  quand: Mois −2
  items:
  - Choisir le nom et vérifier qu'il est libre (BCE, marques)
  - Faire établir le [[tresorerie-cash-flow|plan financier]] sur 2 ans
  - Décider des apports (argent, matériel, clientèle)
  - Ouvrir le compte bloqué et y verser les apports en argent
  - Récupérer l'attestation bancaire
- phase: Créer
  quand: Jour 0 → semaine 2
  items:
  - Signer l'acte chez le [[notaire-acte-authentique|notaire]]
  - Recevoir le numéro d'entreprise ([[bce-numero-entreprise|BCE]])
  - Activer la [[tva|TVA]] si l'activité y est soumise
  - Inscrire les bénéficiaires effectifs au registre UBO (dans le mois)
  - S'affilier comme dirigeant·e à une caisse d'assurances sociales
  - Transférer contrats, clients et fournisseurs à la société
- phase: Faire tourner
  quand: Chaque mois, chaque trimestre
  items:
  - Payer ta rémunération sur ton compte privé, rien d'autre
  - Mettre toutes les factures d'achat au nom de la société
  - Déclarer la TVA
  - Faire les [[impot-des-societes|versements anticipés]] d'ISoc
- phase: Clôturer
  quand: Après chaque exercice
  items:
  - Faire approuver les comptes annuels en AG (6 mois)
  - Les déposer à la Banque nationale (7 mois)
  - Rentrer la déclaration ISoc (Biztax)
  - Décider réserves ou [[precompte-mobilier|dividende]]
notions: []
sidebar:
  order: 12
sources:
- title: 'Taux réduit à l''impôt des sociétés : conditions'
  url: https://blog.degandpartners.com/fr/article/tout-savoir-sur-le-taux-reduit-a-limpot-des-societes-en-belgique-en-2024/23294
  org: Degand & Partners
- title: SPF Économie — Formes de société (Code des sociétés et des associations)
  url: https://economie.fgov.be/fr
  org: SPF Économie
- title: SPF Finances — Entreprises (ISoc, versements anticipés)
  url: https://finances.belgium.be/fr/entreprises
  org: SPF Finances
- title: 'Créer une SRL en Belgique : étapes et coûts (tarifs notariaux 2026)'
  url: https://lexpress-franchise.com/fr-be/articles/srl-belgique/
  org: L'Express Franchise
- title: SPF Finances — Registre UBO
  url: https://finances.belgium.be/fr/E-services/Registre-UBO
  org: SPF Finances
- title: Notaire.be — Créer une société
  url: https://www.notaire.be/
  org: Fednot
last_verified: '2026-10-02'
---
Troisième année d'indépendante : 110 000 € de chiffre d'affaires, 90 000 € de bénéfice, et un avertissement-extrait de rôle qui pique. Ton comptable prononce le mot : « société ». Cette histoire raconte ce que ça change vraiment, ce que ça coûte, et pourquoi la bonne question n'est pas « est-ce que je paie moins d'impôt ? » mais « de combien ai-je besoin pour vivre ? ».

Cas fictif : consultante en personne physique, 90 000 € de bénéfice, isolée, qui vit confortablement avec 3 500 € nets par mois.

## 1. Pourquoi l'impôt pique, et ce que la société change

En **personne physique**, tes 90 000 € de bénéfice sont **ton** revenu : après les cotisations sociales (≈ 18 000 €), le reste passe dans le barème progressif de l'impôt des personnes physiques, où les derniers euros sont taxés à 50 % plus l'additionnel communal. Résultat : environ 28 000 € d'impôt, et il te reste ≈ 44 000 €, soit 3 650 € par mois. Tu n'en dépenses que 3 500 ; le reste s'accumule sur un compte d'épargne après avoir été taxé au taux le plus fort. Voir [[tranches-imposition]].

Une **société** (SRL, société à responsabilité limitée) est une **personne distincte** de toi. Elle encaisse les 110 000 €, paie ses frais, te verse une **rémunération** (tu redeviens une sorte de salariée de ta propre société, avec cotisations d'indépendante et IPP sur cette rémunération), et ce qui reste est **son** bénéfice, taxé à l'**impôt des sociétés** : 25 %, ou **20 %** sur les premiers 100 000 € pour une petite société qui remplit des conditions. Cet argent reste dans la société : il n'est pas à toi tant que tu ne le sors pas. Voir [[personne-physique-vs-societe]] et [[impot-des-societes]].

Le gain vient donc d'une chose précise : **laisser dans la société l'argent dont tu n'as pas besoin**, taxé à 20 % au lieu de 50 %. Si tu as besoin de tout pour vivre, il n'y a pas de gain, seulement des frais.

## 2. Le calcul honnête (fictif, simplifié)

| | Personne physique | SRL avec rémunération de 45 000 € |
| --- | ---: | ---: |
| Bénéfice avant rémunération | 90 000 € | 90 000 € |
| Ta rémunération | — | − 45 000 € |
| Frais de structure (comptable, dépôt des comptes, assurances, frais bancaires) | 2 000 € | − 5 000 € |
| Cotisations sociales (sur ton revenu) | − 18 000 € | − 9 200 € (sur 45 000 €) |
| IPP + additionnels (sur ton revenu) | − 28 000 € | − 11 000 € (sur 45 000 − cotisations) |
| ISoc 20 % (sur 90 000 − 45 000 − 5 000) | — | − 8 000 € |
| **Ce qui te reste personnellement** | **≈ 44 000 €** | **≈ 24 800 €** |
| Ce qui reste **dans la société** | — | ≈ 32 000 € |
| Total | 44 000 € | 56 800 € |

La société « gagne » 12 800 € par an, mais 32 000 € sont **enfermés** dans l'entreprise. Pour les sortir un jour : en **dividende** (30 % de précompte mobilier, ou 15 % sous le régime VVPR-bis pour une SRL récente, ou 5 % via la **réserve de liquidation** après cinq ans d'attente), en rémunération supplémentaire (retour au barème), ou à la liquidation de la société. Chaque sortie rogne l'écart. Voir [[precompte-mobilier]].

:::tip[Repère, pas une règle]
Le seuil qu'on cite, « à partir de 60 à 80 000 € de bénéfice durable », est celui où l'écart dépasse clairement les frais de structure **à condition de laisser une part significative dans la société**. Fais simuler tes chiffres par le comptable, trois années d'affilée, pas une.
:::

## 3. Les conditions du taux réduit

Le **20 %** n'est pas automatique. Il faut être une **petite société** (moins de 50 travailleurs, 11,25 M€ de chiffre d'affaires, 6 M€ de bilan), ne pas être détenue à plus de 50 % par d'autres sociétés, et surtout verser à au moins un dirigeant une **rémunération d'au moins 45 000 €** (ou égale au bénéfice imposable si celui-ci est inférieur). C'est pour ça que la rémunération de l'exemple est de 45 000 € : en dessous, toute la société passe à 25 %. Et cette rémunération fixe aussi ta pension légale et ta protection sociale : la minimiser « pour optimiser » se paie à 67 ans. Voir [[impot-des-societes]] et [[pension]].

## 4. Créer : le notaire, le plan financier, les fonds propres

Une SRL se constitue par **acte notarié** (≈ 1 200 à 2 500 € avec la publication et l'inscription, selon que les statuts sont standard ou sur mesure). Il n'y a plus de capital minimum, mais la loi exige des **fonds propres suffisants** pour l'activité prévue, justifiés par un **plan financier** sur deux ans que ton comptable prépare : prévisions de ventes, de charges, de trésorerie. Ce n'est pas une formalité : si la société fait faillite dans les trois ans avec des fonds propres manifestement insuffisants au départ, les fondateurs peuvent être tenus personnellement responsables. Voir [[notaire-acte-authentique]], [[tresorerie-cash-flow]], [[actif-passif-bilan]].

Avant la signature, l'argent que tu apportes est versé sur un **compte bloqué** ouvert au nom de la « société en formation » : la banque délivre une attestation que le notaire joint à l'acte, et le compte ne se débloque qu'une fois la société née. Le notaire publie ensuite les statuts au Moniteur belge et inscrit la société à la **BCE** : nouveau numéro d'entreprise, nouvelle TVA. Dans le mois qui suit, l'organe d'administration (toi) inscrit les **bénéficiaires effectifs** de la société au **registre UBO** via MyMinfin : qui la possède et la contrôle réellement. Ton activité de personne physique est **apportée** ou cédée à la société ; tes contrats et factures changent d'émetteur. Voir [[bce-numero-entreprise]].

Si tu es mariée sous le régime légal, les parts de la société sont communes même si tu es seule associée : un **contrat de mariage** ou une clause spécifique se discute. Voir [[regime-matrimonial]].

## 5. La règle qui change tout : l'argent de la société n'est pas le tien

C'est l'erreur de toutes les premières années. Tu as 40 000 € sur le compte de la société et tu veux une cuisine : si tu paies la cuisine avec ce compte, tu as emprunté à ta société. Ça s'appelle un **compte courant débiteur** : la société doit te facturer des intérêts (sinon le fisc en calcule de fictifs, taxés chez toi comme un avantage), et le fisc peut requalifier le tout en rémunération ou en dividende déguisé. À l'inverse, l'argent que tu prêtes à la société (compte courant créditeur) peut te rapporter des intérêts, dans des limites.

Trois comptes, trois logiques : la société paie ses frais ; elle te verse ta rémunération chaque mois sur ton compte privé ; tu vis sur ton compte privé. Voir [[personne-physique-vs-societe]].

## 6. Ce que tu peux « mettre dans la société », et à quel point

Ta rémunération peut être complétée par des **avantages** : une voiture de société (déductible selon le CO₂, imposée chez toi comme un avantage de toute nature), un GSM, une assurance groupe (EIP, engagement individuel de pension) déductible à 100 % dans la limite de la règle des 80 %, des chèques-repas. Mais la société connaît aussi les **dépenses non admises** : part non déductible de la voiture, 31 % des notes de restaurant, amendes… qui remontent dans sa base imposable. Voir [[voiture-de-societe]], [[avantages-extralegaux]], [[frais-professionnels]].

## 7. Le calendrier d'une société

- **Chaque mois** : rémunération, comptabilité en partie double (tenue par le comptable sur base de tes pièces, toutes au nom de la société).
- **Chaque trimestre** : déclaration TVA ; **versements anticipés** d'impôt des sociétés (10 avril, 10 juillet, 10 octobre, 20 décembre), sinon majoration, sauf les trois premiers exercices d'une petite société. Voir [[tva]].
- **Après la clôture** (souvent le 31 décembre) : comptes annuels approuvés par l'assemblée générale dans les 6 mois, déposés à la Banque nationale dans les 7 mois (ils deviennent **publics**), déclaration ISoc via Biztax. Puis décision : réserves ou dividende. Voir [[actif-passif-bilan]].

## Et si… ?

**Tu veux t'associer.** La SRL est faite pour ça : parts, droits de vote, pacte d'associés. Le notaire et un avocat valent leur prix ici.

**Tu veux protéger ta maison.** La responsabilité limitée protège ton patrimoine privé des dettes de la société, mais pas d'une **caution personnelle** que la banque te demandera presque toujours pour un crédit, ni d'une faute grave de gestion. En personne physique, la déclaration d'insaisissabilité du logement chez le notaire existe aussi.

**Ton bénéfice retombe à 50 000 €.** La société coûte alors plus qu'elle ne rapporte. On ne la ferme pas en un jour (liquidation, frais, taxation des réserves) : d'où l'importance de regarder trois ans.

## Ce que tu dois retenir

1. La société gagne quand tu laisses du bénéfice dedans, taxé à 20-25 % au lieu de 50 %. Si tu as besoin de tout, elle ne gagne rien.
2. Taux réduit de 20 % : petite société et rémunération de dirigeant ≥ 45 000 €.
3. Chaque euro sorti est taxé une seconde fois (dividende 30 %, 15 % VVPR-bis, 5 % réserve de liquidation après 5 ans).
4. Acte notarié, plan financier, fonds propres suffisants : responsabilité des fondateurs en cas de faillite précoce.
5. L'argent de la société n'est pas le tien : compte courant, intérêts fictifs, requalification.
6. Versements anticipés, comptes annuels publics, 3 000 à 6 000 € de structure par an.

## Nature des chiffres de cette page

🔴 **Règles légales, datées (2026)** : taux ISoc, conditions du taux réduit, rémunération de 45 000 €, précompte sur dividendes, VVPR-bis, réserve de liquidation, dates des versements anticipés, délais de dépôt des comptes. 🟠 **Repères** : seuil de 60-80 000 €, frais de structure. 🔵 **Exemple fictif et simplifié** : bénéfice de 90 000 €, calculs d'IPP et de cotisations arrondis.
