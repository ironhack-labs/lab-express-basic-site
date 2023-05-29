const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.get("/work", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'work.html'))
})

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gallery.html'))
})

app.listen(port, () => console.log(`App is listening to the port ${port}`));