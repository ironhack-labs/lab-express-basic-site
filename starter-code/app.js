// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// Main Page
app.get('/', (request, response, next) => {
  response.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <title>Main Page</title>
  </head>
  <body>
    <h1>This is my Main Page!!!</h1>

    <div class= 'main-div'> Welcome to my main page! Click the linsk below!</div>
  
    <ul>
      <li> <a href= 'About'> About Me </a> </li>
      <li> <a href= 'Photos'> Photos </a></li>
    </ul>
  
  
  </body>
  </html>`);
});


// About Page
app.get('/about', (request, response, next) => {
  response.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <title>Main Page</title>
  </head>
  <body>
    <h1>About Me</h1>
    <h2> I love making websites!</h2>
    <ul>
      <li> <a href= '/'> Back </a> </li>
      <li> <a href= 'Photos'> Photos </a></li>
    </ul>
  
  
  </body>
  </html>`);
});


// Photos Page
app.get('/photos', (request, response, next) => {
  response.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <title>Main Page</title>
  </head>
  <body>
    <h1>Photos</h1>
      <div class='img-container'>
        <img src='./images/ds.gif'/>
        <img src='./images/gh.gif'/>
        <img src='./images/outrun.gif'/>
      </div>
    <ul>
      <li> <a href= 'About'> About </a> </li>
      <li> <a href= '/'> Back </a></li>
    </ul>
  
  
  </body>
  </html>`);
});



// Server Started
app.listen(3000, () => {
  console.log('Listening port 3000');
});