window.onload = function() {
  const buttons = document.getElementsByTagName("button");
  const info = document.getElementById("info");
  let story1 = "This is Peter, he get adopted at the second  try but look at him now!"
  let story2 = "This is Sheila, a real artist with a nice new familly"
  let story3 = "This is Carla, she pased two years before being adopted"
  let story4 = "This is Mike, he have now a new familly and also a new car!"
  let story5 = "This is Paco, and I think he couldn't be happier"
  let story6 = "This is Linda, she loves to run with his new human friend"
  buttons[0].onclick = function() {
    info.innerText = story1;
  };
  buttons[1].onclick = function() {
    info.innerText = story2;
  };
  buttons[2].onclick = function() {
    info.innerText = story3;
  };
  buttons[3].onclick = function() {
    info.innerText = story4;
  };
  buttons[4].onclick = function() {
    info.innerText = story5;
  };
  buttons[5].onclick = function() {
    info.innerText = story6;
  };
};
