import { FastifySchema, RouteGenericInterface } from 'fastify'
import { uuidSchema } from '../schemas/uuid-schema'
import z from 'zod'
import { DefinitionSchema } from '../types/definition'

const deleteUserByIdParams = z.object({
  id: uuidSchema
})

// Definition
export const deleteUserByIdDefinition = {
  tags: ['users'],
  params: deleteUserByIdParams,
  response: {
    204: z.void(),
    404: z.object({})
  }
} as const satisfies FastifySchema


export interface IDeleteUserByIdRoute extends RouteGenericInterface {
  Params: DefinitionSchema<typeof deleteUserByIdParams>
}
