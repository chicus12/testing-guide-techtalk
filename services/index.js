const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())
app.use(bearerToken())

app.use('/api', routes)

process.on('SIGINT', () => {
  // some other closing procedures go here
  process.exit(1)
})

app
  .listen(3000, () => {
    console.log('API server run in port 3000')
  })
  .on('error', err => {
    console.error(`Error shipping API server ${err}`)
  })
