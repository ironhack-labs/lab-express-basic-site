const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile('/starter-code/public/index.html');
});

app.get("/about", (req,res)=>{
    res.send("<h1>Wassup bro<h1><a href='/'>Send me home</a>");
});

app.get("/images",(req,res)=>{
    res.send("<img src='/images/skate-image.jpg' width='500' alt='Sorry can't display image><a href='/'>Send me home</a>");
})

app.listen(3000,()=>{
  console.log("Escuchando...");
})