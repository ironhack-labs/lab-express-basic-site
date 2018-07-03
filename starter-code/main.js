
var middle = document.getElementById("middle-bun");
var icon = document.getElementById("complete-icon");
var menu = document.querySelector(".menu-list");


var deleteMiddle = function() {
    middle.classList.toggle("hidden-bun");
    updateTransition();
    menuTransition();
}

icon.addEventListener('click', deleteMiddle);
    
function updateTransition() {
    var top = document.querySelector("div.top-burguer");
    var bottom = document.querySelector("div.bottom-burguer");
    top.classList.toggle("rotate-top") 
    bottom.classList.toggle("rotate-bottom");
  }

function displayMenu() {
    menu.classList.toggle("menu-hidden");
}  

icon.addEventListener('click', displayMenu);

function menuTransition() {
    menu.classList.toggle("slide-menu");
}

icon.addEventListener('click', menuTransition);

$(".menu-list").fadeOut(2000, displayMenu);
$(".menu-list").fadeIn(2000, displayMenu);
  

