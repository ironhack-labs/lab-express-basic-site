const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("In the middleware")
    next()
  })

app.use(express.static("public"))


app.get('/', (req, res) => { 
   res.sendFile(__dirname + '/views/home.html') 
});

app.get('/works', (req, res) => { 
  res.sendFile(__dirname + '/views/works.html') 
});

app.get('/about', (req, res) => { 
   res.sendFile(__dirname + '/views/about.html') 
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))