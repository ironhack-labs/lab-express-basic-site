const express = require ('express')
const app = express()
const port = 3000

app.use(express.static(`${__dirname}/views`)); //connecting Express to the public folder
app.use(express.static(`${__dirname}/public`));

app.get('/', function (req, res) {
    res.sendFile('index.html')
})

app.get('/home', function(req,res) {
    res.sendFile('home.html')
})

app.get('/about', function(req,res) {
    res.sendFile('about.html')
})

app.get('/works', function(req, res) {
    res.sendFile('works.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


