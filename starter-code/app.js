const express = require("express");
const app = express();
var path  = require("path");
var _directory = "/views";

app.use(express.static(__dirname +'/public')); //public folder

app.get("/", (request, response) => {
    response.sendFile(__dirname+_directory+'/home.html');
});

app.get("/about",(request,response)=>{
    response.sendFile(__dirname+_directory+'/about.html');
});

app.get("/gallery",(request,respons)=>{
    response.sendFile(__dirname+_directory+'/gallery.html')
})



app.listen(3000, () => {
    console.log('port ---> 3000!');
  })