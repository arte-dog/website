const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

function setMenu(open) {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Zamknij menu' : 'Otwórz menu';
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('nav-open', open);
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('scroll', () => header?.classList.toggle('is-stuck', window.scrollY > 40), { passive: true });

