
let h1 = document.getElementById("titulo")
console.log(h1)

let colorh1 = "red"

const color = elem => {
  if(colorh1 === "red"){
    elem.classList.add("h1green")
    colorh1 = "green"
  } else if (colorh1 === "green"){
    elem.classList.remove("h1green")
    elem.classList.add("h1blue")
    colorh1 = "blue"
  } else {
    elem.classList.remove("h1blue")
    colorh1 = "red"
  }
}

setInterval(()=>{
  color(h1) }, 1000)


