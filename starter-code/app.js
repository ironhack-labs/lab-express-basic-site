const express = require('express');
const app = express();

app.use(express.static('public'));

//All the views are inside the folder '/views'
app.set('views', __dirname + '/views');
//Configure Express to have HBS as a view engine
app.set('view engine', 'hbs');

app.get('/', (request, response, next) => {
  let hour = new Date().getHours()
  let min = new Date().getMinutes()
  console.log(request);
  // render '/views/index.hbs'
  // because of app.set
  response.render('index', {
     // views has variable1
    variable1: '<strong>Dogs!</strong>',
    hour, //is same as 'hour:hour'
    min, //is same as 'min:min'
    isMorning: hour <= 11,
    isAfternoon: hour >= 12 && hour <= 17,
    isEvening: hour >= 18,
    
    
  });

});

app.get('/about', (request, response, next) => {
  console.log(request);
  response.render('about');

});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


app.get('/image-gallery', (request, response, next) => {
  let pictures = ['dog1', 'dog2', 'dog3', 'dog4', 'dog5']
  shuffle(pictures)
  response.render('image-gallery', {pictures})
  //response.sendFile(__dirname + '/views/image-gallery.html');

});

app.listen(3002, () => {
  console.log('running on server 3002')
});