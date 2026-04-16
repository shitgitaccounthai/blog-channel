// script.js - Theme toggle and simple scroll animations

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  }
});
