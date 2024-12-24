import { GetUsersQuery, GetUsersResult, getUsersParamsSchema, getUsersResultSchema } from '../../lib/schemas/get-users-schema'
import { User } from '../../lib/types/user'


export async function getUsersService (
  params: GetUsersQuery,
  users: User[]
): Promise<GetUsersResult> {
  const { query } = getUsersParamsSchema.parse(params)

  if (query) {
    const result = users.filter(user => user.name.includes(query))

    return result
  }

  return getUsersResultSchema.parse(users)
}
