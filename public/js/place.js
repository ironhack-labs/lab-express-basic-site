const yesBtn = document.querySelecto(".yesIDo")
const toDisplay = document.querySelector(".visible")

yesBtn.onclick = () => {
    toDisplay.classlist.toggle("visible")
}