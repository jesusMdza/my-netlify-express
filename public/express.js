const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.use('/.netlify/functions/express', router)

module.exports.handler = serverless(app);
