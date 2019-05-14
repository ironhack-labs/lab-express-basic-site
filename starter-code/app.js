const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});
app.get("/other1", (req, res) => {
  res.sendFile(__dirname + "/views/other1-page.html");
});
app.get("/other2", (req, res) => {
  res.sendFile(__dirname + "/views/other2-page.html");
});
app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
