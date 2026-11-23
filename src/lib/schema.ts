// Structured data (schema.org JSON-LD). Only facts that are already on the site are used.
import { SITE_URL, locations, type Location } from '../data/site';

export const orgId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;
export const clinicId = (l: Location) => `${SITE_URL}/locations/${l.id}/#clinic`;
const abs = (p: string) => new URL(p, SITE_URL).href;

const address = (l: Location) => ({
  '@type': 'PostalAddress', streetAddress: l.address, addressLocality: l.city, addressRegion: 'CA',
  postalCode: l.cityLine.slice(-5), addressCountry: 'US',
});

export const clinicNode = (l: Location) => ({
  '@type': l.type === 'Dental' ? 'Dentist' : 'MedicalClinic',
  '@id': clinicId(l),
  name: `Living Water Clinic – ${l.name}`,
  url: abs(`/locations/${l.id}/`),
  telephone: l.phone,
  address: address(l),
  geo: { '@type': 'GeoCoordinates', latitude: l.lat, longitude: l.lng },
  parentOrganization: { '@id': orgId },
});

export const homeSchema = (description: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization', '@id': orgId,
      name: 'Living Water Clinic', alternateName: 'Clínica Agua Viva',
      url: abs('/'), logo: abs('/images/logo.png'), image: abs('/images/og-default.jpg'),
      description,
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Tulare County, California' },
        { '@type': 'AdministrativeArea', name: 'Fresno County, California' },
      ],
      availableLanguage: ['English', 'Spanish'],
      department: locations.map((l) => ({ '@id': clinicId(l) })),
    },
    ...locations.map(clinicNode),
    {
      '@type': 'WebSite', '@id': websiteId, url: abs('/'), name: 'Living Water Clinic',
      inLanguage: ['en', 'es'], publisher: { '@id': orgId },
    },
  ],
});

/** CollectionPage + BreadcrumbList for hub pages (providers, services, locations, blog, resources). */
export const hubSchema = (o: { name: string; path: string; description: string }) => {
  const url = abs(o.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', '@id': `${url}#webpage`, url, name: o.name, description: o.description,
        isPartOf: { '@id': websiteId }, about: { '@id': orgId }, breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
          { '@type': 'ListItem', position: 2, name: o.name, item: url },
        ],
      },
    ],
  };
};

// Only clear matches are mapped; everything else keeps the role as plain jobTitle.
const specialtyByCat: Record<string, string[]> = {
  family: ['FamilyPractice'], pediatrics: ['Pediatric'], dental: ['Dentistry'], obgyn: ['Obstetric', 'Gynecologic'],
};

export const physicianSchema = (p: { slug: string; name: string; creds: string; role: string; cat: string }, desc: string) => {
  const url = abs(`/providers/${p.slug}/`);
  const spec = p.role.toLowerCase().includes('nephrology') ? ['Nephrologic'] : specialtyByCat[p.cat];
  return {
    '@context': 'https://schema.org',
    '@type': p.cat === 'dental' ? 'Dentist' : /\bMD\b|\bDO\b/.test(p.creds) ? 'Physician' : 'Person',
    '@id': `${url}#physician`,
    name: p.creds ? `${p.name}, ${p.creds}` : p.name,
    url,
    image: abs(`/images/doctors/${p.slug}.webp`),
    jobTitle: p.role,
    description: desc,
    ...(spec ? { medicalSpecialty: spec } : {}),
    worksFor: { '@id': orgId },
    mainEntityOfPage: url,
  };
};
