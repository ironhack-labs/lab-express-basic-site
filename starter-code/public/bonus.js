console.log('Javascript working, yayyyy!!!');

const coolEffect = document.querySelector('.cool');

coolEffect.addEventListener("click", () => {
  coolEffect.innerHTML = 'Cool!';
});