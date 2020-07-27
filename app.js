const myExpress = require("express");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = myExpress();

app.use(myExpress.static('public'));


app.get('/', (req, res, next) => res.send('TEST'));

app.get('/home', (req, res, next) =>
  res.sendFile(__dirname + '/views/home.html')
);

app.get('/about', (req, res, next) =>
  res.sendFile(__dirname + '/views/about.html')
);

app.get('/works', (req, res, next) =>
  res.sendFile(__dirname + '/views/works.html')
);

app.get('/gallery', (req, res, next) =>
  res.sendFile(__dirname + '/views/gallery.html')
);

app.listen(PORT, () => console.log('server working'))