const express = require('express');

const app = express()

app.use(express.static('public'));


// app.get('/home',(req,res,next)=>{
//     res.send('<h1>Welcome!!</h1>')
// })
app.get('/home',(req,res,next)=>{
    res.sendFile(__dirname + '/public/views/home.html')
})

    





app.listen('3000',()=>{
    console.log('Server is running at port 3000')
})