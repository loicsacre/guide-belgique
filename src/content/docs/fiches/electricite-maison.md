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

## En langage simple

L'électricité entre dans la maison par un câble du gestionnaire de réseau, passe par le **compteur** (qui mesure), puis par le **disjoncteur général** (qui limite la puissance que tu as souscrite), puis arrive dans **ton tableau**. Là, elle se répartit en **circuits** protégés chacun par un petit disjoncteur ; un ou plusieurs **différentiels** surveillent qu'aucun courant ne s'échappe vers la terre (à travers toi, par exemple). Tout ce qui est après le compteur est à toi, et c'est de toi qu'on exige qu'il soit sûr.

## Pourquoi ça existe

Un court-circuit met le feu, une fuite de courant tue. Depuis 1981, la Belgique impose à toute installation domestique le **RGIE** (Règlement général sur les installations électriques), aujourd'hui dans sa version de 2019 sous la responsabilité du SPF Économie. L'État ne vient pas vérifier lui-même : il **agrée des organismes de contrôle** privés (Vinçotte, BTV, OCB, AIB…) qui inspectent et délivrent un procès-verbal.

## Comment ça marche

### Les composants, dans l'ordre du courant

| Élément | Rôle | Si tu le touches | Qui en répond |
| --- | --- | --- | --- |
| Compteur | Mesure les kWh | Ne pas ouvrir : scellé | Gestionnaire de réseau |
| Disjoncteur de branchement | Coupe tout, limite la puissance souscrite | Peut être coupé en urgence | Gestionnaire de réseau |
| Différentiel général 300 mA | Détecte une fuite de courant générale | Bouton « test » à presser 🟠 chaque mois | Toi |
| Différentiel 30 mA | Même rôle, plus sensible, pour salle de bain, buanderie, cuisine | Idem | Toi |
| Disjoncteurs de circuit (16 A, 20 A…) | Protègent chaque circuit contre la surcharge | Remettre en position si « sauté » | Toi |
| Circuits, prises, interrupteurs | Distribuent le courant | Ne pas toucher sans couper le général | Toi |
| Mise à la terre (piquet + conducteur jaune/vert) | Évacue les fuites de courant vers le sol | Mesurée au contrôle (🔴 ≤ 30 Ω, ou ≤ 100 Ω avec différentiels 30 mA) | Toi |

### Le schéma unifilaire et le plan de position

Le RGIE impose que chaque installation soit accompagnée de deux dessins : le **schéma unifilaire** (quel disjoncteur protège quel circuit, avec quelle section de fil) et le **plan de position** (où sont les prises et points lumineux). Sans eux, le contrôleur ne peut pas délivrer un rapport conforme. Ils doivent se trouver dans le tableau ou être remis à l'acheteur.

### Le contrôle de conformité

:::caution[Règle légale datée]
Le contrôle par un organisme agréé est obligatoire 🔴 :
- à la **mise en service** d'une nouvelle installation ou après une modification importante (renforcement, nouveau tableau) ;
- à la **vente** d'une habitation dont l'installation date d'avant le 1er octobre 1981, si aucun contrôle valable n'existe ;
- **tous les 25 ans** pour une installation conforme.

Si le contrôle à la vente est **négatif**, la vente a lieu quand même, mais l'acheteur a **18 mois** après l'acte pour faire mettre l'installation en ordre et la faire recontrôler. Le coût du contrôle est 🟠 de l'ordre de 130 à 200 €.
:::

Le rapport liste les infractions. Les plus fréquentes dans une maison ancienne : absence de différentiel 30 mA dans la salle de bain, prises sans terre, fils de section trop faible pour le disjoncteur, tableau sans schéma. La fiche [Lire un contrôle électrique](../../documents/controle-electrique/) t'apprend à lire un tel rapport.

### Mono ou triphasé, et la puissance souscrite

La plupart des maisons sont en **monophasé 230 V** avec un disjoncteur de branchement de 🟠 40 A (≈ 9,2 kW). Une pompe à chaleur, une borne de recharge ou une cuisinière à induction peuvent exiger un **renforcement** de branchement, voire un passage en triphasé : demande au gestionnaire de réseau, c'est payant et cela prend des semaines. Vérifie ce point avant d'acheter une [[pompe-a-chaleur]].

### Le compteur communicant

Les Régions déploient des **compteurs numériques** qui envoient les index automatiquement et mesurent le quart d'heure par quart d'heure. En Flandre, il est en place partout ; en Wallonie et à Bruxelles, le déploiement se fait par vagues, et il devient obligatoire avec des [[panneaux-solaires]] ou une borne. Il change la facturation (tarif capacitaire en Flandre) ; la fiche [[energie]] en parle.

## Exemple

Noé achète une maison de 1972. Le procès-verbal de contrôle, joint au compromis, est **négatif** : pas de différentiel 30 mA, douze prises sans terre, pas de schéma unifilaire. Son électricien chiffre 🔵 2 800 € TVAC pour un nouveau tableau, la terre et les prises de la salle de bain, plus 🔵 180 € pour le recontrôle. Noé a 18 mois ; il en profite pour combiner avec les travaux de cuisine, ce qui évite d'ouvrir les murs deux fois ([[ordre-des-travaux]]). En Wallonie, une prime à la mise en conformité électrique existe dans le cadre des [[primes-renovation]].

## Ce que ça change pour toi

- À l'achat, exige le **procès-verbal de contrôle** et les **schémas** : leur absence est un argument de négociation et un coût à budgétiser.
- Teste les **différentiels** avec leur bouton « T » : s'ils ne coupent pas, l'installation ne te protège pas.
- Un disjoncteur qui saute **à répétition** signale un circuit surchargé ou un appareil défectueux ; ne le remplace jamais par un calibre plus gros.
- Toute modification (nouvelle prise extérieure, borne de recharge) doit respecter le RGIE et, si elle touche au tableau, être recontrôlée.

## À ne pas confondre

- **Différentiel** (fuite de courant, protège les personnes) et **disjoncteur** (surcharge, protège les câbles). Un tableau a besoin des deux.
- **Puissance souscrite** (limite du disjoncteur de branchement) et **puissance du compteur** : si tout saute quand le four et la machine tournent, c'est la première qu'il faut renforcer.
- **Contrôle de conformité** (RGIE, sécurité) et **certificat PEB** (énergie) : deux documents, deux organismes, deux objets.

## Nature des chiffres de cette page

- 🔴 Obligations et délais de contrôle, valeurs de résistance de terre : RGIE (AR du 8 septembre 2019), SPF Économie.
- 🟠 Prix d'un contrôle, fréquence de test des différentiels, calibre courant du branchement : repères pratiques.
- 🔵 Les montants du devis de Noé sont inventés pour l'exemple.
