const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/fotos', (req, res) => res.sendFile(`${__dirname}/views/fotos.html`))

app.listen(3000, () => console.log("Servidor levantado EN EL PUERTO 3000..."))