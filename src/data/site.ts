export type L = { en: string; es: string };
export type NavLink = { label: L; href: string; note?: L };
export type MegaColumn = { title: L; links: NavLink[] };
export type NavItem = {
  key: string;
  label: L;
  href: string;
  mega?: {
    columns: MegaColumn[];
    feature: { title: L; text: L; img: string; href: string; cta: L };
  };
};

export const site = {
  name: 'Living Water Clinic',
  nameEs: 'Clínica Agua Viva',
  description:
    'Faith-based family medicine, dental and specialty care across Tulare County, California. Compassionate healthcare for the body, mind and spirit.',
};

export type Location = {
  id: string;
  name: string;
  city: string;
  type: 'Medical' | 'Dental';
  address: string;
  cityLine: string;
  phone: string;
  tel: string;
  lat: number;
  lng: number;
};

// Map pins are approximate (city level). Directions links use the exact address.
export const locations: Location[] = [
  { id: 'lindsay-medical', name: 'Lindsay Medical', city: 'Lindsay', type: 'Medical', address: '833 North Sequoia Avenue', cityLine: 'Lindsay, CA 93247', phone: '(559) 562-1361', tel: '+15595621361', lat: 36.2122, lng: -119.0905 },
  { id: 'lindsay-dental', name: 'Lindsay Dental', city: 'Lindsay', type: 'Dental', address: '233 South Mirage Avenue', cityLine: 'Lindsay, CA 93247', phone: '(559) 562-5969', tel: '+15595625969', lat: 36.1985, lng: -119.0832 },
  { id: 'woodlake', name: 'Woodlake', city: 'Woodlake', type: 'Medical', address: '101 North Palm Street', cityLine: 'Woodlake, CA 93286', phone: '(559) 564-1100', tel: '+15595641100', lat: 36.4143, lng: -119.0985 },
  { id: 'porterville-medical', name: 'Porterville Medical', city: 'Porterville', type: 'Medical', address: '222 West Henderson Avenue', cityLine: 'Porterville, CA 93257', phone: '(559) 784-5483', tel: '+15597845483', lat: 36.0662, lng: -119.0195 },
  { id: 'visalia-dental', name: 'Visalia Dental', city: 'Visalia', type: 'Dental', address: '1640 South Court Street', cityLine: 'Visalia, CA 93277', phone: '(559) 627-6311', tel: '+15596276311', lat: 36.3185, lng: -119.2915 },
  { id: 'visalia-medical', name: 'Visalia Medical', city: 'Visalia', type: 'Medical', address: '1410 S Mooney Blvd', cityLine: 'Visalia, CA 93277', phone: '(559) 635-1746', tel: '+15596351746', lat: 36.3235, lng: -119.3040 },
  { id: 'selma-medical', name: 'Selma Medical', city: 'Selma', type: 'Medical', address: '3275 McCall Avenue', cityLine: 'Selma, CA 93662', phone: '(559) 896-3808', tel: '+15598963808', lat: 36.5700, lng: -119.6120 },
];

const l = (en: string, es: string = en): L => ({ en, es });

export const nav: NavItem[] = [
  {
    key: 'about', label: l('About', 'Nosotros'), href: '/about',
    mega: {
      columns: [
        { title: l('Our Clinic', 'Nuestra clínica'), links: [
          { label: l('Our Office', 'Nuestra oficina'), href: '/about/our-office' },
          { label: l('Sobre Nosotros'), href: '/about/sobre-nosotros' },
          { label: l('Management', 'Administración'), href: '/about/management' },
          { label: l('HPSA'), href: 'https://hpsa.us/federal-programs/' },
        ] },
        { title: l('Join Our Team', 'Únase a nuestro equipo'), links: [
          { label: l('Careers', 'Empleos'), href: 'https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883c6876de6fb01877b50739f08cf' },
          { label: l('OB/GYN Careers', 'Empleos OB/GYN'), href: '/about/ob-gyn-careers' },
        ] },
      ],
      feature: { title: l('Faith-based. Family-focused.', 'Con fe. Enfocados en la familia.'), text: l('Meet the clinic behind the care.', 'Conozca la clínica detrás del cuidado.'), img: '/images/about.jpg', href: '/about', cta: l('Our story', 'Nuestra historia') },
    },
  },
  { key: 'providers', label: l('Providers', 'Proveedores'), href: '/providers' },
  {
    key: 'services', label: l('Services', 'Servicios'), href: '/services',
    mega: {
      columns: [
        { title: l('Primary Care', 'Atención primaria'), links: [
          { label: l('Family Medicine', 'Medicina familiar'), href: '/services/family-medicine' },
          { label: l('Pediatric Care', 'Cuidado pediátrico'), href: '/services/pediatric-care' },
          { label: l('Annual Wellness Visit', 'Visita anual de bienestar'), href: '/services/annual-wellness-visit' },
          { label: l('Virtual Urgent Care', 'Atención urgente virtual'), href: '/services/virtual-urgent-care' },
        ] },
        { title: l('Chronic Care', 'Cuidado crónico'), links: [
          { label: l('Diabetes'), href: '/services/diabetes' },
          { label: l('Asthma', 'Asma'), href: '/services/asthma' },
          { label: l('Weight Loss Management', 'Control de peso'), href: '/services/weight-loss-management' },
          { label: l('Remote Patient Monitoring', 'Monitoreo remoto'), href: '/services/remote-patient-monitoring' },
        ] },
        { title: l('Specialties', 'Especialidades'), links: [
          { label: l('Chiropractic Care', 'Quiropráctica'), href: '/services/chiropractic-care' },
          { label: l('Optometry', 'Optometría'), href: '/services/optometry' },
          { label: l('Foot Care', 'Cuidado de los pies'), href: '/services/foot-care' },
          { label: l('Nephrology', 'Nefrología'), href: '/services/nephrology' },
        ] },
      ],
      feature: { title: l('More than primary care', 'Más que atención primaria'), text: l('A multi-specialty clinic for the whole family.', 'Una clínica multiespecialidad para toda la familia.'), img: '/images/services.jpg', href: '/services', cta: l('View all services', 'Ver todos los servicios') },
    },
  },
  {
    key: 'dental', label: l('Dental', 'Dental'), href: '/dental',
    mega: {
      columns: [
        { title: l('Dental Care', 'Cuidado dental'), links: [
          { label: l('Dental Services', 'Servicios dentales'), href: '/dental/services' },
          { label: l('Our Dentists', 'Nuestros dentistas'), href: '/providers#dental' },
        ] },
        { title: l('Dental Locations', 'Clínicas dentales'), links: [
          { label: l('Lindsay Dental'), href: '/contact/lindsay-dental' },
          { label: l('Visalia Dental'), href: '/contact/visalia-dental' },
        ] },
      ],
      feature: { title: l('Complete dental care', 'Cuidado dental completo'), text: l('For children and adults.', 'Para niños y adultos.'), img: '/images/dental.jpg', href: '/dental', cta: l('Explore dental', 'Explorar dental') },
    },
  },
  { key: 'ecm', label: l('ECM'), href: '/ecm' },
  { key: 'blog', label: l('Blog'), href: '/blog' },
  {
    key: 'resources', label: l('Resources', 'Recursos'), href: '/resources',
    mega: {
      columns: [
        { title: l('For Patients', 'Para pacientes'), links: [
          { label: l('Insurances', 'Seguros'), href: '/resources/insurances' },
          { label: l('Pricing', 'Precios'), href: 'https://www.phreesia.net/25/patient/Payment.aspx/Start?encrypted=nbQ3NEXtPyONdOyRAwR6PTqeRKZ1WssfUpMK1UIEkPXtiut3_zkPABG8HaHyCENRUNhRKs7Cx_xYXsOZAE6bgjl5ETsM7ywLwAujSQGNQP38eWJK7WaYfw5BlqhrzDQ6U1wg2csgEpYGVL2L2w-usRXhM0Ht4SZ9NSzCBbGGvK01' },
          { label: l('FAQ', 'Preguntas frecuentes'), href: '/resources/faq' },
          { label: l('Testimonials', 'Testimonios'), href: '/resources/testimonials' },
        ] },
      ],
      feature: { title: l('Care within reach', 'Cuidado a su alcance'), text: l('Insurance, pricing and answers in one place.', 'Seguros, precios y respuestas en un solo lugar.'), img: '/images/doctor.jpg', href: '/resources/insurances', cta: l('Check your plan', 'Revise su plan') },
    },
  },
  {
    key: 'contact', label: l('Locations', 'Ubicaciones'), href: '/contact',
    mega: {
      columns: [
        { title: l('Medical', 'Médico'), links: locations.filter(x => x.type === 'Medical').map(x => ({ label: l(x.name), href: `/contact/${x.id}`, note: l(x.phone) })) },
        { title: l('Dental', 'Dental'), links: locations.filter(x => x.type === 'Dental').map(x => ({ label: l(x.name), href: `/contact/${x.id}`, note: l(x.phone) })) },
      ],
      feature: { title: l('Seven locations, one family', 'Siete clínicas, una familia'), text: l('Find the clinic closest to you.', 'Encuentre la clínica más cercana.'), img: '/images/hero.jpg', href: '/#locations', cta: l('See the map', 'Ver el mapa') },
    },
  },
];

export const allPaths: { slug: string; title: string }[] = (() => {
  const seen = new Map<string, string>();
  const add = (href: string, title: string) => {
    if (/^https?:/.test(href)) return;
    const slug = href.replace(/^\//, '').split('#')[0];
    if (slug && !slug.startsWith('#') && !seen.has(slug)) seen.set(slug, title);
  };
  nav.forEach(n => {
    add(n.href, n.label.en);
    n.mega?.columns.forEach(c => c.links.forEach(k => add(k.href, k.label.en)));
  });
  locations.forEach(x => add(`/contact/${x.id}`, x.name));
  return [...seen].map(([slug, title]) => ({ slug, title }));
})();

export const services = [
  { icon: 'stethoscope', title: l('Family Medicine', 'Medicina familiar'), text: l('Lifelong care for every age, from checkups to complex needs.', 'Cuidado para toda la vida, desde chequeos hasta necesidades complejas.'), href: '/services/family-medicine', img: '/images/services/family.jpg' },
  { icon: 'smile', title: l('Pediatric Care', 'Cuidado pediátrico'), text: l('Gentle wellness visits and treatment for babies, kids and teens.', 'Visitas de bienestar y tratamiento para bebés, niños y adolescentes.'), href: '/services/pediatric-care', img: '/images/services/pediatric.jpg' },
  { icon: 'droplet', title: l('Diabetes', 'Diabetes'), text: l('Bilingual education, monitoring and support to stay in control.', 'Educación bilingüe, monitoreo y apoyo para mantener el control.'), href: '/services/diabetes', img: '/images/services/diabetes.jpg' },
  { icon: 'wind', title: l('Asthma', 'Asma'), text: l('Clear action plans so you and your family can breathe easier.', 'Planes claros para que usted y su familia respiren mejor.'), href: '/services/asthma', img: '/images/services/asthma.jpg' },
  { icon: 'calendar', title: l('Annual Wellness Visit', 'Visita anual de bienestar'), text: l('A yearly check-in focused on prevention and your long-term health.', 'Una visita anual enfocada en la prevención y su salud a largo plazo.'), href: '/services/annual-wellness-visit', img: '/images/services/wellness.jpg' },
  { icon: 'scale', title: l('Weight Loss Management', 'Control de peso'), text: l('Supportive, medically guided plans that fit your life.', 'Planes de apoyo, guiados por médicos, que se adaptan a su vida.'), href: '/services/weight-loss-management', img: '/images/services/weight.jpg' },
  { icon: 'video', title: l('Virtual Urgent Care', 'Atención urgente virtual'), text: l('See a provider from home when you need care fast.', 'Consulte a un proveedor desde casa cuando necesite atención rápida.'), href: '/services/virtual-urgent-care', img: '/images/services/virtual.jpg' },
  { icon: 'activity', title: l('Remote Patient Monitoring', 'Monitoreo remoto'), text: l('Track your health between visits with help from your care team.', 'Siga su salud entre visitas con ayuda de su equipo de atención.'), href: '/services/remote-patient-monitoring', img: '/images/services/remote.jpg' },
];

export const specialties = [
  { n: '01', img: '/images/specialties/obgyn.jpg', title: l('OB-GYN', 'Obstetricia y ginecología'), text: l('Women’s health, pregnancy and gynecologic care.', 'Salud de la mujer, embarazo y cuidado ginecológico.') },
  { n: '02', img: '/images/specialties/podiatry.jpg', title: l('Podiatry', 'Podología'), text: l('Foot and ankle care, from pain to diabetic foot checks.', 'Cuidado de pies y tobillos, del dolor a revisiones para diabetes.') },
  { n: '03', img: '/images/specialties/chiro.jpg', title: l('Chiropractic', 'Quiropráctica'), text: l('Relief for back, neck and joint discomfort.', 'Alivio para dolor de espalda, cuello y articulaciones.') },
  { n: '04', img: '/images/specialties/optometry.jpg', title: l('Optometry', 'Optometría'), text: l('Eye exams and vision care for the whole family.', 'Exámenes de la vista y cuidado visual para toda la familia.') },
  { n: '05', img: '/images/specialties/nephrology.jpg', title: l('Nephrology', 'Nefrología'), text: l('Kidney health and long-term condition management.', 'Salud de los riñones y manejo de condiciones a largo plazo.') },
  { n: '06', img: '/images/specialties/behavioral.jpg', title: l('Behavioral Health', 'Salud conductual'), text: l('Counseling and mental health support with licensed clinicians.', 'Consejería y apoyo de salud mental con clínicos con licencia.') },
];

export const doctors = [
  { slug: 'abbas-hasnain', name: 'Hasnain Abbas', creds: 'M.D.', role: l('Family Medicine', 'Medicina familiar') },
  { slug: 'alma-corvera', name: 'Alma Corvera', creds: 'P.A.-C', role: l('Family Medicine', 'Medicina familiar') },
  { slug: 'alma-sanchez', name: 'Alma Sanchez', creds: 'D.D.S.', role: l('Dental & Specialty', 'Dental y especialidad') },
  { slug: 'ana-rosa-celaya', name: 'Ana Rosa Celaya', creds: 'P.A.-C', role: l('Family Medicine', 'Medicina familiar') },
  { slug: 'andy-phan', name: 'Andy Phan', creds: 'M.D.', role: l('Pediatrician', 'Pediatra') },
  { slug: 'angelina-neria', name: 'Angelina Neria', creds: 'M.D., R.D., M.P.H.', role: l('Family Medicine', 'Medicina familiar') },
  { slug: 'arthur-molina', name: 'Arthur Molina', creds: 'M.D.', role: l('Family Medicine', 'Medicina familiar') },
  { slug: 'brianna-edwards', name: 'Brianna Edwards', creds: 'F.N.P.-C, M.S.N., R.N.', role: l('Family Medicine', 'Medicina familiar') },
];

export const dentalServices = [
  l('Checkups & cleanings', 'Chequeos y limpiezas'),
  l('First dental visits for children', 'Primeras visitas dentales para niños'),
  l('Fillings & restorations', 'Empastes y restauraciones'),
  l('Preventive care', 'Cuidado preventivo'),
  l('Care for the whole family', 'Cuidado para toda la familia'),
  l('Gentle, friendly dentists', 'Dentistas amables y cuidadosos'),
];

export const blog = [
  { title: 'Don’t Let Diabetes Sneak Up on You — Learn to Recognize the Early Signs', tag: l('Diabetes'), img: '/images/doctor.jpg', excerpt: l('Know the early warning signs and when to schedule a screening.', 'Conozca las señales tempranas y cuándo programar una prueba.'), href: '/blog/early-signs-of-diabetes' },
  { title: 'Bilingual Diabetes Management Doctor in Porterville', tag: l('Diabetes'), img: '/images/about.jpg', excerpt: l('Comprehensive, compassionate care near you, in English and Spanish.', 'Cuidado integral y compasivo cerca de usted, en inglés y español.'), href: '/blog/bilingual-diabetes-doctor-porterville' },
  { title: 'Cut on Hand Needs Stitches? Walk-In Urgent Care in Porterville', tag: l('Urgent Care', 'Atención urgente'), img: '/images/services.jpg', excerpt: l('What to do and when to be seen right away.', 'Qué hacer y cuándo recibir atención de inmediato.'), href: '/blog/hand-cut-stitches-urgent-care-porterville' },
  { title: 'Affordable Pediatric Wellness Checkup in Woodlake', tag: l('Pediatrics', 'Pediatría'), img: '/images/hero.jpg', excerpt: l('Healthy smiles and growth for every child.', 'Sonrisas sanas y crecimiento para cada niño.'), href: '/blog/pediatric-wellness-checkup-woodlake' },
  { title: 'Child Severe Ear Pain? Open Today in Lindsay, CA', tag: l('Pediatrics', 'Pediatría'), img: '/images/mission.jpg', excerpt: l('Fast relief for your little one.', 'Alivio rápido para su pequeño.'), href: '/blog/child-ear-pain-lindsay' },
];

export const sections = [
  { id: 'home', label: l('Welcome', 'Bienvenida') },
  { id: 'about', label: l('About', 'Nosotros') },
  { id: 'services', label: l('Services', 'Servicios') },
  { id: 'specialties', label: l('Specialties', 'Especialidades') },
  { id: 'mission', label: l('Mission', 'Misión') },
  { id: 'care', label: l('Our Promise', 'Nuestra promesa') },
  { id: 'doctors', label: l('Doctors', 'Doctores') },
  { id: 'dental', label: l('Dental', 'Dental') },
  { id: 'insurance', label: l('Insurance', 'Seguros') },
  { id: 'blog', label: l('Blog') },
  { id: 'locations', label: l('Locations', 'Clínicas') },
  { id: 'contact', label: l('Contact', 'Contacto') },
];

export const insurance = [
  { file: 'aetna', name: 'Aetna' },
  { file: 'anthem-blue-cross', name: 'Anthem Blue Cross' },
  { file: 'brand-new-day', name: 'Brand New Day' },
  { file: 'cigna', name: 'Cigna Healthcare' },
  { file: 'coventry', name: 'Coventry Health Care' },
  { file: 'covered-california', name: 'Covered California' },
  { file: 'dignity-health', name: 'Dignity Health' },
  { file: 'health-net', name: 'Health Net' },
  { file: 'healthsmart', name: 'HealthSmart' },
  { file: 'lasalle', name: 'LaSalle' },
  { file: 'medi-cal', name: 'Medi-Cal' },
  { file: 'medicare', name: 'Medicare' },
  { file: 'phcs', name: 'PHCS' },
];
