const express = require("express");
const app = express();

// this makes the public folder availble in the html files
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log("This is the home page");
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname + '/views/home.html')
})
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})
app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})


app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
