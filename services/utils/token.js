const bearer = require('token-extractor')
const jwt = require('jsonwebtoken')

async function sign(payload, secret = 'dkL82H2&!V6d', options) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) return reject(err)

      return resolve(token)
    })
  })
}

async function verify(token, secret = 'dkL82H2&!V6d', options) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, options, (err, decoded) => {
      if (err) return reject(err)

      return resolve(decoded)
    })
  })
}

async function extract(req) {
  return new Promise((resolve, reject) => {
    bearer(req, (err, token) => {
      if (err) return reject(err)

      return resolve(token)
    })
  })
}

module.exports = {
  sign,
  verify,
  extract,
}
