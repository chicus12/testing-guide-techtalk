const { Router } = require('express')
const bcrypt = require('bcryptjs')

const { User } = require('../models')
const { sign } = require('../utils/token')

const router = Router()

async function login(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email }, raw: true })

  if (!user) {
    return res.status(404).json({
      data: null,
      message: 'No se encontró ningún usuario con los credenciales indicados',
    })
  }

  const compare = await bcrypt.hash(password, user.password)

  if (!compare) {
    return res.status(400).json({
      data: null,
      message: 'Credenciales de ingreso incorrectos',
    })
  }

  const token = await sign({ id: user.id })

  delete user.password

  return res.status(200).json({ data: { ...user, token }, message: 'Ok' })
}

async function signup(req, res) {
  const { email, name, password } = req.body
  const userFound = await User.findOne({ where: { email } })

  if (userFound) {
    return res.status(409).json({
      data: null,
      message: 'El usuario que intenta crear ya existe en la bd',
    })
  }

  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)
  const userCreated = await User.create({ email, name, password: passwordHash })

  return res.status(201).json({ data: userCreated, message: 'Usuario creado!' })
}

router.route('/login').post(login)
router.route('/signup').get(signup)

module.exports = router
