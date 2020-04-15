// the express() function creates an Express application

const express = require('express');
const app = express();

// Make everything inside of public/available
app.use(express.static('public'));

// our first route

app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Lucas. :)</h1>');
});


//our second route

app.get('/focus', (request, response, next) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Focus</title>
        <link rel="stylesheet" href="/stylesheet/style.css" />
      </head>
      <body>
        <h1>Focus</h1>
        <p>Welcome to our focus page</p>
        <img src="/images/focus.jpg" />
      </body>
    </html>`
)
})

// Server Started
app.listen(3000, ()=> {
    console.log('My first app listening on port!')
});

