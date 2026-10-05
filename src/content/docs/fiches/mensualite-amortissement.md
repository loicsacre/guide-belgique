---
title: Mensualité et tableau d'amortissement
kind: fiche
domain: credit
level: utile
nature: stable
scope: [federal]
status: publie
tags: [mensualité, amortissement, capital restant dû, tableau]
organisme: "Banque"
short: "Chaque mensualité contient une part d'intérêts (calculée sur ce qu'il reste à rembourser) et une part de capital ; au début, surtout des intérêts, à la fin, surtout du capital. Le tableau d'amortissement détaille cette évolution mois par mois."
aliases: [tableau d'amortissement, capital restant dû, annuité constante, amortissement, remboursement anticipé, indemnité de remploi]
prerequisites: [credit]
related: [taeg, credit-hypothecaire, taux-fixe-variable, patrimoine-net, amortissement-comptable]
last_verified: 2026-10-02
sources:
  - title: Wikifin — Emprunt hypothécaire
    url: https://www.wikifin.be/fr/logement-et-emprunt-hypothecaire
    org: Wikifin (FSMA)
sidebar:
  order: 4
---

## Une mensualité constante, mais pas toujours la même

Quand tu rembourses un crédit, tu paies en général le même montant chaque mois : c'est la **mensualité**. Pourtant, ce montant identique ne contient pas la même chose au premier mois et au dernier.

Chaque mensualité se compose de deux parts. Une part d'**intérêts**, le prix que tu paies à la banque pour l'argent prêté. Et une part de **capital**, c'est-à-dire de remboursement réel de la somme empruntée. → [[credit]]

Les intérêts se calculent chaque mois sur le **capital restant dû**, ce qu'il te reste encore à rembourser. Au début, ce montant est énorme, donc les intérêts aussi : ils prennent la plus grosse part de la mensualité, et il reste peu pour rembourser le capital. Mais chaque mois, le capital restant dû baisse un peu, donc les intérêts baissent, donc la part de capital augmente. Résultat : au début, tu « loues » surtout de l'argent ; à la fin, tu le rembourses.

Le document qui détaille cette évolution, mois par mois, s'appelle le **tableau d'amortissement**. « Amortir » un crédit, c'est le rembourser petit à petit.

## Un exemple : 250 000 € à 3 % sur 25 ans

Prenons un crédit **fictif** de 250 000 € à 3 % sur 25 ans. La mensualité est de 1 185,53 € (pour un emprunt de 200 000 € aux mêmes conditions, elle serait d'environ 948 €).

Au premier mois, la banque calcule les intérêts sur la totalité du capital. Le taux annuel de 3 % est divisé par 12 pour obtenir un taux mensuel :

```text
Intérêts du mois 1  = 250 000 € × 3 % ÷ 12  = 625,00 €
Capital remboursé   = 1 185,53 € − 625,00 €  = 560,53 €
```

Plus de la moitié de ta première mensualité part donc en intérêts. Voici comment la répartition évolue ensuite.

| Mois | Intérêts | Capital remboursé | Capital restant dû après |
| ---: | ---: | ---: | ---: |
| 1 | 625,00 € | 560,53 € | 249 439 € |
| 2 | 623,60 € | 561,93 € | 248 877 € |
| 120 (10 ans) | ≈ 430 € | ≈ 755 € | ≈ 171 700 € |
| 300 (fin) | ≈ 3 € | ≈ 1 183 € | 0 € |

Au deuxième mois, les intérêts ont baissé de 1,40 €, parce que le capital restant dû a un peu diminué. Au 120e mois, après dix ans, l'équilibre a basculé : la part de capital dépasse nettement celle des intérêts. Au dernier mois, presque tout est du capital.

Le chiffre qui surprend le plus : après 10 ans, tu as payé environ 142 000 € de mensualités, mais tu n'as remboursé que 78 000 € de capital. Le reste, ce sont des intérêts. Tu peux voir un vrai tableau annoté dans le document [Lire un tableau d'amortissement](../../documents/tableau-amortissement/), ou faire le calcul avec tes chiffres dans le [simulateur de crédit](../../outils/credit/).

## Pourquoi c'est utile de le savoir

Ce mécanisme a trois conséquences très concrètes.

- **Revendre tôt coûte cher.** Après 5 ans, ton capital restant dû est encore proche du montant emprunté au départ. Or tu as déjà payé les frais d'achat et beaucoup d'intérêts. Si tu revends à ce moment-là, le prix de vente sert surtout à rembourser la banque.
- **Rembourser par anticipation rapporte le plus au début.** C'est là que les intérêts sont les plus lourds, donc chaque euro de capital remboursé en avance t'en fait économiser davantage. En Belgique, tu peux rembourser ton crédit hypothécaire avant terme, moyennant une **indemnité de remploi** (une pénalité qui compense la banque) de maximum 3 mois d'intérêts sur le montant remboursé.
- **Raccourcir vaut mieux que réduire.** Quand tu rembourses une partie en avance, tu peux choisir de garder la même mensualité sur une durée plus courte, ou de baisser la mensualité sur la même durée. Raccourcir la durée est ce qui économise le plus d'intérêts.

## Les autres façons de rembourser

La mensualité constante est la norme, mais ce n'est pas la seule formule possible.

| Formule | Principe |
| --- | --- |
| **Mensualités constantes** (la norme) | Le même montant chaque mois, avec la répartition qui évolue comme dans l'exemple. |
| **Amortissement constant** | La même part de capital chaque mois. Les mensualités sont donc dégressives : le début est plus lourd, mais tu paies moins d'intérêts au total. |
| **Progressif ou dégressif** | Les mensualités montent ou descendent chaque année selon un pourcentage prévu au contrat. |
| **Terme fixe (bullet)** | Tu ne paies que les intérêts, puis tout le capital en une fois à la fin. C'est rare, et adossé à une assurance ou un placement qui doit fournir ce capital. |

## Ce que ça change pour toi

**Demande le tableau d'amortissement avec l'offre.** Il montre ton capital restant dû à chaque date. C'est le chiffre dont tu auras besoin si tu veux un jour racheter ton crédit, le renégocier ou vendre ton bien.

**Vois la part de capital comme de l'épargne.** Chaque euro de capital remboursé augmente ton [[patrimoine-net]] d'autant : la dette baisse, le bien reste. C'est une forme d'épargne forcée, qui grossit au fil des années.

## À ne pas confondre

L'**amortissement d'un crédit**, c'est son remboursement progressif. En comptabilité, le même mot désigne autre chose : la façon dont une entreprise étale le coût d'un achat (une machine, un ordinateur) sur plusieurs années, à mesure qu'il s'use. → [[amortissement-comptable]]

## Nature des chiffres de cette page

🔴 L'indemnité de remploi de maximum 3 mois d'intérêts est une règle légale du crédit hypothécaire belge. 🔵 Le crédit de 250 000 € à 3 % sur 25 ans, sa mensualité de 1 185,53 €, son tableau et les 948 € pour 200 000 € sont un exemple fictif.
