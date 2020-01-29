const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/gallery", (req, res) => {
  res.sendFile(`${__dirname}/views/gallery.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
  });
  

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});