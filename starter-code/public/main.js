// function main() {
const paquito = document.querySelector(".paquito");
let pulsado;

paquito.addEventListener('click', () =>{
  if(pulsado === true){
    pulsado = false;
    paquito.innerText = "Vuelve a pulsar!!!!";
 
  } else {
    pulsado = true;
    paquito.innerText = "¿Por qué pulsas?...";
  }
});

// }

// window.addEventListener('load', main)