let gallery = document.querySelectorAll('.gallery-img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal-img')

gallery.forEach(image => image.onclick = (e) => showImage(e.target.src))

modal.onclick = closeModal

function showImage(src) {
    modal.classList.add("show")
    modalImg.src = src
}

function closeModal() {
    modal.classList.remove("show")
}