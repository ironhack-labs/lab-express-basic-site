const express = require('express')
const { response } = require('express')

const app = express()

// Hacer que todo lo que este en public este accesible

app.use(express.static('public'))

app.get('/', (require, response) => response.sendFile(__dirname + '/views/index.html'))
app.get('/cursos', (require, response) => response.sendFile(__dirname + '/views/cursos.html'))
app.get('/galeria', (require, response) => response.sendFile(__dirname + '/views/galeria.html'))

app.listen(3000, () => console.log("Sevidor funcionando"))