var photoButton = document.getElementById("photobutton");
var gallery = document.getElementById("gallery");
photoButton.onclick = function() {
    if (gallery.innerHTML == `<img src="/images/manny_title.jpg">`) {
        gallery.innerHTML = `<img src="/images/manny_cosplay.jpg">`;
    }
    else if (gallery.innerHTML == `<img src="/images/manny_cosplay.jpg">`) {
        gallery.innerHTML = `<img src="/images/Manny_calavera_2.png">`;
    }
    else if (gallery.innerHTML == `<img src="/images/Manny_calavera_2.png">`) {
        gallery.innerHTML = `<img src="/images/Manny_calavera_3.jpg">`;
    }
    else if (gallery.innerHTML == `<img src="/images/Manny_calavera_3.jpg">`) {
        gallery.innerHTML = `<img src="/images/Manny_calavera_4.png">`;
    }
    else {
        gallery.innerHTML = `<img src="/images/manny_title.jpg">`;
    }
}
