// Typed js Configuration
var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Web Developer" , "Next.js & React"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Mobile Hamburger Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

// Navigation Active Link Highlight on Scroll & Hide Mobile Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

function updateActiveNav() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            const matchingLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
    
    // Smoothly close mobile navbar when scrolling starts
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('DOMContentLoaded', updateActiveNav);
