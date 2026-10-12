import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { locations } from '@/data/site';
import { useLang } from '@/lib/lang';

export default function LocationsMap() {
  const lang = useLang();
  const t = (en: string, es: string) => (lang === 'es' ? es : en);
  const [id, setId] = useState(locations[0].id);
  const loc = locations.find((l) => l.id === id)!;
  const full = `${loc.address}, ${loc.cityLine}`;

  return (
    <div>
      <div role="tablist" aria-label={t('Choose a clinic', 'Elija una clínica')} className="flex flex-wrap gap-2.5">
        {locations.map((l) => {
          const on = l.id === id;
          return (
            <button
              key={l.id} role="tab" type="button" aria-selected={on} aria-controls="loc-panel" id={`tab-${l.id}`}
              onClick={() => setId(l.id)}
              className={`min-h-11 rounded-full border px-5 text-[0.95rem] font-medium transition-all duration-300 ${
                on ? 'border-gold-400 bg-gold-500 text-navy-950' : 'border-white/25 text-cream-50 hover:border-gold-400 hover:text-gold-300'
              }`}
            >
              {l.name}
            </button>
          );
        })}
      </div>

      <div id="loc-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="mt-10 grid gap-6 lg:grid-cols-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-8 lg:col-span-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {loc.type === 'Dental' ? t('Dental clinic', 'Clínica dental') : t('Medical clinic', 'Clínica médica')}
              </p>
              <h3 className="mt-3 font-serif text-4xl text-cream-50">{loc.name}</h3>
              <address className="mt-6 not-italic leading-relaxed text-cream-50/80">
                {loc.address}<br />{loc.cityLine}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <a href={`tel:${loc.tel}`} className="btn btn-gold">{loc.phone}</a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(full)}`}
                target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"
              >{t('Get directions', 'Cómo llegar')}</a>
              <a href={`/contact/${loc.id}`} className="link-underline self-start pt-2 text-sm text-cream-50/80">{t('Clinic page', 'Página de la clínica')} →</a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="overflow-hidden rounded-2xl border border-white/15 lg:col-span-8">
          <iframe
            key={loc.id}
            title={`${t('Map of', 'Mapa de')} ${loc.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(full)}&z=15&output=embed`}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-[22rem] w-full border-0 md:h-[28rem]"
          />
        </div>
      </div>
    </div>
  );
}
