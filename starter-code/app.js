const express = require('express')
const app = express()


// Declaración de directorio de recursos estáticos (public)
app.use(express.static('public'))


// Endpoint con envío de HTML
app.get('/bienvenidos', (req, res) => res.send('<h1>Bienvenid@s! Primera App Express</h1>'))


// Endpoints con envíos de archivos
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'))
app.get('/gallery', (req, res) => res.sendFile(__dirname + '/views/gallery.html'))

app.listen(3000, () => console.log('App escuchando'))