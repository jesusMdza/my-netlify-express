const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = 5000
const path = require('path')
const router = express.Router()

// router.get('/static', (req, res) => {
//   res.sendFile('style.css', { root: './public' })
// })

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

module.exports.handler = serverless(app);
