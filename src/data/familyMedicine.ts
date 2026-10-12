import { locations, type Location } from './site';

const base = '/images/services/family-medicine';
export const fm = {
  slug: 'family-medicine',
  title: 'Family Medicine',
  images: { hero: `${base}/hero.jpg`, senior: `${base}/senior.jpg`, child: `${base}/child.jpg`, teen: `${base}/teen.jpg` },
  summary: 'One trusted team for every age. From newborn checkups to care for grandparents, we look after the whole family under one roof.',
  intro: [
    'Family medicine in {city} means one doctor or provider who knows you, your children and your parents. Living Water Clinic helps {city} families treat health problems early, manage long-term conditions, and reach a specialist when needed.',
    'At our {clinic} location, we treat the whole person: body, mind and spirit. Visits are never rushed, and we explain things in plain words, in English or Spanish.',
  ],
  help: [
    ['Checkups for every age', 'Well-child visits, school and sports physicals, adult checkups and senior wellness visits for {city} families.'],
    ['Everyday illness and injury', 'Colds, flu, infections, rashes, minor injuries and other health problems that cannot wait.'],
    ['Long-term conditions', 'Ongoing care for diabetes, high blood pressure, asthma, high cholesterol and more.'],
    ['Prevention and screenings', 'Vaccines, blood tests, cancer screenings and healthy-living plans made just for you.'],
  ],
  when: [
    ['You do not have a regular doctor', 'Choose one {city} team for the whole family, so your records stay in one place.'],
    ['A child needs shots or a school form', 'We keep vaccines up to date and complete school and sports forms.'],
    ['A health problem keeps coming back', 'Tiredness, pain, high sugar or blood pressure should be checked, not ignored.'],
    ['You need a referral', 'We connect {city} patients with our in-house specialists or trusted partners.'],
  ],
  steps: [
    ['Step 1 · Your first visit', 'At {clinic}, we talk about your health, your family history and your goals. Then we do a simple exam and, if needed, blood work or screenings. Bring your insurance card and a list of your medicines.'],
    ['Step 2 · Your care plan', 'Together we build a plan that fits your life. Many {city} families return for regular checkups, and we are here between visits for questions and follow-up care.'],
  ],
  faq: [
    ['Do you offer family medicine in {city}?', 'Yes. Our {city} family medicine team cares for patients of all ages, from babies to seniors.'],
    ['Do you take my insurance?', 'We accept many plans, including Medi-Cal and Medicare. See the list on our home page, or call our {city} clinic to check.'],
    ['Can I get care in Spanish?', 'Yes. Our {city} team speaks English and Spanish, and the whole website has a Spanish version.'],
    ['What should I bring to my first visit?', 'Your photo ID, insurance card, a list of current medicines and any past medical records you have.'],
  ],
};

export const related = [
  ['Pediatric Care', '/services/pediatric-care'],
  ['Diabetes Care', '/services/diabetes'],
  ['Asthma', '/services/asthma'],
  ['Annual Wellness Visit', '/services/annual-wellness-visit'],
  ['Remote Patient Monitoring', '/services/remote-patient-monitoring'],
  ['Virtual Urgent Care', '/services/virtual-urgent-care'],
];

export const pathFor = (l?: Location) => `/services/family-medicine${l ? '/' + l.id : ''}`;

const blurbs: Record<string, string> = {
  'lindsay-medical': 'Our Lindsay Medical clinic welcomes families from Lindsay, Strathmore, Exeter and nearby towns.',
  'woodlake': 'Our Woodlake clinic keeps quality family care close to home for Woodlake and the foothill communities.',
  'porterville-medical': 'Our Porterville Medical clinic serves families across Porterville and the surrounding area.',
  'visalia-medical': 'Our Visalia Medical clinic is a convenient choice for families across Visalia and central Tulare County.',
  'selma-medical': 'Our Selma Medical clinic brings family medicine to Selma and neighboring Fresno County communities.',
  'lindsay-dental': 'Lindsay Dental is our dental office. For family medicine visits in Lindsay, please see Lindsay Medical.',
  'visalia-dental': 'Visalia Dental is our dental office. For family medicine visits in Visalia, please see Visalia Medical.',
};
export const blurb = (l: Location) => blurbs[l.id];
export const sibling = (l: Location) =>
  l.type === 'Dental' ? locations.find((x) => x.city === l.city && x.type === 'Medical') : undefined;

export type Ctx = { city: string; clinic: string };
export const fill = (t: string, c: Ctx) => t.replace(/\{city\}/g, c.city).replace(/\{clinic\}/g, c.clinic);
export const seo = (l?: Location) =>
  l
    ? {
        title: `Family Medicine in ${l.city}, CA | Living Water Clinic`,
        description: `Family medicine in ${l.city}, CA at Living Water Clinic (${l.name}), ${l.address}, ${l.cityLine}. Checkups, vaccines, chronic care and more for the whole family. Call ${l.phone}.`,
      }
    : {
        title: 'Family Medicine in Tulare County, CA',
        description: 'Family medicine for every age at 7 Living Water Clinic locations in Lindsay, Woodlake, Porterville, Visalia and Selma, California.',
      };
