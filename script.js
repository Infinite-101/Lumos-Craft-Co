document.addEventListener("DOMContentLoaded", function() {
  const productItems = document.querySelectorAll('.product-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animation runs only once per element
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of item is visible

  productItems.forEach(item => {
    observer.observe(item);
  });
});
