---
title: Facture et facturation
kind: fiche
domain: entreprise
level: utile
nature: mixte
valid_for: "facturation électronique B2B obligatoire depuis le 1er janvier 2026 (Peppol)"
scope: [federal]
status: publie
tags: [facture, mentions obligatoires, Peppol, facturation électronique, délai de paiement]
organisme: "SPF Finances, SPF Économie"
short: "Une facture est le document légal qui constate une vente entre professionnels (obligatoire) ou vers un particulier (sur demande), avec des mentions imposées ; depuis 2026, entre entreprises belges, elle doit être électronique structurée (Peppol)."
aliases: [facture, note de crédit, mentions obligatoires, e-facturation, Peppol, délai de paiement, mise en demeure, acompte, devis]
prerequisites: [tva]
related: [independant, frais-professionnels, contrats-consommation, chiffre-affaires-marge-benefice]
last_verified: 2026-10-02
sources:
  - title: SPF Finances — Facturation électronique
    url: https://finances.belgium.be/fr/entreprises
    org: SPF Finances
  - title: SPF Économie — Facturation
    url: https://economie.fgov.be/fr
    org: SPF Économie
sidebar:
  order: 4
---

## En langage simple

La facture fait trois choses à la fois : elle **réclame** un paiement, elle **prouve** la vente (pour le client qui déduit, pour toi qui déclares), et elle **déclenche la TVA**. Une facture mal faite peut faire perdre la déduction au client et t'exposer à des amendes.

## Les mentions obligatoires

```text
Date et numéro séquentiel (sans trou)
Ton nom/dénomination, adresse, numéro d'entreprise BE 0xxx.xxx.xxx (+ « TVA » si assujetti), compte bancaire
Nom, adresse, numéro de TVA du client (si assujetti)
Date de la livraison/prestation si différente
Description, quantité, prix unitaire HTVA
Base par taux de TVA, taux, montant de TVA, total TVAC
Mentions particulières : « autoliquidation », « régime de la franchise », « TVA 6 % — habitation > 10 ans »…
Conditions de paiement (échéance, intérêts de retard)
```

## Les règles du jeu

| Règle | Détail |
| --- | --- |
| **Quand** | Au plus tard le 15 du mois suivant la prestation (B2B) |
| **Électronique** | Depuis le **1er janvier 2026**, factures **structurées** (format Peppol-BIS, via le réseau Peppol) obligatoires entre assujettis belges ; un PDF par e-mail ne suffit plus en B2B. Les logiciels de facturation s'en chargent |
| **Particuliers** | Facture non obligatoire sauf demande ou secteurs spécifiques (construction, voitures) ; ticket ou reçu |
| **Correction** | Jamais modifier une facture émise : émettre une **note de crédit** |
| **Conservation** | 10 ans (7 ans pour certains documents, 10 ans en pratique) |
| **Délai de paiement** | 30 jours par défaut entre entreprises, max 60 jours contractuels ; intérêts de retard légaux et indemnité forfaitaire de 40 € dus de plein droit |

## Ce que ça change pour toi

- **Indépendant** : un logiciel de facturation (souvent gratuit ou peu cher) gère numérotation, Peppol, relances et export pour le comptable.
- **Devis signé** = contrat ; **acompte** = facture d'acompte avec TVA.
- Pour les **particuliers**, les règles de la consommation s'ajoutent (information précontractuelle, rétractation) : voir [[contrats-consommation]].
- Impayé : rappel → **mise en demeure** par recommandé → recouvrement (huissier, procédure de recouvrement de créances incontestées entre entreprises, ou tribunal de l'entreprise).
