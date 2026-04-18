// Navbar: add background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10, 14, 26, 0.98)'
    : 'rgba(10, 14, 26, 0.85)';
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.ride-card, .stat-card, .pricing-card, .lugar-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Lugares tabs
function switchTab(season) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
  event.target.classList.add('tab-active');

  document.getElementById('tab-invierno').classList.add('hidden');
  document.getElementById('tab-verano').classList.add('hidden');
  document.getElementById('tab-' + season).classList.remove('hidden');

  // Re-trigger animations for new cards
  document.querySelectorAll('#tab-' + season + ' .lugar-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
}
