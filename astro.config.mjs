// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://castilloeng.com.br',
  cacheDir: '.astro',   // data store do Content Layer dentro do workspace (node_modules é symlink read-only)
  vite: {
    plugins: [tailwindcss()],
    cacheDir: '.vite'   // dentro do projeto (não em node_modules/.vite — evita EROFS em ambientes com symlink)
  },
  integrations: [sitemap()],
  redirects: {
    // URLs em português migradas para nomes em inglês (301 preserva SEO)
    '/privacidade': '/privacy-lgpd',
    '/privacidade-lgpd': '/privacy-lgpd',
    '/precos': '/prices',
    '/metodologia': '/methodology'
  }
});