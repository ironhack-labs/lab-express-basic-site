// ==== libreria de express
const express = require("express");

// ==== creacion de servidor de express
const app = express();

// ==== config express
app.use(express.static(__dirname + "/public"));

// ==== rutas
    //==== para el index====//
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

  //==== para about ====//

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });

  //==== para gallery ==== //

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
  });

  // levantar el servidor
app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`);
  });
  