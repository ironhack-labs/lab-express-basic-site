
const express = require('express');
const path = require('path')

const app = express();
const port = 3000
console.log(__dirname)

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
  })
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
  })
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/gallery.html`)
  })
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/works.html`)
  })        
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})