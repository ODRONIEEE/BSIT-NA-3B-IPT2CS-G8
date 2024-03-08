// Toggle Visibility Of Navbar (Responsive)

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});


// Tab Interface For About
const aboutHeading = document.querySelector(".about-heading");
const aboutTabs = document.querySelectorAll(".about-tab");
aboutHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    aboutHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    aboutTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

// Navbar Header Sticky While Scroll
function stickyNav() {
  var headerHeight = document.querySelector("#home").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}
window.addEventListener("scroll", stickyNav);

// Dark and Light Theme Toggle
function isLight() {
  return localStorage.getItem("dark-mode");
}
function toggleRootClass() {
  document.querySelector("body").classList.toggle("dark");
}
function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}
if (isLight()) {
  toggleRootClass();
}
document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorageItem();
  toggleRootClass();
});