function start() {
  const submitOk = document.querySelector(".btn-submit");

  submitOk.onclick = function(evt) {
    evt.preventDefault();
    document.querySelector(".sent-ok").textContent =
      "Successfully submited message =)";
  };
}
window.addEventListener("DOMContentLoaded", start);
