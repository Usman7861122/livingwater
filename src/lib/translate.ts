// Page-wide EN <-> ES text swap. Walks text nodes and a few attributes and replaces them using a dictionary.
// The dictionary is loaded only when Spanish is chosen. Templates use {city}, {clinic}, {short} etc.
// Text inside [data-es] / [data-i18n] (handled elsewhere) and inside React islands is skipped.

type Dict = { phrases: Record<string, string>; terms: Record<string, string>; attrSuffixes?: [string, string][] };

const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'CODE', 'TEXTAREA', 'IFRAME']);
const ATTRS = ['alt', 'aria-label', 'title', 'placeholder'];
const textOrig = new WeakMap<Text, string>();
const attrOrig = new WeakMap<Element, Record<string, string>>();
let dict: Dict | null = null;
let templates: { re: RegExp; es: string; vars: string[] }[] = [];
const cache = new Map<string, string | null>();

const esc = (s: string) => s.replace(/[.*+?^$()|[\]\\]/g, '\\$&');

const CITIES = 'Lindsay|Woodlake|Porterville|Visalia|Selma|Tulare County';
const CLINICS = 'Lindsay Clinic|Lindsay Dental|Woodlake|Porterville Clinic|Visalia Clinic|Visalia Dental|Selma Clinic|Living Water Clinic|Living Water Clinic – Clínica Agua Viva';

function prepare(d: Dict) {
  dict = d;
  templates = [];
  const termRe = '(' + Object.keys(d.terms).sort((a, b) => b.length - a.length).map(esc).join('|') + ')';
  const varRe: Record<string, string> = {
    city: '(' + CITIES + ')', clinic: '(' + CLINICS + ')', name: '(' + CLINICS + ')',
    short: termRe, svc: termRe, n: '(\\d+)', phone: '([\\d() -]+)',
  };
  for (const [en, es] of Object.entries(d.phrases)) {
    if (!en.includes('{')) continue;
    const vars: string[] = [];
    const src = en.split(/(\{\w+\})/).map((part) => {
      const m = part.match(/^\{(\w+)\}$/);
      if (m) { vars.push(m[1]); return varRe[m[1]] ?? '(.+?)'; }
      return esc(part);
    }).join('');
    templates.push({ re: new RegExp('^' + src + '$'), es, vars });
  }
  // longest keys first so the most specific template wins
  templates.sort((a, b) => b.re.source.length - a.re.source.length);
}

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

function lookup(raw: string): string | null {
  if (!dict) return null;
  const key = norm(raw);
  if (!key) return null;
  if (cache.has(key)) return cache.get(key)!;
  let out: string | null = dict.phrases[key] ?? null;
  if (!out) {
    for (const t of templates) {
      const m = key.match(t.re);
      if (!m) continue;
      let es = t.es;
      t.vars.forEach((v, i) => {
        const val = m[i + 1];
        const tr = dict!.terms[val] ?? val;
        es = es.split('{' + v + '}').join(tr);
      });
      out = es;
      break;
    }
  }
  cache.set(key, out);
  return out;
}

function translateAttr(value: string): string | null {
  const hit = lookup(value);
  if (hit) return hit;
  for (const [en, es] of dict?.attrSuffixes ?? []) {
    const i = value.indexOf(en);
    if (i > 0) {
      const head = lookup(value.slice(0, i));
      if (head) return head + es + value.slice(i + en.length);
    }
  }
  return null;
}

function skip(el: Element | null): boolean {
  for (let n: Element | null = el; n; n = n.parentElement) {
    if (SKIP_TAGS.has(n.tagName.toUpperCase())) return true;
    if (n.tagName === 'ASTRO-ISLAND') return true;
    if (n.hasAttribute('data-es') || n.hasAttribute('data-i18n') || n.hasAttribute('data-no-translate')) return true;
  }
  return false;
}

function toEs() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n as Text);
  for (const t of nodes) {
    if (textOrig.has(t)) continue;
    const raw = t.nodeValue ?? '';
    if (!raw.trim() || skip(t.parentElement)) continue;
    const hit = lookup(raw);
    if (hit) {
      textOrig.set(t, raw);
      t.nodeValue = (raw.match(/^\s*/)![0]) + hit + (raw.match(/\s*$/)![0]);
    }
  }
  document.querySelectorAll('[alt],[aria-label],[title],[placeholder]').forEach((el) => {
    if (skip(el)) return;
    for (const a of ATTRS) {
      const v = el.getAttribute(a);
      if (!v) continue;
      const saved = attrOrig.get(el);
      if (saved && a in saved) continue;
      const hit = translateAttr(v);
      if (hit) {
        attrOrig.set(el, { ...(saved ?? {}), [a]: v });
        el.setAttribute(a, hit);
      }
    }
  });
  if (!document.documentElement.dataset.enTitle) document.documentElement.dataset.enTitle = document.title;
  const tt = lookup(document.documentElement.dataset.enTitle!);
  if (tt) document.title = tt;
}

function toEn() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n as Text;
    const o = textOrig.get(t);
    if (o !== undefined) { t.nodeValue = o; textOrig.delete(t); }
  }
  document.querySelectorAll('[alt],[aria-label],[title],[placeholder]').forEach((el) => {
    const saved = attrOrig.get(el);
    if (!saved) return;
    for (const [a, v] of Object.entries(saved)) el.setAttribute(a, v);
    attrOrig.delete(el);
  });
  if (document.documentElement.dataset.enTitle) document.title = document.documentElement.dataset.enTitle;
}

let loading: Promise<void> | null = null;
let want = 'en';
export async function translatePage(lang: string) {
  want = lang;
  if (lang === 'es') {
    if (!dict) {
      loading ??= import('../data/es-dict').then((m) => prepare({ phrases: m.phrases, terms: m.terms, attrSuffixes: m.attrSuffixes }));
      await loading;
    }
    if (want !== 'es') return;
    toEs();
  } else {
    toEn();
  }
}
