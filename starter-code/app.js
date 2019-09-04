const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
	console.log(__dirname)
	response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (request, res) =>{
	res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/gallery', (request, res) =>{
	res.sendFile(`${__dirname}/views/gallery.html`)
})

app.listen(8728, () => {
	console.log(`server on: http://localhost:8728`)
	
})