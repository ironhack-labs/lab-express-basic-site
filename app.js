const express = require("express");
const app = express();

// this makes the public folder availble in the html files
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log("This is the home page");
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname + '/views/home.html')
})
app.get('/hamster', (request, response) => {
    console.log("This is the hamu page");
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname + '/views/hamster.html')
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
