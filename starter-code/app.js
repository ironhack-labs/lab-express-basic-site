const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>Express lab</h1>')
  });

  app.listen(3000, () => console.log('My first app listening on port 3000! '));  