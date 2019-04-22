var content = document.getElementById("content");

content.addEventListener("mouseover", e => {
  e.target.style.color = "grey";
});

content.addEventListener("mouseout", e => {
  e.target.style.color = "blue";
});
