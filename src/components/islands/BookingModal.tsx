import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ContactForm from './ContactForm';
import { useLang } from '@/lib/lang';

const SEL = 'a[href="#contact"], a[href="/#contact"], [data-book]';

export default function BookingModal() {
  const lang = useLang();
  const es = lang === 'es';
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  // Any "Book a visit" / "Request an appointment" link opens the modal.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest(SEL) as HTMLElement | null;
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      opener.current = a;
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Scroll lock, Esc to close, focus trap, return focus.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => (panel.current?.querySelector('input,select,textarea,button') as HTMLElement | null)?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key !== 'Tab' || !panel.current) return;
      const f = Array.from(panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'));
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { clearTimeout(t); document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); opener.current?.focus?.(); };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="bk" className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-navy-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <motion.div ref={panel} role="dialog" aria-modal="true" aria-labelledby="bk-title"
            className="relative my-auto w-full max-w-2xl rounded-3xl bg-cream-100 p-5 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <button type="button" onClick={() => setOpen(false)} aria-label={es ? 'Cerrar' : 'Close'}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-navy-900 transition hover:bg-navy-900/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            <p className="eyebrow">{es ? 'Reservar cita' : 'Book a visit'}</p>
            <h2 id="bk-title" className="mt-3 pr-12 font-serif text-3xl text-navy-900">{es ? 'Cuéntenos cómo podemos ayudar' : 'Tell us how we can help'}</h2>
            <p className="mb-6 mt-2 text-mist">{es ? 'Un miembro del equipo le contactará pronto.' : 'A team member will reach out to you soon.'}</p>
            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
