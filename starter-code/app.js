// Requerimiento Express
const express = require('express')
const port = 3000


// Instancia Express
const app = express()

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home.html`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'))

app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery.html`))




  