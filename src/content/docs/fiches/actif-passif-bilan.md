---
title: "Actif, passif, capitaux propres : le bilan"
kind: fiche
domain: comptabilite
level: essentiel
nature: stable
scope: []
status: publie
tags: [bilan, actif, passif, capitaux propres, comptabilité]
organisme: "BNB (Centrale des bilans)"
short: "Le bilan est la photo du patrimoine d'une entreprise à une date : à gauche l'actif (ce qu'elle possède), à droite le passif (comment c'est financé : dettes et capitaux propres). Les deux colonnes sont toujours égales."
aliases: [bilan, actif, passif, capitaux propres, fonds propres, dettes, immobilisations, actifs circulants, solvabilité, comptes annuels]
prerequisites: [patrimoine-net]
related: [chiffre-affaires-marge-benefice, tresorerie-cash-flow, amortissement-comptable, bce-numero-entreprise, personne-physique-vs-societe]
last_verified: 2026-10-02
sources:
  - title: Banque nationale de Belgique — Centrale des bilans
    url: https://www.nbb.be/fr
    org: BNB
sidebar:
  order: 1
---

## Deux questions, deux colonnes

Tu as peut-être déjà fait ton bilan personnel : ce que tu possèdes, moins ce que tu dois. C'est ton [[patrimoine-net|patrimoine net]]. Une entreprise fait exactement la même chose, mais elle le présente en deux colonnes, qui répondent chacune à une question.

La colonne de gauche, l'**actif**, répond à « qu'est-ce qu'elle a ? ». On l'appelle aussi les *emplois* : c'est là où se trouve l'argent aujourd'hui. La colonne de droite, le **passif**, répond à « avec quel argent l'a-t-elle financé ? ». On l'appelle aussi les *ressources* : c'est d'où vient l'argent.

Le **bilan**, c'est cette photo à une date précise, en général le dernier jour de l'exercice comptable. Il fait partie des **comptes annuels**, le dossier que toute société établit chaque année.

## Ce qu'on trouve à l'actif

L'actif se lit en deux blocs, du plus durable au plus mobile.

- **Les immobilisations** sont ce que l'entreprise garde pour travailler pendant des années : bâtiments, machines, véhicules, logiciels, et les participations, c'est-à-dire les parts qu'elle détient dans d'autres sociétés. Leur valeur baisse chaque année au fil de l'usure, c'est l'amortissement. → [[amortissement-comptable]]
- **Les actifs circulants** sont ce qui tourne au rythme de l'activité : les stocks, les **créances clients** (les factures envoyées mais pas encore payées) et la **trésorerie**, l'argent en banque et en caisse.

## Ce qu'on trouve au passif

Le passif, lui aussi, a deux blocs : ce qui appartient aux associés, et ce qui est dû à d'autres.

- **Les capitaux propres** (on dit aussi *fonds propres*) regroupent le capital apporté par les associés, les **réserves**, c'est-à-dire les bénéfices des années passées que la société a gardés au lieu de les distribuer, et le résultat de l'année.
- **Les dettes** se divisent selon leur échéance : à long terme, surtout les emprunts bancaires ; à court terme, les fournisseurs à payer et les dettes fiscales et sociales (TVA, impôt, cotisations).

Mises côte à côte, les deux colonnes donnent la charpente de tout bilan :

```text
ACTIF (emplois : où est l'argent)  PASSIF (ressources : d'où il vient)
Immobilisations                    Capitaux propres
  bâtiments, machines,               capital apporté par les associés
  véhicules, logiciels               réserves (bénéfices gardés)
  participations                     résultat de l'année
Actifs circulants                  Dettes
  stocks                             long terme : emprunts bancaires
  créances clients                   court terme : fournisseurs,
  (factures non payées)              dettes fiscales et sociales
  trésorerie (banque, caisse)
─────────────────────────────      ─────────────────────────────
TOTAL ACTIF               =        TOTAL PASSIF
```

## Pourquoi les deux colonnes sont toujours égales

Ce n'est pas une coïncidence, c'est la construction même du bilan. Chaque euro qui entre dans l'entreprise vient de quelque part : un associé, une banque, un fournisseur qui attend d'être payé, un bénéfice. Et il est forcément quelque part : en caisse, dans une machine, chez un client qui doit encore payer. Chaque euro est donc compté deux fois, une fois de chaque côté.

Ce qui fait tenir l'égalité, ce sont les capitaux propres. Ils jouent le rôle de **variable d'ajustement** : actif moins dettes égale capitaux propres. C'est la richesse nette de l'entreprise, celle qui appartient aux associés. Si l'actif baisse ou si les dettes montent, ce sont eux qui diminuent.

## Un exemple : la SRL d'un consultant

Prenons un exemple **fictif** : un consultant qui travaille via sa SRL, la forme de société la plus courante pour une petite activité. Au dernier jour de l'année, son bilan ressemble à ceci.

| Actif | | Passif | |
| --- | ---: | --- | ---: |
| Voiture (nette d'amortissements) | 18 000 € | Capital + réserves | 35 000 € |
| Matériel informatique | 2 000 € | Résultat de l'année | 20 000 € |
| Créances clients | 15 000 € | Emprunt voiture | 10 000 € |
| Banque | 45 000 € | Dettes fiscales et sociales (TVA, ISoc, ONSS) | 15 000 € |
| **Total** | **80 000 €** | **Total** | **80 000 €** |

Les deux totaux tombent juste : 80 000 € de chaque côté. Les capitaux propres font 55 000 € (35 000 € de capital et réserves, plus 20 000 € de résultat), soit l'actif de 80 000 € moins les 25 000 € de dettes.

Mais le piège est à l'actif. Les 45 000 € en banque **ne sont pas** « disponibles » : 15 000 € appartiennent déjà à l'État, sous forme de TVA, d'impôt des sociétés (l'ISoc) et de cotisations sociales qu'il faudra bientôt verser. Le bilan le montre très bien, à condition de lire les deux colonnes ensemble. → [[tresorerie-cash-flow]]

## Lire un bilan en trois questions

Tu n'as pas besoin d'être comptable pour tirer quelque chose d'un bilan. Trois questions suffisent pour une première impression.

| Question | Regarde | Signal |
| --- | --- | --- |
| Est-elle **solvable** ? | Capitaux propres ÷ total du bilan | Au-delà de 25-30 % : solide. Capitaux propres **négatifs** : les dettes dépassent l'actif, danger. |
| Peut-elle **payer ses factures** ? | Actifs circulants ÷ dettes à court terme | Sous 1 : tension de trésorerie. |
| Qu'a-t-elle **investi** ? | Immobilisations et leur amortissement | Ce qu'elle possède pour travailler, et à quel point c'est déjà usé. |

Être **solvable**, c'est avoir assez de biens pour couvrir toutes ses dettes. Dans l'exemple du consultant, les capitaux propres pèsent 55 000 € sur 80 000 €, soit environ 69 % : très solide. Et ses actifs circulants (60 000 €) dépassent largement ses dettes à court terme (15 000 €).

## Ce que ça change pour toi

Les comptes annuels de toute société belge sont **publics**. Ils sont déposés à la Centrale des bilans de la Banque nationale de Belgique (BNB), et tout le monde peut les consulter. C'est un réflexe utile avant de signer avec un futur employeur, avant de verser un acompte à un entrepreneur, ou avant de louer à un bailleur qui est une société. → [[bce-numero-entreprise]]

Garde aussi en tête que le bilan n'est qu'une **photo**. Il dit ce que l'entreprise possède et doit à une date, pas comment s'est passée l'année. Pour ça, il y a le **compte de résultats**, qui est le **film** de l'année : ventes, charges, bénéfice. → [[chiffre-affaires-marge-benefice]]

Enfin, la même logique s'applique à ta vie personnelle. La banque qui examine ta demande de crédit raisonne en actif et passif : ce que tu possèdes, ce que tu dois déjà, et ce qui reste.

## À ne pas confondre

Le **passif** n'est pas « ce qui est négatif » : c'est l'origine de l'argent, et il contient aussi les capitaux propres, qui appartiennent aux associés. Seules les dettes sont dues à des tiers. De même, la **trésorerie** n'est qu'une ligne de l'actif : une entreprise peut avoir un gros actif (bâtiments, machines, créances) et presque rien en banque. Et le bilan d'une société n'est pas ton patrimoine à toi, même si c'est ta SRL : c'est une personne distincte. → [[personne-physique-vs-societe]]

## Nature des chiffres de cette page

🟠 Le seuil de 25 à 30 % de capitaux propres et le ratio de 1 entre actifs circulants et dettes à court terme sont des repères d'analyse, pas des règles légales. 🔵 Le bilan du consultant (80 000 € au total, dont 45 000 € en banque et 15 000 € de dettes fiscales et sociales) est un exemple fictif ; le taux de 69 % en découle par calcul.
