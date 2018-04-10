const express = require("express");

const app = express();

//Tell express to look in the "public/" folder for URLs"
app.use(express.static("public"));

//route
// ------
// A URL that is visitable in our application
// TWO arguments:
// 1. String of the URL (in this case "/", or when someone visits the homepage)
// 2. Callback function (code that runs everything time a client makes a get request to the homepage)


app.get("/", (request, response, next) => {
    
    response.sendfile(__dirname + "/views/home-page.html");
});

app.get('/about', (request, response, next) => {
    response.sendfile(__dirname + "/views/about-page.html");
  });

app.get('/photo', (request, response, next) => {
    response.sendfile(__dirname + "/views/photo-page.html");
});

app.listen(3000, () => {
    console.log("Server ready!")
});