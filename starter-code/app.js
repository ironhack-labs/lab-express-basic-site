// Save in the variable `express` the content of the package "express"
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
// Example: http://localhost:3001/nanni-moretti.gif (without "/public")
// Example: http://localhost:3001/css/style.css
app.use(express.static("public"));

// The route "/" (http://localhost:3001)
app.get('/', (request, response, next) => {
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
      <p>Giovanni "Nanni" Moretti (Italian pronunciation: [ˈnanni moˈretti]; born 19 August 1953) is an Italian film director, producer, screenwriter and actor. The Palme d'Or winner in 2001, in 2012 he was the President of the Jury at the Cannes Film Festival.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="/nanni-moretti.gif">
    </body>
  </html>
  `);
});

// The route "/about" (http://localhost:3000/about)
app.get('/about', (request, response, next) => {
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
  <h1>Life and Work</h1>
  <p>Moretti was born in Bruneck, South Tyrol, Italy, to Roman parents who were both teachers. His father was the late epigraphist Luigi Moretti, a Greek teacher at Sapienza University of Rome. While growing up he discovered his two passions, the cinema and water polo. Having finished his studies he pursued a career as a producer, and in 1973 directed his first two short films: Pâté de bourgeois and The Defeat (La sconfitta). His brother is literary scholar Franco Moretti.</p>
  <p></p>
  <p></p>
  <p></p>

  </body>
  </html>
  `);
});

// The route "/about" (http://localhost:3000/about)
app.get('/gallery', (request, response, next) => {
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
  <h1>Gallery</h1>
  <h3>All the movies of Moretti</h3>
  </body>
  </html>
  `);
});

// Start the server
app.listen(3001, () => {
  console.log('My first app listening on port 3001!')
});