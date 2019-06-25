//Save in the variable "express" the content of the package "express"
const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
// Example: http://localhost:3001/wave.gif (without "/public")
// Example: http://localhost:3001/style.css 
app.use(express.static("public"));

// our first Route "/" (http://localhost:3001)
app.get("/", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.send(`
  <html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <nav>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/photogalery"> Photo Gallery </a>
      </nav>
      <h1>LAB - Express basic website</h1>
      <button type="button" class="btn btn-dark">This is just trying out some bootstrap</button>
  
      <script src="/main.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>
  `);
});

app.get("/photogalery", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <nav>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/photogalery"> Photo Gallery </a>
      </nav>
      <h1>Waves, please come to Portugal 🙏🏼</h1>
      <p>If its possible come before ${(new Date()).toLocaleDateString()}</p>
      <img src="/wave.gif" height= "100px">
      <img src="/pexels-photo-355288.jpeg" height= "100px">
      <img src="/photo-1505144808419-1957a94ca61e.jpeg" height= "100px">
      <img src="/ray-collins-wave-photography-8.jpg" height= "100px">
      </html>
    </body>
  `);
});

app.get("/about", (request, response, next) => {
  // console.log(request);
  response.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <nav>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/photogalery"> Photo Gallery </a>      
      </nav>
      </html><h1>About</h1>
      <p>This website was made by Sonia and Antonio</p>
    </body>
  `);
});

// Server Started
app.listen(3001, () => {
  console.log("My first app listening on port 3001!");
});
