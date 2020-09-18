const navlinks = document.querySelectorAll(".nav-link");
console.log(navlinks);

function addDecoration(currentlink) {
    console.log(currentlink);
    currentlink.classList.add(".orange");
}

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
      const currentlink = event.target;
      addDecoration(currentlink);
  });
});

// try to do it on page load!!