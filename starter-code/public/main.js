window.onload = function () {
  var coinsound = new Audio('./audio/mario2.wav');

  $('#coinblock').click(() => {
    coinsound.play();
  });
};
