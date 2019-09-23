import { getUser } from './auth-client'

async function bootstrapAppData() {
  const data = await getUser()
  if (!data) {
    return { user: null, listItems: [] }
  }
  const { user } = data

  return {
    user,
    listItems: [],
  }
}

export { bootstrapAppData }
