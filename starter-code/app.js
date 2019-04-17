// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/home.html');
});

app.get('/about', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>About</title>
          <link rel="stylesheet" href="css/style.css" />
        </head>
        <body>
          <h1>Wellcome to the hell!</h1>
          <nav>
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/images">images</a></li>
          </ul>
          </nav>
          <div>
          <img src="/images/sun.jpeg" width='565' />
          <p>The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.</p>
            </div>
          </body>
      </html>
    `);
});

app.get('/images', (request, response, next) => {
    response.sendFile(__dirname + "/public/images.html");
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});