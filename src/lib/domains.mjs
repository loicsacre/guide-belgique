// Référentiel des métadonnées : domaines, niveaux, nature de l'information, portée géographique.
// Ajouter un domaine ici le rend disponible dans le schéma, la sidebar et le glossaire.

export const DOMAINS = [
  { key: 'systeme', label: 'Système belge', emoji: '🏛️' },
  { key: 'travail', label: 'Travail & salaire', emoji: '💼' },
  { key: 'securite-sociale', label: 'Sécurité sociale', emoji: '🛡️' },
  { key: 'fiscalite', label: 'Impôts', emoji: '🧾' },
  { key: 'argent', label: 'Argent & finances personnelles', emoji: '💰' },
  { key: 'banque', label: 'Banque & paiements', emoji: '🏦' },
  { key: 'credit', label: 'Crédit & dette', emoji: '💳' },
  { key: 'immobilier', label: 'Immobilier', emoji: '🏠' },
  { key: 'investissement', label: 'Épargne & investissement', emoji: '📈' },
  { key: 'comptabilite', label: 'Économie & comptabilité', emoji: '📚' },
  { key: 'entreprise', label: 'Indépendant & société', emoji: '👨‍💻' },
  { key: 'assurances', label: 'Assurances', emoji: '☂️' },
  { key: 'famille', label: 'Famille & patrimoine', emoji: '👨‍👩‍👧' },
  { key: 'quotidien', label: 'Vie pratique', emoji: '🚗' },
];
export const DOMAIN_KEYS = DOMAINS.map((d) => d.key);
export const domainOf = (key) => DOMAINS.find((d) => d.key === key);

// Niveaux pédagogiques (les clés restent courtes dans le frontmatter).
export const LEVELS = {
  essentiel: { label: 'Niveau 1 — Fondations', short: 'Fondations', emoji: '🟢', hint: 'Ce qu\'un adulte devrait comprendre pour naviguer dans la vie courante.' },
  utile: { label: 'Niveau 2 — Compréhension', short: 'Compréhension', emoji: '🟡', hint: 'Les mécanismes qui permettent de comprendre les calculs et les interactions.' },
  approfondissement: { label: 'Niveau 3 — Approfondissement', short: 'Approfondissement', emoji: '🔵', hint: 'Cas particuliers, exceptions, optimisation légale, situations professionnelles.' },
  expert: { label: 'Niveau 4 — Expert', short: 'Expert', emoji: '🟣', hint: 'Notions techniques et détails réglementaires.' },
};
export const STATUSES = {
  publie: { label: 'Publié' },
  relecture: { label: 'À relire' },
  brouillon: { label: 'Brouillon' },
};
export const STATUS_KEYS = Object.keys(STATUSES);
export const LEVEL_KEYS = Object.keys(LEVELS);

// Nature de l'information : un concept stable vieillit bien, une règle datée doit être revérifiée.
export const NATURES = {
  stable: { label: 'Concept stable', hint: 'Le mécanisme change rarement.' },
  mixte: { label: 'Concept + règles datées', hint: 'Le principe est stable, les montants/taux/dates évoluent.' },
  'regle-datee': { label: 'Règle datée', hint: 'Valable pour la période indiquée, à revérifier.' },
};
export const NATURE_KEYS = Object.keys(NATURES);

export const SCOPES = {
  federal: 'Fédéral',
  wallonie: 'Wallonie',
  bruxelles: 'Bruxelles',
  flandre: 'Flandre',
  communal: 'Communal',
};
export const SCOPE_KEYS = Object.keys(SCOPES);
