const { sequelize } = require('../models')

module.exports = async (req, res) => {
  console.log(req)
  return res.status(200).json({ message: 'Ok' })
}
