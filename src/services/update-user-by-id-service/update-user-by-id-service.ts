import { updateUserByIdDefinition } from '../../lib/definitions/update-user-by-id-definition'
import { User } from '../../lib/schemas/user-schema'
import { DefinitionSchema } from '../../lib/types/definition'
import { ConflictError, NotFoundError } from '../../lib/utils/errors'

export async function updateUserByIdService(
  command: DefinitionSchema<typeof updateUserByIdDefinition.body>,
  params: DefinitionSchema<typeof updateUserByIdDefinition.params>,
  users: User[]
): Promise<DefinitionSchema<typeof updateUserByIdDefinition.response[200]>> {
  const { email, name } = updateUserByIdDefinition.body.parse(command)
  const { id } = updateUserByIdDefinition.params.parse(params)

  const user = users.find((user) => user.id === id)

  if (!user) {
    throw new NotFoundError('User not found')
  }

  const assertDuplicateEmail = users.find((user) => user.email === email)

  if (assertDuplicateEmail) {
    throw new ConflictError('Email already in use')
  }

  user.email = email
  user.name = name

  return user
}
