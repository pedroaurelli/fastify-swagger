import { getUsersDefinition } from '../../lib/definitions/get-users-definition'
import { User } from '../../lib/schemas/user-schema'
import { DefinitionSchema } from '../../lib/types/definition'


export async function getUsersService (
  queryString: DefinitionSchema<typeof getUsersDefinition.querystring>,
  users: User[]
): Promise<DefinitionSchema<typeof getUsersDefinition.response['200']>> {
  const { query } = getUsersDefinition.querystring.parse(queryString)

  if (query) {
    const result = users.filter(user => user.name.includes(query))

    return result
  }

  return users
}
