---
title: "La pompe à chaleur"
kind: fiche
domain: maison
level: utile
nature: mixte
valid_for: "primes régionales 2026 (Wallonie : prime Habitation, régime permanent dès 10/2026)"
scope: [belgique]
status: publie
tags: [pompe à chaleur, PAC, air-eau, géothermie, COP, SCOP, électricité, chauffage]
organisme: "SPW Énergie, Bruxelles Environnement, VEKA ; installateurs certifiés"
short: "Une pompe à chaleur déplace de la chaleur (de l'air, du sol ou de l'eau) vers la maison au lieu d'en produire par combustion. Avec 1 kWh d'électricité elle fournit 3 à 4 kWh de chaleur, à condition que la maison soit assez isolée pour se contenter d'eau tiède."
aliases: [PAC, pompe à chaleur air-eau, pompe à chaleur air-air, géothermie, COP, SCOP]
prerequisites: [chauffage-maison, isolation-maison]
related: [electricite-maison, eau-chaude-sanitaire, panneaux-solaires, primes-renovation, ordre-des-travaux, energie, peb]
last_verified: 2026-10-02
sources:
  - title: "SPW Énergie — Pompes à chaleur"
    url: https://energie.wallonie.be/
    org: SPW Énergie
  - title: "Certinergie — Guide des primes Habitation en Wallonie"
    url: https://www.certinergie.be/fr/audit-logement-wallonie/guide-primes-habitation-wallonie
    org: Certinergie
  - title: "Wikifin — Acheter, construire, rénover une habitation"
    url: https://www.wikifin.be/fr/logement-et-emprunt-hypothecaire/acheter-construire-renover-une-habitation/construire-et-renover-3
    org: Wikifin (FSMA)
sidebar:
  order: 6
---

## En langage simple

Un frigo prend la chaleur à l'intérieur de la boîte et la rejette derrière, dans la cuisine. Une **pompe à chaleur** (PAC) est un frigo à l'envers : elle prend la chaleur de l'air extérieur (même à −5 °C, l'air contient de la chaleur) et la rejette dans ta maison. Comme elle **déplace** la chaleur au lieu de la créer, elle en fournit beaucoup plus qu'elle ne consomme d'électricité.

## Pourquoi ça existe

L'Europe et les Régions veulent sortir les logements des énergies fossiles. Une chaudière gaz à condensation convertit 1 kWh de gaz en 🟠 0,95 kWh de chaleur ; une PAC convertit 1 kWh d'électricité en 🟠 3 à 4 kWh de chaleur. Si l'électricité est produite sans carbone (ou par tes [[panneaux-solaires]]), le gain climatique est net. Mais l'électricité coûte 🟠 2,5 à 3 fois le prix du gaz au kWh en Belgique : la PAC n'est **financièrement** intéressante que si son rendement réel est bon, donc si la maison est adaptée.

## Comment ça marche

### Les types

| Type | Source | Émetteurs | Usage typique |
| --- | --- | --- | --- |
| **Air-eau** | Air extérieur (unité dehors) | Radiateurs basse température ou plancher | Le cas le plus courant en rénovation |
| **Air-air** | Air extérieur | Souffle de l'air chaud (split) | Chauffe une ou deux pièces, fait aussi climatiseur ; pas d'eau chaude sanitaire |
| **Sol-eau (géothermie)** | Captage horizontal ou forage vertical | Plancher ou radiateurs | Rendement le plus stable, coût et place du captage |
| **Eau-eau** | Nappe phréatique | Idem | Rare, autorisation nécessaire |
| **Hybride** | PAC air-eau + chaudière gaz | Existants | La chaudière prend le relais quand il gèle : transition pour maison moyennement isolée |

### COP, SCOP et la température de départ

Le **COP** (coefficient de performance) est le rapport chaleur fournie / électricité consommée à un instant donné ; le **SCOP** est la moyenne sur une saison. Le point essentiel : **plus l'eau envoyée aux radiateurs est chaude, plus le COP s'effondre.** Une PAC qui doit produire de l'eau à 65 °C pour de vieux petits radiateurs tombe à un COP de 🟠 2 par temps froid, c'est-à-dire qu'elle coûte autant qu'une chaudière gaz. À 35 °C (plancher chauffant, grands radiateurs, maison isolée), elle tourne à 🟠 4 ou plus.

D'où la règle de bon sens, que les Régions ont inscrite dans leurs primes : **isoler d'abord, remplacer la production ensuite** ([[ordre-des-travaux]]). Un installateur sérieux fait un **calcul de déperditions** pièce par pièce et vérifie que les radiateurs existants suffisent à 45–50 °C ; sinon il faut en agrandir certains.

### Ce qu'il faut en plus

- Un **branchement électrique** suffisant, souvent triphasé pour les grosses puissances ([[electricite-maison]]).
- Un **emplacement extérieur** pour l'unité : bruit (🟠 35 à 50 dB à quelques mètres, les règlements communaux imposent parfois une distance à la limite du voisin), dégagement, évacuation des condensats, parfois un [[permis-urbanisme]] en zone protégée.
- Un **ballon tampon** et/ou un ballon d'[[eau-chaude-sanitaire]] : la PAC chauffe l'ECS à 50–55 °C et fait un cycle anti-légionelles.
- Un **compteur communicant** et, pour profiter de l'électricité bon marché, un contrat adapté ([[energie]]).

### Le coût et les primes

:::tip[Repère pratique, pas une règle]
Une PAC air-eau pour une maison unifamiliale coûte 🟠 10 000 à 18 000 € posée, hors adaptation des radiateurs. En Wallonie, la prime Habitation de base pour une pompe à chaleur chauffage est 🔴 de 600 € (jusqu'au 30 septembre 2026), multipliée selon la catégorie de revenus jusqu'à ×6, plafonnée à 70 % de la facture ; un [[audit-logement]] préalable est obligatoire. Bruxelles (Rénolution) et la Flandre (Mijn VerbouwPremie) ont leurs propres barèmes. La TVA est de 6 % si le logement a plus de 10 ans. Voir [[primes-renovation]] pour les montants détaillés et leur date.
:::

## Exemple

Dans la maison de Noé (1972, toit isolé l'an dernier, murs non isolés), l'installateur calcule 🔵 11 kW de déperditions et constate que les radiateurs d'origine imposeraient 60 °C par −8 °C. Son avis : PAC hybride maintenant ou attendre l'isolation des murs. Noé fait les comptes avec le [simulateur de budget rénovation](../../outils/simulateur-renovation/) : isoler les façades (🔵 18 000 €) puis poser une PAC seule dimensionnée à 🔵 7 kW avec trois radiateurs remplacés (🔵 13 500 €) coûte plus cher au départ qu'une PAC de 11 kW tout de suite, mais divise la consommation d'électricité par deux chaque hiver pour les trente années suivantes. Il isole d'abord.

## Ce que ça change pour toi

- Avant tout devis de PAC, demande le **certificat PEB** et pose la question : « à quelle température de départ fonctionnera-t-elle les jours de gel ? ». Au-dessus de 55 °C, méfiance.
- Exige un **calcul de déperditions** écrit et un **SCOP** sur étiquette énergétique ; refuse « on met 12 kW pour être tranquille ».
- Vérifie la **puissance électrique disponible** et le règlement communal sur le bruit avant de signer.
- Pense le trio **PAC + panneaux solaires + eau chaude** ensemble : c'est leur combinaison qui rend l'électrification rentable.

## À ne pas confondre

- **COP** (valeur instantanée, souvent affichée dans des conditions idéales) et **SCOP** (saisonnier, plus honnête).
- **Pompe à chaleur air-air** (climatisation réversible, pas d'eau chaude) et **air-eau** (remplace une chaudière).
- **Puissance thermique** (kW de chaleur) et **puissance électrique absorbée** (kW tirés du réseau, 3 à 4 fois moindre).

## Nature des chiffres de cette page

- 🔴 Montant de base de la prime wallonne, obligation d'audit, taux de TVA : règles en vigueur en 2026, susceptibles de changer (régime permanent wallon à partir du 1er octobre 2026).
- 🟠 Prix, COP, niveaux sonores, rapport prix gaz/électricité : repères de marché et des guides régionaux.
- 🔵 Les chiffres de la maison de Noé sont inventés.
