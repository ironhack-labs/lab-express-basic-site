var inputBTN = document.querySelector("#inputThing-btn");
var input = document.querySelector("#inputThing");

inputBTN.addEventListener("click", () => {
  console.log("button clicked");
  input.innerHTML = "<h1>RICK AND MORTY!!</h1>";
});
