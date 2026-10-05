// La section « Nature des chiffres de cette page » devient une petite note discrète en fin de page :
// un titre court, la légende des pastilles sur une ligne, puis le texte propre à la page.
// Ce n'est plus un intertitre (il sort aussi du sommaire « Sur cette page »).
import { visit } from 'unist-util-visit';

const TITRE = 'Nature des chiffres de cette page';

export default function remarkChiffres() {
  return (tree) => {
    visit(tree, 'heading', (node, index, parent) => {
      if (node.depth !== 2 || !parent) return;
      const text = node.children.map((c) => c.value ?? '').join('').trim();
      if (text !== TITRE) return;
      // Le contenu de la section : tout jusqu'au prochain intertitre de même niveau.
      let end = index + 1;
      while (end < parent.children.length && !(parent.children[end].type === 'heading' && parent.children[end].depth <= 2)) end++;
      const body = parent.children.slice(index + 1, end);
      const head = {
        type: 'paragraph',
        data: { hProperties: { className: ['chiffres-head'] } },
        children: [
          { type: 'strong', children: [{ type: 'text', value: 'Les chiffres de cette page' }] },
          { type: 'text', value: ' — 🔴 règle officielle, qui peut changer d’une année à l’autre · 🟠 repère courant, pas une règle · 🔵 exemple inventé' },
        ],
      };
      const aside = { type: 'chiffres', data: { hName: 'aside', hProperties: { className: ['chiffres-note'] } }, children: [head, ...body] };
      parent.children.splice(index, end - index, aside);
      return index + 1;
    });
  };
}
