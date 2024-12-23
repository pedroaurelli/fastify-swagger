import z from 'zod'
import { FastifyInstance } from './types/fastify-instance'
import { randomUUID } from 'node:crypto'

type User = {
  id: string
  name: string
  email: string
}

const users: User[] = []

export async function routes(app: FastifyInstance) {
  app.get('/users', {
    schema: {
      tags: ['users'],
      response: {
        200: z.array(z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        }))
      }
    }
  }, async (req, res) => {
    return res.send(users).status(200)
  })

  app.post('/users', {
    schema: {
      tags: ['users'],
      body: z.object({
        name: z.string().nonempty(),
        email: z.string().email(),
      }),
      response: {
        201: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        })
      }
    },
  }, async (req, res) => {
    const { email, name } = req.body

    const user: User = {
      id: randomUUID(),
      email,
      name,
    }

    users.push(user)

    return res.send(user).status(201)
  })
}
