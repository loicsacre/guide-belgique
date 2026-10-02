// Référentiel des métadonnées : domaines, niveaux, nature de l'information, portée géographique.
// Ajouter un domaine ici le rend disponible dans le schéma, la sidebar et le glossaire.

export const DOMAINS = [
  { key: 'systeme', label: 'Système belge', emoji: '🏛️' },
  { key: 'travail', label: 'Travail & salaire', emoji: '💼' },
  { key: 'securite-sociale', label: 'Sécurité sociale', emoji: '🛡️' },
  { key: 'fiscalite', label: 'Impôts', emoji: '🧾' },
  { key: 'argent', label: 'Budget & banque', emoji: '💰' },
  { key: 'credit', label: 'Crédit', emoji: '🏦' },
  { key: 'immobilier', label: 'Immobilier', emoji: '🏠' },
  { key: 'investissement', label: 'Épargne & investissement', emoji: '📈' },
  { key: 'comptabilite', label: 'Comptabilité & économie', emoji: '📚' },
  { key: 'entreprise', label: 'Indépendant & société', emoji: '👨‍💻' },
  { key: 'assurances', label: 'Assurances', emoji: '☂️' },
  { key: 'famille', label: 'Famille & patrimoine', emoji: '👨‍👩‍👧' },
  { key: 'quotidien', label: 'Vie pratique', emoji: '🚗' },
];
export const DOMAIN_KEYS = DOMAINS.map((d) => d.key);
export const domainOf = (key) => DOMAINS.find((d) => d.key === key);

export const LEVELS = {
  essentiel: { label: 'Essentiel', emoji: '🟢' },
  utile: { label: 'Utile', emoji: '🟡' },
  approfondissement: { label: 'Approfondissement', emoji: '🔵' },
};
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
