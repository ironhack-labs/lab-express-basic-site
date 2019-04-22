// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
  response.send('<h1>My webpage :)</h1>');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});


// Make everything inside of public/ available
app.use(express.static('public'));

// ...

app.get('/home', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Home page</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
        <ul>
         <li><a href="/home">Home page</a></li>
         <li><a href="/about">About page</a></li>
         <li><a href="/pictures">Pictures page</a></li>
        </ul>  

          <img id = "homeimg" src="/images/building.jpg" />
        </body>
      </html>
    `);
  });

  app.get('/about', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Home page</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
        <ul>
         <li><a href="/home">Home page</a></li>
         <li><a href="/about">About page</a></li>
         <li><a href="/pictures">Pictures page</a></li>
        </ul>  

          <img id = "aboutimg" src="/images/building2.jpg" />
        </body>
      </html>
    `);
  });

  app.get('/pictures', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Home page</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
        <ul>
         <li><a href="/home">Home page</a></li>
         <li><a href="/about">About page</a></li>
         <li><a href="/pictures">Pictures page</a></li>
        </ul>  

          <img id = "picimg" src="/images/building3.jpg" />
        </body>
      </html>
    `);
  });
  
  // ...