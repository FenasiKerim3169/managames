import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), sitemap()],
  server: {
    port: 8080
  },
  site: 'https://managames.de',
});