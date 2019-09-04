const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
    //Aquí podemos hacer lo que queramos
    //podemos acceder a la base de datos
    //realizar operaciones, etc
    response.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/photo-galery', (req, res) => {
    res.sendFile(`${__dirname}/views/photo-galery.html`)
})

app.listen(3000, () => {
    console.log('server on http://localhost:3000')
})