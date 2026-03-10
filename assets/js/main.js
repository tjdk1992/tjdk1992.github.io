document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const navToggle = document.getElementById("nav-toggle");
  const overlay = document.getElementById("overlay");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function toggleMenu() {
    body.classList.toggle("open");
    if (navToggle) {
      navToggle.setAttribute(
        "aria-expanded",
        body.classList.contains("open") ? "true" : "false"
      );
    }
  }

  function closeMenu() {
    body.classList.remove("open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
    navToggle.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
});