import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { posts } from './src/data/posts.ts';

const postDates = Object.fromEntries(posts.map((p) => [p.slug, p.date]));

// Old /contact/... URLs now live at /locations/...
const ids = ['lindsay-medical', 'lindsay-dental', 'woodlake', 'porterville-medical', 'visalia-dental', 'visalia-medical', 'selma-medical'];

export default defineConfig({
  trailingSlash: 'always',
  site: 'https://www.livingwaterclinic.com',
  integrations: [
    react(),
    sitemap({
      // No 404 or legacy URLs in the sitemap.
      filter: (page) => !/\/404\/?$/.test(page) && !/\/contact(\/|$)/.test(page),
      serialize(item) {
        const m = item.url.match(/\/blog\/([^/]+)\/$/);
        const d = m && postDates[m[1]];
        if (d) item.lastmod = new Date(d).toISOString();
        return item;
      },
    }),
  ],
  redirects: {
    '/contact': '/locations',
    ...Object.fromEntries(ids.map((id) => [`/contact/${id}`, `/locations/${id}`])),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
