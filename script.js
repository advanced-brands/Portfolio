document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('This is a placeholder form. Connect it with Formspree or Google Forms to receive submissions.');
});
