const express = require('express')
const app = express()


// Declaración de directorio de recursos estáticos (public)
app.use(express.static('public'))


// Endpoint con envío de HTML
app.get('/bienvenidos', (req, res) => res.send('<h1>Bienvenid@s! Primera App Express</h1>'))


// Endpoints con envíos de archivos
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/katas', (req, res) => res.sendFile(__dirname + '/views/katas.html'))
app.get('/memes', (req, res) => res.sendFile(__dirname + '/views/memes.html'))


// Escucha de servidor
app.listen(3000, () => console.log('App escuchando'))
