import z, { ZodType } from 'zod'

export type DefinitionSchema<T extends ZodType<any, any, any>> = z.infer<T>
