var express = require ("express");
const app = express();

//tell Express to look in the "public" folder for URL
app.use(express.static("public"))

//Route
// ------------------------------------
// A URL that is visitable in ou application
// TWO arguments:
// ----- 1. String of the URL
// ----- 2. Callback function  --> received 3 argument : request, response, next in that order....
app.get("/", (request, response, next) => {
  // send this reponse to the client

 response.sendfile(__dirname + "/views/home.html");

});
app.get("/photo", (request, response, next) => {
  // send this reponse to the client

 response.sendfile(__dirname + "/views/photo-gallery.html");

});
app.get("/about", (request, response, next) => {
  // send this reponse to the client

 response.sendfile(__dirname + "/views/about.html");

});
/*app.get("/cat", (request, response, next) => {
  // send this reponse to the client
 
 response.sendfile(__dirname + "/views/cat-page.html");

});*/
app.listen(3000, () => {
      console.log("server ready!");
  });

  