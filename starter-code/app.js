// 1.- Require Express
const express = require('express')

// 2.- Instanciar Express
const app = express()

// 3.- Declarar middleware con directorio de recursos estáticos
app.use(express.static('public'))

// 4.- Crear endpoints
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery.html`))

// 5.- Levantar servidor
app.listen(3000, () => console.log("Servidor levantado..."))