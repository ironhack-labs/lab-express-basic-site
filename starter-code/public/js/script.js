window.onload = function () {
    document.getElementById("button").onclick = function () {
        document.body.style.backgroundColor = getRandomColor();
    };


};

function getRandomColor() {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}