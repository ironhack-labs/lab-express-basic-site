window.onload = function () {
    var textcolor = document.getElementById("ncage");
    setInterval(function () {
        textcolor.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }, 250)
}

