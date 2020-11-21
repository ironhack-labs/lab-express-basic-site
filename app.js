const express = require('express');

// We create our own Express server called server
// Express server will be handling requests and responses
const server = express();

// Make everything inside of public/ available
server.use(express.static('public'))

// first Route:
server.get('/views/home.html', (request, response) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Am I doing this right?</h1>
        <p>Yeah the Home Page works !! :)</p>
      </body>
    </html>`)
})

// second Route:
server.get('/views/about.html', (request, response) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>About Page</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Am I doing this right?</h1>
        <p>Yeah the About Page works !! :)</p>
      </body>
    </html>`)
})

// third Route:
server.get('/views/works.html', (request, response) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Works Page</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Am I doing this right?</h1>
        <p>Yeah the Works Page works !! :)</p>
      </body>
    </html>`)
})

server.listen(4000, () => {
    console.log('it works!');
})

