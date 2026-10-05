// La section « Nature des chiffres de cette page » (43 pages) : on la renomme en clair et on y ajoute
// la légende des pastilles, pour qu'elle se comprenne sans connaître la convention du guide.
import { visit } from 'unist-util-visit';

const TITRE = 'Nature des chiffres de cette page';
const LEGENDE = [
  'Les chiffres du guide ne sont pas tous du même genre, et une pastille le signale : ',
  { strong: '🔴 une règle officielle' },
  ' (loi, taux, délai), valable pour la période indiquée et qui peut changer d’une année à l’autre ; ',
  { strong: '🟠 un repère' },
  ', un ordre de grandeur courant mais pas une règle ; ',
  { strong: '🔵 un exemple inventé' },
  ' pour illustrer le mécanisme.',
];

export default function remarkChiffres() {
  return (tree) => {
    visit(tree, 'heading', (node, index, parent) => {
      if (node.depth !== 2 || !parent) return;
      const text = node.children.map((c) => c.value ?? '').join('').trim();
      if (text !== TITRE) return;
      node.children = [{ type: 'text', value: 'À propos des chiffres de cette page' }];
      const para = {
        type: 'paragraph',
        children: LEGENDE.map((x) => (typeof x === 'string' ? { type: 'text', value: x } : { type: 'strong', children: [{ type: 'text', value: x.strong }] })),
      };
      parent.children.splice(index + 1, 0, para);
      return index + 2;
    });
  };
}
