const express = require("express");
// app is express instantiated
const app = express();
// web server - port number definition
const PORT = 3000;

app.listen(PORT, () => {
  // after booting up the server, we report this to the executer user
  console.log(`listening on port ${PORT}`);
});

app.use(express.static("public"));

app.get("/bio", (req, res) => {
  // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
  res.sendFile(__dirname + "/views/static.html");
});

app.get("/videos", (req, res) => {
  // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
  res.sendFile(__dirname + "/views/static2.html");
});

app.get("/main", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
      <link rel="stylesheet" href="stylesheets/style.css" />
    </head>
    <body>
      <h1>La web de Gregorio</h1>
      <a href="/pictures">Go to pictures</a>
      <a href="/bio">Go to bio</a>
      <a href="/videos">Go to videos</a>
    </body>
  </html>
  `);
});

app.get("/pictures", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
      <link rel="stylesheet" href="stylesheets/style.css" />
    </head>
    <body>
    <h1>Sus fotos</h1>
      <img
        src="images/chiquito-joaquin.jpg"
      />
      <img
      src="images/1510394443_443393_1510395092_album_normal.jpg"
    />
    <img
    src="images/la-trayectoria-artistica-de-chiquito-de-la-calzada-1510055885-k5vH-U5065732217OhH-624x385@Diario Sur.jpg"
  />
  <img
  src="images/la-trayectoria-artistica-de-chiquito-de-la-calzada-1510055909-kbIF-U5065181736qVB-624x385@Diario Sur.jpg"
/>
<img
src="images/maxresdefault.jpg"
/>
<a href="/main">Go to main</a>
<a href="/bio">Go to bio</a>
<a href="/videos">Go to videos</a>
    </body>
  </html>
  `);
});
