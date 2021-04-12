const express = require('express') // Requerir express y asignarlo

const app = express() // Activar express

app.get('/', (request, response) => {
     response.sendFile(__dirname + '/views/home.html')
}) 
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
    console.log('About page')
})
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
    console.log('About page')
})
// Crear rutas

app.listen('3000', ()=>{
    console.log('Servidor activo')
}) // Activar el servidor

app.use(express.static('public')) //conectar carpeta archivos estáticos