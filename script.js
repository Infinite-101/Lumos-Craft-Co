// Mobile Navbar Toggle (if necessary)
const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.navbar-toggle');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
