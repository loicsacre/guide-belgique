---
title: Tranches d'imposition et taux marginal
kind: fiche
domain: fiscalite
level: essentiel
nature: mixte
valid_for: "exercice d'imposition 2026 (revenus 2025)"
scope: [federal]
short: "Ton revenu imposable est découpé en tranches taxées de plus en plus fort (25 % à 50 %) : seule la partie qui dépasse un seuil est taxée au taux supérieur."
aliases: [barème progressif, taux marginal, taux moyen, impôt progressif]
prerequisites: [revenu-imposable]
related: [quotite-exemptee, ipp, centimes-additionnels, precompte-professionnel]
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

## En langage simple

Imagine des seaux empilés. Ton revenu remplit d'abord le seau à 25 %, puis celui à 40 %, puis 45 %, puis 50 %. Chaque euro est taxé au taux **du seau où il tombe**, pas au taux du dernier seau.

## Le barème

:::note[Règle datée — exercice d'imposition 2026 (revenus 2025)]
| Tranche de revenu imposable | Taux |
| --- | ---: |
| 0 → 16 320 € | 25 % |
| 16 320 → 28 800 € | 40 % |
| 28 800 → 49 840 € | 45 % |
| au-delà de 49 840 € | 50 % |

Les seuils sont indexés chaque année ; les taux, eux, bougent rarement.
:::

## Exemple (suite de [[revenu-imposable]])

Revenu net imposable : **36 070 €**, isolé, sans enfant.

```text
Tranche 25 % :  16 320 €          × 25 % =  4 080,00 €
Tranche 40 % :  12 480 €          × 40 % =  4 992,00 €
Tranche 45 % :   7 270 €          × 45 % =  3 271,50 €
                                   ─────────────────────
Impôt de base                              12 343,50 €
− quotité exemptée : 10 910 € × 25 %     −  2 727,50 €
                                   ─────────────────────
Impôt avant additionnels                    9 616,00 €
+ additionnel communal (ex. 7 %)          +    673,12 €
                                   ─────────────────────
≈ IPP                                      10 289 €
```

Simplifications : pas de réductions d'impôt, et on ignore le partage entre impôt fédéral et additionnels régionaux. Le taux communal de 7 % est un exemple : il dépend de ta commune.

## Taux marginal vs taux moyen

| | Définition | Dans l'exemple |
| --- | --- | --- |
| **Taux marginal** | Le taux du dernier euro gagné | 45 % |
| **Taux moyen** | Impôt total ÷ revenu imposable | 9 616 / 36 070 ≈ **26,7 %** |

- Le **taux marginal** répond à : « si je gagne 1 000 € de plus, combien part en impôt ? » (ici ≈ 450 €, plus l'additionnel).
- Le **taux moyen** répond à : « quelle part de mon revenu imposable va à l'impôt ? »

## Ce que ça change pour toi

- **Une augmentation ne fait jamais baisser ton revenu** : seul l'euro supplémentaire est taxé au taux supérieur.
- Une déduction « vaut » ton taux marginal : 1 000 € de revenu imposable en moins = environ 450 € d'impôt en moins dans l'exemple.
- C'est la progressivité qui explique les **suppléments chez les couples** à deux revenus : chaque précompte est calculé comme si l'autre revenu n'existait pas.

## À ne pas confondre

| Terme | Ce que c'est |
| --- | --- |
| Taux marginal | Taux de la tranche la plus haute atteinte. |
| Taux moyen | Pression fiscale réelle sur l'ensemble. |
| « Je passe dans la tranche à 50 % » | Seule la partie au-delà du seuil est taxée à 50 %. |
