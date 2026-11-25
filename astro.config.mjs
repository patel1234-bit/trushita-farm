import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://patel1234-bit.github.io',
  base: '/trushita-farm',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
