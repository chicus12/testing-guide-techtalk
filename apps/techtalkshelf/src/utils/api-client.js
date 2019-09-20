async function client(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem('__techtalkshelf_token__')
  const headers = { 'content-type': 'application/json' }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await window.fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    config
  )

  return response.json()
}

export default client
