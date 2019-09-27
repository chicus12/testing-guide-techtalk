const { Router } = require('express')

const { Techtalk, Sequelize } = require('../models')

const router = Router()

async function findOne(req, res) {
  const { techtalkId } = req.params

  const techtalk = await Techtalk.findByPk(techtalkId)

  return res.status(200).json({ data: techtalk, message: 'Ok' })
}

async function findAll(req, res) {
  let options = {}
  const query = req.query.query.toLowerCase()
  if (query) {
    const { Op } = Sequelize
    options = { where: { title: { [Op.iLike]: `%${query}%` } } }
  }
  const techtalks = await Techtalk.findAll(options)

  return res.status(200).json({ data: techtalks, message: 'Ok' })
}

async function create(req, res) {
  const techtalkCreated = await Techtalk.create(req.body)
  return res
    .status(201)
    .json({ data: techtalkCreated, message: 'Techtalk creado!' })
}

router
  .route('/')
  .get(findAll)
  .post(create)
router.route('/:techtalkId').get(findOne)

module.exports = router
