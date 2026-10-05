---
title: "L'installation électrique d'une maison"
kind: fiche
domain: maison
level: essentiel
nature: regle-datee
valid_for: "RGIE (AR du 8 septembre 2019), contrôle valable 25 ans"
scope: [belgique]
status: publie
tags: [électricité, RGIE, tableau électrique, différentiel, disjoncteur, contrôle, sécurité]
organisme: "SPF Économie (RGIE), organismes de contrôle agréés, GRD"
short: "De la rue au grille-pain : compteur, disjoncteur général, différentiel, tableau, circuits, prises. Le RGIE fixe les règles de sécurité et impose un contrôle par un organisme agréé à la vente, à la mise en service et tous les 25 ans."
aliases: [installation électrique, tableau électrique, RGIE, différentiel, disjoncteur, mise à la terre, compteur électrique, compteur communicant]
prerequisites: [maison-systemes]
related: [panneaux-solaires, diagnostic-maison, energie, primes-renovation, choisir-entrepreneur]
last_verified: 2026-10-02
sources:
  - title: "SPF Économie — Règlement général sur les installations électriques (RGIE)"
    url: https://economie.fgov.be/fr/themes/energie/sources-denergie/electricite/securite-des-installations/reglement-general-sur-les
    org: SPF Économie
  - title: "Bobex — Le contrôle électrique en Belgique (prix, validité, obligations)"
    url: https://www.bobex.be/fr-be/controle-electrique/
    org: Bobex
  - title: "SPW Énergie — Portail de l'énergie en Wallonie"
    url: https://energie.wallonie.be/
    org: SPW Énergie
sidebar:
  order: 2
---

## Le trajet du courant, de la rue à la prise

L'électricité entre dans la maison par un câble du gestionnaire de réseau, l'entreprise qui possède les câbles de ta rue. Elle passe d'abord par le **compteur**, qui mesure ce que tu consommes, puis par le **disjoncteur général**, qui limite la puissance que tu as souscrite, et arrive enfin dans **ton tableau**. Là, elle se répartit en **circuits**, protégés chacun par un petit disjoncteur. Un ou plusieurs **différentiels** surveillent en plus qu'aucun courant ne s'échappe vers la terre, à travers toi par exemple.

Tout ce qui est après le compteur est à toi, et c'est de toi qu'on exige qu'il soit sûr. → [[maison-systemes]]

## Pourquoi une installation doit être contrôlée

Un court-circuit met le feu, une fuite de courant tue. Depuis 1981, la Belgique impose donc à toute installation domestique le **RGIE**, le Règlement général sur les installations électriques, aujourd'hui dans sa version de 2019 sous la responsabilité du SPF Économie.

L'État ne vient pas vérifier lui-même. Il **agrée des organismes de contrôle** privés (Vinçotte, BTV, OCB, AIB…), qui inspectent l'installation et délivrent un procès-verbal.

## Ce qu'il y a dans ton installation, dans l'ordre du courant

Les deux premiers éléments appartiennent au gestionnaire de réseau. Le **compteur** mesure les kWh ; il est scellé, tu ne l'ouvres pas. Le **disjoncteur de branchement** coupe tout et limite la puissance souscrite ; tu peux le couper en urgence.

Tout le reste est à toi. Le **différentiel général 300 mA** détecte une fuite de courant dans l'ensemble de la maison. Les **différentiels 30 mA** font la même chose, en plus sensible, pour les pièces humides ou à risque : salle de bain, buanderie, cuisine. Chaque différentiel a un bouton « test », qu'on conseille de presser chaque mois pour vérifier qu'il coupe bien.

Viennent ensuite les **disjoncteurs de circuit** (16 A, 20 A…), qui protègent chaque circuit contre la surcharge ; quand l'un d'eux a « sauté », tu le remets en position. Puis les **circuits, prises et interrupteurs**, qui distribuent le courant ; on n'y touche jamais sans avoir coupé le général.

Enfin, la **mise à la terre**, un piquet planté dans le sol relié par le conducteur jaune et vert, évacue les fuites de courant vers le sol. Le contrôleur mesure sa résistance : elle doit être de 30 Ω au plus, ou de 100 Ω au plus si l'installation a des différentiels 30 mA.

## Les deux dessins obligatoires

Le RGIE impose que chaque installation soit accompagnée de deux dessins. Le **schéma unifilaire** dit quel disjoncteur protège quel circuit, avec quelle section de fil. Le **plan de position** montre où se trouvent les prises et les points lumineux.

Sans eux, le contrôleur ne peut pas délivrer un rapport conforme. Ils doivent donc se trouver dans le tableau ou être remis à l'acheteur.

## Quand le contrôle est obligatoire

:::note[Règle datée — RGIE (AR du 8 septembre 2019)]
Le contrôle par un organisme agréé est obligatoire à la mise en service d'une nouvelle installation ou après une modification importante (renforcement, nouveau tableau) ; à la vente d'une habitation dont l'installation date d'avant le 1er octobre 1981, si aucun contrôle valable n'existe ; et tous les 25 ans pour une installation conforme. Si le contrôle à la vente est négatif, l'acheteur a 18 mois après l'acte pour mettre l'installation en ordre et la faire recontrôler.
:::

Un contrôle négatif n'empêche donc pas la vente : il transfère le travail à l'acheteur, avec un délai. Le contrôle lui-même coûte de l'ordre de 130 à 200 €.

Le rapport liste les infractions. Dans une maison ancienne, les plus fréquentes sont l'absence de différentiel 30 mA dans la salle de bain, des prises sans terre, des fils de section trop faible pour leur disjoncteur et un tableau sans schéma. → [Lire un contrôle électrique](../../documents/controle-electrique/)

## Assez de puissance pour une pompe à chaleur ?

La plupart des maisons sont en **monophasé 230 V**, avec un disjoncteur de branchement de 40 A, soit environ 9,2 kW disponibles en même temps. Une pompe à chaleur, une borne de recharge ou une cuisinière à induction peuvent exiger un **renforcement** du branchement, voire un passage en **triphasé** (une alimentation sur trois phases, qui offre plus de puissance). Il faut le demander au gestionnaire de réseau : c'est payant et cela prend des semaines. Vérifie donc ce point avant d'acheter une [[pompe-a-chaleur]].

## Le compteur communicant

Les Régions déploient des **compteurs numériques**, qui envoient les index automatiquement et mesurent ta consommation quart d'heure par quart d'heure. En Flandre, il est en place partout. En Wallonie et à Bruxelles, le déploiement se fait par vagues, et il devient obligatoire avec des [[panneaux-solaires]] ou une borne.

Il change la facturation : en Flandre, par exemple, un tarif capacitaire fait payer une partie du réseau selon ta pointe de consommation. → [[energie]]

## Un exemple : acheter avec un contrôle négatif

Noé (exemple **fictif**) achète une maison de 1972. Le procès-verbal de contrôle, joint au compromis, est **négatif** : pas de différentiel 30 mA, douze prises sans terre, pas de schéma unifilaire.

Son électricien chiffre 2 800 € TVAC pour un nouveau tableau, la terre et les prises de la salle de bain, plus 180 € pour le recontrôle. Noé a 18 mois. Il en profite pour combiner ces travaux avec ceux de la cuisine, ce qui évite d'ouvrir les murs deux fois. → [[ordre-des-travaux]]

En Wallonie, une prime à la mise en conformité électrique existe dans le cadre des [[primes-renovation]].

## Ce que ça change pour toi

**À l'achat**, exige le procès-verbal de contrôle et les schémas. Leur absence est un argument de négociation et un coût à budgétiser.

**Au quotidien**, teste les différentiels avec leur bouton « T » : s'ils ne coupent pas, l'installation ne te protège pas. Un disjoncteur qui saute à répétition signale un circuit surchargé ou un appareil défectueux ; ne le remplace jamais par un calibre plus gros, car c'est le câble qui chaufferait à sa place.

**Quand tu modifies** quelque chose (une nouvelle prise extérieure, une borne de recharge), les travaux doivent respecter le RGIE et, s'ils touchent au tableau, être recontrôlés.

## À ne pas confondre

Le **différentiel** détecte une fuite de courant et protège les personnes ; le **disjoncteur** détecte une surcharge et protège les câbles. Un tableau a besoin des deux.

La **puissance souscrite**, c'est la limite du disjoncteur de branchement ; elle ne se confond pas avec la puissance du compteur. Si tout saute quand le four et la machine tournent ensemble, c'est la puissance souscrite qu'il faut renforcer.

Enfin, le **contrôle de conformité** (RGIE, sécurité) et le **certificat PEB** (énergie) sont deux documents, établis par deux organismes, sur deux objets différents. → [[peb]]

## Nature des chiffres de cette page

🔴 Les obligations et délais de contrôle (25 ans, 18 mois, installations d'avant le 1er octobre 1981) et les valeurs de résistance de terre (30 Ω, 100 Ω) viennent du RGIE (AR du 8 septembre 2019, SPF Économie). 🟠 Le prix d'un contrôle (130 à 200 €), le test mensuel des différentiels et le branchement courant de 40 A (≈ 9,2 kW) sont des repères pratiques. 🔵 Le devis de Noé (2 800 € et 180 €) est inventé pour l'exemple.
