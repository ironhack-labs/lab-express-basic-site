const express = require('express')
const PORT = 3000

const app = express()
app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log(req.url)
    res.sendFile(`${__dirname}/public/views/home.html`)
})

app.get('/about', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/public/views/about.html`)
})

app.get('/photos', (req, res) => {
    res.sendFile(`${__dirname}/public/views/gallery.html`)
})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
  })