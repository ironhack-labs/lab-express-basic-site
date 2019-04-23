const express = require('express');

const app = express();

app.use(express.static('public'));

const http = require('http');
  
  app.get('/', (request, response, next) => {
      response.send(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset=utf-8>
      <title>Home page</title>
      <link rel=stylesheet href=/stylesheets/style.css />
      </head>
      <body>
      <ul>
      <li><a href=/>Home page</a></li>
      <li><a href=/about>About page</a></li>
      <li><a href=/pictures>Pictures page</a></li>
      </ul>
      
      <h1>Jermaine Cole AKA J. Cole</h1>
      <h2>Leader of Dreamville</h2>
      </body>
      </html>
      `);
    });

    
    
    app.get('/about', (request, response, next) => {
        response.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset=utf-8>
        <title>About page</title>
        <link rel=stylesheet href=/stylesheets/style.css />
        </head>
        <body>
        <ul>
        <li><a href=/>Home page</a></li>
        <li><a href=/about>About page</a></li>
        <li><a href=/pictures>Pictures page</a></li>
        </ul>
        
        <p>Born and raised in North Carolina, J Cole learned to perfect his rapping 
        flow and voice to become one of the most respected rappers in the industry, 
        consistently pleasing his fans with incredible music</p>

        </body>
        </html>
        `);
    });
    
    app.get('/pictures', (request, response, next) => {
        response.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset=utf-8>
        <title>Pictures page</title>
        <link rel=stylesheet href=/stylesheets/style.css />
        </head>
        <body>
        <ul>
        <li><a href=/>Home page</a></li>
        <li><a href=/about>About page</a></li>
        <li><a href=/pictures>Pictures page</a></li>
        </ul>
        
        <img id=Jermaine src=images/jcole.jpg />
        <img id=youngJcole src=images/Young-J-Cole.jpg />
        <img id=KingCole src=images/king-jcole.jpg />
        </body>
        </html>
        `);
    });
    
    app.listen(3000);