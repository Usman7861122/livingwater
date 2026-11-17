// Helpers that keep page titles and descriptions inside the lengths search engines show.
export const TITLE_MAX = 60;
export const DESC_MIN = 120;
export const DESC_MAX = 155;

/** Adds " | Living Water Clinic" (or the shorter " | Living Water") only when the title still fits in 60 characters. */
export function fitTitle(base: string): string {
  const b = base.replace(/\s*\|\s*Living Water( Clinic)?$/, '').trim();
  for (const suffix of [' | Living Water Clinic', ' | Living Water', '']) {
    if ((b + suffix).length <= TITLE_MAX) return b + suffix;
  }
  return b.slice(0, TITLE_MAX - 1).replace(/\s+\S*$/, '') + '…';
}

const firstSentence = (s: string) => (s.match(/^.*?[.!?](\s|$)/)?.[0] ?? s).trim();

/** Cuts text at a sentence end (or word end) so it is at most `max` characters. */
export function clampDesc(text: string, max = DESC_MAX): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const sentence = cut.match(/^.*[.!?](?=\s|$)/)?.[0];
  if (sentence && sentence.length >= DESC_MIN) return sentence;
  return cut.replace(/\s+\S*$/, '').replace(/[,;:\-–—]+$/, '') + '…';
}

/**
 * Builds a description from parts in priority order. Each part may list alternatives (longest first);
 * the first alternative that still fits within the limit is added, parts that cannot fit are skipped.
 */
export function fitDesc(parts: (string | string[])[], max = DESC_MAX): string {
  let out = '';
  for (const p of parts) {
    const alts = Array.isArray(p) ? p : [p];
    for (const a of alts) {
      const next = out ? `${out} ${a}` : a;
      if (a && next.length <= max) { out = next; break; }
    }
  }
  return out;
}

export const sentence1 = firstSentence;
