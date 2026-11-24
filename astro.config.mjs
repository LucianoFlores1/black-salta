// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// En GitHub Pages el sitio vive en un subdirectorio: SITE_URL y BASE_PATH los define el workflow.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://blacksalta.com',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
