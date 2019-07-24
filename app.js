const express = require('express')
const port = 3000

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/second', (req, res) => res.sendFile(`${__dirname}/views/second-page.html`))
app.get('/third', (req, res) => res.sendFile(`${__dirname}/views/third-page.html`))

app.listen(port)