import { FastifySchema, RouteGenericInterface } from 'fastify'
import { userSchema } from '../schemas/user-schema'
import { DefinitionSchema } from '../types/definition'

const createUserCommandSchema = userSchema.omit({ id: true })
const createUserResultSchema = userSchema

// Definition
export const createUserDefinition = {
  tags: ['users'],
  body: createUserCommandSchema,
  response: {
    201: createUserResultSchema
  }
} as const satisfies FastifySchema

export interface ICreateUserRoute extends RouteGenericInterface {
  Body: DefinitionSchema<typeof createUserDefinition.body>
}
