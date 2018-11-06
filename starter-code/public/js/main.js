
//window.onload = ()=> {

  const btnMenu = document.getElementById('menu-icon');
  const menu = document.getElementById('container_menu');
  const words = document.getElementsByClassName('wColor');
  const links = document.getElementsByClassName('link');


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

  // [].forEach.call(links, (e)=> {
  //   e.onclick = ()=> {
  //     //setTimeout(()=>{
  //       btnMenu.classList.remove("clicked");
  //       menu.classList.add("closed");
  //     //}, 400);
  //   };
  // });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoHeight:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          900:{
            items:3,
          },
          1100:{
              items:4
          }
      }
    });
  });

//}
