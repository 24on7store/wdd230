document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.navigation-btn');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('open');

        if (navMenu.classList.contains('open')) {
            // Show navigation links
            navLinks.forEach(function(link) {
                link.style.display = 'block';
            });
        } else {
            // Hide navigation links
            navLinks.forEach(function(link) {
                link.style.display = 'none';
            });
        }
    });
});
