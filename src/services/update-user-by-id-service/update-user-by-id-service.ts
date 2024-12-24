import { updateUserByIdCommand, UpdateUserByIdCommand, UpdateUserByIdParams, updateUserByIdParamsSchema, UpdateUserByIdResult } from '../../lib/schemas/update-user-by-id-schema'
import { User } from '../../lib/types/user'
import { ConflictError, NotFoundError } from '../../lib/utils/errors'

export async function updateUserByIdService(
  command: UpdateUserByIdCommand,
  params: UpdateUserByIdParams,
  users: User[]
): Promise<UpdateUserByIdResult> {
  const { email, name } = updateUserByIdCommand.parse(command)
  const { id } = updateUserByIdParamsSchema.parse(params)

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
