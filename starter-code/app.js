/*jshint esversion: 6 */

// requeri la libreria de express
const express = require("express");

// cree el servidor de express
const app = express();

// config express
app.use(express.static(__dirname + "/public"));

// rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
  });

// echamos a andar el servidor
app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});
