import z from 'zod'
import { userResultSchema } from '../schemas/user-result-schema'
import { FastifySchema, RouteGenericInterface } from 'fastify'
import { DefinitionSchema } from '../types/definition'

const updateUserByIdBody = z.object({
  name: z.string(),
  email: z.string(),
})
const updateUserByIdParamsSchema = z.object({
  id: z.string().uuid()
})
const updateUserByIdResultSchema = userResultSchema

// Definition
export const updateUserByIdDefinition = {
  tags: ['users'],
  params: updateUserByIdParamsSchema,
  body: updateUserByIdBody,
  response: {
    200: updateUserByIdResultSchema
  }
} as const satisfies FastifySchema

// Route
export interface IUpdateUserByIdRoute extends RouteGenericInterface {
  Body: DefinitionSchema<typeof updateUserByIdDefinition.body>
  Params: DefinitionSchema<typeof updateUserByIdDefinition.params>
}


