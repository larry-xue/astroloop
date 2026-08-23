import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
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

export const collections = { blog, tools }
