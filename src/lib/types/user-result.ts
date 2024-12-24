import { userSchema } from './user'
import z from 'zod'

export const userResultSchema = userSchema.omit({ id: true })

export type UserResult = z.infer<typeof userResultSchema>
