const container = document.querySelector('.container')
function splashscreen() {

  setTimeout(() => {
    container.className = 'container hide'
  }, 000);

  setTimeout(() => {
    container.className = 'container show'
  }, 2000);

}
splashscreen()