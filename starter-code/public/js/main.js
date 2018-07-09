window.onload = () => {
  console.log('document loaded');
  
  document.querySelectorAll(".img-thumbnail").forEach((element) => {
    element.addEventListener('click', (id) => {
      console.log(element.src.replace(/^.*[\\\/]/, ''));
      popUp("/images/gallery/" + element.src.replace(/^.*[\\\/]/, ''));
    });
  });
};

newWindow = undefined;

function popUp(img) {
  image = new Image();
  image.src = (img);
  imageWith = image.width;
  imageHeight = image.height;
  xPos = screen.width / 2 - imageWith / 2;
  yPos = screen.height / 2 - imageHeight / 2;
  if (newWindow != null) newWindow.close();
  newWindow = window.open(img, "newWindow", "width=" + imageWith + ",height=" + imageHeight + ",left=" + xPos + ",top=" + yPos + ",screenX=" + xPos + ",screenY=" + yPos + "");
  newWindow.self.focus();
  return false;
}