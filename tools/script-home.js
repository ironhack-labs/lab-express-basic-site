// Adjust background position on scroll
document.addEventListener("scroll", function () {
  const scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  const newPosition = scrollPercentage * 100;
  document.body.style.backgroundPosition = newPosition + "% center";
});
