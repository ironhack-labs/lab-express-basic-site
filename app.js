const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
})

app.get("/works", (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
  res.status(404);
  res.send('Sorry no existe nada aqui');
});

app.listen(3000, () => {
  console.log("listening on: http://localhost:3000")
})
