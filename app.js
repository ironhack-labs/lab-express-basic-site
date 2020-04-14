const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/about-us', (req, res) => res.sendFile(`${__dirname}/views/about-page.html`))
app.get('/facts', (req, res) => res.sendFile(`${__dirname}/views/facts-page.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery-page.html`))

app.listen(3000, () => console.log('App escuchando en el puerto 3000'))