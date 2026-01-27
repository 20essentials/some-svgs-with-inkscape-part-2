// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Localhost
  //Deploy normal project
  base: '/some-svgs-with-inkscape-part-2/',
  site: 'https://20essentials.github.io/some-svgs-with-inkscape-part-2/',
  // site: 'http://localhost:4321/',

  integrations: [react()]
});