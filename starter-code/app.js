const express = require('express');
const app = express();

app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
	console.log(request);
	response.sendfile(__dirname + '/views/index.html');
});

app.get('/index.html', (request, response, next) => {
	console.log(request);
	response.sendfile(__dirname + '/views/index.html');
});

app.get('/about.html', (request, response, next) => {
	response.sendfile(__dirname + '/views/about.html');
});

app.get('/gallery.html', (request, response, next) => {
	response.sendfile(__dirname + '/views/gallery.html');
});

app.listen(3000, () => {
	console.log('My first app listening on port 3000!');
});