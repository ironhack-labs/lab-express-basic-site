/* boilerplate express connection for views */
const express = require("express");
const app = express();

app.get("/home", (request, response, next) => {
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.get("/about", (request, response, next) => {
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.get("/works", (request, response, next) => {
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.listen(3000, () => console.log("Listening on port 3000"));
