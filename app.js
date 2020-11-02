const express = require('express')
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.static('views'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./views/index.html");
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "./views/about.html")
  });

  app.get('/fashion', function(req, res) {
    res.sendFile(__dirname + "./views/fashion.html")
  });


app.listen(5000, () => {
    console.log(`App listening on port ${port}`);
}); 