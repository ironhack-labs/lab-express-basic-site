const express = require('express');
const app = express();
// Make everything inside of public/ available
//app.use(express.static('public'));
//app.set('views', __dirname + '/views');
//app.get('/cat', (request, response, next) => {
  //  response.sendFile(__dirname + '/views/cat-page.html');
//});

app.get('/', (request, response, next) => {
    response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

//Starts the backend server listening on port xxxx
app.listen(3000, () => {
    console.log('Starting the app');
});
