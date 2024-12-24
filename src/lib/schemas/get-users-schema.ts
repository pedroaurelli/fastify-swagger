import z from 'zod'
import { userResultSchema } from '../types/user-result'
import { FastifySchema, RouteGenericInterface } from 'fastify'

// Query
export const getUsersParamsSchema = z.object({
  query: z.string().optional().nullable()
})
export type GetUsersQuery = z.infer<typeof getUsersParamsSchema>

// Result
export const getUsersResultSchema = z.array(userResultSchema)
export type GetUsersResult = z.infer<typeof getUsersResultSchema>

// Route
export const getUsersRouteSchema: FastifySchema = {
  tags: ['users'],
  querystring: getUsersParamsSchema,
  response: {
    200: getUsersResultSchema
  }
}
export interface IGetUsersRoute extends RouteGenericInterface {
  Querystring: GetUsersQuery
}
