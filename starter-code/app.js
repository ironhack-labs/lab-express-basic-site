const express = require("express");
const app = express();

// our first Route
app.get("/", (request, response, next) => {
  console.log(request);
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
