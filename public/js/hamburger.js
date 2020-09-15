(function () {
    {{!-- "use strict"; --}}
    document.querySelectorAll("button.navbar-toggler")[0].addEventListener("click", function (event) {
        var target = this.getAttribute("data-target");
        var subbar = document.querySelectorAll(target)[0];
        subbar.className = (subbar.className + " show").replace(/ show show/, "");
    });
})();