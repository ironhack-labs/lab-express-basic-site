let ventana;
function window_open() {
    ventana = window.open("http://perre-app.github.io/roulette/", "nombrePop-Up"); //"width=380,height=500, top=85,left=50");
}

//La función window_close cerrara el pop-up o ventana emergente
function window_close() {
    ventana.close();
}

// Llamo a la función window_open en el evento click del botón con id = "botonWindowOpen"
document.getElementById("botonWindowOpen").onclick = function () {
    window_open()
};

// Llamo a la función window_close en el evento click del botón con id = "botonWindowClose"
document.getElementById("botonWindowClose").onclick = function () {
    window_close()
};