const express = require('express');

// Express server handling requests and responses
const app = express();
app.use(express.static('public'));
// our first Route:
app.get('/', (request, response, next) => {
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/Home', (request, response, next) => {
    response.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Nathaniel Carvajal</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
            <h1>Nathaniel Carvajal's Web Development Journey</h1>
            <p>Welcome to my online portfolio!</p>
            <div class="container">
              <div class="row">
                <div class="col-sm-4"><a href= "/home">Home</a></div>
                <div class="col-sm-4"><a href= "/About">About</a></div>
                <div class="col-sm-4"><a href= "/Projects">Projects</a></div>
              </div>
            </div>
        </body>
    </html>
    `);
  });

  app.get('/About', (request, response, next) => {
    response.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Nathaniel Carvajal</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
            <h1>Nathaniel Carvajal's Web Development Journey</h1>
            <p>My name is Nathaniel Carvajal, and I am studying to become a Full Stack Web Developer!</p>
            <div class="container">
              <div class="row">
                <div class="col-sm-4"><a href= "/home">Home</a></div>
                <div class="col-sm-4"><a href= "/About">About</a></div>
                <div class="col-sm-4"><a href= "/Projects">Projects</a></div>
              </div>
            </div>
        </body>
    </html>
    `);
  });

  app.get('/Projects', (request, response, next) => {
    response.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Nathaniel Carvajal</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
            <h1>Nathaniel Carvajal's Web Development Journey</h1>
            <p>Attached below are all of my completed projects so far:</p>
            <div class="container">
              <div class="row">
                <div class="col-sm-4"><a href= "/home">Home</a></div>
                <div class="col-sm-4"><a href= "/About">About</a></div>
                <div class="col-sm-4"><a href= "/Projects">Projects</a></div>
              </div>
            </div>
        </body>
    </html>
    `);
  });


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
