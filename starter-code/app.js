const express = require('express') // llamo a express
const port = 3000 // puerto 3000

const app = express() // la instancio

app.use(express.static('public')) // le indico los static fileds del public folder

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/surprise', (req, res) => res.sendFile(`${__dirname}/views/surprise-page.html`))

app.listen(port, () => console.log(`App escuchando en el puerto ${port}`)) // que escuche por ese puerto