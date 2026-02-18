document.getElementById('year').textContent = new Date().getFullYear();

(function(){
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('This is a placeholder form. Connect it with Formspree or Google Forms to receive submissions.');
    });
  }
})();

/* work slideshow controls */
(function() {
  const grid = document.querySelector('.work-grid');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  if (!grid || !prevBtn || !nextBtn) return;

  const cardWidth = () => grid.querySelector('.card')?.offsetWidth || 260;

  prevBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -cardWidth() - 24, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: cardWidth() + 24, behavior: 'smooth' });
  });
})();

/* testimonial rotation */
(function() {
  const items = document.querySelectorAll('.testimonial');
  if (!items.length) return;
  let idx = 0;
  function show(i) {
    items.forEach((el, j) => {
      el.classList.toggle('active', j === i);
    });
  }
  show(idx);
  setInterval(() => {
    idx = (idx + 1) % items.length;
    show(idx);
  }, 4000);
})();

