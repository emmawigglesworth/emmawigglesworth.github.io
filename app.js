const mobileToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('#nav-menu');
const yearEl = document.querySelector('#year');

const closeMenu = () => {
  navMenu.classList.remove('nav__links--open');
  mobileToggle.classList.remove('nav__toggle--open');
  mobileToggle.setAttribute('aria-expanded', 'false');
};

const toggleMenu = () => {
  const isOpen = mobileToggle.classList.toggle('nav__toggle--open');
  navMenu.classList.toggle('nav__links--open', isOpen);
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
};

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', toggleMenu);

  navMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
