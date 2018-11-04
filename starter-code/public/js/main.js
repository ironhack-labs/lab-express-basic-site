window.onload = function (){
  function random_color() {
    var color = '#';
    var letters = ['FF5252','87C860','00FFBB', '0086FF','FFBF00', '894598'];
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('container_menu').style.backgroundColor = color;
  }
  random_color();
}

var btnMenu = document.getElementsByClassName('menu-icon');

// Array.prototype.forEach.call(btnMenu, function(button) {
//   button.addEventListener('click', function() {
//     var menuEl = this.querySelectorAll('.menu-icon')[0];
//     var openedClassname = menuEl.dataset.toggled;
//     menuEl.classList.toggle(openedClassname);
//   });
// });

btnMenu.addEventListener('click', function() {
}
