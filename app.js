const express = require("express")

const app = express();

// Tell express to look in the "public/" folder for URLs
app.use(express.static("public"))

//Route
// -------------------------
// A URL that is visitable in our application
// TWO arguments :
// 1. String of the URL
// 2. Callback function
app.get("/", (request, response, next) => {
    // send "Hello world!" to the client
    response.sendfile(__dirname + "/views/home.html");
});


app.get("/about", (request, response, next) => {
    response.sendfile(__dirname + "/views/about.html")
})

app.get("/gallery", (request, response, next) => {
    response.sendfile(__dirname + "/views/gallery.html")
})

console.log("DIRNAME " + __dirname)

app.listen(4000, () => {
    console.log("Server ready!");
});