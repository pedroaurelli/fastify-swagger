import { FastifySchema, RouteGenericInterface } from 'fastify'
import { userResultSchema } from '../schemas/user-result-schema'
import { uuidSchema } from '../schemas/uuid-schema'
import z from 'zod'
import { DefinitionSchema } from '../types/definition'

const getUserByIdParamsSchema = z.object({
  id: uuidSchema
})
const getUserByIdResultSchema = userResultSchema

// Definition
export const getUserByIdDefinition = {
  tags: ['users'],
  params: getUserByIdParamsSchema,
  response: {
    200: getUserByIdResultSchema,
    404: z.void()
  }
} as const satisfies FastifySchema

export interface IGetUserByIdRoute extends RouteGenericInterface {
  Params: DefinitionSchema<typeof getUserByIdDefinition.params>
}
