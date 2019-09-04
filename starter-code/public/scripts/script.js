const soundButton = document.querySelector('#play-button')
const audio = document.querySelector('#yuya-sound')

soundButton.addEventListener('click', () => {
  audio.play()
})
