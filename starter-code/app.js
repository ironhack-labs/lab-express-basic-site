const express = require("express");
const morgan = require("morgan")

const app = express();
const logger = morgan("tiny")


app.use(logger)
app.use(express.static(__dirname+"/public"));
app.use((request, response, next)=>{
   console.log("custom middleware -> vaca");
 
   next();
})
 
 
app.get("/", (request, response, next)=>{
   response.redirect("/home")
});
 
app.get("/home", (request, response, next)=>{
   response.sendFile(__dirname + "/public/views/index.html")
});
 
app.get("/about", (request, response, next)=>{
   response.sendFile(__dirname + "/public/views/about.html")
});

app.get("/gallery", (request, response, next)=>{
    response.sendFile(__dirname + "/public/views/gallery.html")
 });
 
app.listen(3000, ()=>{
    console.log("server is runinnnGGGuuuuu!")
});
