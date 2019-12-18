const express = require('express');
const app = express();

app.use(express.static('public'));

// Home route
app.get ('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
})



// about route
app.get ('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})



// Gallery route
app.get ('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

app.listen(3000, () => console.log('Server is running'))