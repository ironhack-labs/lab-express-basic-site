const knowMore = document.querySelector(".know-more");
const culture = document.querySelector(".culture");

if (knowMore !== null)
  knowMore.addEventListener("click", () => {
    culture.classList.toggle("is-active");
  });