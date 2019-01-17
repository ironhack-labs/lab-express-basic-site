// 1st step require all the packages you install
const express = require('express');

// express server handling requests and responses
// create variable app which is our express app in the core:
const app = express();
// then app.listen last line

app.use(express.static('public'));

// express is now our server; our client is the browser. so we send them the html files via routes:
// routes for home, about, photo gallery:
app.get('/', (request, response, next) => {
  console.log("Testing to see if browser displays something.");
  // response.send(<p>Welcome to the <b>Express Basic Site Lab</b></p>);
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) => {
  // res.send('src=/images/federer-wimblredon-2017.jpg');
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (req, res, next) => {
  // res.send('src=/images/federer-wimblredon-2017.jpg');
  res.sendFile(__dirname + '/views/photo-gallery.html');
});

// second argument is not necessary; it's only a tester
app.listen(3000, () => console.log("My first express app running on port 3000."));