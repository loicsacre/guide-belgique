---
title: Tranches d'imposition et taux marginal
kind: fiche
domain: fiscalite
level: essentiel
nature: mixte
valid_for: "exercice d'imposition 2026 (revenus 2025)"
scope: [federal]
organisme: "SPF Finances"
short: "Ton revenu imposable est découpé en tranches taxées de plus en plus fort (25 % à 50 %) : seule la partie qui dépasse un seuil est taxée au taux supérieur."
aliases: [barème progressif, taux marginal, taux moyen, impôt progressif]
prerequisites: [revenu-imposable]
related: [quotite-exemptee, ipp, centimes-additionnels, precompte-professionnel, deduction-reduction-credit]
last_verified: 2026-10-02
sources:
  - title: Plafonds fiscaux — exercice d'imposition 2026
    url: https://assets.contenthub.wolterskluwer.com/api/public/content/3084229-plafonds-fiscaux-3a47085543
    org: Wolters Kluwer
  - title: Tranches d'imposition IPP
    url: https://billy.tech/guide/fiscalite/impot/ipp/tranches-imposition-ipp/
    org: Billy
sidebar:
  order: 4
---

## Ton revenu remplit des seaux

L'impôt belge sur les revenus, l'[[ipp]], est **progressif** : plus tu gagnes, plus la part qui dépasse certains seuils est taxée fort. Mais attention à ce que cela veut dire exactement. Ton revenu n'est pas taxé d'un bloc au taux de ta « tranche ». Il est découpé en morceaux, et chaque morceau a son taux.

Imagine des seaux empilés. Ton [[revenu-imposable|revenu imposable]], ce qui reste de tes revenus après les cotisations sociales et les frais professionnels, remplit d'abord le seau à 25 %. Quand il est plein, le revenu suivant tombe dans le seau à 40 %, puis dans celui à 45 %, puis dans celui à 50 %. Chaque euro est taxé au taux **du seau où il tombe**, pas au taux du dernier seau atteint.

## Le barème

Les limites de chaque seau sont fixées par la loi, pour chaque exercice d'imposition, c'est-à-dire l'année où l'impôt est établi, qui suit celle où tu as gagné l'argent.

:::note[Règle datée — exercice d'imposition 2026 (revenus 2025)]
| Tranche de revenu imposable | Taux |
| --- | ---: |
| 0 → 16 320 € | 25 % |
| 16 320 → 28 800 € | 40 % |
| 28 800 → 49 840 € | 45 % |
| au-delà de 49 840 € | 50 % |

Les seuils sont indexés chaque année ; les taux, eux, bougent rarement.
:::

## Un exemple qu'on suit

Reprenons le salarié **fictif** du guide, isolé et sans enfant. Après déduction de ses frais professionnels, son revenu net imposable est de **36 070 €** (le détail est dans [[revenu-imposable]]). Voici comment ses 36 070 € remplissent les seaux.

Les premiers 16 320 € tombent dans le seau à 25 %. Les 12 480 € suivants, jusqu'à 28 800 €, tombent dans celui à 40 %. Il reste 7 270 €, qui tombent dans le seau à 45 %. Il n'atteint pas le seau à 50 %.

Ensuite, le fisc retire l'impôt qu'aurait coûté la [[quotite-exemptee|quotité exemptée]], cette première part de revenu que chacun garde sans impôt, calculée au taux de la première tranche. Puis la commune ajoute son pourcentage, l'[[centimes-additionnels|additionnel communal]].

```text
Tranche 25 % :  16 320 € × 25 %          =  4 080,00 €
Tranche 40 % :  12 480 € × 40 %          =  4 992,00 €
Tranche 45 % :   7 270 € × 45 %          =  3 271,50 €
Impôt de base                              12 343,50 €
− quotité exemptée : 10 910 € × 25 %     −  2 727,50 €
Impôt avant additionnels                    9 616,00 €
+ additionnel communal (ex. 7 %)          +    673,12 €
≈ IPP                                      10 289 €
```

Ce calcul simplifie deux choses : il ne tient compte d'aucune réduction d'impôt, et il ignore le partage entre impôt fédéral et additionnels régionaux. Le taux communal de 7 % n'est qu'un exemple : il dépend de ta commune.

## Taux marginal et taux moyen : deux réponses à deux questions

Avec le même calcul, on peut lire deux taux différents, et les confondre est la source de la plupart des malentendus.

Le **taux marginal** est le taux du dernier euro gagné, celui du seau le plus haut atteint. Dans l'exemple, c'est **45 %**. Il répond à la question : « si je gagne 1 000 € de plus, combien part en impôt ? » Ici, environ 450 €, plus l'additionnel communal.

Le **taux moyen** est l'impôt divisé par le revenu imposable. Dans l'exemple, 9 616 € ÷ 36 070 € ≈ **26,7 %**. Il répond à une autre question : « quelle part de mon revenu imposable va à l'impôt, au total ? » C'est la pression fiscale réelle sur l'ensemble de ton revenu.

Un salarié qui « est à 45 % » paie donc en réalité, sur l'ensemble, nettement moins que 45 %.

## Ce que ça change pour toi

**Une augmentation ne fait jamais baisser ton revenu.** Seul l'euro supplémentaire est taxé au taux supérieur ; tout ce que tu gagnais avant garde son taux. Passer un seuil n'est donc jamais une mauvaise affaire.

**Une déduction « vaut » ton taux marginal.** Une déduction diminue ton revenu imposable : elle retire des euros du seau le plus haut. Dans l'exemple, 1 000 € de revenu imposable en moins, c'est environ 450 € d'impôt en moins. → [[deduction-reduction-credit]]

**La progressivité explique les suppléments chez les couples à deux revenus.** Le [[precompte-professionnel|précompte professionnel]], l'avance retenue chaque mois sur le salaire, est calculé pour chaque salaire comme si l'autre revenu n'existait pas. Au moment du calcul final, les seaux se remplissent autrement que prévu, et un supplément arrive sur l'avertissement-extrait de rôle. → [[avertissement-extrait-de-role]]

## À ne pas confondre

Le **taux marginal** est le taux de la tranche la plus haute atteinte ; le **taux moyen** mesure la pression fiscale réelle sur l'ensemble du revenu. Et quand quelqu'un dit « je passe dans la tranche à 50 % », cela ne veut pas dire que tout son revenu est taxé à 50 % : seule la partie au-delà du seuil l'est.

## Nature des chiffres de cette page

🔴 Le barème (25 % jusqu'à 16 320 €, 40 % jusqu'à 28 800 €, 45 % jusqu'à 49 840 €, 50 % au-delà) et la quotité exemptée de 10 910 € sont des règles officielles de l'exercice d'imposition 2026. 🔵 Le salarié à 36 070 € de revenu net imposable, ses 9 616 € d'impôt, le taux communal de 7 % et les 1 000 € de revenu en plus sont un exemple inventé.
