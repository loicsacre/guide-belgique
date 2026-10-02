---
title: "La maison vue comme un système"
kind: fiche
domain: maison
level: essentiel
nature: stable
scope: [belgique]
status: publie
tags: [maison, systèmes, réseaux, compteurs, entretien, propriétaire]
organisme: "Gestionnaires de réseau (ORES, RESA, Sibelga, Fluvius), communes"
short: "Une maison n'est pas un objet mais un empilement de systèmes (électricité, eau, chauffage, enveloppe, ventilation) qui suivent tous la même chaîne : réseau → compteur → installation privée → appareils → consommation → facture. Comprendre cette chaîne, c'est savoir qui est responsable de quoi et où chercher quand quelque chose cloche."
aliases: [systèmes de la maison, chaîne réseau compteur installation, installation privée, point de livraison]
prerequisites: []
related: [electricite-maison, eau-maison, chauffage-maison, isolation-maison, ventilation-maison, diagnostic-maison, entretien-maison, energie, assurance-habitation]
last_verified: 2026-10-02
sources:
  - title: "SPW Énergie — Portail de l'énergie en Wallonie"
    url: https://energie.wallonie.be/
    org: SPW Énergie
  - title: "Wikifin — Acheter, construire, rénover une habitation"
    url: https://www.wikifin.be/fr/logement-et-emprunt-hypothecaire/acheter-construire-renover-une-habitation/construire-et-renover-3
    org: Wikifin (FSMA)
  - title: "SPF Économie — Énergie"
    url: https://economie.fgov.be/fr/themes/energie
    org: SPF Économie
sidebar:
  order: 1
---

## En langage simple

Quand tu achètes ou loues une maison, tu reçois en réalité **cinq ou six machines imbriquées** : une installation électrique, un circuit d'eau, un système de chauffage, une enveloppe (murs, toit, châssis) qui garde la chaleur, et une ventilation qui renouvelle l'air. Chacune a ses pannes, ses contrôles, ses factures et ses responsables. Personne ne t'explique ça à la remise des clés.

La bonne nouvelle : ces systèmes se ressemblent tous. Ils suivent la même chaîne.

## Pourquoi ça existe

Historiquement, chaque maison produisait ou allait chercher ce dont elle avait besoin (puits, poêle à bois, bougies). Au XXᵉ siècle, les communes puis des intercommunales ont tiré des **réseaux** jusqu'à chaque façade. Pour savoir qui paie quoi, on a posé une frontière physique entre le réseau collectif et la maison : le **compteur**. Tout ce qui est avant le compteur appartient au réseau, tout ce qui est après t'appartient. Cette frontière explique encore aujourd'hui qui tu dois appeler.

## Comment ça marche : la chaîne commune

| Maillon | Électricité | Eau | Gaz / chauffage | Qui en est responsable |
| --- | --- | --- | --- | --- |
| **Réseau** | Câbles dans la rue | Conduite communale | Conduite de gaz | Le gestionnaire de réseau (GRD) ou la société des eaux |
| **Raccordement** | Câble jusqu'à la façade | Branchement | Branchement | Le GRD, mais tu paies les travaux |
| **Compteur** | Compteur électrique | Compteur d'eau | Compteur de gaz | Posé et relevé par le réseau ; placé chez toi |
| **Installation privée** | Tableau, circuits, prises | Tuyauterie, groupe hydrophore | Chaudière, radiateurs | **Toi** (ou le propriétaire si tu loues) |
| **Appareils** | Frigo, plaques, lampes | Robinets, machine à laver | Thermostat, vannes | Toi |
| **Consommation** | kWh | m³ | kWh ou litres de mazout | Mesurée au compteur |
| **Facture** | Fournisseur + réseau | Société des eaux | Fournisseur ou livreur | Payée par l'occupant |

Deux conséquences pratiques :

1. **Une panne avant le compteur** (rue entière dans le noir, pas d'eau dans le quartier) n'est pas ton problème : tu appelles le gestionnaire de réseau, c'est gratuit.
2. **Une panne après le compteur** (un seul circuit qui saute, une fuite sous l'évier) est ta responsabilité et ta facture.

En Belgique, les gestionnaires de réseau sont régionaux et parfois locaux : ORES et RESA en Wallonie, Sibelga à Bruxelles, Fluvius en Flandre pour l'électricité et le gaz ; pour l'eau, la SWDE ou des intercommunales en Wallonie, Vivaqua à Bruxelles, De Watergroep ou Farys en Flandre. Le nom figure sur ta facture. La fiche [[energie]] détaille la différence entre fournisseur et gestionnaire de réseau.

## Les systèmes qui n'ont pas de compteur

L'**enveloppe** (toit, murs, châssis, sol) et la **ventilation** n'arrivent pas d'un réseau, mais elles jouent le même rôle dans la chaîne : elles déterminent combien d'énergie sort de la maison, donc combien tu dois en acheter. Une maison mal isolée avec une excellente chaudière chauffe la rue. C'est pour cela que les fiches [[isolation-maison]] et [[ventilation-maison]] précèdent, dans l'ordre logique, celles sur le chauffage.

## Exemple

Camille vient d'emménager. Un matin, plus de chauffage ni d'eau chaude. Elle applique la chaîne :

- Le réseau : le voisin a du gaz, donc le problème est après le compteur.
- Le compteur : la vanne de gaz est ouverte.
- L'installation : la chaudière affiche un code erreur et le manomètre indique 0,4 bar au lieu de 1 à 1,5 bar. Il manque de l'eau dans le circuit de chauffage.
- La solution : ouvrir le robinet de remplissage de la chaudière jusqu'à 1,2 bar, relancer. Coût : zéro, dix minutes.

Sans le modèle, elle appelait un chauffagiste (déplacement 🟠 souvent 80 à 120 €) pour tourner un robinet.

## Ce que ça change pour toi

- Quand quelque chose ne fonctionne pas, pose d'abord la question « **avant ou après le compteur ?** ». Elle décide qui appeler et qui paie.
- Repère, dès l'emménagement, l'emplacement des **compteurs, vannes d'arrêt et disjoncteur général**. La fiche [[diagnostic-maison]] te donne une liste.
- Chaque système a un **entretien périodique** (chaudière, ventilation, gouttières) et des **contrôles légaux** (installation électrique). La fiche [[entretien-maison]] les rassemble dans un calendrier.
- Le [[peb]] résume l'état de l'enveloppe et du chauffage ; le [Lire un contrôle électrique](../../documents/controle-electrique/) résume l'état de l'électricité. Ces deux documents sont ton point de départ pour comprendre une maison achetée.

## À ne pas confondre

- **Gestionnaire de réseau** (possède câbles et compteurs, intervient en cas de panne de réseau) et **fournisseur** (te vend les kWh, envoie la facture). Tu choisis le second, pas le premier.
- **Installation privée** et **appareils** : un électricien agréé répond de ton tableau, pas de ton lave-vaisselle.
- **Consommation théorique** (le chiffre du PEB) et **consommation réelle** (ta facture) : le premier décrit la maison, le second décrit ta façon de l'habiter.

## Nature des chiffres de cette page

- 🟠 Les prix de déplacement d'un chauffagiste sont des repères de marché, pas des tarifs réglementés.
- 🔵 L'exemple de Camille et la pression de 1,2 bar sont illustratifs ; la pression correcte dépend de ton installation (consulte la notice de la chaudière).
