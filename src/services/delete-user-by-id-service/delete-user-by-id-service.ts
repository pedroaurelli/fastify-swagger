import { deleteUserByIdParams, DeleteUserByIdParams } from '../../lib/schemas/delete-user-by-id-schema'
import { User } from '../../lib/types/user'
import { NotFoundError } from '../../lib/utils/errors'

export async function deleteUserByIdService(
  params: DeleteUserByIdParams,
  users: User[]
): Promise<void> {
  const { id } = deleteUserByIdParams.parse(params)

  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    throw new NotFoundError('User not found')
  }

  users.splice(userIndex, 1)

  return
}
