---
title: TVA
kind: fiche
domain: entreprise
level: essentiel
nature: mixte
valid_for: "taux 21/12/6 % ; franchise 25 000 € (2026)"
scope: [federal]
status: publie
tags: [TVA, taxe sur la valeur ajoutée, assujetti, déclaration TVA, taux]
organisme: "SPF Finances"
short: "La taxe sur la valeur ajoutée est payée par le consommateur final, mais collectée par chaque entreprise de la chaîne, qui reverse à l'État la différence entre la TVA facturée à ses clients et la TVA payée à ses fournisseurs."
aliases: [taxe sur la valeur ajoutée, assujetti, TVA déductible, TVA due, déclaration TVA, listing clients, franchise de la taxe, numéro de TVA, HTVA, TVAC, intracommunautaire]
prerequisites: [impot-taxe-cotisation]
related: [facturation, independant, frais-professionnels, bce-numero-entreprise, cout-reel-achat]
last_verified: 2026-10-02
sources:
  - title: Taux de TVA en Belgique
    url: https://www.accountable.eu/fr-be/blog/taux-tva-belgique
    org: Accountable
  - title: SPF Finances — Entreprises, TVA
    url: https://finances.belgium.be/fr/entreprises
    org: SPF Finances
sidebar:
  order: 3
---

## En langage simple

Sur un ticket de caisse, tu vois « TVA 21 % » : c'est toi, consommateur, qui la paies. Mais ce n'est pas le magasin qui la garde : il la **collecte** pour l'État. Et lui-même a payé de la TVA à ses fournisseurs, qu'il **récupère**. Chacun ne verse que la TVA sur la **valeur qu'il a ajoutée**. Pour une entreprise, la TVA est donc normalement **neutre** ; pour toi, c'est un impôt sur la consommation.

## Pourquoi ça existe

Taxer la consommation plutôt que le revenu permet de prélever de manière indolore, à chaque achat, auprès de tous, y compris ceux qui échappent à l'impôt sur le revenu. Le mécanisme de **déduction en cascade** évite de taxer plusieurs fois la même valeur et rend la fraude plus difficile : chaque entreprise a intérêt à exiger une facture de son fournisseur.

## La chaîne

```text
Fabricant vend 100 € + 21 € TVA au grossiste    → verse 21 € à l'État
Grossiste vend 150 € + 31,50 € au magasin       → verse 31,50 − 21 = 10,50 €
Magasin vend 200 € + 42 € au client             → verse 42 − 31,50 = 10,50 €
Client paie 242 € et ne récupère rien           → l'État a reçu 42 € au total = 21 % du prix final
```

## Les taux

:::note[Règle datée — 2026]
| Taux | Exemples |
| --- | --- |
| **21 %** (normal) | La plupart des biens et services, électronique, vêtements, voitures, services professionnels |
| **12 %** | Restauration sur place (hors boissons), logements sociaux, margarine, certains combustibles |
| **6 %** | Alimentation de base, eau, médicaments, livres, transport de personnes, **rénovation d'un logement de plus de 10 ans**, électricité et gaz des particuliers (après les mesures 2022-2023) |
| **0 %** | Quotidiens et hebdomadaires, matières de récupération |
| **Exemptés** | Médecins (soins), enseignement, assurances, locations immobilières (en principe), banques |
:::

## Pour l'indépendant

| Obligation | Détail |
| --- | --- |
| **Facturer** la TVA | Mention du numéro BE 0xxx.xxx.xxx, taux, montant. Voir [[facturation]] |
| **Déclaration** | Trimestrielle (CA < 2,5 M€) ou mensuelle ; paiement de la différence TVA due − TVA déductible |
| **Listing clients** annuel | Clients assujettis belges |
| **Franchise** | CA < **25 000 €**/an : option pour ne pas facturer de TVA (ni la récupérer) |
| Opérations **intracommunautaires** | Autoliquidation : le client assujetti européen paie la TVA dans son pays |

La **TVA déductible** n'est récupérable que sur des dépenses professionnelles, avec des limites (voitures : max 50 %, restaurant : 0 %, cadeaux…).

## Ce que ça change pour toi

- **Consommateur** : compare des prix **TVAC** ; un professionnel te parle souvent **HTVA**.
- **Propriétaire** : les travaux de rénovation d'un logement de **plus de 10 ans** sont à 6 % (l'entrepreneur l'applique sur base d'une mention sur la facture).
- **Indépendant** : la TVA encaissée **n'est pas à toi** ; mets-la de côté dès réception. Un retard de déclaration coûte amendes et intérêts.
