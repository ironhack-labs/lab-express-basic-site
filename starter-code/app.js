// Requerimiento Express
const express = require('express')
const port = 3000

// Instancia Express
const app = express()

// Directorio público
app.use(express.static('public'))

// Enrutado
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/view1.html`))
app.get('/bio', (req, res) => res.sendFile(`${__dirname}/views/view2.html`))
app.get('/aliens', (req, res) => res.sendFile(`${__dirname}/views/view3.html`))

// Escucha servidor
app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))
