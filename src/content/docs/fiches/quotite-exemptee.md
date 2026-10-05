---
title: Quotité exemptée d'impôt
kind: fiche
domain: fiscalite
level: essentiel
nature: mixte
valid_for: "exercice d'imposition 2026 (revenus 2025)"
scope: [federal]
organisme: "SPF Finances"
short: "Une première part de revenu sur laquelle tu ne paies pas d'impôt ; elle augmente si tu as des personnes à charge."
aliases: [quotité exemptée, minimum non imposable, belastingvrije som]
prerequisites: [tranches-imposition]
related: [personne-a-charge, ipp, precompte-professionnel, avertissement-extrait-de-role, declaration-fiscale, quotite-emprunt]
last_verified: 2026-10-02
sources:
  - title: Plafonds fiscaux — exercice d'imposition 2026
    url: https://assets.contenthub.wolterskluwer.com/api/public/content/3084229-plafonds-fiscaux-3a47085543
    org: Wolters Kluwer
  - title: Tranches d'imposition IPP
    url: https://billy.tech/guide/fiscalite/impot/ipp/tranches-imposition-ipp/
    org: Billy
sidebar:
  order: 5
---

## Une part de ton revenu que l'État ne taxe jamais

L'idée de départ est simple : avant de payer quoi que ce soit à l'État, il faut pouvoir se loger, se nourrir, s'habiller. Le fisc considère donc qu'une première part de ton revenu sert à vivre et ne doit pas être taxée. Cette part s'appelle la **quotité exemptée d'impôt**. On entend aussi « minimum non imposable », et en néerlandais *belastingvrije som*.

Chaque contribuable a la sienne. Et elle grandit quand tu as des [[personne-a-charge|personnes à charge]], c'est-à-dire des enfants ou des proches qui vivent avec toi et ont peu de ressources propres : plus il y a de bouches à nourrir, plus la part de revenu protégée est grande.

:::note[Règle datée — exercice d'imposition 2026 (revenus 2025)]
Quotité exemptée de base : **10 910 €** par contribuable. Elle est majorée pour les enfants à charge, de façon croissante avec le nombre d'enfants (par exemple + 5 110 € pour deux enfants).
:::

## Elle n'est pas retirée du revenu, mais de l'impôt

C'est le détail technique qui surprend. On pourrait croire que le fisc enlève 10 910 € de ton revenu avant de calculer l'impôt. Ce n'est pas ce qu'il fait.

Il calcule d'abord l'impôt sur **tout** ton revenu imposable, en appliquant le barème par tranches (25 %, 40 %, 45 %, 50 %, chaque taux ne frappant que la part de revenu qui tombe dans sa tranche). Ensuite, il calcule l'impôt qu'aurait coûté la quotité exemptée si on l'avait taxée, et il retire ce montant. Ce calcul « fictif » se fait dans les tranches les plus basses, donc au taux de la première tranche, 25 %.

Pour la quotité de base, cela donne 10 910 × 25 % = **2 727,50 €** d'impôt en moins. Le principe en deux lignes :

```text
impôt sur tout le revenu imposable
− impôt « fictif » sur la quotité exemptée (au taux de la première tranche)
= impôt de base
```

Pourquoi ce détour ? Parce qu'il donne le même avantage à tout le monde. Si on retirait 10 910 € du revenu, cet argent sortirait de la tranche la plus haute que tu atteins : quelqu'un taxé à 50 % sur ses derniers euros y gagnerait deux fois plus que quelqu'un taxé à 25 %. En le comptant au taux le plus bas, la quotité vaut la même somme quel que soit ton salaire. → [[tranches-imposition]]

## Un exemple qu'on suit

Reprenons l'exemple **fictif** qui sert de fil rouge au guide : un salarié isolé, sans enfant, avec 36 070 € de revenu net imposable, c'est-à-dire ce qui reste de son revenu une fois retirées les déductions comme les frais professionnels.

Le barème appliqué à ces 36 070 € donne un impôt de base de **12 343,50 €**. On retire l'impôt sur la quotité exemptée, 2 727,50 €. Il reste **9 616 €** d'impôt pour l'État, avant la taxe de la commune. Le détail tranche par tranche est dans [[tranches-imposition]], et la suite du calcul (taxe communale, précompte déjà retenu, solde) dans [[avertissement-extrait-de-role]].

Avec deux enfants à charge, la même personne aurait une quotité plus grande de 5 110 €. Cette part supplémentaire tombe elle aussi dans la première tranche, ce qui ferait environ 5 110 × 25 % = 1 277,50 € d'impôt en moins.

## Ce que ça change pour toi

**Sous environ 10 910 € de revenu imposable par an, tu ne paies pas d'impôt fédéral.** C'est la conséquence directe du mécanisme : l'impôt sur ces euros-là, au taux de 25 %, est exactement compensé par la réduction liée à la quotité.

**En couple, chacun garde sa propre quotité.** Même quand vous êtes imposés ensemble, comme un couple marié ou en cohabitation légale, chacun des deux a sa quotité de base : elle ne se partage pas.

**Déclarer tes enfants à charge rapporte deux fois.** Dans ta [[declaration-fiscale|déclaration d'impôt]], ils augmentent la quotité et donc baissent l'impôt final. Mais signale-les aussi **à ton employeur** : il en tient compte pour calculer le [[precompte-professionnel|précompte professionnel]], cette avance d'impôt retenue chaque mois sur ton salaire. Résultat : un salaire net un peu plus élevé dès maintenant, plutôt qu'un remboursement l'année suivante.

:::caution[Dépend de ta situation]
Garde alternée, enfant handicapé, parent isolé, autres personnes à charge : les suppléments varient. Vérifie les montants de l'année dans la déclaration. → [[personne-a-charge]]
:::

## À ne pas confondre

Le mot « quotité » veut simplement dire « part », et il revient dans des domaines qui n'ont rien à voir. La **quotité exemptée**, ici, c'est la part de ton revenu non taxée, propre à chaque contribuable. La [[quotite-emprunt|quotité d'emprunt]], en crédit hypothécaire, c'est la part du prix d'un bien financée par la banque. Et en copropriété, les **quotités** désignent encore autre chose : la part de chaque copropriétaire dans les parties communes de l'immeuble.

## Nature des chiffres de cette page

🔴 La quotité de base de 10 910 €, la réduction de 2 727,50 € qui en découle, le supplément de 5 110 € pour deux enfants et le taux de 25 % de la première tranche sont des règles officielles valables pour l'exercice d'imposition 2026 (revenus 2025). 🔵 Le salarié à 36 070 € de revenu imposable, avec ses 12 343,50 € d'impôt de base et ses 9 616 € d'impôt final, est un exemple fictif, tout comme le calcul de 1 277,50 € pour deux enfants.
