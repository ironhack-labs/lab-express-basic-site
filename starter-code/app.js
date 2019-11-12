const express = require('express');
const app = express()

// Declaración de directorio de recursos estáticos (public)
app.use(express.static('public'))


// Endpoint con envío de HTML
app.get('/bienvenidos', (req, res) => res.send('<h1>Bienvenid@s! Primera App Express</h1>'))

// Endpoints con envíos de archivos
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'))
app.get('/nino', (req, res) => res.sendFile(__dirname + '/views/nino.html'))
app.get("/baile", (req, res) => res.sendFile(__dirname + "/views/baile.html"));

// Escucha de servidor
app.listen(3000, () => console.log('App escuchando'))