import client from './api-client'

const localStorageKey = '__techtalkshelf_token__'

async function handleUserResponse({ token, ...user }) {
  window.localStorage.setItem(localStorageKey, token)

  return user
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function logout() {
  window.localStorage.removeItem(localStorageKey)

  return Promise.resolve()
}

async function getUser() {
  try {
    const token = getToken()

    if (!token) {
      return null
    }

    const { data: user } = await client('users/me')

    return { user }
  } catch (error) {
    await logout()
    throw new Error(error)
  }
}

async function login({ email, password }) {
  const { data: user } = await client('auth/login', {
    body: { email, password },
  })

  return handleUserResponse(user)
}

async function register({ username, password }) {
  const user = await client('auth/signup', { body: { username, password } })

  return handleUserResponse(user)
}

export { logout, login, register, getToken, getUser }
