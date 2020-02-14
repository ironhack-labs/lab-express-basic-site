/* Funcion que va cambiando la foto de mi cara cuando se clica */
function changeFace() {
    var nav = document.getElementById("face");
    fileRoute = window.location.origin
    if (nav.src == `${fileRoute}/src/face-img.jpeg`) {
        nav.src = `${fileRoute}/src/face-img2.jpeg`;
    } else if (nav.src == `${fileRoute}/src/face-img2.jpeg`){
        nav.src = `${fileRoute}/src/face-img3.jpeg`;
    } else if (nav.src == `${fileRoute}/src/face-img3.jpeg`){
        nav.src = `${fileRoute}/src/face-img4.jpeg`;
    }
     else{
        nav.src = `${fileRoute}/src/face-img.jpeg`;
    }
}

/* Funcion que sirve para enseñar o quitar el menu de navegacion en pantallas pequeñas */
function showNav() {
    var x = document.getElementById("myLinks");
    var name = document.getElementById("name");
    if (x.style.display === "flex") {
      x.style.display = "none";
      name.style.display = "block";
    } else {
      x.style.display = "flex";
      name.style.display = "none";
    }
}
