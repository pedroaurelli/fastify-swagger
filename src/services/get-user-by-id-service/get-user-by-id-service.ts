import { GetUserByIdParams, getUserByIdParamsSchema, GetUserByIdResult, getUserByIdResultSchema } from '../../lib/schemas/get-user-by-id-schema'
import { User } from '../../lib/types/user'
import { NotFoundError } from '../../lib/utils/errors'

export async function getUserByIdService (
  params: GetUserByIdParams,
  users: User[]
): Promise<GetUserByIdResult> {
  const { id } = getUserByIdParamsSchema.parse(params)

  const result = users.find((user) => user.id === id)

  if (!result) {
    throw new NotFoundError('User not found')
  }

  return getUserByIdResultSchema.parse(result)
}
