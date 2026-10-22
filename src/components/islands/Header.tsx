import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { nav, type NavItem } from '@/data/site';
import { setLang, useLang } from '@/lib/lang';

const Chevron = ({ open }: { open?: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const ext = (h: string) => (/^https?:/.test(h) ? { target: '_blank', rel: 'noopener noreferrer' } : {});

const ico = (d: string) => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const topLinks = [
  { href: 'tel:559-784-5483', label: { en: '559-784-5483', es: '559-784-5483' }, icon: ico('M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z') },
  { href: '/telemedicine', label: { en: 'Telemedicine', es: 'Telemedicina' }, icon: ico('M15 10l5-3v10l-5-3M3 6h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z') },
  { href: 'https://6501.portal.athenahealth.com/', label: { en: 'Patient Portal', es: 'Portal del paciente' }, icon: ico('M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z') },
  { href: '/providers', label: { en: 'Providers', es: 'Proveedores' }, icon: ico('M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-1.5M20 11a2 2 0 1 0 0 3') },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const lang = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setActive(null); setMobile(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  const openMenu = useCallback((key: string | null) => {
    clearTimeout(closeTimer.current);
    setActive(key);
  }, []);
  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 160);
  }, []);

  const light = !(solid || scrolled || active || mobile); // white text over hero
  const activeItem: NavItem | undefined = nav.find((n) => n.key === active && n.mega);
  const T = (v: { en: string; es: string }) => v[lang];

  return (
    <MotionConfig reducedMotion="user">
      <header
        className="fixed inset-x-0 top-0 z-50"
        onMouseEnter={() => clearTimeout(closeTimer.current)}
        onMouseLeave={scheduleClose}
      >
        {/* Utility bar (desktop): phone, telemedicine, patient portal, providers */}
        <div
          className={`hidden overflow-hidden bg-navy-950 text-cream-100 transition-[max-height,opacity] duration-500 ease-[var(--ease-lux)] lg:block ${scrolled || mobile ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}
          aria-hidden={scrolled || mobile ? true : undefined}
        >
          <div className="container-x">
            <ul className="flex items-center justify-end gap-2 py-2 text-[0.95rem] font-semibold">
              {topLinks.map((b) => (
                <li key={b.href}>
                  <a href={b.href} {...ext(b.href)} tabIndex={scrolled || mobile ? -1 : undefined}
                    className="inline-flex min-h-10 items-center gap-2.5 rounded-full px-4 transition-colors duration-300 hover:bg-white/10 hover:text-gold-300">
                    <span className="text-gold-400">{b.icon}</span>
                    {T(b.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`transition-[background-color,box-shadow,padding] duration-500 ease-[var(--ease-lux)] ${
            light ? 'bg-transparent py-5' : 'bg-cream-50/95 py-3 shadow-[0_1px_0_rgba(15,35,71,0.08)] backdrop-blur-md'
          }`}
        >
          <div className="container-x flex items-center justify-between gap-4">
            <a href="/" aria-label="Living Water Clinic – Clínica Agua Viva, home" className="shrink-0">
              <img
                src="/images/logo.png" alt="" width={200} height={50}
                className={`h-12 w-auto transition-[filter] duration-500 lg:h-12 xl:h-14 ${light ? 'brightness-0 invert' : ''}`}
              />
            </a>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => {
                  const isOpen = active === item.key;
                  return (
                    <li key={item.key} onMouseEnter={() => openMenu(item.mega ? item.key : null)}>
                      <a
                        href={item.href}
                        aria-haspopup={item.mega ? 'true' : undefined}
                        aria-expanded={item.mega ? isOpen : undefined}
                        onFocus={() => openMenu(item.mega ? item.key : null)}
                        className={`group relative flex min-h-11 items-center gap-1 whitespace-nowrap px-1.5 text-sm min-[1280px]:px-2 min-[1280px]:text-[0.95rem] min-[1500px]:gap-1.5 min-[1500px]:px-3 font-medium transition-colors duration-300 ${
                          light ? 'text-white' : 'text-navy-900'
                        } ${isOpen ? (light ? 'text-gold-300' : 'text-gold-700') : ''}`}
                      >
                        <span>{T(item.label)}</span>
                        {item.mega && <Chevron open={isOpen} />}
                        <span className={`absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-lux)] group-hover:scale-x-100 ${isOpen ? 'scale-x-100' : ''}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <div role="group" aria-label="Language" className={`flex shrink-0 overflow-hidden rounded-full border text-xs font-semibold ${light ? 'border-white/40 text-white' : 'border-navy-900/25 text-navy-900'}`}>
                {(['en', 'es'] as const).map((l) => (
                  <button
                    key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l}
                    className={`min-h-9 min-w-10 px-2.5 uppercase transition-colors duration-300 ${
                      lang === l ? 'bg-gold-500 text-navy-950' : light ? 'hover:bg-white/15' : 'hover:bg-navy-900/10'
                    }`}
                  >{l}</button>
                ))}
              </div>
              <a href="/#contact" className="btn btn-gold hidden !min-h-11 !px-5 !text-sm whitespace-nowrap xl:inline-flex">
                {lang === 'es' ? 'Reservar cita' : 'Book a visit'}
              </a>
              <button
                type="button" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile}
                onClick={() => setMobile((v) => !v)}
                className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${light ? 'text-white' : 'text-navy-900'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  {mobile ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Seamless desktop mega panel: one container, content cross-fades between items */}
        <AnimatePresence>
          {activeItem?.mega && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-x-0 top-full hidden lg:block"
            >
              <div className="pointer-events-auto mx-auto w-fit max-w-[calc(100vw-3rem)] pt-2" onMouseEnter={() => clearTimeout(closeTimer.current)}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.key}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-stretch gap-5 rounded-2xl border border-navy-900/10 bg-cream-50 p-4 shadow-[0_30px_60px_-20px_rgba(10,23,48,0.35)]"
                >
                  <div className="grid gap-x-5 py-1 pl-2" style={{ gridAutoFlow: 'column', gridAutoColumns: 'minmax(230px, 1fr)' }}>
                    {activeItem.mega.columns.map((col, ci) => (
                      <div key={ci} className={ci > 0 ? 'border-l border-navy-900/10 pl-5' : ''}>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">{T(col.title)}</p>
                        <ul>
                          {col.links.map((lk, i) => (
                            <motion.li key={lk.href} className={lk.heading ? 'mt-3 border-t border-navy-900/10 pt-3' : ''} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * i + 0.04 * ci, duration: 0.25 }}>
                              {lk.heading && <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">{T(lk.heading)}</p>}
                              <a href={lk.href} {...ext(lk.href)} className="group flex min-h-9 items-center justify-between gap-3 rounded-md px-2 text-navy-900 transition-colors duration-300 hover:bg-cream-200/70">
                                <span className="font-serif text-base transition-transform duration-300 group-hover:translate-x-1">{T(lk.label)}</span>
                                {lk.note ? <span className="text-xs text-mist">{lk.note.en}</span> : (
                                  <span className="text-gold-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"><Arrow /></span>
                                )}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <a href={activeItem.mega.feature.href} className="group relative block w-[250px] shrink-0 self-stretch overflow-hidden rounded-xl">
                    <img src={activeItem.mega.feature.img} alt="" loading="lazy" width={600} height={400} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-lux)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                    <div className="relative flex h-full min-h-[190px] flex-col justify-end p-4 text-white">
                      <p className="font-serif text-lg leading-tight">{T(activeItem.mega.feature.title)}</p>
                      <p className="mt-1 text-xs text-white/80">{T(activeItem.mega.feature.text)}</p>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">{T(activeItem.mega.feature.cta)} <Arrow /></span>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-cream-50 lg:hidden"
            >
              <ul className="container-x py-6">
                {nav.map((item) => (
                  <li key={item.key} className="border-b border-navy-900/10">
                    <div className="flex items-center justify-between">
                      <a href={item.href} onClick={() => setMobile(false)} className="flex min-h-14 flex-1 items-center font-serif text-2xl text-navy-900">{T(item.label)}</a>
                      {item.mega && (
                        <button type="button" aria-label={`${T(item.label)} submenu`} aria-expanded={mobileOpenKey === item.key}
                          onClick={() => setMobileOpenKey(mobileOpenKey === item.key ? null : item.key)}
                          className="grid h-12 w-12 place-items-center text-navy-900"><Chevron open={mobileOpenKey === item.key} /></button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {item.mega && mobileOpenKey === item.key && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <ul className="pb-4 pl-2">
                            {item.mega.columns.flatMap((c) => c.links).map((lk) => (
                              <li key={lk.href}><a href={lk.href} {...ext(lk.href)} onClick={() => setMobile(false)} className="flex min-h-11 items-center text-mist hover:text-navy-900">{T(lk.label)}</a></li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
              <div className="container-x pb-4">
                <ul className="grid grid-cols-2 gap-2">
                  {topLinks.map((b) => (
                    <li key={b.href}>
                      <a href={b.href} {...ext(b.href)} onClick={() => setMobile(false)} className="flex min-h-11 items-center gap-2 rounded-xl border border-navy-900/15 px-3 text-sm font-medium text-navy-900">
                        <span className="text-gold-700">{b.icon}</span>{T(b.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="container-x pb-10">
                <a href="/#contact" onClick={() => setMobile(false)} className="btn btn-navy w-full">{lang === 'es' ? 'Reservar cita' : 'Book a visit'}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
