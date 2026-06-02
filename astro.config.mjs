import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://netsci2027.github.io',
  // Astro is the framework; it builds with Vite and renders React components.
  integrations: [react(), tailwind(), sitemap()],
});
