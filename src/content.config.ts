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
    pattern: ['**/*.md', '!ESTRUTURA.md'],
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

export const collections = { site };