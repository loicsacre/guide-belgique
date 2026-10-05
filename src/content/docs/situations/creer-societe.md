---
title: Je crée une société
kind: situation
description: 'Sophie est indépendante et son comptable lui parle de créer une SRL. Ce que cela changerait vraiment pour elle, et pourquoi la bonne question n''est pas celle qu''elle croit.'
etapes:
- titre: Se poser la bonne question
  quand: Mois −3
  texte: Pas « vais-je payer moins d'impôt ? » mais « de combien ai-je besoin pour vivre ? ». Simulation sur trois ans par le comptable, frais de structure compris.
  notions:
  - personne-physique-vs-societe
  - tranches-imposition
- titre: Préparer la société
  quand: Mois −2
  texte: Plan financier sur deux ans, fonds propres suffisants, apports en argent versés sur un compte bloqué au nom de la société en formation.
  notions:
  - srl
  - tresorerie-cash-flow
  - actif-passif-bilan
- titre: Signer chez le notaire
  quand: Jour 0
  texte: Statuts, apports, nomination de l'administrateur ; publication au Moniteur, numéro BCE et TVA, registre UBO dans le mois.
  notions:
  - notaire-acte-authentique
  - bce-numero-entreprise
  - regime-matrimonial
- titre: Fixer sa rémunération
  quand: Mois 1
  texte: Au moins 45 000 € par an pour le taux réduit d'ISoc ; cotisations d'indépendante et IPP dessus ; avantages éventuels imposés en ATN.
  notions:
  - remuneration-dirigeant
  - cotisations-independant
- titre: Séparer les deux argents
  quand: Toute l'année
  texte: La société paie ses frais, verse la rémunération ; tout prélèvement privé est un emprunt à la société.
  notions:
  - compte-courant-associe
  - tva
- titre: Payer l'impôt de la société
  quand: Chaque trimestre
  texte: Versements anticipés d'ISoc, sinon majoration (sauf les trois premiers exercices d'une petite société).
  notions:
  - impot-des-societes
- titre: Clôturer et décider
  quand: Année +1
  texte: Comptes approuvés en AG et déposés à la BNB, déclaration ISoc ; garder le bénéfice en réserve ou verser des dividendes.
  notions:
  - dividendes
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
- title: "Loi-programme du 28 mai 2026 : VVPRbis, réserve de liquidation"
  url: https://blog.oeccbb.be/fr/article/decodage-du-volet-fiscal-de-la-loi-programme-du-28-mai-2026-vvprbis-reserve-de-liquidation-droits-dauteur-et-comptes-titres/31392
  org: OECCBB
- title: Notaire.be — Créer une société
  url: https://www.notaire.be/
  org: Fednot
last_verified: '2026-10-05'
---

Sophie est consultante indépendante depuis trois ans. Son activité marche bien : 110 000 € de chiffre d'affaires, 90 000 € de bénéfice une fois ses frais payés. Elle vit seule, confortablement, avec 3 500 € nets par mois, et met le reste de côté. Puis arrive l'avertissement-extrait de rôle de l'année, et le montant lui coupe le souffle. Au rendez-vous suivant, son comptable prononce le mot : « Et si vous passiez en société ? »

Sophie se demande ce que cela changerait réellement pour elle. C'est ce qu'on va suivre, sans entrer dans tous les détails : chaque notion importante a sa fiche, pour qui veut approfondir.

## Pourquoi l'impôt pique

Aujourd'hui, Sophie exerce **en personne physique** : son entreprise et elle ne font qu'un. Ses 90 000 € de bénéfice sont donc **son** revenu. Après les [[cotisations-independant|cotisations sociales]], le reste passe dans le barème de l'[[ipp|impôt des personnes physiques]], qui monte par tranches jusqu'à 50 % (plus la taxe communale). Ce sont ses derniers euros, ceux qu'elle épargne, qui sont taxés le plus lourdement.

Le comptable résume : « Vous payez le taux maximum sur de l'argent dont vous n'avez pas besoin pour vivre. » C'est exactement le cas où une société peut aider. → [[tranches-imposition|Comprendre les tranches et le taux marginal]]

## Ce que la société changerait

Une société, le plus souvent une **SRL**, est une **personne distincte** de Sophie. Elle aurait son propre compte, son propre bénéfice et son propre impôt, l'**impôt des sociétés** (ISoc), qui n'est pas progressif : 25 %, ou 20 % sur les premiers 100 000 € pour une petite société qui remplit les conditions.

L'argent ferait alors deux étapes. La société encaisserait les factures, paierait ses frais et verserait à Sophie une **rémunération de dirigeante**, sur laquelle elle paierait cotisations et IPP comme aujourd'hui. Ce qui resterait serait le bénéfice **de la société**, taxé à l'ISoc, et il resterait dans la société.

D'où l'idée centrale, que le comptable répète deux fois : **le gain vient uniquement de ce qu'on laisse dans la société**. Si Sophie avait besoin de tout son bénéfice pour vivre, la société ne lui ferait rien gagner ; elle ajouterait seulement des frais.

Le comptable fait un calcul rapide. Avec une rémunération de 45 000 € par an, Sophie garderait environ 12 800 € de plus par an au total. Mais près de 32 000 € resteraient **dans la société**. Pour les toucher un jour, elle devrait les sortir, et chaque sortie est taxée à nouveau. → [[personne-physique-vs-societe|Le calcul complet, personne physique ou société]]

Pourquoi 45 000 € ? Parce que le taux réduit de 20 % exige que la société verse au moins ce montant à un dirigeant. Ce chiffre fixe aussi les cotisations de Sophie, donc sa future pension. → [[remuneration-dirigeant|Comprendre la rémunération de dirigeant]] · [[impot-des-societes|Comprendre l'ISoc]]

## Ce qu'il faudrait pour la créer

Sophie imaginait un capital à bloquer. Ce n'est plus le cas depuis 2019 : il n'y a plus de capital minimum. En revanche, la société doit démarrer avec des **fonds propres suffisants**, et son comptable doit le démontrer dans un **plan financier** sur deux ans. L'argent qu'elle apporte est versé avant la signature sur un compte bloqué, puis tout se signe chez le notaire, qui publie les statuts et obtient le numéro d'entreprise.

Compter en tout de l'ordre de 1 200 à 2 500 € pour la création, puis quelques milliers d'euros chaque année pour le comptable et le dépôt des comptes. → [[srl|Comprendre la SRL, de la création à la vie annuelle]]

## Ce qui changerait au quotidien

C'est la partie que le comptable prend le plus au sérieux. « Le jour où la société existe, son argent n'est plus le vôtre. » Si Sophie paie un jour sa cuisine avec le compte de la société, elle ne se « paie » pas : elle **emprunte** à sa société, avec des intérêts réels ou fictifs, et un risque de requalification. Trois comptes, trois logiques : la société paie ses frais, elle verse la rémunération, Sophie vit sur son compte privé. → [[compte-courant-associe|Comprendre le compte courant d'associé]]

Le reste est surtout du rythme : une comptabilité plus lourde, l'impôt de la société payé par avances trimestrielles, des comptes annuels approuvés chaque année et déposés à la Banque nationale, où ils deviennent **publics**.

Et le bénéfice gardé dans la société ? Il pourra être distribué plus tard sous forme de **dividendes**, avec un précompte de 30 % en principe, ou à des taux réduits pour les petites sociétés qui ont attendu. Ces régimes ont changé plusieurs fois en 2025 et 2026 : c'est typiquement le genre de règle qu'on vérifie le jour où l'on décide. → [[dividendes|Comprendre les dividendes]]

## Ce que Sophie décide

Sophie ne signe rien ce jour-là. Elle demande au comptable une simulation sur **trois ans**, pas une seule : une société ne se ferme pas en un claquement de doigts, et si son bénéfice retombait à 50 000 €, elle lui coûterait plus qu'elle ne rapporte. Elle note aussi deux questions pour le notaire : la responsabilité limitée protège-t-elle vraiment sa maison si la banque lui demande une caution personnelle (réponse : non, pas pour cette dette-là) ; et que deviendraient les parts de la société si elle se mariait un jour sans contrat (réponse : leur valeur entrerait en principe dans la communauté, sauf contrat de mariage). → [[regime-matrimonial]]

En sortant, elle a compris l'essentiel : la société n'est pas une astuce fiscale, c'est une **deuxième personne** avec laquelle elle partagerait sa vie professionnelle. Elle est avantageuse quand Sophie gagne plus qu'elle ne dépense, et seulement pour cette différence.

## En bref

1. La société gagne quand on laisse du bénéfice dedans, taxé à 20-25 % au lieu de 50 % ; si on a besoin de tout, elle ne rapporte rien.
2. Le taux réduit d'ISoc suppose une rémunération de dirigeant d'au moins 45 000 €, et chaque euro sorti plus tard est taxé une seconde fois.
3. L'argent de la société n'est pas le tien : rémunération, dividende ou dette envers la société, il n'y a pas d'autre chemin.

## Nature des chiffres de cette page

🔴 **Règles légales, datées (2026)** : taux de l'ISoc, condition des 45 000 €, précompte de 30 % sur les dividendes, absence de capital minimum. 🟠 **Repères** : coût de création, frais annuels. 🔵 **Exemple fictif et arrondi** : les revenus de Sophie et le calcul de son comptable.
