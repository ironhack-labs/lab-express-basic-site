var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('hero-carousel');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += 'hero-active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
