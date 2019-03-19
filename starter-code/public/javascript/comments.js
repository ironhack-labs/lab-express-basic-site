

window.onload = function () {
  

  console.log("hello")
  document.getElementsByClassName("input-form")[0].addEventListener("submit", function (evt) {
    evt.preventDefault();
    localStorage.setItem("comment", document.getElementById("text-comment").value);
    document.getElementById("page-mask").style.display="none";
    document.getElementsByClassName("input-form-container")[0].style.display="none";
  })

  let collection = document.getElementsByClassName("comment");
  for (let i = 0; i<collection.length; i++){
    collection[i].addEventListener("click", function (evt) {
    
      evt.preventDefault();
     
      document.getElementById("page-mask").style.display="block";
      document.getElementsByClassName("input-form-container")[0].style.display="block";
    })

  }
  
}