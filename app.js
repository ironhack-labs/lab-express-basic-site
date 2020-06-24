const express = require ('express')
var app = express()

app.use(express.static('public'))


app.get('/home', (req, res) => 
    res.sendFile(__dirname + '/views/home.html'))
    
    


app.listen (3100, () => {
    console.log('Server listening at port 3100')

})