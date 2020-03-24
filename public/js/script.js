let imagesContainer = document.querySelector('.pics-container');

let element = document.createElement('div');

imagesContainer.addEventListener('mousemove', (e) => {

    if(e.target.nodeName == 'IMG'){
        console.log(e)
        element.innerHTML = e.target.alt;
        element.className = 'image-legend'
        element.style.position = "absolute";
        element.style.top = e.pageY - 70 + 'px';
        element.style.left = e.pageX + 'px';
        element.style.display = 'inline-block'

        imagesContainer.appendChild(element);
    } else {
        element.style.display = 'none';
    }
});

imagesContainer.addEventListener('click', (e) => {
    if(e.target.nodeName == 'IMG'){
        let carousel = document.querySelector('.carousel');
        let imageCarousel = document.querySelector(".image-carousel");

        imageCarousel.src = e.target.src;
        imageCarousel.style.width = window.innerHeight + "px";
        carousel.style.display = "flex";

    }
})

let closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    let carousel = document.querySelector('.carousel');
    carousel.style.display = 'none';
})

console.log('HI')