let troll = document.querySelector(".troll");

function umm() {
  troll.classList.add("see");
  let audio = new Audio("/images/sound.mp3");
  audio.volume = 1;
  audio.play();
}
