const photos = ["image-1","image-2","image-3", "image-4", "image-5"]
let gallery = document.getElementById('gallery')

for(let i =0; i<photos.length; i++){
  console.log(photos[i])
  let template = `
    <img class='gallery-image' src='/images/${photos[i]}.jpg'/>
`;
  gallery.innerHTML += template
}