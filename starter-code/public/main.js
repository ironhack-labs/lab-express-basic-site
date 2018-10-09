'use strict'

const titleElement = document.querySelector("body");

function handleMouseClick () {
  titleElement.classList.toggle("inverse")
  titleElement.classList.toggle("main-container");
}

titleElement.addEventListener('click', handleMouseClick);