const bigFatBtn = document.querySelector("button");
const textBFB = "Big Fat Button";
const textILoveNZ = "I love NZ <3"

bigFatBtn.onclick = () => {
  
  if (bigFatBtn.innerHTML === textBFB) {
    bigFatBtn.innerHTML = textILoveNZ;
  } else {
    bigFatBtn.innerHTML = textBFB;
  }
}


// bigFatBtn.onclick = () => {
  
//   bigFatBtn.innerHTML = "I love NZ <3";

//   bigFatBtn.onclick = () => {
//     bigFatBtn.innerHTML = "Big Fat Button";
//   }
// }