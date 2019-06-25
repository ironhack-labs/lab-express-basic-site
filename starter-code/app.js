const express = require('express');
const app = express();

app.use(express.static('public'));



app.get('/', (request, response, next) => {
    console.log(request);
    response.send(`<html> 
        <head>
          <meta charset="utf-8">
          <title>SailorMoon4Eva</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
        <div class="container">
          <h1>Welcome to Sailor Moon Fan Page!</h1>
        </div>
        </body>
      </html>`)
  });

  app.get('/about', (request, response, next) => {
    console.log(request);
    response.send(
        `<html> 
        <head>
          <meta charset="utf-8">
          <title>About</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
        <div class="container">
          <h1>About Sailor Moon:</h1>
          <p> Sailor Moon, known in Japan as Pretty Soldier Sailor Moon (Japanese: 美少女戦士セーラームーン Hepburn: Bishōjo Senshi Sērā Mūn), is a 1992 Japanese anime television series produced by Toei Animation using Super Sentai motifs.</p>
        </div>
        </body>
      </html>`
      );
  });

  app.get('/gallery', (request, response, next) => {
    console.log(request);
    response.send(`<html> 
    <head>
      <meta charset="utf-8">
      <title>SailorMoon4Eva</title>
      <link rel="stylesheet" href="/css/styles.css" />
    </head>
    <body>
    <div class="container">
      <h1>Enjoy some photos of our favourite heroes:</h1>
      <img src="/images/Group285.jpg" id="first">
      <img src="/images/R-cover-1.jpg" id="snd">
      <p id="ChangeImage">Next...</p>
    </div>
    <script src="/js/script.js"></script>
    </body>
  </html>`
  );
});

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });