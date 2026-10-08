// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://castilloengenharia.com.br',
  cacheDir: '.astro',   // data store do Content Layer dentro do workspace (node_modules é symlink read-only)
  // Equações LaTeX nos artigos ($$...$$) — renderizadas em build pelo KaTeX.
  // singleDollarTextMath: false evita que textos com "R$" (metodologia,
  // investimentos) sejam interpretados como matemática inline.
  markdown: {
    remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeKatex],
  },
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