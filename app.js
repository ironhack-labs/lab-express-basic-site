const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))




// 4.- Enrutar
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html');
})



// 5.- Abrir servidor
app.listen(port, () => {
    console.log(`App escuchando en el puerto ${port}`)
});