
window.onload = function() {
  
  let a = prompt()

  localStorage[0] = a;

  console.log(localStorage)

  let idSaludo = document.getElementById("saludo");
  let elPadre = document.getElementsByTagName("div")[0];

  idSaludo.textContent = localStorage[0];
  elPadre.appendChild(idSaludo);

};
