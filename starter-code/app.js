const express = require('express')

const app = express()

app.use(express.static('public'))

//Home
app.get('/', (req, res)=>{
  res.sendFile(`${__dirname}/views/home.html`)
})

//about
app.get('/about', (req, res)=>{
  res.sendFile(`${__dirname}/views/about.html`)
})

//gallery
app.get('/gallery', (req, res)=>{
  res.sendFile(`${__dirname}/views/gallery.html`)
})

//listen
app.listen(3000, ()=>{
  console.log(`Server on http://localhost:3000`)
})