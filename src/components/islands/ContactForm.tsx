import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react';
import { locations } from '@/data/site';
import { useLang } from '@/lib/lang';

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'location' | 'message', string>>;

export default function ContactForm() {
  const lang = useLang();
  const t = (en: string, es: string) => (lang === 'es' ? es : en);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || '').trim();
    const er: Errors = {};
    if (v('name').length < 2) er.name = t('Please enter your full name.', 'Escriba su nombre completo.');
    if (v('phone').replace(/\D/g, '').length < 10) er.phone = t('Enter a phone number with 10 digits.', 'Escriba un teléfono de 10 dígitos.');
    if (v('email') && !/^\S+@\S+\.\S+$/.test(v('email'))) er.email = t('Check your email, for example name@email.com.', 'Revise su correo, por ejemplo nombre@correo.com.');
    if (!v('location')) er.location = t('Choose the clinic nearest you.', 'Elija la clínica más cercana.');
    if (v('message').length < 5) er.message = t('Tell us a little about how we can help.', 'Cuéntenos brevemente cómo podemos ayudar.');
    setErrors(er);
    if (Object.keys(er).length) {
      (e.currentTarget.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus();
      return;
    }
    setSending(true);
    // Design-only for now: no data is sent anywhere.
    setTimeout(() => { setSending(false); setDone(true); }, 900);
  };

  const field = 'peer w-full rounded-xl border border-navy-900/20 bg-white px-4 py-3 text-ink outline-none transition-[border-color,box-shadow] duration-300 focus:border-gold-500 focus:shadow-[0_0_0_4px_rgba(184,146,74,0.18)] aria-[invalid=true]:border-red-700 min-h-12';
  const label = 'mb-1.5 block text-sm font-semibold text-navy-900';
  const err = (m?: string, id?: string) => m && <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700"><span aria-hidden="true">⚠</span>{m}</p>;

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} role="status"
          className="grid min-h-[28rem] place-items-center rounded-2xl bg-white p-10 text-center shadow-xl">
          <div>
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gold-500 text-navy-950">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
            </div>
            <h3 className="font-serif text-3xl text-navy-900">{t('Thank you', 'Gracias')}</h3>
            <p className="mx-auto mt-3 max-w-sm text-mist">{t('Your message is ready. (This form is a design preview and is not connected yet.)', 'Su mensaje está listo. (Este formulario es una vista previa y aún no está conectado.)')}</p>
            <button type="button" onClick={() => setDone(false)} className="btn btn-outline mt-6">{t('Send another', 'Enviar otro')}</button>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="grid gap-5 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-10">
          <div className="sm:col-span-2">
            <label htmlFor="cf-name" className={label}>{t('Full name', 'Nombre completo')}</label>
            <input id="cf-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-e' : undefined} />
            {err(errors.name, 'cf-name-e')}
          </div>
          <div>
            <label htmlFor="cf-phone" className={label}>{t('Phone', 'Teléfono')}</label>
            <input id="cf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'cf-phone-e' : undefined} />
            {err(errors.phone, 'cf-phone-e')}
          </div>
          <div>
            <label htmlFor="cf-email" className={label}>{t('Email (optional)', 'Correo (opcional)')}</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-e' : undefined} />
            {err(errors.email, 'cf-email-e')}
          </div>
          <div>
            <label htmlFor="cf-loc" className={label}>{t('Nearest clinic', 'Clínica más cercana')}</label>
            <select id="cf-loc" name="location" defaultValue="" className={field} aria-invalid={!!errors.location} aria-describedby={errors.location ? 'cf-loc-e' : undefined}>
              <option value="" disabled>{t('Select a clinic', 'Seleccione una clínica')}</option>
              {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
            {err(errors.location, 'cf-loc-e')}
          </div>
          <div>
            <label htmlFor="cf-svc" className={label}>{t('I need help with', 'Necesito ayuda con')}</label>
            <select id="cf-svc" name="service" defaultValue="" className={field}>
              <option value="">{t('Not sure yet', 'Aún no estoy seguro')}</option>
              <option>{t('Family medicine', 'Medicina familiar')}</option>
              <option>{t('Pediatric care', 'Cuidado pediátrico')}</option>
              <option>{t('Dental care', 'Cuidado dental')}</option>
              <option>{t('Specialty care', 'Especialidades')}</option>
              <option>{t('Insurance question', 'Pregunta de seguro')}</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-msg" className={label}>{t('How can we help?', '¿Cómo podemos ayudar?')}</label>
            <textarea id="cf-msg" name="message" rows={4} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-msg-e' : undefined} />
            {err(errors.message, 'cf-msg-e')}
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-mist">{t('For emergencies, call 911.', 'En caso de emergencia, llame al 911.')}</p>
            <button type="submit" disabled={sending} className="btn btn-navy disabled:opacity-70">
              {sending ? t('Sending…', 'Enviando…') : t('Send message', 'Enviar mensaje')}
              {!sending && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
