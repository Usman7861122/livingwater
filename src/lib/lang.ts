import { useEffect, useState } from 'react';

export type Lang = 'en' | 'es';

export function getLang(): Lang {
  try {
    return localStorage.getItem('lw-lang') === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
}

export function setLang(l: Lang) {
  try { localStorage.setItem('lw-lang', l); } catch {}
  document.documentElement.lang = l;
  window.dispatchEvent(new CustomEvent('lw:lang', { detail: l }));
}

export function useLang(): Lang {
  const [lang, set] = useState<Lang>('en');
  useEffect(() => {
    set(getLang());
    const h = (e: Event) => set((e as CustomEvent).detail as Lang);
    window.addEventListener('lw:lang', h);
    return () => window.removeEventListener('lw:lang', h);
  }, []);
  return lang;
}

export const pick = (v: { en: string; es: string }, lang: Lang) => v[lang];
