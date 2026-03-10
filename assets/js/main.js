document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("site-sidebar");
  const toggle = document.querySelector(".nav-toggle");
  const overlay = document.querySelector(".overlay");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function openSidebar() {
    if (!sidebar || !toggle || !overlay) return;
    sidebar.classList.add("is-open");
    overlay.hidden = false;
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }

  function closeSidebar() {
    if (!sidebar || !toggle || !overlay) return;
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    overlay.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (sidebar && sidebar.classList.contains("is-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
});