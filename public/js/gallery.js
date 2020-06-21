document
  .querySelectorAll(`[class*="gal-"]`)
  .forEach((el) => el.addEventListener('click', makeActive))

function makeActive(event) {
  const target = event.currentTarget

  document
    .querySelectorAll('.active')
    .forEach((el) => el.classList.remove('active'))

  target.classList.add('active')

  const galleryShow = document.querySelector('.gallery')

  const picId = target.getAttribute('id')

  galleryShow.style.background = `url(../images/${picId}.jpg) no-repeat center center / contain`
}
