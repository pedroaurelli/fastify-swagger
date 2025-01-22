import { FastifyInstance } from '../lib/types/fastify-instance'
import { ICreateUserRoute, createUserDefinition } from '../lib/definitions/create-user-definition'
import { getUsersDefinition, IGetUsersRoute } from '../lib/definitions/get-users-definition'
import { getUserByIdDefinition, IGetUserByIdRoute } from '../lib/definitions/get-user-by-id-definition'
import { IUpdateUserByIdRoute, updateUserByIdDefinition } from '../lib/definitions/update-user-by-id-definition'
import { deleteUserByIdDefinition, IDeleteUserByIdRoute } from '../lib/definitions/delete-user-by-id-definition'
import {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserByIdService
} from '../services'

type User = {
  id: string
  name: string
  email: string
}

const users: User[] = []

export async function userController(app: FastifyInstance) {
  app.get<IGetUsersRoute>('/users', {
    schema: getUsersDefinition,
  }, async (req, res) => {
    try {
      const result = await getUsersService(req.query, users)

      return res.status(201).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.get<IGetUserByIdRoute>(`/users/:id`, {
    schema: getUserByIdDefinition
  }, async (req, res) => {
    try {
      const result = await getUserByIdService(req.params, users)

      return res.status(200).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.patch<IUpdateUserByIdRoute>(`/users/:id`, {
    schema: updateUserByIdDefinition
  }, async (req, res) => {
    try {
      const result = await updateUserByIdService(req.body, req.params, users)

      return res.status(200).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.post<ICreateUserRoute>('/users', {
    schema: createUserDefinition,
  }, async (req, res) => {
    try {
      const result = await createUserService(req.body, users)

      return res.status(201).send(result)
    } catch (err) {
      return res.status((err as unknown as any).status).send(err)
    }
  })

  app.delete<IDeleteUserByIdRoute>('/users/:id', {
    schema: deleteUserByIdDefinition
  }, async (req, res) => {
    try {
      await deleteUserByIdService(req.params, users)

      return res.status(204).send()
    } catch (err) {
      return res.status((err as unknown as any).status).send
    }
  })
}
