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

## Qui paie vraiment la TVA

Sur un ticket de caisse, tu lis « TVA 21 % ». La **taxe sur la valeur ajoutée**, c'est toi, consommateur, qui la paies, comprise dans le prix. Mais le magasin ne la garde pas : il la **collecte** pour l'État, puis la lui reverse.

Il y a une subtilité. Le magasin a lui-même payé de la TVA quand il a acheté sa marchandise à ses fournisseurs. Cette TVA-là, il la **récupère** : il la déduit de ce qu'il doit reverser. Résultat : chaque entreprise ne verse à l'État que la TVA sur la **valeur qu'elle a ajoutée**, d'où le nom de la taxe.

Pour une entreprise, la TVA est donc normalement **neutre** : elle l'encaisse d'un côté, la récupère de l'autre, et reverse la différence. Pour toi, consommateur final, c'est un vrai impôt sur ce que tu consommes, parce que tu ne récupères rien. → [[impot-taxe-cotisation]]

## Pourquoi un tel système

Taxer la consommation plutôt que le revenu permet de prélever de manière presque indolore, à chaque achat, auprès de tout le monde, y compris de ceux qui échappent à l'impôt sur le revenu.

Et le mécanisme de **déduction en cascade** a deux avantages. Il évite de taxer plusieurs fois la même valeur au fil de la chaîne. Et il rend la fraude plus difficile : pour récupérer la TVA qu'elle a payée, chaque entreprise a besoin d'une facture de son fournisseur, donc elle a intérêt à l'exiger.

## La chaîne, étape par étape

Suivons un objet du fabricant jusqu'au client, avec des chiffres **fictifs** et un taux de 21 %.

```text
Fabricant vend 100 € + 21 € TVA au grossiste    → verse 21 € à l'État
Grossiste vend 150 € + 31,50 € au magasin       → verse 31,50 − 21 = 10,50 €
Magasin vend 200 € + 42 € au client             → verse 42 − 31,50 = 10,50 €
Client paie 242 € et ne récupère rien           → l'État a reçu 42 € au total = 21 % du prix final
```

Chacun a versé un morceau, mais l'État a reçu au total exactement 21 % du prix payé par le client. Et c'est le client, au bout de la chaîne, qui l'a supportée.

## Les taux

Tout n'est pas taxé au même taux. Le taux normal est de 21 %, mais certains biens et services jugés essentiels ou à encourager bénéficient d'un taux réduit, et d'autres sont exemptés.

:::note[Règle datée — 2026]
| Taux | Exemples |
| --- | --- |
| **21 %** (normal) | La plupart des biens et services : électronique, vêtements, voitures, services professionnels |
| **12 %** | Restauration sur place (hors boissons), logements sociaux, margarine, certains combustibles |
| **6 %** | Alimentation de base, eau, médicaments, livres, transport de personnes, **rénovation d'un logement de plus de 10 ans**, électricité et gaz des particuliers (après les mesures 2022-2023) |
| **0 %** | Quotidiens et hebdomadaires, matières de récupération |
| **Exemptés** | Médecins (soins), enseignement, assurances, locations immobilières (en principe), banques |
:::

## Ce que doit faire un indépendant

Dès qu'il est **assujetti**, c'est-à-dire inscrit à la TVA, un indépendant devient lui-même un maillon de la chaîne. Cela entraîne quelques obligations.

- **Il facture la TVA.** Chaque facture mentionne son numéro BE 0xxx.xxx.xxx, le taux et le montant de TVA. → [[facturation]]
- **Il remplit une déclaration**, trimestrielle si son chiffre d'affaires reste sous 2,5 millions d'euros, mensuelle sinon. Il y paie la différence entre la **TVA due** (celle qu'il a facturée) et la **TVA déductible** (celle qu'il a payée à ses fournisseurs).
- **Il dépose un listing clients annuel**, la liste de ses clients assujettis belges.
- **Il applique l'autoliquidation** pour les opérations **intracommunautaires**, c'est-à-dire avec d'autres pays de l'Union : c'est alors le client assujetti européen qui paie la TVA dans son pays.

Les très petites activités peuvent y échapper. Avec un chiffre d'affaires de moins de **25 000 €** par an, l'indépendant peut opter pour la **franchise** : il ne facture pas de TVA, mais il ne la récupère pas non plus.

Et la TVA déductible ne se récupère pas sur tout. Elle ne vaut que pour des dépenses professionnelles, avec des limites : 50 % au maximum pour une voiture, rien pour le restaurant, des restrictions pour les cadeaux… → [[frais-professionnels]]

## Ce que ça change pour toi

**Comme consommateur**, compare toujours des prix **TVAC** (TVA comprise). Un professionnel te parle souvent en **HTVA** (hors TVA), parce que pour lui la TVA est neutre ; pour toi, elle s'ajoute. → [[cout-reel-achat]]

**Comme propriétaire**, retiens que les travaux de rénovation d'un logement de **plus de 10 ans** sont taxés à 6 % au lieu de 21 %. L'entrepreneur applique ce taux sur base d'une mention sur la facture. → [[devis-travaux]]

**Comme indépendant**, la TVA que tu encaisses **n'est pas à toi**. Mets-la de côté dès que ton client paie, sur un compte séparé. Un retard de déclaration coûte des amendes et des intérêts.

## À ne pas confondre

La TVA n'a rien à voir avec l'impôt sur le revenu : elle frappe ce que tu dépenses, pas ce que tu gagnes, et une entreprise ne la paie pas sur son bénéfice. Le **numéro de TVA** n'est pas un numéro à part : c'est le numéro d'entreprise de la BCE, activé pour la TVA. → [[bce-numero-entreprise]]

## Nature des chiffres de cette page

🔴 Les taux de 21 %, 12 %, 6 % et 0 %, la franchise sous 25 000 €, le seuil de 2,5 millions d'euros pour la déclaration trimestrielle, la limite de 50 % pour la voiture et les 10 ans pour la rénovation sont des règles officielles en 2026. 🔵 La chaîne du fabricant au client (100 €, 150 €, 200 €) est un exemple fictif.
