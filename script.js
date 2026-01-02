document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');
    const menuIcons = document.querySelectorAll('.mobile-menu-btn i');

    if (mobileMenuBtn && navUl) {
        mobileMenuBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
            menuIcons.forEach(icon => icon.classList.toggle('hidden'));
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('active');
            menuIcons[0].classList.remove('hidden'); // Show bars
            menuIcons[1].classList.add('hidden');    // Hide times
        });
    });
});
