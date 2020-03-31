const express=require('express')
const app= express()

app.use(express.static("public"))

app.get('/home',(_,response)=>{
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about',(_,response)=>{
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/works',(_,response)=>{
    response.sendFile(__dirname + '/views/works-page.html')
})

app.listen(5555)