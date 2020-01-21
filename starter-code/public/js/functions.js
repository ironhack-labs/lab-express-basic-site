function filterPlayers(position) {
  document
    .querySelectorAll(`.card:not(.${position})`)
    .forEach(e => e.classList.add("hideCard"));
  document
    .querySelectorAll(`.card.${position}`)
    .forEach(e => e.classList.remove("hideCard"));
}

function showPlayers() {
  document
    .querySelectorAll(`.card`)
    .forEach(e => e.classList.remove("hideCard"));
}
