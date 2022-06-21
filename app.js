const express = require ('express');





const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/views/index.html`)
})
app.get('/about', (req, res, next) => {
    res.sendFile(`${__dirname}/views/about.html`)

})
app.get('/photo', (req, res, next) => {
    res.sendFile(`${__dirname}/views/photo.html`)
})
app.get('/works', (req, res, next) => {
    res.sendFile(`${__dirname}/views/works.html`)
})


const port = 3000;
app.listen(port, ()=> console.log(`bulala ${port}`))