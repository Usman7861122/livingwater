import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Old /contact/... URLs now live at /locations/...
const ids = ['lindsay-medical', 'lindsay-dental', 'woodlake', 'porterville-medical', 'visalia-dental', 'visalia-medical', 'selma-medical'];

export default defineConfig({
  integrations: [react()],
  redirects: {
    '/contact': '/locations',
    ...Object.fromEntries(ids.map((id) => [`/contact/${id}`, `/locations/${id}`])),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
