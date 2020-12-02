const logo = document.querySelector(".logo");

let audio = new Audio("/audio/national_anthem.mp3");

logo.addEventListener("click", function () {
  audio.play();
});

btn.addEventListener("click", function () {});

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const handleToggle = () => body.classList.toggle("is-active");
if (button !== null) button.onclick = handleToggle;
