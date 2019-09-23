const bcrypt = require('bcryptjs')
const { User } = require('../models')

module.exports = async (req, res) => {
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
