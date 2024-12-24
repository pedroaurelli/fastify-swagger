import { FastifyInstance } from '../lib/types/fastify-instance'
import { ICreateUserRoute, createUserRouteSchema } from '../lib/schemas/create-user-schema'
import { createUserService, getUsersService, getUserByIdService, updateUserByIdService } from '../services'
import { getUsersRouteSchema, IGetUsersRoute } from '../lib/schemas/get-users-schema'
import { getUserByIdRouteSchema, IGetUserByIdRoute } from '../lib/schemas/get-user-by-id'
import { IUpdateUserByIdRoute, updateUserByIdRouteSchema } from '../lib/schemas/update-user-by-id-schema'
import { deleteUserByIdRouteSchema, IDeleteUserByIdRoute } from '../lib/schemas/delete-user-by-id-schema'
import { deleteUserByIdService } from '../services/delete-user-by-id-service/delete-user-by-id-service'

type User = {
  id: string
  name: string
  email: string
}

const users: User[] = []

export async function userController(app: FastifyInstance) {
  app.get<IGetUsersRoute>('/users', {
    schema: getUsersRouteSchema,
  }, async (req, res) => {
    try {
      const result = await getUsersService(req.query, users)

      return res.status(201).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.get<IGetUserByIdRoute>(`/users/:id`, {
    schema: getUserByIdRouteSchema
  }, async (req, res) => {
    try {
      const result = await getUserByIdService(req.params, users)

      return res.status(200).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.patch<IUpdateUserByIdRoute>(`/users/:id`, {
    schema: updateUserByIdRouteSchema
  }, async (req, res) => {
    try {
      const result = await updateUserByIdService(req.body, req.params, users)

      return res.status(200).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.post<ICreateUserRoute>('/users', {
    schema: createUserRouteSchema,
  }, async (req, res) => {
    try {
      const result = await createUserService(req.body, users)

      return res.status(201).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.delete<IDeleteUserByIdRoute>('/users/:id', {
    schema: deleteUserByIdRouteSchema
  }, async (req, res) => {
    try {
      await deleteUserByIdService(req.params, users)

      return res.status(204).send()
    } catch (err) {
      return res.status((err as unknown as any).status).send
    }
  })
}
