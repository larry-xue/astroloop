import { defineCollection, reference, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

/** Post authors. Edit src/content/authors/authors.yaml. */
const authors = defineCollection({
  loader: file('./src/content/authors/authors.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    /** Path under public/, or null for a generated initials avatar. */
    avatar: z.string().nullable().default(null),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Must match an id in authors.yaml. */
    author: reference('authors'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

/**
 * The permission matrix. Edit src/content/tools/tools.yaml and the table
 * follows — you should never need to open the component.
 *
 * `writes` and `approval` are deliberately separate: buyers are not afraid
 * that an agent can write, they are afraid it can write without asking.
 * Leaving a cell empty is a feature. A column of green ticks reads as
 * marketing; a real permission list has blanks in it.
 */
const tools = defineCollection({
  loader: file('./src/content/tools/tools.yaml'),
  schema: z.object({
    id: z.string(),
    /** Row order in the table. Lower comes first. */
    order: z.number().default(99),
    tool: z.string(),
    reads: z.string().nullable().default(null),
    writes: z.string().nullable().default(null),
    approval: z.string().nullable().default(null),
    audited: z.boolean().default(true),
  }),
})

/**
 * Homepage testimonials. Edit src/content/testimonials/testimonials.yaml and
 * both the quote cards and the hero avatar stack follow.
 */
const testimonials = defineCollection({
  loader: file('./src/content/testimonials/testimonials.yaml'),
  schema: z.object({
    id: z.string(),
    order: z.number().default(99),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    /** Path under public/, or null for a generated initials avatar. */
    avatar: z.string().nullable().default(null),
    /** Also appears in the hero avatar stack. */
    featured: z.boolean().default(false),
  }),
})

export const collections = { authors, blog, tools, testimonials }
