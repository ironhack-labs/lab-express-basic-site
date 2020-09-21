(function () {
  document.querySelector(".nav-button").addEventListener(
    "click",
    function () {
      this.parentNode.parentNode.classList.toggle("closed");
    },
    false
  );
})();

console.log("discover");
