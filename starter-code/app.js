const express = require("express");
const app = express();

app.get('/', (request, response, next) => {

})


app.listen(3000, () => {
    console.log('My first app listening on port http://localhost:3000!')
  });