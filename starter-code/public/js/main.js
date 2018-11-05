
//window.onload = ()=> {

  const btnMenu = document.getElementById('menu-icon');
  const menu = document.getElementById('container_menu');
  const words = document.getElementsByClassName('wColor');


  const random_color = ()=> {
    let color = '#';
    const letters = ['FF5252','87C860','00FFBB', '0086FF','FFBF00', '894598'];
    color += letters[Math.floor(Math.random() * letters.length)];
    menu.style.backgroundColor = color;
    [].forEach.call(words, (e)=> {
      e.style.color = color;
    });
  }
  random_color();


  btnMenu.onclick = ()=> {
    btnMenu.classList.toggle("clicked");
    menu.classList.toggle("closed");
  };

  // $(document).ready(function(){
  //   $('.owl-carousel').owlCarousel();
  // });

//}
