const express = require("express");
const app = express();
const port = 3000;

//public folder
app.use(express.static("public"));

//home route
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});
//about route
app.get("/about", function (req, res) {
  res.sendFile(`${__dirname}/views/about.html`);
});

//works route
app.get("/works", function (req, res) {
  res.sendFile(`${__dirname}/views/works.html`);
});
//gallery route
app.get("/gallery", function (req, res) {
  res.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
