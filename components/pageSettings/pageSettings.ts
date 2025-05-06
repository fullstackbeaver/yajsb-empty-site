import { z } from 'zod'

export const isSingle = true;
export const schema   = z.object({
  canonical       : z.string().default(""),
  creationDate    : z.string().default(new Date().toISOString()),
  lang            : z.string().default("en"),
  modificationDate: z.string().optional(),
  priority        : z.number().default(0.8),
  title           : z.string().default("")
})

export type PageSettings = z.infer<typeof schema>