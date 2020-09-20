const arrowRight = document.querySelector(".right");
const arrowLeft = document.querySelector(".left");
const imgs = document.querySelectorAll("#sample-page .covers a");

// console.log(imgs[1].classList);
console.log(imgs);

let count = 0 ;

function firstImg () {
    imgs[count].classList.remove("hidden")
}

function clickRight () {
    if(count < imgs.length -1) 
    count += 1;
    showImg(count);
    return count;
}

function clickLeft () {
    if (count > 0)
    count -= 1;
    showImg(count);
    return count;
}

arrowRight.addEventListener("click", clickRight);
arrowLeft.addEventListener("click", clickLeft);
window.addEventListener("load", firstImg)

function showImg (evt) {
    imgs.forEach(img => img.classList.add("hidden"));
    imgs[evt].classList.remove("hidden")
}