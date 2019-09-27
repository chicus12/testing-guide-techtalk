const express = require('express')

const user = require('./controllers/users')
const techtalk = require('./controllers/techtalks')
const auth = require('./controllers/auth')

const router = express.Router()

router.use('/users', user)
router.use('/auth', auth)
router.use('/techtalks', techtalk)

module.exports = router
