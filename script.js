// Typed js Configuration
var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Web Developer" , "Next.js & React"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Navigation Active Link Highlight on Scroll
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
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('DOMContentLoaded', updateActiveNav);