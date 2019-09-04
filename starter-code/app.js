const express = require("express");

const app = express();

//##########Link static assets, such as stylesheet #######
app.use(express.static("public"));



//##########Linking HTML pages#######

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})


//##########port for local server######
app.listen(3005, () => {
    console.log("Server is listening on port: 3005");
})