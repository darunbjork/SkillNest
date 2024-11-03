// Smooth scroll for "Get Started" button
document.querySelector('.cta-button').addEventListener('click', function () {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
