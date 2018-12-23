var photoButton = document.getElementById("photobutton");
var gallery = document.getElementById("gallery");
var quote = document.getElementById("mannyquote");

photoButton.onclick = function() {
    
     if (gallery.innerHTML == `<img src="/images/Manny_calavera_2.png">`) {
        gallery.innerHTML = `<img src="/images/Manny_calavera_3.jpg">`;
        quote.innerHTML = "The living still give me the creeps.";
    }

    else if (gallery.innerHTML == `<img src="/images/Manny_calavera_3.jpg">`) {
        gallery.innerHTML = `<img src="/images/Manny_calavera_4.png">`;
        quote.innerHTML = "I'm the Grim Reaper, Lardass, and you're my next customer.";
    }

    else if (gallery.innerHTML == `<img src="/images/Manny_calavera_4.png">`){
        gallery.innerHTML = `<img src="/images/manny_title.jpg">`;
        quote.innerHTML = "As a rule, I never touch anything more sophisticated and delicate than myself.";
    }
    else if (gallery.innerHTML == `<img src="/images/manny_title.jpg">`) {
        gallery.innerHTML = `<img src="/images/manny_cosplay.jpg">`;
        quote.innerHTML = "Can you hear the sound of us not talking?";
    }
    else  {
        gallery.innerHTML = `<img src="/images/Manny_calavera_2.png">`;
        quote.innerHTML = "My scythe... I like to keep it next to where my heart used to be."
    }
}
