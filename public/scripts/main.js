"use strict";

// no jquery edition:
window.onload = function () {
  console.log("ready");
  const treeButton = document.getElementById("treeButton");
  treeButton.addEventListener("click", () => { 
    if(treeButton.classList.contains("treeButton")) {
      treeButton.classList.remove("treeButton");
    } else {
    treeButton.classList.add("treeButton");
    };
  });
};