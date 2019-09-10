import fadeInDOMElements from "./modules/fadeInDOMElements.mjs";
import openModalImage from "./modules/openModalImage.mjs";

const gallery = document.querySelector(".gallery");
const galleryItems = [...gallery.querySelectorAll(".gallery__image")];

const modalLightboxContainer = document.querySelector(
  ".modal-lightbox-container"
);

fadeInDOMElements(galleryItems, 100, "gallery__image--visible");

gallery.addEventListener("click", e => {
  const target = e.target;

  if (e.target.tagName === "IMG") {
    openModalImage(
      modalLightboxContainer,
      "modal-lightbox-container--visible",
      target
    );
  }
});

modalLightboxContainer.addEventListener("click", e => {
  if (e.target.classList.contains("modal-lightbox-container")) {
    modalLightboxContainer.classList.remove(
      "modal-lightbox-container--visible"
    );
  }
});
