const express = require('express');
const app = express();

app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
	console.log(request);
	response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/cat', (request, response, next) => {
	response.sendfile(__dirname + '/views/cat-page.html');
});

app.listen(3000, () => {
	console.log('My first app listening on port 3000!');
  });