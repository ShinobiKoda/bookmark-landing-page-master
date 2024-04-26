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
  const tabs = document.querySelectorAll(".tab");

  function hideAllTabs() {
    tabs.forEach((tab) => tab.classList.remove("show"));
  }

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      hideAllTabs();

      const tabId = this.id.replace("option-", ""); // This should match tab ids
      const targetTab = document.getElementById(tabId);
      if (targetTab) {
        targetTab.classList.add("show");
      }
    });
  });

  hideAllTabs(); // Ensure all are hidden initially
  tabs[0].classList.add("show"); // Show the first tab by default
  options[0].classList.add("selected"); // Select the first option by default
});

const simple_bookmark = document.getElementById("simple-bookamrking");
const speed_search = document.getElementById("speedy-searching");
const easy_sharing = document.getElementById("easy-sharing");

document.querySelectorAll(".accordion-arrow").forEach((arrow, index) => {
  const answer = document.querySelectorAll(".answer")[index];
  const img = document.querySelectorAll(".rotate")[index];
  arrow.addEventListener("click", () => {
    const isOpen = answer.classList.toggle("show");
    arrow.classList.toggle(isOpen);
    img.classList.toggle("rotated");
  });
});
