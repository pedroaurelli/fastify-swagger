import { getUserByIdDefinition } from '../../lib/definitions/get-user-by-id-definition'
import { User } from '../../lib/schemas/user-schema'
import { DefinitionSchema } from '../../lib/types/definition'
import { NotFoundError } from '../../lib/utils/errors'

export async function getUserByIdService (
  params: DefinitionSchema<typeof getUserByIdDefinition.params>,
  users: User[]
): Promise<DefinitionSchema<typeof getUserByIdDefinition.response[200]>> {
  const { id } = getUserByIdDefinition.params.parse(params)

  const result = users.find((user) => user.id === id)

  if (!result) {
    throw new NotFoundError('User not found')
  }

  return result
}
