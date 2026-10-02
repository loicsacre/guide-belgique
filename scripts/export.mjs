#!/usr/bin/env node
// Export papier et liseuse : les pages /imprimer/ du site construit (dist/) → PDF (Chromium) et EPUB 3.
// Une source, plusieurs lectures : rien n'est rédigé ici, tout vient du build Astro.
//
//   npm run build && npm run export        → dist/telechargements/*.pdf, *.epub
//   npm run export -- --only=memo,fiche    → seulement certains formats (memo, fiche, fiches, livre, epub)
//
// Navigateur : Chromium de Playwright s'il est installé (npx playwright-core install chromium),
// sinon Google Chrome du système, sinon le chemin donné par CHROME_PATH.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright-core';
import JSZip from 'jszip';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'telechargements');
const BASE = (process.env.BASE ?? '/guide-belgique').replace(/\/$/, '');
const SITE = `${process.env.SITE ?? 'https://loicsacre.github.io'}${BASE}`;
const only = (process.argv.find((a) => a.startsWith('--only=')) ?? '').slice(7).split(',').filter(Boolean);
const want = (k) => !only.length || only.includes(k);

if (!fs.existsSync(path.join(DIST, 'imprimer'))) {
  console.error('❌ dist/imprimer/ introuvable : lance d\'abord `npm run build`.');
  process.exit(1);
}
fs.mkdirSync(OUT, { recursive: true });

// --- Petit serveur statique : dist/ servi sous BASE, comme sur GitHub Pages ---------------------------
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (!p.startsWith(BASE)) return res.writeHead(404).end();
  p = path.join(DIST, p.slice(BASE.length));
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': TYPES[path.extname(p)] ?? 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const ORIGIN = `http://127.0.0.1:${server.address().port}`;

async function launch() {
  const tries = [
    process.env.CHROME_PATH && (() => chromium.launch({ executablePath: process.env.CHROME_PATH })),
    () => chromium.launch(),
    () => chromium.launch({ channel: 'chrome' }),
  ].filter(Boolean);
  for (const t of tries) {
    try { return await t(); } catch { /* suivant */ }
  }
  throw new Error('Aucun Chromium trouvé. Installe-le (npx playwright-core install chromium) ou définis CHROME_PATH.');
}
const browser = await launch();
const ls = (sub) => (fs.existsSync(path.join(DIST, 'imprimer', sub)) ? fs.readdirSync(path.join(DIST, 'imprimer', sub)) : []);

/** Liens du papier : fiche présente dans le document → ancre interne ; sinon → URL publique du site. */
async function fixLinks(page) {
  await page.evaluate(({ BASE, SITE }) => {
    for (const a of document.querySelectorAll('a[href]')) {
      if (a.getAttribute('href').startsWith('#')) continue;
      const abs = new URL(a.getAttribute('href'), location.href);
      if (abs.origin !== location.origin) continue;
      const m = abs.pathname.match(/\/fiches\/([a-z0-9-]+)\/?$/);
      if (m && document.getElementById(`fiche-${m[1]}`)) a.setAttribute('href', `#fiche-${m[1]}`);
      else a.setAttribute('href', SITE + abs.pathname.slice(BASE.length) + abs.hash);
    }
  }, { BASE, SITE });
}

const FOOTER = `<div style="width:100%;font:7pt sans-serif;color:#777;text-align:center;"><span class="pageNumber"></span></div>`;
async function pdf(url, file, { pageNumbers = false } = {}) {
  const page = await browser.newPage();
  await page.goto(`${ORIGIN}${BASE}${url}`, { waitUntil: 'networkidle' });
  await fixLinks(page);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: path.join(OUT, file),
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: pageNumbers,
    headerTemplate: '<span></span>',
    footerTemplate: pageNumbers ? FOOTER : '<span></span>',
    tagged: true,
    outline: true,
  });
  const n = (fs.readFileSync(path.join(OUT, file), 'latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  await page.close();
  console.log(`📄 ${file} (${n} page${n > 1 ? 's' : ''})`);
  return n;
}

// --- EPUB 3 -------------------------------------------------------------------------------------------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const xhtml = (title, body) => `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="fr" xml:lang="fr">
<head><meta charset="utf-8"/><title>${esc(title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>${body}</body>
</html>`;

async function epub(id) {
  const page = await browser.newPage();
  await page.goto(`${ORIGIN}${BASE}/imprimer/livre/${id}/`, { waitUntil: 'networkidle' });
  const book = await page.evaluate(({ BASE, SITE }) => {
    const sections = [...document.querySelectorAll('[data-epub-file]')];
    const fileOf = new Map(); // id d'ancre → fichier
    for (const s of sections) {
      if (s.id) fileOf.set(s.id, s.dataset.epubFile);
      for (const el of s.querySelectorAll('[id]')) fileOf.set(el.id, s.dataset.epubFile);
    }
    const ser = new XMLSerializer();
    return {
      title: document.title,
      description: document.querySelector('meta[name=description]')?.content ?? '',
      chapters: sections.map((s) => {
        const c = s.cloneNode(true);
        c.querySelectorAll('.notes-page, .notes-lines, script, style, link, meta, .print-qr, .sl-anchor-link, .expressive-code .copy').forEach((n) => n.remove());
        for (const a of c.querySelectorAll('a[href]')) {
          const href = a.getAttribute('href');
          const abs = new URL(href, location.href);
          const local = abs.origin === location.origin;
          const fiche = local && abs.pathname.match(/\/fiches\/([a-z0-9-]+)\/?$/);
          const anchor = fiche ? `fiche-${fiche[1]}` : href.startsWith('#') ? href.slice(1) : null;
          if (anchor && fileOf.has(anchor)) a.setAttribute('href', `${fileOf.get(anchor)}.xhtml${fileOf.get(anchor) === anchor ? '' : `#${anchor}`}`);
          else if (local) a.setAttribute('href', SITE + abs.pathname.slice(BASE.length) + abs.hash);
        }
        // Blocs de code (expressive-code) → <pre> simple : les liseuses n'ont pas son CSS.
        for (const ec of c.querySelectorAll('.expressive-code')) {
          const pre = document.createElement('pre');
          pre.textContent = [...ec.querySelectorAll('.ec-line')].map((l) => l.textContent).join('\n');
          ec.replaceWith(pre);
        }
        c.querySelectorAll('[title]').forEach((n) => n.removeAttribute('title'));
        c.querySelectorAll('[align]').forEach((n) => { n.style.textAlign = n.getAttribute('align'); n.removeAttribute('align'); });
        c.querySelectorAll('[data-fallback], [data-quiz]').forEach((n) => { n.removeAttribute('data-fallback'); });
        const hasSvg = !!c.querySelector('svg');
        return { file: s.dataset.epubFile, title: s.dataset.epubTitle, group: s.dataset.epubGroup ?? null, svg: hasSvg, html: [...c.childNodes].map((n) => ser.serializeToString(n)).join('').replace(/ xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/g, '') };
      }),
    };
  }, { BASE, SITE });
  await page.close();

  const uid = `urn:guide-belgique:${id}:${new Date().toISOString().slice(0, 10)}`;
  const modified = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const zip = new JSZip();
  zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });
  zip.file('META-INF/container.xml', `<?xml version="1.0" encoding="utf-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>`);
  zip.file('OEBPS/style.css', fs.readFileSync(path.join(ROOT, 'src/styles/ebook.css'), 'utf8'));
  for (const c of book.chapters) zip.file(`OEBPS/${c.file}.xhtml`, xhtml(c.title, `<section epub:type="${c.file === 'couverture' ? 'cover' : 'chapter'}">${c.html}</section>`));

  // Table des matières : les chapitres regroupés par partie.
  const items = [];
  for (const c of book.chapters) {
    if (c.file === 'couverture' || c.file === 'sommaire') continue;
    const last = items.at(-1);
    if (c.group && last?.group === c.group) last.children.push(c);
    else if (c.group) items.push({ group: c.group, file: c.file, children: [c] });
    else items.push({ ...c, children: [] });
  }
  const navLi = (it) => it.group
    ? `<li><a href="${it.file}.xhtml">${esc(it.group)}</a><ol>${it.children.map((c) => `<li><a href="${c.file}.xhtml">${esc(c.title)}</a></li>`).join('')}</ol></li>`
    : `<li><a href="${it.file}.xhtml">${esc(it.title)}</a></li>`;
  zip.file('OEBPS/nav.xhtml', xhtml('Table des matières', `<nav epub:type="toc" id="toc"><h1>Table des matières</h1><ol>${items.map(navLi).join('')}</ol></nav>
<nav epub:type="landmarks" hidden=""><ol><li><a epub:type="cover" href="couverture.xhtml">Couverture</a></li><li><a epub:type="toc" href="sommaire.xhtml">Sommaire</a></li><li><a epub:type="bodymatter" href="${book.chapters[2]?.file ?? 'sommaire'}.xhtml">Début</a></li></ol></nav>`));
  // Même cible → même playOrder (une partie pointe vers son premier chapitre).
  const playOrder = new Map();
  for (const f of items.flatMap((it) => [it.file, ...it.children.map((c) => c.file)])) if (!playOrder.has(f)) playOrder.set(f, playOrder.size + 1);
  let nid = 0;
  const ncxPoint = (title, file, inner = '') => `<navPoint id="n${++nid}" playOrder="${playOrder.get(file)}"><navLabel><text>${esc(title)}</text></navLabel><content src="${file}.xhtml"/>${inner}</navPoint>`;
  const ncx = items.map((it) => (it.group ? ncxPoint(it.group, it.file, it.children.map((c) => ncxPoint(c.title, c.file)).join('')) : ncxPoint(it.title, it.file))).join('');
  zip.file('OEBPS/toc.ncx', `<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="${uid}"/></head><docTitle><text>${esc(book.title)}</text></docTitle><navMap>${ncx}</navMap></ncx>`);
  zip.file('OEBPS/content.opf', `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid" xml:lang="fr">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">${uid}</dc:identifier>
    <dc:title>${esc(book.title)}</dc:title>
    <dc:language>fr</dc:language>
    <dc:creator>La vie adulte en Belgique</dc:creator>
    <dc:description>${esc(book.description)}</dc:description>
    <dc:source>${esc(SITE)}</dc:source>
    <meta property="dcterms:modified">${modified}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="css" href="style.css" media-type="text/css"/>
${book.chapters.map((c) => `    <item id="${c.file}" href="${c.file}.xhtml" media-type="application/xhtml+xml"${c.svg ? ' properties="svg"' : ''}/>`).join('\n')}
  </manifest>
  <spine toc="ncx">
${book.chapters.map((c) => `    <itemref idref="${c.file}"/>`).join('\n')}
  </spine>
</package>`);
  const file = `livre-${id}.epub`;
  fs.writeFileSync(path.join(OUT, file), await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', mimeType: 'application/epub+zip' }));
  console.log(`📖 ${file} (${book.chapters.length} fichiers)`);
}

// --- Tout produire ------------------------------------------------------------------------------------
try {
  if (want('memo')) for (const s of ls('memo')) {
    const n = await pdf(`/imprimer/memo/${s}/`, `memo-${s}.pdf`);
    if (n > 1) console.warn(`⚠️  mémo ${s} : ${n} pages, il doit tenir sur une seule. Raccourcis memo: dans le frontmatter.`);
  }
  if (want('fiche')) for (const s of ls('fiche')) {
    const n = await pdf(`/imprimer/fiche/${s}/`, `fiche-${s}.pdf`);
    if (n > 3) console.warn(`⚠️  fiche ${s} : ${n} pages (objectif : 1 à 3).`);
  }
  if (want('fiches') && ls('fiches').length) await pdf('/imprimer/fiches/', 'fiches-pratiques-a4.pdf', { pageNumbers: true });
  if (want('livre')) for (const id of ls('livre')) await pdf(`/imprimer/livre/${id}/`, `livre-${id}-a5.pdf`, { pageNumbers: true });
  if (want('epub')) for (const id of ls('livre')) await epub(id);
} finally {
  await browser.close();
  server.close();
}
console.log(`✅ Fichiers dans ${path.relative(ROOT, OUT)}/`);
