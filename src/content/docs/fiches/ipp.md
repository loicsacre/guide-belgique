---
title: Impôt des personnes physiques (IPP)
kind: fiche
domain: fiscalite
level: essentiel
nature: mixte
valid_for: "principes ; barèmes indexés chaque année"
scope: [federal, communal]
organisme: "SPF Finances"
short: "L'impôt annuel sur l'ensemble des revenus d'une personne résidant en Belgique, calculé après la déclaration, dont on déduit les précomptes déjà payés."
aliases: [impôt sur le revenu, impôt des personnes physiques, personenbelasting]
prerequisites: [precompte-professionnel]
related: [revenu-imposable, tranches-imposition, quotite-exemptee, centimes-additionnels, declaration-fiscale, avertissement-extrait-de-role, annee-revenus-exercice, categories-de-revenus, statut-familial]
last_verified: 2026-10-02
sources:
  - title: SPF Finances — Particuliers
    url: https://finances.belgium.be/fr/particuliers
    org: SPF Finances
  - title: Plafonds fiscaux — exercice d'imposition 2026
    url: https://assets.contenthub.wolterskluwer.com/api/public/content/3084229-plafonds-fiscaux-3a47085543
    org: Wolters Kluwer
sidebar:
  order: 2
---

## L'avance chaque mois, la facture une fois par an

Si tu es salarié, tu paies déjà de l'impôt chaque mois sans rien faire : ton employeur retient une partie de ton salaire et la verse au fisc. C'est le [[precompte-professionnel|précompte professionnel]]. Mais ce montant n'est qu'une **avance**, une estimation faite mois par mois.

L'**impôt des personnes physiques**, qu'on appelle presque toujours l'**IPP**, c'est la **facture finale**. Une fois par an, le SPF Finances additionne tous tes revenus de l'année, applique les règles (le barème, les exonérations, les réductions) et compare le résultat à ce que tu as déjà payé en avances. La différence, à payer ou à te rembourser, t'est annoncée sur un document appelé l'[[avertissement-extrait-de-role|avertissement-extrait de rôle]] (AER).

## Pourquoi un impôt qui monte avec le revenu ?

L'IPP est **progressif** : plus ton revenu est élevé, plus la part qui dépasse certains seuils est taxée fort, en pourcentage. L'idée de départ est simple. Un euro de plus compte beaucoup pour quelqu'un qui gagne peu, et beaucoup moins pour quelqu'un qui gagne déjà bien sa vie. On taxe donc plus lourdement les hauts revenus, pour financer les services publics tout en tenant compte de la capacité de chacun à payer.

L'IPP sert aussi d'outil à l'État pour **encourager certains comportements**. C'est par lui qu'il récompense, via des avantages fiscaux, l'épargne-pension, les dons ou le fait d'avoir des enfants à charge.

## Deux années à ne pas mélanger

Comme l'impôt se calcule une fois l'année finie, il porte toujours sur l'année précédente. Tes revenus 2025 sont déclarés en 2026, et l'impôt correspondant est appelé l'« exercice d'imposition 2026 ». Les documents officiels parlent presque toujours de l'**exercice d'imposition**, l'année où l'impôt est établi, et non de l'année où tu as gagné l'argent. → [[annee-revenus-exercice]]

Le décalage d'un an, en une ligne :

```text
Revenus 2025  ──►  déclarés en 2026  ──►  « exercice d'imposition 2026 »
(année des revenus)                       (année où l'impôt est établi)
```

## Comment le fisc arrive à ton impôt

Le calcul suit toujours le même chemin, du revenu au solde.

1. **Il range et additionne tes revenus.** Le fisc reconnaît quatre catégories : les revenus professionnels (salaire, allocations de chômage, pension…), les revenus immobiliers (les biens que tu possèdes), les revenus mobiliers (intérêts, dividendes, souvent déjà « libérés », c'est-à-dire taxés à la source une fois pour toutes) et les revenus divers. Le total forme le **revenu imposable globalement**. → [[categories-de-revenus]] · [[revenu-imposable]]
2. **Il applique le barème progressif.** Le revenu est découpé en tranches, taxées de 25 % pour la première à 50 % pour la dernière. → [[tranches-imposition]]
3. **Il retire la quotité exemptée.** C'est une première part de revenu que chacun peut garder sans impôt : le fisc retire l'impôt qu'elle aurait coûté. → [[quotite-exemptee]]
4. **Il retire les réductions d'impôt** auxquelles tu as droit (épargne-pension, dons…). On obtient l'**impôt fédéral**. → [[deduction-reduction-credit]]
5. **Il ajoute les additionnels**, un pourcentage prélevé par ta commune (et une part régionale). On obtient l'**IPP total**. → [[centimes-additionnels]]
6. **Il retire les précomptes déjà payés.** Ce qui reste est le **solde**, à payer ou à rembourser.

Toute la cascade d'un seul coup d'œil, du premier euro gagné au solde :

```text
revenus professionnels (salaire, chômage, pension…)
+ revenus immobiliers (biens que tu possèdes)
+ revenus mobiliers (intérêts, dividendes — souvent déjà « libérés »)
+ revenus divers
= revenu imposable globalement
   │
   ▼ barème progressif par tranches (25 % → 50 %)
   − quotité exemptée (première tranche non imposée)
   − réductions d'impôt
   = impôt fédéral
   + additionnels communaux (et régionaux)
   = IPP total
   − précomptes déjà payés
   = SOLDE (à payer ou à rembourser)
```

:::note[Règle datée]
Le barème comporte des tranches imposées à **25 %, 40 %, 45 % et 50 %**. Les montants des tranches et de la [[quotite-exemptee]] sont **indexés chaque année** : le détail de l'exercice 2026 est dans [[tranches-imposition]].
:::

## Un exemple qu'on suit

Prenons le salarié **fictif** qui sert d'exemple partout dans ce guide : isolé, sans enfant, avec 42 000 € de rémunération imposable sur l'année. Après déduction de ses frais professionnels, il lui reste 36 070 € de revenu net imposable. Le barème, moins la quotité exemptée, donne 9 616 € d'impôt fédéral. Sa commune y ajoute, dans cet exemple, 7 %, soit environ 673 €. Son IPP total est donc d'environ 10 289 €. Le détail de chaque étape est dans [[revenu-imposable]] et [[tranches-imposition]].

Reste à comparer avec ce qui a déjà été retenu sur ses salaires. Et c'est là que le solde peut aller dans les deux sens. Pour le montrer, voici deux cas **fictifs** au même IPP, arrondi pour simplifier :

| | Cas 1 | Cas 2 |
| --- | ---: | ---: |
| IPP calculé (impôt + additionnels) | 8 000 € | 8 000 € |
| Précomptes déjà retenus | − 7 500 € | − 8 500 € |
| **Solde** | **500 € à payer** | **500 € remboursés** |

Même impôt final, deux résultats opposés : tout dépend de la justesse des avances retenues pendant l'année.

## Ce que ça change pour toi

**Gagner plus ne te fait jamais perdre.** « Progressif » ne veut pas dire « si je gagne plus, je gagne moins » : seule la partie de ton revenu qui dépasse un seuil est taxée au taux supérieur, le reste garde son taux. → [[tranches-imposition]]

**En couple, tout dépend de ton statut.** Les couples **mariés** ou **cohabitants légaux** (ceux qui ont fait une déclaration de cohabitation légale à la commune) remplissent une déclaration commune. Les cohabitants de fait, qui vivent ensemble sans ce statut, sont imposés séparément, chacun comme un isolé. → [[statut-familial]]

**Ta commune compte.** C'est la commune où tu es domicilié au 1er janvier de l'exercice d'imposition qui fixe le taux de ton additionnel communal. Déménager change donc légèrement ton impôt. → [[centimes-additionnels]]

## À ne pas confondre

L'**IPP** est l'impôt final sur tes revenus, alors que le **précompte professionnel** n'en est que l'avance, retenue chaque mois. Ne confonds pas non plus l'IPP avec l'**ISoc**, l'impôt des sociétés, qui frappe les bénéfices des sociétés (une SRL, par exemple) et pas les personnes. → [[impot-des-societes]]

Quant à la **TVA**, c'est un impôt sur la consommation, prélevé sur ce que tu achètes : elle n'a rien à voir avec tes revenus. → [[tva]]

## Nature des chiffres de cette page

🔴 Les taux du barème (25 %, 40 %, 45 % et 50 %) sont des règles officielles, dont les seuils sont indexés chaque année. 🔵 Le salarié à 42 000 €, ses 36 070 € imposables, ses 9 616 € d'impôt, le taux communal de 7 % et les deux cas à 8 000 € d'IPP sont des exemples inventés.
