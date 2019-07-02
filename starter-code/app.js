const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next) => {
	res.sendFile(__dirname + '/views/gallery.html');
});

const server = app.listen(3000, () => {
	console.log(`Express server successfully`, chalk.cyan('started...'));
	console.log(
		`Sever IP address: ${chalk.cyan(process.env.IP || 'https://localhost')}`,
	);
	console.log(
		`Express server listening on port ${chalk.cyan(
			process.env.PORT || '3000',
		)}`,
	);
});
