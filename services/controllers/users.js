const { Router } = require('express')

const { User } = require('../models')
const { verify } = require('../utils/token')

const router = Router()

async function me(req, res) {
  const { token } = req
  const { id } = await verify(token)

  const user = await User.findOne({ where: { id }, raw: true })

  return res.status(200).json({ data: user, message: 'Ok' })
}

async function findAll(req, res) {
  const users = await User.findAll()

  return res.status(200).json({ data: users, message: 'Ok' })
}

router.route('/').get(findAll)
router.route('/me').get(me)

module.exports = router
