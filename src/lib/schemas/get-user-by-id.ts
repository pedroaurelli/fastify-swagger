import { RouteGenericInterface } from 'fastify'
import { userResultSchema } from '../types/user-result'
import { uuidSchema } from '../types/uuid'
import z from 'zod'

// Params
export const getUserByIdParamsSchema = z.object({
  id: uuidSchema
})
export type GetUserByIdParams = z.infer<typeof getUserByIdParamsSchema>

// Result
export const getUserByIdResultSchema = userResultSchema
export type GetUserByIdResult = z.infer<typeof getUserByIdResultSchema>

// Route
export const getUserByIdRouteSchema = {
  tags: ['users'],
  params: getUserByIdParamsSchema,
  response: {
    200: getUserByIdResultSchema,
    404: z.object({ })
  }
}
export interface IGetUserByIdRoute extends RouteGenericInterface {
  Params: GetUserByIdParams
}
