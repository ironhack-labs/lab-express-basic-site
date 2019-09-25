window.onload = () =>{
  const links = document.querySelectorAll('a');
  links.forEach(item => item.addEventListener('mouseover', () => {
    item.classList.toggle('link-hover');
  }));
  links.forEach(item => item.addEventListener('mouseout', () => {
    item.classList.toggle('link-hover');
  }));
};