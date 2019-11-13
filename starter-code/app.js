const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
//la  raiz

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log("A la escucha en el puerto 3000");
});
