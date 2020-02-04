const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/photo-page', (req, res) => res.sendFile(`${__dirname}/views/photo-page.html`))
app.get('/about-page', (req, res) => res.sendFile(`${__dirname}/views/about-page.html`))

app.listen(3000, () => console.log("Servidor levantado..."))

