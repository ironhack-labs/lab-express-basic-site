const express = require("express");

const app = express();

app.use(express.static('public'));
app.use(express)

app.get("/home", (req, res) => {
    res.send("This is Rocky")
    
  /* res.json({
      name: "Rocky",
      request: "home",
    })*/
    
});


app.get("/about", (req, res) => {
    res.send("About Rocky")

});

app.get("/work", (req, res) => {
        res.send("Gallery of Rocky")
    
});
app.listen(3000, () => {
  console.log('Listening server...')
});


app.get('/', (request, response,) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>ROCKY BALBOA HTML</h1>
        <p>This is my second route OF ROCKY</p>
        <img src="public/rocky.jpg" />
      </body>
    </html>
  `);
});

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));
