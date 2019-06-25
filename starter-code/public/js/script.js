let nextImage = document.getElementById('ChangeImage');
let images = document.querySelectorAll('img');


nextImage.onclick = function() {
    for (let i=0; i<images.length; i++) {
        let compStyles1 = window.getComputedStyle(images[i]);
            if (compStyles1.display !== 'none') {
                images[i].style.display = 'none';
                images[i+1].style.display = 'flex';
        } 
    }
    
};