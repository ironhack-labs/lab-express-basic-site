const express  = require('express')
const app = express()

app.use(express.static('public'))

// our first route
app.get('/',(req, res) => {
    console.log(req)
    res.sendFile(`${__dirname}/pages/home.html`)
})

app.get('/about', (req, res, next) => {
    res.sendFile(`${__dirname}/pages/about-us.html`)

  })

  app.get('/gallery', (req, res, next) => {
    res.sendFile(`${__dirname}/pages/gallery.html`)

  })

app.listen(3000, () => console.log('server running') )