const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about-page.html`)
})

app.get('/photo', (req, res) => {
    res.sendFile(`${__dirname}/views/photo-page.html`)
})

app.listen(3000, ()=> {
    console.log(`server on http://localhost:3000`)
})

//views y public debe estar dentro de starter code
//Para modificar el link, siempre debe de entrar a "a (anchor)"