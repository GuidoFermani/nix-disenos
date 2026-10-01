const toggle = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.navbar-collapse');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

const yearTarget = document.getElementById('year');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

AOS.init({
  duration: 900,
  once: true,
  offset: 40,
});
