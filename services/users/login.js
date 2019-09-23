const bcrypt = require('bcryptjs')
const { User } = require('../models')
const { sign } = require('../utils/token')

module.exports = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })

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

  return res.status(200).json({ data: { ...user, token }, message: 'Ok' })
}
