const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))




// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerButton = document.getElementById('hamburger-button');
//     const verticalNav = document.querySelector('.vertical-nav');

//     hamburgerButton.addEventListener('click', function() {
//         verticalNav.classList.toggle('show-menu');
//     });
// });