const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('primary-menu');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menu.classList.toggle('is-open', isOpen);
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    setMenuOpen(false);
  }
});
