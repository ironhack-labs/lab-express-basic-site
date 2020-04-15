// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route:
// app.get("/", (request, response, next) => {
//   response.send("<h1>Welcome Ironhacker. :)</h1>");
// });

app.get("/", (request, response, next) => {
  response.send(`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Let there be freedom!</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
          </head>
          <body>
            <h1>Welcome, seeker of freedom, peace and love!</h1>
            <img src="/images/welcome.jpg" />
          </body>
        </html>
      `);
});

app.get("/about", (request, response, next) => {
  response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>About The Hoff</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>About</h1>
          <p>Hail the messiah!</p>
          <img src="/images/1.jpg" />
        </body>
      </html>
    `);
});

app.get("/works", (request, response, next) => {
  response.send(`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Work by The Hoff</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
          </head>
          <body>
            <h1>Work</h1>
            <p>Most famous roles!!</p>
            <p>Channeling Mitch Buchannon in Baywatch:</p>
            <img src="/images/2.jpg" />
            <p>Totally crushing it as Michael Knight in Knight Rider:</p>
            <img src="/images/3.jpg" />
          </body>
        </html>
      `);
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
