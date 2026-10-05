// La section « Nature des chiffres de cette page » devient une petite note discrète en fin de page :
// un titre court avec un lien vers l'explication des pastilles (une seule fois, sur l'accueil), puis le texte de la page.
// Ce n'est plus un intertitre (il sort aussi du sommaire « Sur cette page »).
import { visit } from 'unist-util-visit';

const TITRE = 'Nature des chiffres de cette page';

export default function remarkChiffres({ base = '' } = {}) {
  const href = `${base.replace(/\/$/, '')}/#les-chiffres-du-guide`;
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
          { type: 'text', value: ' · ' },
          { type: 'link', url: href, children: [{ type: 'text', value: 'que veulent dire 🔴 🟠 🔵 ?' }] },
        ],
      };
      const aside = { type: 'chiffres', data: { hName: 'aside', hProperties: { className: ['chiffres-note'] } }, children: [head, ...body] };
      parent.children.splice(index, end - index, aside);
      return index + 1;
    });
  };
}
