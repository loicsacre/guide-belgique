---
title: Précompte immobilier
kind: fiche
domain: immobilier
level: essentiel
nature: mixte
valid_for: "taux de base régionaux et mécanismes 2026 ; additionnels communaux variables"
scope: [wallonie, bruxelles, flandre, communal]
status: publie
tags: [précompte immobilier, impôt foncier, propriétaire, commune]
organisme: "Région (SPW Fiscalité, Bruxelles Fiscalité, Vlabel)"
short: "L'impôt annuel que paie tout propriétaire (ou usufruitier) sur son bien, calculé sur le revenu cadastral indexé : un taux régional, fortement multiplié par les additionnels provinciaux et communaux. Malgré son nom, ce n'est pas une avance sur l'IPP."
aliases: [PrI, onroerende voorheffing, impôt foncier, taxe foncière, additionnels provinciaux, réduction précompte immobilier]
prerequisites: [revenu-cadastral, impot-taxe-cotisation]
related: [precompte-professionnel, centimes-additionnels, cout-reel-achat, droits-reels, personne-a-charge]
last_verified: 2026-10-05
sources:
  - title: "Précompte immobilier en Belgique : à combien s'élève cette taxe ?"
    url: https://www.simulationpret.be/articles/precompte-immobilier
    org: Simulationpret.be
  - title: "Précompte immobilier 2026 : taux et centimes additionnels (Région de Bruxelles-Capitale)"
    url: https://admin.be.brussels/sites/default/files/2026-03/PRI_OV_2026_1.pdf
    org: Bruxelles Fiscalité
  - title: Précompte immobilier en Wallonie
    url: https://www.wallonie.be/sites/default/files/2021-10/precompte_immobilier.pdf
    org: SPW
  - title: Demander une réduction du précompte immobilier (Wallonie)
    url: https://wallonie.be/fr/demarches/demander-une-reduction-du-precompte-immobilier/faqs
    org: Wallonie.be
sidebar:
  order: 10
---

## Un impôt annuel sur ce que tu possèdes

Être propriétaire d'un bien immobilier coûte un impôt chaque année : le **précompte immobilier**. Tu le paies même si tu habites toi-même le bien, et même s'il ne te rapporte rien. Il arrive sous la forme d'un avertissement-extrait de rôle, le document par lequel l'administration t'annonce le montant à payer.

Son nom prête à confusion. « Précompte » veut dire avance, et c'était vrai autrefois : on pouvait l'imputer sur l'impôt sur les revenus (l'IPP). Ce n'est plus le cas. Aujourd'hui, c'est un **impôt régional à part entière**, que tu ne récupères pas.

Il existe trois « précomptes » en Belgique : professionnel (sur le salaire), mobilier (sur les intérêts et dividendes) et immobilier. Seul le professionnel est encore vraiment une avance sur ton impôt final. → [[precompte-professionnel]]

## Pourquoi les propriétaires paient

Posséder un immeuble, c'est profiter d'infrastructures publiques : la voirie, les égouts, l'école, les pompiers. Une grande partie de ces services est financée localement. Le précompte immobilier est la contribution des propriétaires à ce financement.

Cela explique sa structure un peu étrange. La Région fixe un petit taux de base, puis la province et surtout la commune ajoutent leurs propres **centimes additionnels**, des pourcentages calculés sur ce montant de base. Ce sont elles les vraies bénéficiaires, et ce sont leurs additionnels qui font l'essentiel de la facture. → [[centimes-additionnels]]

## Comment se calcule le montant

Tout part du [[revenu-cadastral]] (RC), ce loyer annuel théorique que le fisc attribue à chaque bien, fixé sur les valeurs de 1975 puis indexé chaque année. Le calcul suit ensuite quatre étapes.

```text
RC indexé
  × taux régional de base      (Wallonie 1,25 % · Bruxelles 1,25 % · Flandre 3,97 %)
  = précompte de base
  × (1 + centimes additionnels ÷ 100)   ← 100 centimes = une fois la base
  − réductions éventuelles
  = précompte immobilier à payer
```

Le mot « centimes » trompe : 100 centimes additionnels ne valent pas un euro, mais **une fois le montant de base**. Une commune qui vote 3 000 centimes ajoute donc 30 fois le précompte de base. Comme les communes en votent des milliers, le multiplicateur est bien plus élevé qu'on ne l'imagine. À Bruxelles en 2026, l'agglomération ajoute 989 centimes et les communes de 2 700 (Woluwe-Saint-Pierre) à 4 191 (Schaerbeek) : le montant de base est multiplié par 38 à 53 environ. En Wallonie, où le taux de base est aussi de 1,25 %, la province et la commune ajoutent ensemble, selon l'endroit, de l'ordre de 2 500 à plus de 4 500 centimes. En Flandre, le taux de base est trois fois plus élevé (3,97 %), et les additionnels sont donc plus bas : de l'ordre de 750 à 1 500 centimes, soit un multiplicateur d'environ 8 à 16. Au bout du compte, quelle que soit la Région, le précompte représente, selon la commune, d'un tiers aux deux tiers environ du RC indexé.

## Un exemple en Wallonie

Prenons une maison **fictive** avec un RC non indexé de 900 €.

1. Une fois indexé, le RC vaut environ 1 950 €.
2. Le taux régional wallon de 1,25 % donne un précompte de base d'environ 24,4 €.
3. La province et la commune ajoutent ensemble environ 2 600 centimes additionnels (une commune aux additionnels plutôt bas), c'est-à-dire 26 fois le montant de base. On multiplie donc par 27 (la base elle-même plus ses 26 fois).
4. Résultat : un précompte d'environ **660 €** par an.

La même maison, avec le même RC, peut coûter 500 € ou 900 € dans une autre commune : tout dépend des additionnels votés localement.

## Qui paie, et quand

Le précompte est dû par celui qui détient un **droit réel** sur le bien au **1er janvier** de l'année. C'est le plus souvent le propriétaire, mais ce peut être aussi l'usufruitier (celui qui a le droit d'habiter le bien ou d'en toucher les loyers, sans en être plein propriétaire) ou l'emphytéote (celui qui a un droit d'usage très long sur le bien). → [[droits-reels]]

La Région perçoit l'impôt, puis reverse leur part à la province et à la commune. Tu reçois un avertissement-extrait de rôle chaque année, et tu as en principe **2 mois** pour payer.

Le **locataire**, lui, ne le paie jamais directement. Dans un bail de résidence principale, il est même interdit de le lui refacturer. → [[bail]]

## Les réductions possibles

Plusieurs réductions existent. Voici le principe en Wallonie, avec des variantes dans les autres Régions.

- **Enfants à charge.** À partir de 2 enfants à charge (ou d'une personne handicapée), une réduction forfaitaire est accordée par enfant. Particularité : elle vaut aussi pour le **locataire**, qui la demande lui-même et la déduit ensuite de son loyer. → [[personne-a-charge]]
- **Habitation modeste.** Si le total de tes RC non indexés ne dépasse pas 745 €, le précompte est réduit de 25 %.
- **Handicap.** Une réduction existe pour une personne handicapée ou un grand invalide.
- **Improductivité.** Si le bien est resté inoccupé et improductif pendant 180 jours, sans que ce soit ta volonté, tu peux obtenir une remise proportionnelle. Les conditions sont strictes.

Les conditions s'apprécient au 1er janvier. La demande se fait auprès de l'administration fiscale de la Région : SPW Fiscalité en Wallonie, Bruxelles Fiscalité à Bruxelles, Vlabel en Flandre.

:::caution[Dépend de ta situation]
Les montants des réductions, leurs conditions exactes et la façon de les demander varient d'une Région à l'autre. Vérifie auprès de l'administration régionale du lieu où se trouve le bien.
:::

## Ce que ça change pour toi

Si tu achètes, intègre le précompte dans ton budget de propriétaire, au même titre que les assurances et l'entretien. Le RC du bien, indiqué dans le compromis, te permet de l'anticiper. → [[cout-reel-achat]]

L'année de l'achat, le compromis prévoit en général un **prorata** : vendeur et acheteur se partagent le précompte selon la date du transfert. Mais l'avertissement, lui, arrive au nom de celui qui était propriétaire au 1er janvier. Il paie donc l'avertissement, et le prorata rééquilibre les comptes entre vous.

Si la propriété est partagée entre un **usufruitier** et un **nu-propriétaire** (celui qui récupérera la pleine propriété plus tard), c'est l'usufruitier qui paie. → [[droits-reels]]

Et si tu es locataire avec au moins 2 enfants à charge, réclame la réduction : elle est pour toi, pas pour ton propriétaire.

## À ne pas confondre

Malgré son nom, le précompte immobilier n'a rien à voir avec le [[precompte-professionnel]] retenu sur ton salaire : ce dernier est une avance sur ton impôt sur les revenus, alors que le précompte immobilier est un impôt définitif sur ton bien. Il ne faut pas non plus le confondre avec les [[droits-enregistrement|droits d'enregistrement]], payés une seule fois au moment de l'achat. Enfin, les taxes communales distinctes (déchets, par exemple) arrivent par une facture séparée.

## Nature des chiffres de cette page

🔴 Les taux de base régionaux (1,25 % en Wallonie et à Bruxelles, 3,97 % en Flandre), la date du 1er janvier, le délai de paiement de 2 mois et les conditions des réductions (2 enfants, 745 €, −25 %, 180 jours) sont des règles officielles, valables en 2026 ; les additionnels varient d'une commune à l'autre. 🔴 Les centimes bruxellois de 2026 (989 pour l'agglomération, 2 700 à 4 191 pour les communes) sont des taux officiels. 🟠 Les fourchettes de centimes en Wallonie (2 500 à plus de 4 500) et en Flandre (750 à 1 500), les multiplicateurs qui en découlent et la part d'un tiers aux deux tiers du RC indexé sont des ordres de grandeur. 🔵 La maison au RC de 900 €, ses 2 600 centimes additionnels et son précompte d'environ 660 € sont un exemple fictif.
