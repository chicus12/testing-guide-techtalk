const Sequelize = require('sequelize')
const pg = require('pg')

delete pg.native
const env = process.env.NODE_ENV || 'development'
const config = require('./config.json')[env]

const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    dialect: 'postgres',
    dialectModule: pg,
  })
}

db.User = require('./User')(sequelize, Sequelize)
db.Techtalk = require('./Techtalk')(sequelize, Sequelize)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
