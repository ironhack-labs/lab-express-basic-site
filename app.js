const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/sobre', (req, res, next) => {
    res.sendFile(__dirname + '/views/sobre.html');
})
app.get('/relaciones', (req, res, next) => {
    res.sendFile(__dirname + '/views/relaciones.html');
})
app.get('/fotos', (req, res, next) => {
    res.sendFile(__dirname + '/views/fotos.html');
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
})

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
})
