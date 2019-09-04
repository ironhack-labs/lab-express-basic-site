const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/refri', (req, res) => {
  res.sendFile(`${__dirname}/views/refrigeradores.html`)
})

app.get('/col', (req, res) => {
  res.sendFile(`${__dirname}/views/colchones.html`)
})

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`)
})