// Button "Back to Top"
const backToTopBtn = document.getElementById("backToTop");

// Elements that animate
const fadeSections = document.querySelectorAll('.fade-in');
const sectionTitles = document.querySelectorAll('h2');

// Toggle back to top button + trigger animations
window.addEventListener('scroll', () => {
  const scrollY = document.documentElement.scrollTop;

  // Show or hide the back to top button
  backToTopBtn.style.display = scrollY > 200 ? "block" : "none";

  // Show sections with animation
  fadeSections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });

  // Animate titles individually
  sectionTitles.forEach(h2 => {
    const top = h2.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      h2.classList.add('visible');
    }
  });
});

// Optional: click to scroll to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
    modal.style.display = 'flex';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = 'none', 400);
  }