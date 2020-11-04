const express = require('express');
const app = express();



  app.use(express.static(__dirname + '/public'));


  app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`)
  })
  
app.get("/featuredWork", (req, res) => {
    res.sendFile(`${__dirname}/views/featuredWork.html`)
  })

  app.get("/contactme", (req, res) => {
    res.sendFile(`${__dirname}/views/contactme.html`)
  })

  app.listen(3000)
