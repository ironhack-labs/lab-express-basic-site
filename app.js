const express = require('express')
const app = express()

// app.use(( request, response, next) => {
    //next()
// })

app.use(express.static( __dirname + '/public'))
 
app.get('/home' , ( request, response ) => {
    response.sendFile( __dirname + '/views/home.html')
})

app.get('/about' , ( request, response ) => {
    response.sendFile( __dirname + '/views/about.html')
})

app.get('/works' , ( request, response ) => {
    response.sendFile( __dirname + '/views/works.html')
})

 
app.listen(3000)