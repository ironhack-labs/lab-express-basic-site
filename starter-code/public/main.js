'use strict'


  const boton = document.querySelector('.boton');
  const input = document.querySelector('.nombre');

  function handleButton(){
    const audio = new Audio();
    if (input.value === ''){
      audio.src = "nelson.mp3";
      audio.play();
      alert("Pon algo, no seas listo!!");
    }else{
      audio.src = "kamehameha.wav";
      audio.play();
      alert(`Buenos días ${input.value} :D y que aproveche el café!!!`);
      
    }
  }

  boton.addEventListener('click', handleButton);




