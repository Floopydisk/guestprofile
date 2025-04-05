const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const headerMenu = document.querySelector('.header-menu ul');

mobileNavToggle.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
});