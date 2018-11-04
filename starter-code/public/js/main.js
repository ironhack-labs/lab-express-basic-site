
window.onload = ()=> {

  const random_color = ()=> {
    let color = '#';
    const letters = ['FF5252','87C860','00FFBB', '0086FF','FFBF00', '894598'];
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('container_menu').style.backgroundColor = color;
  }
  random_color();

  const btnMenu = document.getElementById('menu-icon');

  btnMenu.onclick = ()=> {
    btnMenu.classList.toggle("clicked");
  };

}
