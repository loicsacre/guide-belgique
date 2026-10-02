#!/usr/bin/env bash
# Vérifie, construit, commite et pousse. GitHub Actions déploie ensuite sur Pages.
# Usage : npm run deploy [-- "message de commit"]
set -euo pipefail
cd "$(dirname "$0")/.."

MSG="${1:-}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ -z "$(git status --porcelain)" ]]; then
  echo "Rien à commiter."
else
  echo "▶ Vérification du contenu"
  npm run check

  echo "▶ Build local (le même que GitHub Actions)"
  npx astro build

  if [[ -z "$MSG" ]]; then
    ADDED=$(git status --porcelain src/content/docs | grep -c '^??' || true)
    MODIF=$(git status --porcelain src/content/docs | grep -c '^ M\|^M ' || true)
    MSG="contenu: ${ADDED} nouveau(x), ${MODIF} modifié(s) ($(date +%Y-%m-%d))"
  fi

  git add -A
  git commit -m "$MSG"
fi

if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
  echo "▶ Mise à jour depuis l'upstream (merge, jamais de rebase)"
  git pull --no-rebase
  git push
else
  echo "▶ Premier push : création de l'upstream origin/$BRANCH"
  git push -u origin "$BRANCH"
fi

REMOTE=$(git remote get-url origin 2>/dev/null | sed -E 's#(git@github.com:|https://github.com/)##; s#\.git$##')
echo "✅ Poussé. Suivi du déploiement : https://github.com/${REMOTE}/actions"
