const express = require("express");

const app = express();
app.use(express.static('public'));

app.get("/",(req,res)=>{
  console.log(__dirname);
  console.log(__dirname + "/views/home-page.html");
  res.sendFile(__dirname + "/views/homePage.html");
})

app.get("/gallery",(req,res)=>{
  res.sendFile(__dirname + "/views/galleryPage.html");
})

app.get("/about",(req,res)=>{
  res.sendFile(__dirname + "/views/aboutPage.html");
})

app.listen(3000,()=>{
  console.log("Estamos dentro de la app!!!!!!");
})
