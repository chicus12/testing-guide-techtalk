const { Techtalk } = require('../models')

module.exports = async (req, res) => {
  const techtalks = await Techtalk.findAll()

  return res.status(200).json({ data: techtalks, message: 'Ok' })
}
