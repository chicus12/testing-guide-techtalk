import client from './api-client'

function search(query) {
  return client(`techtalks?query=${encodeURIComponent(query)}`)
}

function read(techtalkId) {
  return client(`techtalks/${techtalkId}`)
}

export { search, read }
