const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = 3000
const router = express.Router();

router.get('/', (req, res) => {
  res.send('My Netlify Express app!')
})

app.use('/.netlify/functions/express', router)

module.exports.handler = serverless(app);
