window.onload = () => {
    let catdiv = document.getElementById("cattime")
    let catpics = document.querySelectorAll("img")
    for(let i=0; i<catpics.length;i++){
        catpics[i].onclick = () => {
            catdiv.style.display = "block"
            setTimeout(()=>catdiv.style.display = "none",1000)
        }
        catpics[i].onmouseover = () => {
            catpics[i].style.transform = "scale(1.2)"
        }
        catpics[i].onmouseleave = () => {
            catpics[i].style.transform = "scale(1)"
        }
    }
}