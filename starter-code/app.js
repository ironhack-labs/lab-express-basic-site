const express = require ('express');
const app = express ();
const path = require ('path');
const router = express.Router ();

router.get ('/', function (req, res) {
  res.sendFile (__dirname + '/views/home.html');
});

router.get ('/about', function (req, res) {
  res.sendFile (__dirname + '/views/about.html');
});

router.get ('/gallery', function (req, res) {
  res.sendFile (__dirname + '/views/gallery.html');
});

//add the router
app.use ('/', router);
app.use (express.static ('public'));
app.listen (process.env.port || 4000);

console.log ('Running at Port 4000');
