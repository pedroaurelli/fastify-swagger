import { createUserDefinition } from '../../lib/definitions/create-user-definition'
import { User } from '../../lib/schemas/user-schema'
import { randomUUID } from 'node:crypto'
import { DefinitionSchema } from '../../lib/types/definition'

export async function createUserService(
  command: DefinitionSchema<typeof createUserDefinition.body>,
  users: User[]
): Promise<DefinitionSchema<typeof createUserDefinition.response[201]>> {
  const { email, name } = createUserDefinition.body.parse(command)

  const newUser: User = {
    email,
    name,
    id: randomUUID()
  }

  users.push(newUser)

  return newUser
}
