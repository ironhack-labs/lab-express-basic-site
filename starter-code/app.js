const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/',(req,res)=> res.sendFile(__dirname + '/public/views/index.html'))
app.get('/about',(req,res)=> res.sendFile(__dirname + '/public/views/about.html'))
app.get('/photos',(req,res)=> res.sendFile(__dirname + '/public/views/photos.html'))


app.listen(3000, ()=>console.log('Ready in 3000'))
