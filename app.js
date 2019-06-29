const express = require('express')
const app = express()

app.use(express.static('public'))


app.get('/', (req, res)=>{
  res.send(`
  <h1>Home Page</h1>
  <a href="/about">about</a><br>
  <a href="/photogallery">photogallery</a>
  `)
})

app.get('/about', (req, res)=>{
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/photogallery', (req, res)=>{
  res.sendFile(`${__dirname}/views/photogallery.html`)
})

app.listen(3000, ()=>{
  console.log('server on: http://localhost:3000')
})