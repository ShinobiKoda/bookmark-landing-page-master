// script.js
function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  content.classList.toggle("faded");
}
