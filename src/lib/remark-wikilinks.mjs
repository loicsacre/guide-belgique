// [[slug]] ou [[slug|libellé]] → lien vers la fiche.
// Notion planifiée mais pas encore rédigée → texte marqué "à rédiger".
// Slug inconnu (ni fiche, ni parcours) → erreur de build : on ne laisse pas de lien mort.
import { visit } from 'unist-util-visit';
import { knownNotions } from './fiches.mjs';

const RE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export default function remarkWikilinks({ base = '' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree, file) => {
    const notions = knownNotions();
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || !RE.test(node.value)) return;
      RE.lastIndex = 0;
      const out = [];
      let last = 0;
      for (const m of node.value.matchAll(RE)) {
        const [raw, slug, label] = m;
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        const n = notions.get(slug);
        if (!n) throw new Error(`[[${slug}]] inconnu dans ${file.path} — ajoute la notion dans src/data/parcours.yaml ou crée la fiche.`);
        const text = label ?? n.title;
        out.push(
          n.written
            ? { type: 'link', url: `${prefix}/fiches/${slug}/`, children: [{ type: 'text', value: text }] }
            : {
                type: 'emphasis',
                data: { hProperties: { className: ['notion-todo'], title: 'Fiche à rédiger' } },
                children: [{ type: 'text', value: text }],
              },
        );
        last = m.index + raw.length;
      }
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return index + out.length;
    });
  };
}
