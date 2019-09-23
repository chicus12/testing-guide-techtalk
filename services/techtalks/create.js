const { Techtalk } = require('../models')

module.exports = async (req, res) => {
  const {
    title,
    authorName,
    coverImageUri,
    organization,
    description,
    resourceUri,
    date,
    authorId,
  } = req.body

  const TechtalkCreated = await Techtalk.create({
    title,
    authorName,
    coverImageUri,
    organization,
    description,
    resourceUri,
    date,
    authorId,
  })

  return res
    .status(201)
    .json({ data: TechtalkCreated, message: 'Techtalk guardado!' })
}
