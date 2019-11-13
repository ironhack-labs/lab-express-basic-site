window.onload = (event) => {
    const galleryButton = document.querySelector('#gallery-button');
    const aboutButton = document.querySelector('#about-button');

    galleryButton.addEventListener('click', () => window.location='/gallery');
    aboutButton.addEventListener('click', () => window.location='/about');
  };