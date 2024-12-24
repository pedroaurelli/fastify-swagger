import { FastifySchema, RouteGenericInterface } from 'fastify'
import { userSchema } from '../types/user'
import z from 'zod'

// Command
export const createUserCommandSchema = userSchema.omit({ id: true })
export type CreateUserCommand = z.infer<typeof createUserCommandSchema>

// Result
export const createUserResultSchema = userSchema
export type CreateUserResult = z.infer<typeof createUserResultSchema>

// Route
export const createUserRouteSchema: FastifySchema = {
  tags: ['users'],
  body: createUserCommandSchema,
  response: {
    201: createUserResultSchema
  }
}
export interface ICreateUserRoute extends RouteGenericInterface {
  Body: CreateUserCommand;
}
