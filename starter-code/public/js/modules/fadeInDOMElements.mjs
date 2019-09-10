const fadeInDOMElements = (DOMElements, fadeInDelay, fadeInClass) => {
  console.log(DOMElements)
  DOMElements.forEach((DOMElement, idx) => {
    setTimeout(() => {
      DOMElement.classList.add(fadeInClass)
    }, fadeInDelay * idx);
  });
};

export default fadeInDOMElements
