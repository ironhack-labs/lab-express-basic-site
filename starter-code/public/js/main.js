window.onload = function() {
  var randomBg = Math.floor(Math.random() * (3 - 1) + 1);

  document.getElementsByTagName('header')[0].classList.add(`bg-${randomBg}`);
};