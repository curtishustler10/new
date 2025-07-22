// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('site-header');
  if (window.scrollY > 50) {
    header.classList.add('bg-slate-950/95', 'backdrop-blur-md', 'border-b', 'border-slate-800/50');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-slate-950/95', 'backdrop-blur-md', 'border-b', 'border-slate-800/50');
    header.classList.add('bg-transparent');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
let menuOpen = false;
mobileMenuBtn.addEventListener('click', function() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.remove('hidden');
    mobileMenuIcon.textContent = '✕';
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenuIcon.textContent = '☰';
  }
});

// Close mobile menu on nav link click
mobileMenu.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuIcon.textContent = '☰';
    menuOpen = false;
  });
});

// Placeholder: Add more interactivity/animations as needed 