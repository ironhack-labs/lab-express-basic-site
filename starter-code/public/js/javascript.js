const img1 = document.querySelector('#disc1');
const img2 = document.querySelector('#disc2');
const img3 = document.querySelector('#disc3');

const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');

const close = document.querySelectorAll('.close');

img1.addEventListener('click', () => {
  modal1.classList.add('show');
});

img2.addEventListener('click', () => {
  modal2.classList.add('show');
});

img3.addEventListener('click', () => {
  modal3.classList.add('show');
});


close[0].addEventListener('click', () => {
  modal1.classList.remove('show');
});

close[1].addEventListener('click', () => {
  modal2.classList.remove('show');
});

close[2].addEventListener('click', () => {
  modal3.classList.remove('show');
});