$(document).ready(function() {
  // Show the popup
  $(".popup").css({ display: "block" });
  // Background is less opaque
  $(".background-without-img .flexbox").css({ opacity: "0.1" });
});

$("button").click(function() {
  $(".popup").css({ display: "none" });
  $("background-without-img .flexbox").css({ opacity: "1" });
});
