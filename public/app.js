'use strict';

// Mobile menu
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen   = document.getElementById('icon-open');
const iconClose  = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  iconOpen.classList.toggle('hidden', !isOpen);
  iconClose.classList.toggle('hidden', isOpen);
});

function closeMenu() {
  mobileMenu.classList.add('hidden');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('header nav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('nav-active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Contact form — redirect to WhatsApp with the enquiry pre-filled
const form         = document.getElementById('contact-form');
const success      = document.getElementById('form-success');
const successLink  = document.getElementById('form-success-link');
const WHATSAPP_NUMBER = '263783519420';

form.addEventListener('submit', e => {
  e.preventDefault();

  const name            = document.getElementById('name').value.trim();
  const phone           = document.getElementById('phone').value.trim();
  const email           = document.getElementById('email').value.trim();
  const service         = document.getElementById('service').value;
  const propertyLocation = document.getElementById('location').value.trim();
  const message         = document.getElementById('message').value.trim();

  const lines = [
    'Hello Wellstar Drilling, I would like to request a quote.',
    '',
    `Name: ${name}`,
  ];
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push(`Email: ${email}`);
  if (service) lines.push(`Service: ${service}`);
  if (propertyLocation) lines.push(`Location: ${propertyLocation}`);
  if (message) lines.push(`Details: ${message}`);

  const text = encodeURIComponent(lines.join('\n'));
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  successLink.href = waUrl;
  success.classList.remove('hidden');

  window.location.href = waUrl;
});

// Back to top
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  fadeEls.forEach(el => fadeObserver.observe(el));
}

// Hero stat count-up
const statEls = document.querySelectorAll('.stat-num');
if (statEls.length) {
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));
}
