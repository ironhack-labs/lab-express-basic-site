// import express library
const express = require("express")
const app = express()

//Route
app.use(express.static('public'))
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/works', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/works-page.html')
})

app.get('/photo-gallery', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/gallery-page.html')
})

app.listen(3000, () =>{
    console.log('server on');
})



