---
title: Cotisations sociales
kind: fiche
domain: securite-sociale
level: essentiel
nature: mixte
valid_for: "taux en vigueur en 2026"
scope: [federal]
organisme: "ONSS"
short: "Des prélèvements sur le salaire, payés par le travailleur et par l'employeur, qui financent la sécurité sociale : pensions, soins de santé, chômage, maladie…"
aliases: [cotisations personnelles, cotisations patronales, CSSS]
prerequisites: [salaire-brut]
related: [securite-sociale, onss, precompte-professionnel, salaire-net]
last_verified: 2026-10-02
sources:
  - title: Quelles cotisations ?
    url: https://www.socialsecurity.be/site_fr/employer/infos/employers_nsso/which-contributions.htm
    org: ONSS / Sécurité sociale
  - title: Salaire brut / net
    url: https://www.lacsc.be/vos-droits/travailler-dans-le-secteur-prive/salaire/salaire-brut-net
    org: CSC
sidebar:
  order: 1
---

## En langage simple

C'est une **assurance collective obligatoire**. Tant que tu travailles, toi et ton employeur payez ; quand un risque arrive (maladie, perte d'emploi, retraite…), le système te verse un revenu ou rembourse des frais.

## Pourquoi ça existe

Avant 1944, perdre son emploi, tomber malade ou vieillir sans fortune signifiait la misère ou la charité. Le pacte social d'après-guerre a créé une **assurance obligatoire** financée par le travail : tout le monde cotise, donc tout le monde est couvert, et personne ne peut en être exclu pour mauvaise santé. Les cotisations sont le prix de cette couverture universelle.

## Le flux

```text
           salaire brut
                │
   ┌────────────┴─────────────┐
   ▼                          ▼
part personnelle          part patronale
(retenue sur ton brut)    (payée en plus du brut)
   │                          │
   └────────────┬─────────────┘
                ▼
              ONSS  — perçoit et répartit
                │
   ┌──────┬─────┼──────┬──────────┬───────────┐
   ▼      ▼     ▼      ▼          ▼           ▼
pension  soins  maladie chômage  accidents  vacances…
        de santé invalidité      du travail
```

| | Part personnelle | Part patronale |
| --- | --- | --- |
| Qui paie ? | Toi (retenue sur le brut) | L'employeur (en plus du brut) |
| Visible sur ta fiche ? | Oui | Généralement non |
| Ordre de grandeur | **13,07 %** du brut | Environ un quart du brut, souvent plus |

:::note[Règle datée — 2026]
Le taux personnel de **13,07 %** est stable depuis longtemps. Pour les **ouvriers**, il est calculé sur 108 % du brut (pour financer le pécule de vacances versé par la caisse de vacances). Pour les bas salaires, le **bonus à l'emploi** réduit cette cotisation.
:::

## Une deuxième ligne : la cotisation spéciale de sécurité sociale

Sur ta fiche de paie, tu verras aussi une **cotisation spéciale de sécurité sociale** (CSSS). Elle est retenue chaque mois, mais son montant définitif dépend des revenus de ton ménage : elle est **régularisée sur ton [[avertissement-extrait-de-role]]**, comme le précompte.

## Exemple

Employé, brut mensuel 3 500 € :

```text
3 500,00 € × 13,07 % = 457,45 € de cotisations personnelles
3 500,00 − 457,45    = 3 042,55 € de revenu imposable (base du précompte)
```

## Ce que ça change pour toi

- Les cotisations sont **déduites avant l'impôt** : tu ne paies pas d'impôt sur cette part.
- Elles ouvrent des **droits** : périodes de travail = droits au chômage, à la pension, aux indemnités maladie.
- Elles diffèrent de l'impôt : l'impôt finance l'État en général, les cotisations financent la protection sociale. Voir [[impot-taxe-cotisation]].

## À ne pas confondre

| Terme | Ce que c'est |
| --- | --- |
| Cotisations sociales (salarié) | Via l'employeur, vers l'ONSS. |
| Cotisations sociales (indépendant) | Payées par l'indépendant à une caisse d'assurances sociales, trimestriellement. |
| Cotisation mutuelle | Petite cotisation à ta mutualité pour les services complémentaires : autre chose. |
