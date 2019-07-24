const express = require("express")
const app = express()
const port = 3000
 app.use(express.static('public'))

// Enrutado
app.get('/', (req, res) => res.sendFile(`${__dirname}/view/home-page.html`))
app.get('/second-page', (req, res) => res.sendFile(`${__dirname}/view/second-page.html`))
app.get('/third-page', (req, res) => res.sendFile(`${__dirname}/view/third-page.html`))

// Escucha servidor
app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))