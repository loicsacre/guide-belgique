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

## Une facture fait trois choses à la fois

On pense d'abord qu'une facture sert à se faire payer. C'est vrai, mais elle fait plus que ça.

Elle **réclame** un paiement : elle dit combien, pour quoi, et pour quand. Elle **prouve** la vente : ton client professionnel en a besoin pour déduire la dépense et récupérer la TVA, et toi pour justifier ce que tu déclares. Enfin, elle **déclenche la TVA** : c'est la facture qui fait naître la TVA que tu devras reverser à l'État. → [[tva]]

Ces trois rôles expliquent pourquoi la loi impose autant de mentions. Une facture mal faite peut faire perdre à ton client son droit de déduire, et t'exposer, toi, à des amendes.

## Ce qui doit figurer sur une facture

Une facture contient toujours les mêmes informations, qu'on retrouve d'ailleurs sur toutes celles que tu reçois d'un professionnel.

- **Une date et un numéro**, qui suit une série continue, sans trou. Le fisc peut ainsi vérifier qu'aucune facture n'a disparu.
- **Tes coordonnées** : ton nom ou ta dénomination, ton adresse, ton numéro d'entreprise BE 0xxx.xxx.xxx (suivi de « TVA » si tu es assujetti) et ton compte bancaire. → [[bce-numero-entreprise]]
- **Les coordonnées du client** : son nom, son adresse et son numéro de TVA s'il est assujetti.
- **La date de la livraison ou de la prestation**, si elle diffère de la date de la facture.
- **Le détail** de ce que tu vends : description, quantité, prix unitaire HTVA (hors TVA).
- **Le calcul de la TVA** : la base par taux, le taux, le montant de TVA et le total TVAC (TVA comprise).
- **Les mentions particulières** quand elles s'appliquent, par exemple « autoliquidation » (le client paie la TVA lui-même, pour une vente à un assujetti d'un autre pays européen), « régime de la franchise » (tu ne factures pas de TVA parce que ton activité est petite) ou « TVA 6 % — habitation de plus de 10 ans ».
- **Les conditions de paiement** : l'échéance et les intérêts de retard.

La même liste, prête à cocher :

```text
□ Date et numéro séquentiel (sans trou)
□ Ton nom ou ta dénomination, adresse, numéro d'entreprise
  BE 0xxx.xxx.xxx (+ « TVA » si assujetti), compte bancaire
□ Nom, adresse, numéro de TVA du client (s'il est assujetti)
□ Date de la livraison ou prestation, si elle est différente
□ Description, quantité, prix unitaire HTVA
□ Base par taux de TVA, taux, montant de TVA, total TVAC
□ Mentions particulières : « autoliquidation », « régime de
  la franchise », « TVA 6 % — habitation de plus de 10 ans »…
□ Conditions de paiement (échéance, intérêts de retard)
```

Pour voir tout cela sur une vraie mise en page, lis le document annoté [Lire une facture](../../documents/facture/).

## Les règles du jeu

**Le moment.** Entre professionnels, la facture doit être émise au plus tard le 15 du mois qui suit la prestation.

**Le format.** Depuis le **1er janvier 2026**, une facture entre assujettis belges doit être **électronique et structurée**. Concrètement, ce n'est plus un PDF envoyé par e-mail, qui ne suffit plus entre entreprises, mais un fichier au format Peppol-BIS, lisible directement par le logiciel du client, et transmis via le réseau **Peppol**, un réseau européen d'échange de factures. Les logiciels de facturation s'en chargent pour toi.

:::note[Règle datée — depuis le 1er janvier 2026]
Facturation électronique structurée (Peppol) obligatoire entre assujettis belges.
:::

**Les particuliers.** Pour un client particulier, la facture n'est pas obligatoire, sauf s'il la demande ou dans certains secteurs, comme la construction ou la vente de voitures. Un ticket ou un reçu suffit le reste du temps.

**Les corrections.** On ne modifie jamais une facture déjà émise. Si elle contient une erreur, on émet une **note de crédit**, une sorte de facture négative qui l'annule en tout ou en partie.

**La conservation.** Les factures se gardent 10 ans. Certains documents ne doivent être gardés que 7 ans, mais en pratique on garde tout 10 ans.

**Le délai de paiement.** Entre entreprises, il est de 30 jours par défaut, et ne peut pas dépasser 60 jours par contrat. En cas de retard, les intérêts de retard légaux et une indemnité forfaitaire de 40 € sont dus de plein droit, c'est-à-dire automatiquement, sans qu'il faille les réclamer d'abord.

## Ce que ça change pour toi

**Prends un logiciel de facturation.** Souvent gratuit ou peu cher, il gère la numérotation, l'envoi via Peppol, les relances et l'export pour ton comptable. C'est le moyen le plus simple de respecter toutes ces règles sans y penser.

**Sache ce que valent un devis et un acompte.** Un **devis signé** est un contrat : il engage les deux parties. Un **acompte**, une partie du prix payée d'avance, donne lieu à une facture d'acompte, avec TVA. → [[devis-travaux]]

**Pour un particulier, d'autres règles s'ajoutent**, celles du droit de la consommation : l'information à donner avant le contrat, le droit de rétractation… → [[contrats-consommation]]

**En cas d'impayé, procède par étapes.**

1. Envoie un **rappel**.
2. Si rien ne bouge, envoie une **mise en demeure** par recommandé : c'est la demande formelle et écrite de payer.
3. Passe ensuite au **recouvrement** : par un huissier, par la procédure de recouvrement de créances incontestées (réservée aux dettes entre entreprises que le client ne conteste pas), ou devant le tribunal de l'entreprise.

Une facture impayée, c'est de l'argent que tu as déjà déclaré et sur lequel tu as peut-être déjà versé la TVA. D'où l'intérêt de suivre tes encaissements de près. → [[tresorerie-cash-flow]]

## À ne pas confondre

Une **facture** et une **note de crédit** vont dans des sens opposés : la première réclame, la seconde annule ou réduit. Un **devis** et une **facture** non plus : le devis propose un prix avant le travail, la facture le réclame après. Et le **chiffre d'affaires** que tu factures n'est pas ce que tu gagnes : il faut encore retirer tes frais, tes cotisations et tes impôts. → [[chiffre-affaires-marge-benefice]]

## Nature des chiffres de cette page

🔴 L'obligation Peppol depuis le 1er janvier 2026, l'émission au plus tard le 15 du mois suivant, la conservation de 10 ans, le délai de paiement de 30 jours (60 au maximum) et l'indemnité forfaitaire de 40 € sont des règles officielles.
