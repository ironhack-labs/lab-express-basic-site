const express = require('express')
const app = express()


// Declaración de directorio de recursos estáticos (public)
app.use(express.static('public'))


// Endpoint con envío de HTML
app.get('/bienvenidos', (req, res) => res.send('<h1>Bienvenid@s! Primera App Express</h1>'))


// Endpoints con envíos de archivos
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/car', (req, res) => res.sendFile(__dirname + '/views/car.html'))
app.get('/pet', (req, res) => res.sendFile(__dirname + '/views/pet.html'))


// Escucha de servidor
app.listen(3000, () => console.log('App escuchando'))
