import client from './api-client'

function search(query) {
  return client(`techtalks?query=${encodeURIComponent(query)}`)
}

function read(bookId) {
  return client(`book/${bookId}`)
}

export { search, read }
