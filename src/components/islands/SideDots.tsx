import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { sections } from '@/data/site';
import { useLang } from '@/lib/lang';

export default function SideDots() {
  const lang = useLang();
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Mobile / tablet: thin progress bar */}
      <motion.div aria-hidden="true" style={{ scaleX: scaleY }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gold-500 lg:hidden" />

      {/* Desktop: timeline dots */}
      <nav aria-label="Page sections" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-8">
        <div className="relative rounded-full border border-gold-500/30 bg-cream-50/85 px-2.5 py-4 shadow-lg backdrop-blur-md">
          <span aria-hidden="true" className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-navy-900/15" />
          <motion.span aria-hidden="true" style={{ scaleY }} className="absolute left-1/2 top-4 bottom-4 w-px origin-top -translate-x-1/2 bg-gold-500" />
          <ul className="relative flex flex-col gap-3.5">
            {sections.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id} className="group relative">
                  <a
                    href={`#${s.id}`} aria-label={s.label[lang]} aria-current={on ? 'true' : undefined}
                    className="grid h-6 w-6 place-items-center"
                  >
                    <span className={`block rounded-full border transition-all duration-500 ease-[var(--ease-lux)] ${
                      on ? 'h-3.5 w-3.5 border-gold-500 bg-gold-500 shadow-[0_0_0_4px_rgba(184,146,74,0.25)]' : 'h-2 w-2 border-navy-900/40 bg-cream-50 group-hover:scale-150 group-hover:border-gold-500'
                    }`} />
                  </a>
                  <span className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-cream-50 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100">
                    {s.label[lang]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
