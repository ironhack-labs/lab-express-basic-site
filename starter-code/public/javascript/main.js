const images = ["/images/image1.jpeg", "/images/image2.jpg", "/images/0.jpg"];
const imgElement = document.querySelector("img");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let currentImg = 0;

prevButton.addEventListener("click", () => {
  currentImg--;
  if (currentImg < 0) currentImg = images.length - 1;

  imgElement.src = images[currentImg];
});

nextButton.addEventListener("click", () => {
  currentImg++;
  if (currentImg % images.length === 0) currentImg = 0;

  imgElement.src = images[currentImg];
});

addEventListener("load", () => {
  imgElement.src = images[currentImg];
});
