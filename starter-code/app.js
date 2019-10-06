const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<strong>Holirri</strong>");
});

app.get("/yas",(req,res)=>{
  res.sendFile(`${__dirname}/views/yas.html`)
});

app.get("/photo",(req,res)=>{
  res.sendFile(`${__dirname}/views/photo.html`)
});


app.listen(3000, () => {
  console.log("App corriendo en el puerto 3000");
});

