require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()

app.use('/static', express.static('public'));

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.use('/.netlify/functions/express', router)

module.exports = app;
module.exports.handler = serverless(app);
