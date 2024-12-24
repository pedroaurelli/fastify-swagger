import z from 'zod'
import { userResultSchema } from '../types/user-result'
import { RouteGenericInterface } from 'fastify'

// Command
export const updateUserByIdCommand = z.object({
  name: z.string(),
  email: z.string(),
})
export type UpdateUserByIdCommand = z.infer<typeof updateUserByIdCommand>

// Params
export const updateUserByIdParamsSchema = z.object({
  id: z.string().uuid()
})
export type UpdateUserByIdParams = z.infer<typeof updateUserByIdParamsSchema>

// Result
export const updateUserByIdResultSchema = userResultSchema
export type UpdateUserByIdResult = z.infer<typeof updateUserByIdResultSchema>

// Route
export const updateUserByIdRouteSchema = {
  tags: ['users'],
  params: updateUserByIdParamsSchema,
  body: updateUserByIdCommand,
  response: {
    200: updateUserByIdResultSchema
  }
}
export interface IUpdateUserByIdRoute extends RouteGenericInterface {
  Body: UpdateUserByIdCommand
  Params: UpdateUserByIdParams
}


