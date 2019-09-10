const openModalImage = (modalLightboxContainer, modalLightboxContainerToggleClass, modalImage) => {

  const newModalImage = modalLightboxContainer.querySelector('.modal__image')
  newModalImage.src = modalImage.src
  newModalImage.setAttribute("alt", modalImage.getAttribute("alt"))

  const modalTitle = modalLightboxContainer.querySelector('.modal__title')
  modalTitle.textContent = modalImage.getAttribute("alt")

  const modalDescription = modalLightboxContainer.querySelector('.modal__description')
  modalDescription.textContent = modalImage.dataset.imageDescription

  // Make the lightbox visible
  modalLightboxContainer.classList.toggle(modalLightboxContainerToggleClass)
}

export default openModalImage
