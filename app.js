const express = require('express');
const app = express()
// /Users/ivanmac/Desktop/lab-express-basic-site
// const dirName = __dirname
// console.log(dirName);
app.use(express.static("public"))


app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
})
app.get("/Works", (req, res) => {
  res.sendFile(`${__dirname}/views/works.html`)
})

app.listen(3000)
