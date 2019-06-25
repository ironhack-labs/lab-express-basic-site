// Save in the variable `express` the content of the package "express"
const express = require("express");
// We create our own server named app
// Express server handling requests and responses
const app = express();
// Make everything inside of public/ available
// Example: http://localhost:3000/Jaune.png (without "/public")
// Example: http://localhost:3000/css/style.css
app.use(express.static("public"));
// The route "/" (http://localhost:3000/HomePage)
app.get("/", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/css/style.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
      </nav>
      <h1>Nanni Moretti Official Website</h1>
      <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      
    <img src="/nanni-moretti.gif">
    </body>
  </html>
  `);
});
// The route "/about" (http://localhost:3000/about)
app.get("/about", (request, response, next) => {
  response.send(`
  <html>
  <head>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/gallery">Gallery</a>
    </nav>
  <h1>About</h1>
  <p> Giovanni "Nanni" Moretti (Italian pronunciation: [ˈnanni moˈretti]; born 19 August 1953) is an Italian film director, producer, screenwriter and actor. The Palme d'Or winner in 2001, in 2012 he was the President of the Jury at the Cannes Film Festival.</p>
  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </body>
  </html>
  `);
});

// The route "/about" (http://localhost:3000/PhotoGallery)
app.get("/gallery", (request, response, next) => {
  response.send(`
  <html>
  <head>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/gallery">Gallery</a>
    </nav>
  <h1>About</h1><p>This website was made by Giulia</p>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
  </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
