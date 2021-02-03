const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    console.log(__dirname);
    console.log('hello from home route');
    // response.send('<h1>Home Page</h1>')
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/index', function (request, response) {
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', function (request, response) {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', function (request, response) {
  response.sendFile(__dirname + '/views/works.html')
})

app.listen(3000, () => {
    console.log('Server listening');
})

// create a new folder
// $ npm init
// install express - > check the github page from
// express

// create a route for the home page that 
// shows a string in the browser


// create a route for the about that 
// shows a string in the browser

