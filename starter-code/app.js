const express = require("express");
const app = express();
const pt = 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})


app.use(express.static('public'));

app.listen(pt, function () {
  console.log(`Moon reaching Earth through port ${pt}`);
})