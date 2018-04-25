const express = require("express");
const app = express();

app.get("/",(req, res)=>{
res.send("Prueba server express")});


app.use(express.static('public'))

app.get("/home", (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')})

  app.get("/about", (req, res)=>{
    res.sendFile(__dirname + '/public/about.html')})

    app.get("/gallery", (req, res)=>{
      res.sendFile(__dirname + '/public/gallery.html')})
      


app.listen(3000,()=>{
console.log('probando server')
});


