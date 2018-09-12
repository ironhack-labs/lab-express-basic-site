const photos=document.getElementById("photos").getElementsByTagName("img")
console.log(photos)

let index = 0
setInterval( () => {
  let i = 0;
  index= index==photos.length?0:index;
  while (i < photos.length) {
    if (i == index){
      photos[i].classList= "show"
    } else {
    photos[i].classList="hide"
    }
    i++
  }
  index++
},3000)





