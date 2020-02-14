const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/port", (req, res) => {
  res.sendFile(`${__dirname}/port/index.html`);
});
app.get("/port/1", (req, res) => {
  res.sendFile(`${__dirname}/port/proyects1.html`);
});
app.get("/port/2", (req, res) => {
  res.sendFile(`${__dirname}/port/proyects2.html`);
});
app.get("/port/3", (req, res) => {
  res.sendFile(`${__dirname}/port/proyects3.html`);
});
app.get("/port/about", (req, res) => {
  res.sendFile(`${__dirname}/port/about.html`);
});
app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
