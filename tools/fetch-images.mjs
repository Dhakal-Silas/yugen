// Downloads one lead photo per item from Wikipedia/Wikimedia Commons (server-resized)
// and records its author + licence in credits.js. Usage: node fetch-images.mjs [id ...]
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { ITEMS } = require('../data.js');

const UA = { 'User-Agent': 'Yugen/1.0 (educational hobby site)' };
const WIDTH = 720;
// Hand-picked Commons files where the article's lead image doesn't suit a card.
const OVERRIDES = JSON.parse(fs.existsSync('overrides.json') ? fs.readFileSync('overrides.json', 'utf8') : '{}');
const creditsPath = 'credits.json';
const credits = fs.existsSync(creditsPath) ? JSON.parse(fs.readFileSync(creditsPath, 'utf8')) : {};
const only = process.argv.slice(2);

const strip = (html = '') => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const sleep = ms => new Promise(r => setTimeout(r, ms));

// fetch that waits out 429s as the server asks.
async function get(url) {
  for (let i = 0; i < 10; i++) {
    let r;
    try { r = await fetch(url, { headers: UA }); } catch { await sleep(5000); continue; }
    if (r.status !== 429 && r.status < 500) return r;
    const wait = (+r.headers.get('retry-after') || 20) + 2;
    console.log('  wait', wait, 's');
    await sleep(wait * 1000);
  }
  return { ok: false, status: 'giveup' };
}

async function json(url) {
  for (let i = 0; i < 10; i++) {
    const r = await get(url);
    if (r.ok) return r.json();
  }
  throw new Error('HTTP fail ' + url);
}

// Lead image file names for all articles, 40 titles per request.
const LEAD = {};
{
  const titles = ITEMS.map(i => i.wiki);
  for (let i = 0; i < titles.length; i += 40) {
    const batch = titles.slice(i, i + 40);
    const q = await json(`https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=name&pilicense=free&titles=${encodeURIComponent(batch.join('|'))}`);
    const back = {};
    for (const n of q.query.normalized || []) back[n.to] = n.from;
    for (const r of q.query.redirects || []) back[r.to] = back[r.from] || r.from;
    for (const pg of Object.values(q.query.pages)) {
      const orig = back[pg.title] || pg.title;
      LEAD[orig.replace(/ /g, '_')] = pg.pageimage || null;
    }
    await sleep(500);
  }
}
const leadFile = title => LEAD[title.replace(/ /g, '_')] ?? LEAD[title] ?? null;

for (const it of ITEMS) {
  if (only.length && !only.includes(it.id)) continue;
  if (!only.length && credits[it.id]) continue;
  try {
    let file = OVERRIDES[it.id] || await leadFile(it.wiki);
    if (!file) { console.log('NOIMG', it.id); continue; }
    const q = await json(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=${WIDTH}&titles=${encodeURIComponent('File:' + file)}`);
    const page = Object.values(q.query.pages)[0];
    const ii = page.imageinfo?.[0];
    if (!ii) { console.log('MISSING', it.id, file); continue; }
    const md = ii.extmetadata || {};
    const url = ii.thumburl || ii.url;
    const ext = /\.png($|\?)/i.test(url) ? 'png' : 'jpg';
    const r = await get(url);
    if (!r.ok) { console.log('DLFAIL', it.id, r.status); continue; }
    const buf = Buffer.from(await r.arrayBuffer());
    for (const e of ['jpg', 'png']) fs.rmSync(`img/${it.id}.${e}`, { force: true });
    fs.writeFileSync(`img/${it.id}.${ext}`, buf);
    credits[it.id] = {
      src: `img/${it.id}.${ext}`,
      w: ii.thumbwidth || ii.width, h: ii.thumbheight || ii.height,
      artist: strip(md.Artist?.value) || 'Unknown',
      license: strip(md.LicenseShortName?.value) || 'See source',
      page: ii.descriptionurl,
    };
    console.log('OK', it.id, (buf.length / 1024).toFixed(0) + 'KB', credits[it.id].license, '|', credits[it.id].artist.slice(0, 40));
    fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 1));
    await sleep(2500);
  } catch (e) { console.log('ERR', it.id, e.message); }
}
