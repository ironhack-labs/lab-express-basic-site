function main() {

  const button = document.querySelector("button");
  const image = document.querySelector(".img");
 

  function hideImage(e) {
    image.classList.toggle("hidden");
    if (image.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Image";
    } else {
      e.currentTarget.innerText = "Hide Image";
    }
  }
  button.addEventListener("click", hideImage);
}
//hacemos evento para que cargue main
window.addEventListener("load", main);