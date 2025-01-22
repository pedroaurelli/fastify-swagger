import { deleteUserByIdDefinition } from '../../lib/definitions/delete-user-by-id-definition'
import { User } from '../../lib/schemas/user-schema'
import { DefinitionSchema } from '../../lib/types/definition'
import { NotFoundError } from '../../lib/utils/errors'

export async function deleteUserByIdService(
  params: DefinitionSchema<typeof deleteUserByIdDefinition.params>,
  users: User[]
): Promise<DefinitionSchema<typeof deleteUserByIdDefinition.response[204]>> {
  const { id } = deleteUserByIdDefinition.params.parse(params)

  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    throw new NotFoundError('User not found')
  }

  users.splice(userIndex, 1)

  return
}
