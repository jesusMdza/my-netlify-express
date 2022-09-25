const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()

app.use('/', (req, res) => {
  res.send('/ route')
})

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

router.get('/static', (req, res) => {
  res.sendFile('style.css', { root: './public' })
})

// app.use('/.netlify/functions/express', router)

module.exports = app;
module.exports.handler = serverless(app);
