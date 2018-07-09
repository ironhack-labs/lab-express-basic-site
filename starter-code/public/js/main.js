window.onload = function () {
  console.log('document loaded');
};

window.addEventListener('click', (e) => {
  e.target.
  "img-thumbnail"
});
$("img-thumbnail").addEventListener("click", (e) => {
  console.log(e)
});

function popup(img) {
  image = new Image();
  image.src = (img);
  imageWith = image.width;
  imageHeight = image.height;
  X = screen.width / 2 - imageWith / 2;
  Y = screen.height / 2 - imageHeight / 2;
  if (P != null) P.close();
  P = window.open(img, "P", "width=" + imageWith + ",height=" + imageHeight + ",left=" + X + ",top=" + Y + ",screenX=" + X + ",screenY=" + Y + "");
  P.document.title = "Imagen";
  P.self.focus();
  return false;
}