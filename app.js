const express = require('express');
 
const app = express();

app.use(express.static('public'));


app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'))

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'))

app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'))

app.listen(3000, () => console.log('My first app listening on port 3000! '));

app.use((req, res, next) => {
    res.status(404);
    res.send(`<h2>Error: Omar couldn't find the page!</h2>
    <h3><a href="javascript:history.back()">Go Back</a> and try again.</h3>`)
    }
)
