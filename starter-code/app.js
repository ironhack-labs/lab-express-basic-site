const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/acerca-de', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/galeria', (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`)
})

app.listen(3000,()=>{
    console.log(`server on http://localhost:3000`)
})