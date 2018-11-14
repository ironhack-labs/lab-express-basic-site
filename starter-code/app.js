const express = require('express')


const app = express()
var path = require('path')

app.use('/',express.static(path.join(__dirname,'public')))

app.get('/',(request,response,next)=>{
    response.sendFile(__dirname+'/views/index.html')
})
app.get('/home',(request,response,next)=>{
    response.sendFile(__dirname+'/views/home.html')
})
app.get('/main',(request,response,next)=>{
    response.sendFile(__dirname+'/views/main.html')
})





app.listen(3000,()=>{
    console.log('my first')
})