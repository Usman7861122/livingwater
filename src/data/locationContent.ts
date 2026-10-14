// Extra, location-specific content. Add more keys (location ids) to give other clinics the same detailed page.
export type LocContent = {
  about: string[];
  hours: [string, string][];
  email: string;
  insurance: { medical: string[]; dental: string[] };
  groups: { title: string; items: string[]; note?: string }[];
  programs: { title: string; items: string[] }[];
  gallery: { src: string; alt: string }[];
};

const wk = '8:00 AM – 12:00 PM | 1:00 PM – 5:00 PM';
const hoursWeek: [string, string][] = [['Monday', wk], ['Tuesday', wk], ['Wednesday', wk], ['Thursday', wk], ['Friday', wk], ['Saturday', 'Closed'], ['Sunday', 'Closed']];

const medicalBase = {
  hours: hoursWeek,
  email: 'livingwaterclinic@livingwaterclinic.com',
  insurance: {
    dental: ['Denti-Cal (Medi-Cal)'],
    medical: ['Aetna', 'Anthem Blue Cross Medi-Cal', 'Blue Cross CA', 'Blue Shield CA', 'Central Health Molina Healthcare', 'Champus Tricare', 'Cigna / Great West', 'Coventry / First Health', 'Covered California', 'Dignity Health', 'Health Net Medical', 'HealthNet', 'HealthSmart Preferred Care', 'Humana Medicare Advantage', 'La Salle', 'Medi-Cal', 'Medicare', 'Multiplan PHCS', 'Railroad Medicare – Palmetto', 'Tribal First'],
  },
  groups: [
    { title: 'Primary care and family medicine', items: ['Annual physical exams (adult and pediatric)', 'Medicare Annual Wellness Visits (AWV)', 'Preventive care and screenings', 'Sick visits and same-day appointments', 'Chronic disease management', 'Medication management and refills', 'Lab orders and results review', 'Specialist referrals and care coordination', 'Telehealth visits'] },
    { title: 'Pediatrics', items: ['Newborn and infant care', 'Well-child visits and immunizations', 'School and sports physicals', 'Developmental screenings', 'Acute illness care (fever, infections, etc.)'] },
    { title: 'Chronic disease management', items: ['Diabetes management', 'Hypertension (high blood pressure)', 'Heart disease care', 'Asthma and COPD management', 'Medication monitoring', 'Lifestyle counseling'] },
    { title: 'Behavioral health (LCSW)', items: ['Mental health assessments', 'Depression and anxiety treatment', 'Counseling and therapy (in person and telehealth)', 'Behavioral Health Integration (BHI)', 'Substance use support (mild to moderate cases)'] },
    { title: 'Chiropractic care', items: ['Back and neck pain', 'Spinal adjustments', 'Musculoskeletal pain management'] },
    { title: 'Dental services', items: ['Exams', 'Digital X-rays', 'Panoramic X-rays', 'Cleanings', 'Deep cleanings', 'Composite (tooth-colored) fillings', 'Porcelain crowns', 'Fixed bridges', 'Partial dentures', 'Dentures', 'Preventive dental care', 'Oral health education'], note: 'Dental care is provided at our Lindsay Dental office.' },
    { title: 'Preventive care and screenings', items: ['Blood pressure screening', 'Diabetes screening (A1C)', 'Cholesterol screening', 'Cancer screenings (breast, cervical, colorectal)', 'Vision screening', 'Depression screening', 'Tobacco use screening'] },
    { title: 'Medication and treatment support', items: ['Prescription refills', 'Medication reviews', 'Prior authorizations'] },
    { title: 'Lifestyle and wellness', items: ['Nutrition counseling', 'Weight management', 'Preventive health coaching', 'Exercise guidance', 'Smoking cessation support'] },
    { title: 'Acute care and same-day services', items: ['Cold, flu and infections', 'Minor injuries', 'Urgent symptoms', 'Walk-in visits (if available)'] },
    { title: 'Care coordination and patient support', items: ['Insurance navigation (Medi-Cal and Medicare)', 'PCP assignment assistance', 'Referral tracking', 'Hospital follow-up', 'Transportation and resource coordination'] },
  ],
  programs: [
    { title: 'Chronic Care Management (CCM)', items: ['Monthly check-ins', 'Medication support', 'Chronic condition monitoring'] },
    { title: 'Remote Patient Monitoring (RPM)', items: ['Monitoring of blood pressure, glucose and other numbers from home', 'Provider review of your data'] },
    { title: 'Behavioral Health Integration (BHI)', items: ['Coordination between mental and physical health care'] },
    { title: 'Enhanced Care Management (ECM)', items: ['Dedicated care managers on site', 'Coordination with specialists, hospitals and community resources', 'Support for high-risk and complex patients'] },
  ],
};

const dentalBase = {
  hours: hoursWeek,
  email: 'livingwaterclinic@livingwaterclinic.com',
  insurance: { medical: [] as string[], dental: ['Denti-Cal (Medi-Cal)'] },
  groups: [medicalBase.groups.find((g) => g.title === 'Dental services')!].map((g) => ({ title: g.title, items: g.items })),
  programs: [] as LocContent['programs'],
};

const medAbout = (city: string, addr: string, second?: string): string[] => [
  `Living Water Clinic in ${city} provides compassionate, patient-centered healthcare for individuals and families throughout the local community. Located at ${addr}, our ${city} clinic offers convenient access to primary and family medicine, walk-in care, telemedicine, urgent care, and specialty support.`,
  second ?? `Our ${city} location is committed to making quality healthcare accessible and welcoming for every patient. Guided by our faith-based values and a commitment to affordable, culturally sensitive care, we offer a comprehensive range of services, including access to optometry, dental care, and chiropractic treatment, helping our community receive integrative, total-person care close to home.`,
];
const dentAbout = (city: string, addr: string): string[] => [
  `Living Water Clinic in ${city} is dedicated to providing compassionate, patient-centered dental care for individuals and families throughout the local community. Located at ${addr}, our ${city} location offers a full spectrum of oral healthcare services designed to keep your smile healthy, bright, and strong.`,
  `Our ${city} clinic is committed to making quality dental care accessible, comfortable, and welcoming for every patient. Guided by our faith-based values and a commitment to affordable, culturally sensitive care, our experienced dental team provides personalized treatment in a supportive environment, helping our community achieve optimal oral health close to home.`,
];
const gal = (id: string, label: string, files: string[]) => files.map((f, i) => ({ src: `/images/locations/${id}/${f}`, alt: `${label} clinic, photo ${i + 1} of ${files.length}` }));

export const locationContent: Record<string, LocContent> = {
  'lindsay-medical': {
    ...medicalBase,
    about: medAbout('Lindsay', '833 North Sequoia Avenue'),
    gallery: gal('lindsay-medical', 'Lindsay Medical', ['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg', 'g6.jpg']),
  },
  'porterville-medical': {
    ...medicalBase,
    about: medAbout('Porterville', '222 West Henderson Avenue'),
    gallery: gal('porterville-medical', 'Porterville Medical', ['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg']),
  },
  woodlake: {
    ...medicalBase,
    about: medAbout('Woodlake', '101 North Palm Street', 'Our Woodlake location is committed to making quality healthcare accessible and welcoming for every patient. In addition to medical services, the clinic provides access to optometry, dental care, and chiropractic services, helping patients receive comprehensive care close to home.'),
    gallery: gal('woodlake', 'Woodlake', ['g1.jpg']),
  },
  'selma-medical': { ...medicalBase, about: medAbout('Selma', '3275 McCall Avenue'), gallery: [] },
  'visalia-medical': { ...medicalBase, about: medAbout('Visalia', '1410 South Mooney Boulevard'), gallery: [] },
  'lindsay-dental': {
    ...dentalBase,
    about: dentAbout('Lindsay', '233 South Mirage Avenue'),
    gallery: gal('lindsay-dental', 'Lindsay Dental', ['g1.jpg', 'g2.jpg']),
  },
  'visalia-dental': {
    ...dentalBase,
    about: dentAbout('Visalia', '1640 South Court Street'),
    gallery: gal('visalia-dental', 'Visalia Dental', ['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg']),
  },
};
