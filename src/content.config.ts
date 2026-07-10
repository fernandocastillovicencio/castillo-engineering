// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coleção: Serviços
const servicos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().optional(),
    software: z.array(z.string()).optional(),
  }),
});

// Coleção: Projetos/Cases
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    cliente: z.string().optional(),
    area: z.string(),
    software: z.array(z.string()).optional(),
    resultado: z.string().optional(),
    date: z.coerce.date().optional(),  // ✅ MUDANÇA: z.coerce.date() em vez de z.date()
    imagem: z.string().optional(),
    order: z.number().optional(),
  }),
});

// Coleção: Posts do Blog
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),  // ✅ MUDANÇA: z.coerce.date() em vez de z.date()
    tags: z.array(z.string()).optional(),
    imagem: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  servicos,
  projetos,
  posts,
};