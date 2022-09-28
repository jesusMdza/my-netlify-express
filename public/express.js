require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

router.get('/static', (req, res) => {
  res.send('/static route')
})

app.use('/.netlify/functions/express', router)
app.use('/.netlify/functions/express/static', express.static('public'))

module.exports = app;
module.exports.handler = serverless(app);
