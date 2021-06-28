const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/cat-page.html');
});


app.get('/chantale', function (req, res) {
	// console.log('the home page')
	res.sendFile(__dirname + '/views/chantale.html');
});

app.listen(3000, function () {
	console.log('Server listening');
});
