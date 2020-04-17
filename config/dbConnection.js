require('dotenv').config();
const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((x) => {
		console.log('Connected to the database.');
	});
