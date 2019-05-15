// Uso de express
const express = require('express')
// Instalacion Express
const app = express()
// Numero de puerto
const port = 3000

// Direccion estatico
app.use(express.static('public'))

// Pagina Home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

// Pagina about 
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

// Pagina photo
app.get('/photo', (req, res) => {
    res.sendFile(__dirname + '/views/photo.html')
})


// Abrir servidor
app.listen(port, () => {
    console.log(`Esta escuchando en el puerto ${port}`)
})