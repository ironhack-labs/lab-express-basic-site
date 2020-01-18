const express = require('express');
const app = express();

// App setup
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use('/static', express.static(`${__dirname}/public`));

// Routes
app.get('/', (req, res) => {
	res.render('index');
});

// Start server
const port = 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
