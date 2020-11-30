const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/home", (request, response) => {
  const htmlFile  = `${__dirname}/views/home.html`;

  response.sendFile(htmlFile );
});

app.get("/about", (request, response) => {
    const htmlFile  = `${__dirname}/views/about.html`;
  
    response.sendFile(htmlFile );
  });

app.get("/works", (request, response) => {
    const htmlFile  = `${__dirname}/views/works.html`;
  
    response.sendFile(htmlFile );
  });

app.get("/gallery", (request, response) => {
    const htmlFile  = `${__dirname}/views/gallery.html`;
  
    response.sendFile(htmlFile );
  });

app.listen(3000, () => console.log("My first app listening on port 3000! "));