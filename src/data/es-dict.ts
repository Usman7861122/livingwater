// Spanish dictionary used by src/lib/translate.ts (loaded only when Spanish is chosen).
// phrases: exact English text (or a template with {city}, {clinic}, {short}, {svc}, {phone}, {addr}, {n}) -> Spanish.
// terms: values that can fill a {placeholder} and need their own translation (service names).
import { services } from './servicePages';
import { esServices, sharedEs } from './servicePages.es';
import { pagesEs } from './es-pages';
import { bios } from './providerBios';
import { biosEs1 } from './es-bios-1';
import { biosEs2 } from './es-bios-2';
import { biosEs3 } from './es-bios-3';
import { posts } from './posts';
import { postsEs } from './es-blog';
import { legal } from './legal';
import { legalEs, legalChromeEs } from './es-legal';
import { obgynEs } from './es-obgyn';

export const phrases: Record<string, string> = {};
export const terms: Record<string, string> = {};
export const attrSuffixes: [string, string][] = [
  [' at Living Water Clinic in ', ' en Living Water Clinic en '],
];

const add = (en: string, es: string) => { if (en && es) phrases[en] = es; };

// ---- Service data (paired by position) ----
for (const s of services) {
  const e = esServices[s.slug];
  if (!e) { console.warn('[es-dict] missing Spanish for', s.slug); continue; }
  add(s.title, e.title); terms[s.title] = e.title;
  add(s.short, e.short); terms[s.short] = e.short;
  add(s.summary, e.summary); add(s.heroAlt, e.heroAlt);
  s.labels.forEach((x, i) => add(x, e.labels[i]));
  s.alts.forEach((x, i) => add(x, e.alts[i]));
  s.intro.forEach((x, i) => add(x, e.intro[i]));
  s.help.forEach(([a, b], i) => { add(a, e.help[i][0]); add(b, e.help[i][1]); });
  s.when.forEach(([a, b], i) => { add(a, e.when[i][0]); add(b, e.when[i][1]); });
  s.steps.forEach(([a, b], i) => { add(a, e.steps[i][0]); add(b, e.steps[i][1]); });
  let k = 0;
  for (const [q, a] of s.faq) {
    if (sharedEs[a]) { add(q, sharedEs[q]); add(a, sharedEs[a]); continue; }
    const row = e.faq[k++];
    if (row) { add(q, row[0]); add(a, row[1]); }
  }
  if (k !== e.faq.length) console.warn('[es-dict] FAQ count mismatch for', s.slug, k, e.faq.length);
}
Object.entries(sharedEs).forEach(([en, es]) => add(en, es));

// ---- Service page chrome ----
Object.assign(phrases, {
  'Home': 'Inicio',
  'Services': 'Servicios',
  'Our services': 'Nuestros servicios',
  'in {city}': 'en {city}',
  'Our {city} clinic offers {short} for families and nearby communities.': 'Nuestra clínica de {city} ofrece {short} para familias y comunidades cercanas.',
  'Request an appointment': 'Solicitar una cita',
  'Find your clinic': 'Encuentre su clínica',
  'Overview': 'Resumen',
  'Understanding {short} in {city}': 'Todo sobre {short} en {city}',
  'Understanding {short}': 'Todo sobre {short}',
  'and your options.': 'y sus opciones.',
  'Visit our {city} clinic for {short} at': 'Visite nuestra clínica de {city} para {short}, en',
  'Call {phone}': 'Llame al {phone}',
  'What we help with': 'En qué ayudamos',
  'How we help {city} families': 'Cómo ayudamos a las familias de {city}',
  'How we help families': 'Cómo ayudamos a las familias',
  'with {short}.': 'con {short}.',
  'When to visit': 'Cuándo visitarnos',
  'Good reasons': 'Buenas razones',
  'to book a visit in {city}.': 'para programar una visita en {city}.',
  'to book a visit.': 'para programar una visita.',
  'How it works': 'Cómo funciona',
  'Your visit in {city},': 'Su visita en {city},',
  'Simple, caring,': 'Sencillo, cariñoso',
  'simple and never rushed.': 'sencilla y sin prisas.',
  'and never rushed.': 'y sin prisas.',
  'Do not': 'No',
  'wait it out.': 'espere a ver qué pasa.',
  'Small health problems are easier to treat early. If something feels wrong, call our {city} clinic. In an emergency, dial 911.': 'Los problemas de salud pequeños son más fáciles de tratar a tiempo. Si algo no se siente bien, llame a nuestra clínica de {city}. En una emergencia, marque el 911.',
  'Small health problems are easier to treat early. If something feels wrong, call us. In an emergency, dial 911.': 'Los problemas de salud pequeños son más fáciles de tratar a tiempo. Si algo no se siente bien, llámenos. En una emergencia, marque el 911.',
  'Related care': 'Atención relacionada',
  'More ways': 'Más maneras',
  'we can help in {city}.': 'en que podemos ayudar en {city}.',
  'we can help.': 'en que podemos ayudar.',
  'FAQ': 'Preguntas frecuentes',
  '{city} patients': 'Pacientes de {city}',
  'Patients': 'Pacientes',
  'ask us often.': 'nos preguntan seguido.',
  'Where we offer it': 'Dónde la ofrecemos',
  'Offered at': 'Se ofrece en',
  'this clinic only.': 'esta clínica solamente.',
  'Also available at': 'También disponible en',
  '{n} more clinics.': '{n} clínicas más.',
  '{n} more clinic.': '{n} clínica más.',
  '{svc} care at': 'Atención de {svc} en',
  '{n} clinics.': '{n} clínicas.',
  'You are viewing': 'Está viendo',
  'Get directions': 'Cómo llegar',
  'View the main {svc} page': 'Ver la página principal de {svc}',
  'Get {short} in {city},': 'Reciba {short} en {city},',
  'Get {short},': 'Reciba {short},',
  'starting today.': 'a partir de hoy.',
  'Call us or send a message.': 'Llámenos o envíenos un mensaje.',
  'Pick your nearest clinic below, or send a message.': 'Elija abajo la clínica más cercana o envíenos un mensaje.',
  'A team member will help you book your visit.': 'Un miembro del equipo le ayudará a programar su visita.',
});

// ---- Other pages ----
Object.assign(phrases, pagesEs.phrases);
Object.assign(terms, pagesEs.terms ?? {});

// ---- Page titles and shared labels ----
Object.assign(phrases, {
  '{svc} in {city}, CA | Living Water Clinic': '{svc} en {city}, CA | Living Water Clinic',
  '{svc} in Tulare County, CA | Living Water Clinic': '{svc} en el condado de Tulare, CA | Living Water Clinic',
  'Maps and outside content': 'Mapas y contenido externo',
});

// ---- Footer and shared labels ----
Object.assign(phrases, {
  'Privacy Policy': 'Política de Privacidad',
  'Notice of Privacy Practices': 'Aviso de Prácticas de Privacidad',
  'Cookie Policy': 'Política de Cookies',
  'Accessibility Statement': 'Declaración de Accesibilidad',
  'Terms of Use': 'Términos de Uso',
  'Nondiscrimination and Language Access': 'No Discriminación y Acceso a Idiomas',
  'Medical Disclaimer': 'Aviso Médico',
  'Cookie settings': 'Configuración de cookies',
  'For emergencies, call 911.': 'En una emergencia, llame al 911.',
});

// ---- Provider bios (paired paragraph by paragraph) ----
const biosEs: Record<string, string[]> = { ...biosEs1, ...biosEs2, ...biosEs3 };
for (const [slug, paras] of Object.entries(bios)) {
  const es = biosEs[slug];
  if (!es) { console.warn('[es-dict] missing Spanish bio for', slug); continue; }
  if (es.length !== paras.length) console.warn('[es-dict] bio paragraph count mismatch for', slug, paras.length, es.length);
  paras.forEach((t, i) => add(t, es[i]));
}

// ---- Providers page ----
Object.assign(phrases, {
  'Providers': 'Proveedores',
  'Our providers': 'Nuestros proveedores',
  'Meet the people': 'Conozca a las personas',
  'who care for you.': 'que cuidan de usted.',
  '{n} doctors, nurse practitioners, physician assistants, dentists and specialists, ready to care for your whole family.': '{n} médicos, enfermeras practicantes, asistentes médicos, dentistas y especialistas, listos para cuidar de toda su familia.',
  'All': 'Todos',
  'Specialty': 'Especialidad',
  'OB/GYN': 'Ginecología y Obstetricia',
  'providers shown': 'proveedores mostrados',
  'Read bio': 'Leer biografía',
  'Not sure who to see?': '¿No sabe a quién ver?',
  'Call your nearest clinic and our team will match you with the right provider.': 'Llame a su clínica más cercana y nuestro equipo le conectará con el proveedor adecuado.',
  'Filter providers by specialty': 'Filtrar proveedores por especialidad',
  '← All providers': '← Todos los proveedores',
  'Pediatrician': 'Pediatra',
  'Licensed Clinical Social Worker': 'Trabajador social clínico con licencia',
  'Chiropractor': 'Quiropráctico',
  'Podiatrist': 'Podiatra',
  'Optometrist': 'Optometrista',
  'Nephrology & Internal Medicine': 'Nefrología y Medicina Interna',
  'Primary Care & Family Medicine': 'Atención Primaria y Medicina Familiar',
  'Family Medicine, Psychiatry': 'Medicina Familiar, Psiquiatría',
  'Our Providers | Living Water Clinic': 'Nuestros proveedores | Living Water Clinic',
  'Biography coming soon.': 'Biografía próximamente.',
});

// ---- Blog posts ----
for (const post of posts) {
  const e = postsEs[post.slug];
  if (!e) { console.warn('[es-dict] missing Spanish post', post.slug); continue; }
  add(post.title, e.title); add(post.excerpt, e.excerpt); add(post.alt, e.alt); add(post.cta[0], e.cta);
  if (e.body.length !== post.body.length) console.warn('[es-dict] post body mismatch', post.slug);
  post.body.forEach((b, i) => {
    const t = e.body[i]; if (!t) return;
    if (b.h && t.h) add(b.h, t.h);
    b.p?.forEach((x, j) => t.p && add(x, t.p[j]));
    b.ul?.forEach((x, j) => t.ul && add(x, t.ul[j]));
  });
}
Object.assign(terms, {
  'Urgent Care': 'Atención urgente', 'Pediatrics': 'Pediatría',
  January: 'enero', February: 'febrero', March: 'marzo', April: 'abril', May: 'mayo', June: 'junio',
  July: 'julio', August: 'agosto', September: 'septiembre', October: 'octubre', November: 'noviembre', December: 'diciembre',
});
Object.assign(phrases, {
  '{tag} · {m} {d}, {y}': '{tag} · {d} de {m} de {y}',
  'Medical note:': 'Nota médica:',
  'This article is for general information. It is not medical advice. In an emergency, call 911.': 'Este artículo es solo informativo. No es consejo médico. En una emergencia, llame al 911.',
  'More from our blog': 'Más de nuestro blog',
  'Urgent Care': 'Atención urgente',
});

// ---- OB/GYN careers ----
Object.assign(phrases, obgynEs);

// ---- Legal pages (paired by position; draft Spanish, marked for lawyer review) ----
Object.assign(phrases, legalChromeEs);
for (const d of legal) {
  const e = legalEs[d.slug];
  if (!e) { console.warn('[es-dict] missing Spanish legal', d.slug); continue; }
  if (!phrases[d.title]) add(d.title, e.title);
  add(d.short, e.short); add(d.desc, e.desc); add(d.intro, e.intro);
  add(d.title + ' | Living Water Clinic', (phrases[d.title] ?? e.title) + ' | Living Water Clinic');
  if (e.sections.length !== d.sections.length) console.warn('[es-dict] legal sections mismatch', d.slug);
  d.sections.forEach((s, i) => {
    const t = e.sections[i]; if (!t) return;
    add(s.h, t.h);
    s.p?.forEach((x, j) => t.p && add(x, t.p[j]));
    s.ul?.forEach((x, j) => t.ul && add(x, t.ul[j]));
  });
}

// ---- Shared aria-labels ----
Object.assign(phrases, {
  'Living Water Clinic – Clínica Agua Viva, home': 'Living Water Clinic – Clínica Agua Viva, inicio',
  'Primary': 'Principal', 'Language': 'Idioma', 'Open menu': 'Abrir menú', 'Breadcrumb': 'Ruta de navegación',
  'Necessary': 'Necesarias', 'Analytics': 'Analítica', 'Marketing': 'Publicidad',
});
