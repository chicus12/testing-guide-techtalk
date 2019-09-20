import client from './api-client'

const localStorageKey = '__techtalkshelf_token__'

function handleUserResponse({ user: { token, ...user } }) {
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

    const user = client('me')

    return user
  } catch (error) {
    await logout()
    throw new Error(error)
  }
}

export { logout, getUser }
