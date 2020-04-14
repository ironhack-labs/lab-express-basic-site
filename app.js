const express = require('express')

const app = express()

//Directorio publico
app.use(express.static('public'))

//Rutas 
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery.html`))
app.get('/about-me', (req, res) => res.sendFile(`${__dirname}/views/about-me.html`))



// Servidor
app.listen(3000, () => console.log('El serividor está online'))