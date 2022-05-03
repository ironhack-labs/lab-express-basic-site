export function heroText() {
  const currentPath = location.pathname;
  const heroText = document.getElementById("hero");
  switch (currentPath) {
    case "/":
      heroText.innerHTML = "AYRTON SENNA TRIBUTE PAGE";
      break;
    case "/about":
      heroText.innerHTML = "ABOUT AYRTON";
      break;
    case "/works":
      heroText.innerHTML = "BEST PERFORMANCES";
      break;
    case "/photo-gallery":
      heroText.innerHTML = "PHOTO GALLERY";
      break;
    default:
      heroText.innerHTML = "AYRTON SENNA TRIBUTE PAGE";
      break;
  }
}
