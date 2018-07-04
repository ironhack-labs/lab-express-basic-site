var previous = document.getElementById('prev');
var next = document.getElementById('next');

var images = {
  f1: 'assets/gollum1.jpg',
  f2: 'assets/gollum2.jpg',
  f3: 'assets/gollum3.jpg'
}

var currentImage = document.getElementById('foto');

next.addEventListener('click',function(){
  var getNam = currentImage.getAttribute('name');

  switch(getNam){
    case 'f1':
      currentImage.setAttribute('src', images.f2);
      currentImage.setAttribute('name', 'f2');
      break;
    case 'f2':
      currentImage.setAttribute('src', images.f3);
      currentImage.setAttribute('name', 'f3');
      break;
    case 'f3':
      currentImage.setAttribute('src', images.f1);
      currentImage.setAttribute('name', 'f1');
      break;
  }
});

previous.addEventListener('click', function(){
  var getNam = currentImage.getAttribute('name');

  switch(getNam){
    case 'f1':
      currentImage.setAttribute('src', images.f3);
      currentImage.setAttribute('name', 'f3');
      break;
    case 'f2':
      currentImage.setAttribute('src', images.f1);
      currentImage.setAttribute('name', 'f1');
      break;
    case 'f3':
      currentImage.setAttribute('src', images.f2);
      currentImage.setAttribute('name', 'f2');
      break;
  }
});