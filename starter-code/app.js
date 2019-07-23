
const express = require('express')
const port = 3000

const app = express()


// Directorio público
app.use(express.static('public'))

// Enrutado
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/hole', (req, res) => res.sendFile(`${__dirname}/views/hole-page.html`))
app.get('/other', (req, res) => res.sendFile(`${__dirname}/views/other-page.html`))

// Escucha servidor
app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))