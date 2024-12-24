import { RouteGenericInterface } from 'fastify'
import { uuidSchema } from '../types/uuid'
import z from 'zod'

// Params
export const deleteUserByIdParams = z.object({
  id: uuidSchema
})
export type DeleteUserByIdParams = z.infer<typeof deleteUserByIdParams>

// Route
export const deleteUserByIdRouteSchema = {
  tags: ['users'],
  params: deleteUserByIdParams,
  response: {
    204: z.object({}),
    404: z.object({})
  }
}
export interface IDeleteUserByIdRoute extends RouteGenericInterface {
  Params: DeleteUserByIdParams
}
