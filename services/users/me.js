const { User } = require('../models')
const { extract, verify } = require('../utils/token')

module.exports = async (req, res) => {
  const token = await extract(req)
  const { id } = await verify(token)

  const user = await User.findOne({ where: { id }, raw: true })
  return res.status(200).json({ data: user, message: 'Ok' })
}
