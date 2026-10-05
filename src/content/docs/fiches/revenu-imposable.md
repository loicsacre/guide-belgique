---
title: Revenu imposable
kind: fiche
domain: fiscalite
level: essentiel
nature: mixte
valid_for: "exercice d'imposition 2026 (revenus 2025)"
scope: [federal]
organisme: "SPF Finances"
short: "La part de tes revenus sur laquelle l'impôt est réellement calculé : ce qui reste après les cotisations sociales et les frais professionnels."
aliases: [base imposable, revenu net imposable, frais professionnels forfaitaires, forfait de frais, frais réels]
prerequisites: [salaire-brut, cotisations-sociales]
related: [tranches-imposition, quotite-exemptee, ipp, precompte-professionnel, frais-professionnels, categories-de-revenus, deduction-reduction-credit]
last_verified: 2026-10-02
sources:
  - title: Plafonds fiscaux — exercice d'imposition 2026
    url: https://assets.contenthub.wolterskluwer.com/api/public/content/3084229-plafonds-fiscaux-3a47085543
    org: Wolters Kluwer
  - title: SPF Finances — Particuliers
    url: https://finances.belgium.be/fr/particuliers
    org: SPF Finances
sidebar:
  order: 3
---

## L'impôt ne se calcule pas sur ton brut

On pourrait croire que le fisc applique ses taux à ton [[salaire-brut|salaire brut]], le montant inscrit dans ton contrat. Ce n'est pas le cas. Avant de calculer quoi que ce soit, l'État retire deux choses.

D'abord, ce que tu as déjà « donné » à la sécurité sociale : les [[cotisations-sociales|cotisations sociales]] personnelles, retenues chaque mois sur ton salaire par l'ONSS. Ensuite, une somme censée couvrir ce que ton travail te coûte, tes déplacements, ton matériel… ce sont les **frais professionnels**.

Ce qui reste, c'est le **revenu imposable** : la matière première sur laquelle on applique ensuite les [[tranches-imposition|tranches d'imposition]], ces parts de revenu taxées de plus en plus fort.

## Pourquoi tu vois deux « imposables » différents

Le mot « imposable » apparaît sur deux documents, avec deux montants qui ne correspondent pas. C'est normal : ils ne mesurent pas la même chose.

| Où tu le vois | Comment on le calcule | À quoi ça sert |
| --- | --- | --- |
| Ta [[fiche-de-paie]] (« rémunération imposable ») | brut − cotisations ONSS personnelles | Calculer le [[precompte-professionnel]] du mois, l'avance sur ton impôt |
| Ton [[avertissement-extrait-de-role\|AER]] (« revenu net imposable ») | brut annuel − ONSS − **frais professionnels** | Calculer l'[[ipp]], ton impôt final |

La différence entre les deux, ce sont donc les frais professionnels : la fiche de paie ne les retire pas, le calcul final de l'impôt, si.

## Le chemin complet, pour un salarié

Du brut jusqu'au montant qui passe dans le barème, le calcul se fait en quatre temps.

1. On part du **salaire brut annuel**, auquel s'ajoutent les avantages en nature (une voiture de société, par exemple), qui sont des formes de rémunération.
2. On retire les **cotisations sociales personnelles**. On obtient la **rémunération brute imposable**.
3. On retire les **frais professionnels**, au forfait ou au réel. On obtient le **revenu net imposable**.
4. On ajoute les **autres revenus imposables** que tu aurais, par exemple des revenus immobiliers ou divers. On obtient le **revenu imposable globalement**, celui qui passe dans le barème par tranches. → [[categories-de-revenus]]

## Les frais professionnels : forfait ou frais réels ?

Pour les frais professionnels, tu as le choix entre deux méthodes, et tu peux changer chaque année.

| Méthode | Principe | Pour qui |
| --- | --- | --- |
| **Forfait** (par défaut) | Un pourcentage de ta rémunération, plafonné. Rien à prouver. | La grande majorité des salariés. |
| **Frais réels** | Tu déclares tes vrais frais, avec justificatifs. | Ceux qui ont de gros trajets domicile-travail ou des frais importants que l'employeur ne rembourse pas. |

Le forfait est appliqué automatiquement si tu ne fais rien. Il est calculé en pourcentage, mais il a un plafond, que la plupart des salariés atteignent vite.

:::note[Règle datée — exercice d'imposition 2026]
Forfait des salariés : **30 %** de la rémunération imposable, avec un maximum de **5 930 €**. Le plafond est atteint dès environ 19 800 € de rémunération imposable annuelle.
:::

Les frais réels ne valent donc la peine que s'ils **dépassent le forfait**, et ils demandent des preuves. → [[frais-professionnels]]

## Un exemple qu'on suit

Prenons le salarié **fictif** qui sert d'exemple dans tout le guide : une rémunération brute imposable annuelle de 42 000 €, c'est-à-dire déjà sans les cotisations ONSS.

Il prend le forfait. En théorie, 30 % de 42 000 € font 12 600 €, mais le forfait est plafonné à 5 930 € : c'est ce montant qui est retiré.

```text
  42 000 €   rémunération imposable
−  5 930 €   forfait (30 % = 12 600 €, mais plafonné à 5 930 €)
= 36 070 €   revenu net imposable
```

C'est sur ces 36 070 € que s'appliquent les tranches. La suite du calcul, jusqu'aux 9 616 € d'impôt, est dans [[tranches-imposition]].

## Ce que ça change pour toi

**Tout ce qui est rémunération augmente ton revenu imposable.** Une prime, ou un avantage en nature comme une voiture de société, s'y ajoute. En revanche, un remboursement de frais que ton employeur te verse sur justificatifs n'est pas une rémunération : il n'y entre pas.

**Réduire le revenu imposable et réduire l'impôt, ce n'est pas pareil.** Une **déduction** diminue le revenu imposable, avant le barème : elle te fait gagner ton taux le plus élevé sur le montant déduit. Une **réduction d'impôt** se retire de l'impôt déjà calculé. Les deux ne fonctionnent pas de la même manière. → [[deduction-reduction-credit]]

## À ne pas confondre

Le **revenu imposable** est la base sur laquelle on calcule ; l'**impôt** est le résultat de ce calcul sur cette base. Et ton **net en poche**, ce qui arrive chaque mois sur ton compte, n'a rien à voir avec le revenu imposable : c'est ce qui reste après les cotisations et après le précompte. → [[salaire-net]]

## Nature des chiffres de cette page

🔴 Le forfait de frais professionnels de 30 %, plafonné à 5 930 € (plafond atteint vers 19 800 € de rémunération imposable), est une règle officielle de l'exercice d'imposition 2026. 🔵 Le salarié à 42 000 € de rémunération imposable et ses 36 070 € de revenu net imposable sont un exemple inventé.
