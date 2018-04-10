
window.onload = function() {
  
let elPadre = document.getElementsByTagName("div")[0];
let nomEnMrX = document.getElementById("otro");

nomEnMrX.textContent = localStorage[0];
elPadre.appendChild(nomEnMrX);
}