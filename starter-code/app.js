const express = require("express");
const port = 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(`${__dirname}/views/home-page.html`));
app.get("/aboutUs", (req, res) =>
  res.sendFile(`${__dirname}/views/aboutUs.html`)
);
app.get("/gallery", (req, res) =>
  res.sendFile(`${__dirname}/views/gallery.html`)
);

app.listen(port, () => console.log(`app escuchando en el puerto ${port}`));
