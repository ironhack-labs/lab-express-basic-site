const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res)=>{
  console.log(req)
  res.sendFile(__dirname + '/views/about.html')
})


app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo.html');
});

app.listen(3000, ()=>{
  console.log('Server on: localhost:3000')
})