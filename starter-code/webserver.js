// express import (remember, previously you have to do npm i express)
const express = require("express");
// app is express instantiated
const app = express();
// web server - port number definition
const PORT = 3000;

app.use(express.static("public"));

app.get("/helloPageStatic", (req, res) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    res.sendFile(__dirname + "/public/views/static.html");
});

app.get("/helloPage", (req, res) => {
    res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body>
      <h1>Hola ${Math.random() < 0.5 ? "Maria" : "Quique"}!, viva Murcia</h1>
      <img
        src="img/murcia.svg"
      />
    </body>
  </html>
  `);
});

// we spin up the web server to listen to the PORT 3000
app.listen(PORT, () => {
    // after booting up the server, we report this to the executer user
    console.log(`listening on port ${PORT}`);
});