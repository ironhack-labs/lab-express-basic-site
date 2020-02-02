const target = document.getElementById("typing")
var text = document.getElementById("text-hide")
var arrow = document.getElementById("arrow")
var index = 0
var isText = false
const userColor = ""
var url = document.URL
const write = setInterval(()=>{
  if(!text || !target){clearInterval(write)} else{
  if (text.innerHTML[index] === "<") {
    isText = false;
    index+=3
  }
  if (text.innerHTML[index] === ">") {
    isText = true;
    
  }
  if(isText){target.innerHTML = text.innerHTML.substring(0,index)}
      index+=1  

    if(index === text.innerHTML.length+1) clearInterval(write)}
},25)

!url.substring(22) ? redirect("portfolio")
:url.substring(22) === "portfolio" ? redirect("about")
: redirect()

function redirect(path){
  arrow.href = arrow.href.substring(0,22) + (path ? path : "")
}

