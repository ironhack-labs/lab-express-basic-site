const path = require('path')

const express = require('express')

const app = express()

app.use(express.static('public'))

app.all('/', mainRouteHandler)

function mainRouteHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/index.html'))
 }

 app.all('/about', aboutRouteHandler)

 function aboutRouteHandler(request, response){
   response.sendFile(path.join(__dirname,'/public/about.html'))
 }

 app.all('/works', worksRouteHandler)

 function worksRouteHandler(request, response){
  response.sendFile(path.join(__dirname,'/public/works.html'))
}

app.all('/photogallery', photogalleryRouteHandler)

 function photogalleryRouteHandler(request, response){
  response.sendFile(path.join(__dirname,'/public/photogallery.html'))
 }

 app.listen(3000)