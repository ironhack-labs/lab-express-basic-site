let express = require ('express')

app = express ()

app.use(express.static('public'))

app.get("/",(request,response)=>{
  response.sendFile(__dirname + 'views/homepage.html');
})

app.get("/gallery",(request,response)=>{
  response.sendFile(__dirname + 'views/gallery.html');
})

app.get("/about",(request,response)=>{
  response.sendFile(__dirname + 'views/about.html');
})









app.listen(3000, function(){
  console.log("ya funciono prro")
})