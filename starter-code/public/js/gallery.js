const images = [
    "https://media.giphy.com/media/26gspipWnu59srmM0/giphy.gif",
  "https://i0.wp.com/www.rowsdowr.com/wp-content/uploads/2012/10/homers-web-page.gif",
  "https://media.giphy.com/media/rJg1NNcRmJAn6/giphy.gif",
  "https://media.giphy.com/media/zO4fwfORonOta/giphy.gif",
  "https://media.giphy.com/media/lBDtobYPRAQg/giphy.gif"
];
let index = 0;
console.log("hola");
const right = () => {
  if (index == images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  document.getElementById("image").src = images[index];
};
document.getElementById("right").addEventListener("click", right);

const left = () => {
  if (index == 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  document.getElementById("image").src = images[index];
};
document.getElementById("left").addEventListener("click", left);
