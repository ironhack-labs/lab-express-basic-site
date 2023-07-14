const express = require ('express');
const app = express();


// Server static files from the 'public' directory
app.use(express.static('public'));


// Defining routes
app.get('/', (request, response, next) =>{
    response.sendFile(__dirname + '/views/index.html')
});
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
});
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
});
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})


// Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});