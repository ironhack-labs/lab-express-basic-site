'use strict'

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.send('<h1>Welcome Ironhacker.</h1>');
});

app.get('/jazz', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Jazzy Jazz</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Jazz Albums</h1>
        <p>Come at me bro</p>
        <img src="/images/miles-davis-kind-of-blue.jpg" />
        <br/>
        <img src="/images/john-coltrane-coltranes-sound.jpg" />
        <img src="/images/kamasi-washington-the-epic.jpg" />
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
        <title>Jazz About</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>About</h1>
        <p>Well, the way they make shows is, they make one show. 
           That show's called a pilot. Then they show that show to 
           the people who make shows, and on the strength of that one 
           show they decide if they're going to make more shows. Some 
           pilots get picked and become television programs. Some don't, 
           become nothing. She starred in one of the ones that became
          nothing.</p>

        <p>Now that we know who you are, I know who I am. I'm not a mistake!
           It all makes sense! In a comic, you know how you can tell who 
           the arch-villain's going to be? He's the exact opposite of the
           hero. And most times they're friends, like you and me! I 
           should've known way back when... You know why, David? Because
           of the kids. They called me Mr Glass.</p>
      </body>
    </html>
  `);
});
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

