const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebar_links = document.querySelectorAll(".sidebar-links");

function toggleMenu() {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
}

sidebar_links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".bookmarking-options p");

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      // Remove 'selected' class from all options
      options.forEach(function (opt) {
        opt.classList.remove("selected");
      });

      // Add 'selected' class to the clicked option
      this.classList.add("selected");
    });
  });
});
