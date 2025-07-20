import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://know-your-way-25.github.io/web-blog',
  base: '/web-blog/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});