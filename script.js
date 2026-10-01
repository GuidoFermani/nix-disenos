const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (toggle && navMenu) {
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();