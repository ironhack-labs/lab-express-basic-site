const express = require('express');

// We create our own server named app

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// our first Route:
app.get("/home", (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>

        
          <meta charset=“utf-8”>
          <title>Leo Messi WEB</title>
          <link rel="stylesheet" href="style.css" />
      <div class="topnav"> 
          <ul>
        
         <li><a href=http://localhost:3000/about>About</a></li>
         <li><a href=http://localhost:3000/pictures>Pictures</a></li>
        </ul>  
        </div>
        </head>
        <body id="hp">
        
       
        </body>
      </html>
    `)
});

app.get("/about", (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
        
          <meta charset=“utf-8”>
          <title>About</title>
          <link rel="stylesheet" href="style.css" />
        <ul>
        <li><a href=http://localhost:3000/home>Home page</a></li>
         <li><a href=http://localhost:3000/pictures>Pictures page</a></li>
        </ul>  
        </head>
        <body id="ab">
<h1 id="lmc"> Lionel Andres Messi Cuccitini</h1>
<h2 id="hhh"> Born: June 24, 1987 (age 31 years), Rosario, Argentina </h2> 
<p> Leo Messi is the best player in the world. 
Technically perfect, he brings together unselfishness, pace, composure and goals to make him number one.
Leo Messi's footballing career started in 1995 at Newell's Old Boys, where he played until the year 2000. At the age of 13, Lionel Messi crossed the Atlantic to try his luck in Barcelona, and joined the Under 14s.
 Messi made spectacular progress at each of the different age levels, climbing through the ranks to Barça C, followed by Barça B and the first team in record time. </p>
   
 <h2 id="hhh"> 
       WEIGHT
       72kg
       HEIGHT
       170cm
       CLUB DEBUT
       16/10/2004
       </h2> 
    <img src="p19054.png" alt="messiiii">
         </body>
      </html>
    `)
});

app.get("/pictures", (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>

        
          <meta charset=“utf-8”>
          <title>Piictures</title>
          <link rel="thirdstylesheet" href="picturess.css" />
          <ul>
        
         <li><a href=http://localhost:3000/about>About</a></li>
         <li><a href=http://localhost:3000/home>Pictures</a></li>
        </ul>  
       
        </head>
        <body>
        
       
        </body>
      </html>
    `)
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
