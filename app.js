const express = require('express')
const app = express()


app.use(express.static(__dirname +'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/view/home.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/view/about.html')
})

app.get('/works',(req,res)=>{
    res.sendFile(__dirname + '/view/works.html')
})

app.get('/photogallery',(req,res)=>{
    res.sendFile(__dirname + '/view/photogallery.html')
})

app.listen(3000)