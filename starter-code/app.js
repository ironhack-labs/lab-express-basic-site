const express = require("express");
const app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html')
})


app.listen(PORT, function () {
  console.log(`I am listening on port ${PORT}`);
})