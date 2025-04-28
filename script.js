// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    function showSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showSection);
    showSection();
});
