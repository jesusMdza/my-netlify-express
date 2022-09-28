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
  res.sendFile('style.css', { root: './public' })
})

app.use('/.netlify/functions/express', express.static('public'))

module.exports = app;
module.exports.handler = serverless(app);
