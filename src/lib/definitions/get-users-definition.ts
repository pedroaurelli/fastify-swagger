import z from 'zod'
import { userResultSchema } from '../schemas/user-result-schema'
import { FastifySchema, RouteGenericInterface } from 'fastify'
import { DefinitionSchema } from '../types/definition'

const getUsersParamsSchema = z.object({
  query: z.string().optional().nullable()
})
const getUsersResultSchema = z.array(userResultSchema)

// Definition
export const getUsersDefinition = {
  tags: ['users'],
  querystring: getUsersParamsSchema,
  response: {
    200: getUsersResultSchema
  }
} as const satisfies FastifySchema

export interface IGetUsersRoute extends RouteGenericInterface {
  Querystring: DefinitionSchema<typeof getUsersDefinition.querystring>
}
