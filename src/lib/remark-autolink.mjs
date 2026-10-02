// Lien automatique vers la fiche quand un terme connu (titre court ou alias) apparaît dans le texte
// sans être déjà un lien. Une seule fois par page et par fiche cible, jamais vers la page elle-même,
// jamais dans les titres, le code, les liens existants. Le lien porte la définition courte en infobulle,
// pour que le lecteur comprenne sans cliquer.
import { visit } from 'unist-util-visit';
import { loadFiches } from './fiches.mjs';

// Mots trop génériques pour être liés automatiquement (ils restent liables à la main avec [[slug]]).
const STOP = new Set(['revenu', 'dette', 'contrat', 'budget', 'banque', 'crédit', 'impôt', 'taxe', 'prime', 'capital', 'intérêt', 'risque', 'épargne', 'pension', 'facture', 'bail', 'loyer', 'commune', 'région', 'état', 'famille', 'enfant', 'mariage', 'société', 'entreprise', 'salaire', 'net', 'brut', 'actif', 'passif', 'rendement', 'inflation', 'onss', 'tva', 'ipp']);

let cache = null;
function terms() {
  if (cache) return cache;
  const list = [];
  for (const f of loadFiches()) {
    if (f.data.draft) continue;
    const cands = new Set([...(f.data.aliases ?? [])]);
    const t = String(f.data.title);
    if (!/[:(—]/.test(t) && t.length <= 40) cands.add(t);
    for (const c of cands) {
      const term = String(c).trim();
      if (term.length < 5 || STOP.has(term.toLowerCase()) || /^[A-Z]{2,4}$/.test(term) === false && term.split(' ').length === 1 && term.length < 7) continue;
      list.push({ term, slug: f.slug, short: f.data.short ?? '', re: new RegExp(`(^|[^\\p{L}\\p{N}-])(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\p{L}\\p{N}-])`, 'iu') });
    }
  }
  // les termes les plus longs d'abord : « précompte immobilier » avant « précompte »
  list.sort((a, b) => b.term.length - a.term.length);
  cache = list;
  return list;
}

export default function remarkAutolink({ base = '' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree, file) => {
    const self = (file.path ?? '').match(/fiches[\\/]([a-z0-9-]+)\.mdx?$/)?.[1];
    const linked = new Set(self ? [self] : []);
    // slugs déjà liés explicitement sur la page : on ne double pas
    visit(tree, 'link', (n) => { const m = n.url?.match(/fiches\/([a-z0-9-]+)\/?$/); if (m) linked.add(m[1]); });
    visit(tree, 'text', (n) => { for (const m of n.value.matchAll(/\[\[([a-z0-9-]+)/g)) linked.add(m[1]); });
    const skip = new Set(['heading', 'link', 'linkReference', 'inlineCode', 'code', 'mdxJsxTextElement', 'mdxJsxFlowElement', 'tableCell']);
    const walk = (node, parent, index, inSkip) => {
      if (!node) return;
      if (skip.has(node.type)) inSkip = true;
      if (node.type === 'text' && !inSkip && parent) {
        let value = node.value;
        const out = [];
        let changed = true;
        while (changed && value.length) {
          changed = false;
          for (const t of terms()) {
            if (linked.has(t.slug)) continue;
            const m = t.re.exec(value);
            if (!m) continue;
            const start = m.index + m[1].length;
            out.push({ type: 'text', value: value.slice(0, start) });
            out.push({ type: 'link', url: `${prefix}/fiches/${t.slug}/`, title: t.short, data: { hProperties: { className: ['autolink'] } }, children: [{ type: 'text', value: m[2] }] });
            value = value.slice(start + m[2].length);
            linked.add(t.slug);
            changed = true;
            break;
          }
        }
        if (out.length) {
          if (value) out.push({ type: 'text', value });
          parent.children.splice(index, 1, ...out);
          return out.length;
        }
        return 1;
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; ) {
          const step = walk(node.children[i], node, i, inSkip);
          i += typeof step === 'number' ? step : 1;
        }
      }
      return 1;
    };
    walk(tree, null, 0, false);
  };
}
