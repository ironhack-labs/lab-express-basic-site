const express = require('express')

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
    console.log(request.url);
    response.sendFile(__dirname + "/public/views/home.html")
});

app.get('/about', (request, response, next) => {
    console.log(request.url);
    response.sendFile(__dirname + "/public/views/about.html")
})

app.get('/works', (request, response, next) => {
    console.log(request.url);
    response.sendFile(__dirname + "/public/views/works.html")
})

app.get('/gallery', (request, response, next) => {
    console.log(request.url);
    response.sendFile(__dirname + "/public/views/gallery.html")
})

app.listen(3000, () => console.log("App running on port 3000"));