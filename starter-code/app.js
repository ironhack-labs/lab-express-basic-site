const express  = require('express')
const app = express()

app.use(express.static('public'))

// our first route
app.get('/',(req, res) => {
    console.log(req)
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/about', (req, res, next) => {
    res.sendFile(`${__dirname}/views/humberto-page.html`)
  })
  
app.get('/comida', (req, res, next) => {
  res.sendFile(`${__dirname}/views/comida.html`)
})

app.listen(5000, () => console.log('server running') )