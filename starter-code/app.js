
const express = require('express');
const app = express();
app.use(express.static('public'));

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`<!DOCTYPE html>`);
// const $ = require('jquery')(window);

// function jQuery(doc){
//   const jsdom = require("jsdom");
//   const { JSDOM } = jsdom;
//   const { window } = new JSDOM();
//   const JQ = require("jquery")(window)(`<html>${doc || ''}</html>`);
// }
// var $ = jQuery;

const { JSDOM } = require( 'jsdom' );
const jsdom = new JSDOM(`<!DOCTYPE html>`);

// Set window and document from jsdom
const { window } = jsdom;
const { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

const $ = global.jQuery = require( 'jquery' );


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});


app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

const port = 3000;
app.listen(port,() => {
  console.log(`Ready on port ${port}`);
})
