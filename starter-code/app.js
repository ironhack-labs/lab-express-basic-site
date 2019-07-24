const express = require('express')
const port = 3000
const app = express()


//directorio público
app.use(express.static('public'))

//enrutado

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))

// Escucha servidor
app.listen(port, () => console.log(`Escucha el puerto ${port}`))