import { CreateUserCommand, createUserCommandSchema, CreateUserResult, createUserResultSchema } from '../../lib/schemas/create-user-schema'
import { User } from '../../lib/types/user'
import { randomUUID } from 'node:crypto'

export async function createUserService(
  command: CreateUserCommand,
  users: User[]
): Promise<CreateUserResult> {
  const { email, name } = createUserCommandSchema.parse(command)

  const newUser: User = {
    email,
    name,
    id: randomUUID()
  }

  users.push(newUser)

  return createUserResultSchema.parse(newUser)
}
