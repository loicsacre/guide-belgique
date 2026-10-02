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
related: [tranches-imposition, quotite-exemptee, ipp, precompte-professionnel]
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

## En langage simple

L'État ne taxe pas ton brut. Il retire d'abord ce que tu as déjà « donné » à la sécurité sociale, puis une somme censée couvrir ce que ton travail te coûte (déplacements, matériel…). Ce qui reste, c'est le **revenu imposable** : la matière première des [[tranches-imposition|tranches d'imposition]].

## Deux « imposables » à ne pas mélanger

| Où tu le vois | Calcul | Sert à |
| --- | --- | --- |
| Ta [[fiche-de-paie]] (« rémunération imposable ») | brut − cotisations ONSS personnelles | Calculer le [[precompte-professionnel]] du mois |
| Ton [[avertissement-extrait-de-role\|AER]] (« revenu net imposable ») | brut annuel − ONSS − **frais professionnels** | Calculer l'[[ipp]] final |

## Le chemin complet (salarié)

```text
salaire brut annuel (+ avantages en nature)
  − cotisations sociales personnelles
  = rémunération brute imposable
  − frais professionnels (forfait OU frais réels)
  = REVENU NET IMPOSABLE
  + autres revenus imposables (immobiliers, divers…)
  = revenu imposable globalement  ──►  barème par tranches
```

## Les frais professionnels

Tu as le choix entre deux méthodes, chaque année :

| Méthode | Principe | Pour qui |
| --- | --- | --- |
| **Forfait** (par défaut) | Un pourcentage de ta rémunération, plafonné. Rien à prouver. | La grande majorité des salariés. |
| **Frais réels** | Tu déclares tes vrais frais, avec justificatifs. | Gros trajets domicile-travail, frais importants non remboursés par l'employeur. |

:::note[Règle datée — exercice d'imposition 2026]
Forfait des salariés : **30 %** de la rémunération imposable, avec un maximum de **5 930 €**. Le plafond est atteint dès environ 19 800 € de rémunération imposable annuelle.
:::

## Exemple

Rémunération brute imposable annuelle (déjà sans ONSS) de 42 000 € :

```text
  42 000 €
−  5 930 €   forfait (30 % = 12 600 €, mais plafonné à 5 930 €)
= 36 070 €   revenu net imposable
```

C'est sur ces 36 070 € que s'appliquent les tranches (suite de l'exemple dans [[tranches-imposition]]).

## Ce que ça change pour toi

- Une **prime** ou un **avantage en nature** augmente ton revenu imposable ; un **remboursement de frais** justifié par l'employeur, non.
- Les frais réels ne valent la peine que s'ils **dépassent le forfait** — et ils demandent des preuves.
- Les déductions (qui réduisent le revenu imposable) et les réductions (qui réduisent l'impôt) ne fonctionnent pas pareil : voir [[deduction-reduction-credit]].

## À ne pas confondre

| Terme | Ce que c'est |
| --- | --- |
| Revenu imposable | La base sur laquelle on calcule. |
| Impôt | Le résultat du calcul sur cette base. |
| Net en poche | Ce qui arrive sur ton compte : rien à voir avec le revenu imposable. |
