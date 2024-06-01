
document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname.split('/').pop();
    let navLinks = document.querySelectorAll('.nav-bar a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('current-page');
            link.parentElement.classList.remove('other-page');
        } else {
            link.parentElement.classList.add('other-page');
            link.parentElement.classList.remove('current-page');
        }
    });
});
