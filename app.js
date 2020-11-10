const express = require('express')
const app = express()
const port = 3000

app.use( express.static('public') );

app.get('/about', (req, res) => {
    res.sendFile( __dirname + '/public/views/about.html')
})

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/public/views/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




/*const express = require("express");

const app = express();
app.listen(3000)

app.use( express.static('public') );



app.get("/about", (req, res, next) => {

  res.sendFile( __dirname + '/public/views/about.html');
});
*/
