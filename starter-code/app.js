const express = require('express')

const app = express()
//adding static files
app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/home',(req,res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/about',(req,res)=>{
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/photo',(req,res)=>{
  res.sendFile(__dirname + '/views/photo.html')
})

app.listen(3000,()=>{
  console.log('Running express app on port 3000')
})