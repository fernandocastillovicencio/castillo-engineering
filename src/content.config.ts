// @ts-check
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection `site` — conteúdo do site parametrizado em markdown.
 * Cada arquivo em marketing/ é um trecho (seção ou página).
 * Schema permissivo: valida campos comuns; o restante passa intacto via passthrough.
 */
const site = defineCollection({
  loader: glob({
    // articles/** fica na coleção própria abaixo (evita carregar duas vezes)
    pattern: ['**/*.md', '!STRUCTURE.md', '!articles/**'],
    base: './marketing',
    // ID = nome do arquivo sem extensão (preserva ponto e hífens)
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      sobre: z.string().optional(),
      title: z.string().optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    })
    .passthrough(),
});

/**
 * Collection `articles` — artigos técnicos em marketing/articles/.
 * ID = nome do arquivo sem extensão (= slug da URL /articles/<id>).
 */
const articles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './marketing/articles',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      resumo: z.string().optional(),
      capa: z.string().optional(),
      cta: z
        .object({
          label: z.string().optional(),
          href: z.string().optional(),
        })
        .optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
      sobre: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { site, articles };