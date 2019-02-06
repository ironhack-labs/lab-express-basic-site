const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/views/home.html')
})

app.listen(3000, ()=>{
	console.log("Running. Port 3000")
})