/**===== SHOW MENU ===== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/**===== MENU SHOW ===== */
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/**===== MENU HIDDEN ===== */
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/**===== REMOVE MENU MOBILES ===== */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((item) => item.addEventListener("click", linkAction));

/**===== CHANGE BACKGROUND HEADER ===== */
const scrollHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.remove("scroll-header");
};

/**===== GSAP ANIMATION ===== */
gsap.from(".home__points", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".home__rocket", 1.5, { opacity: 0, y: 300, delay: 0.3 });
gsap.from(".home__planet-1", 1.5, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__planet-2", 1.5, { opacity: 0, x: 200, delay: 1 });
gsap.from(".home__cloud-1", 1.5, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__cloud-2", 1.5, { opacity: 0, x: 200, delay: 1.3 });
gsap.from(".home__content", 1.5, { opacity: 0, y: -100, delay: 1.4 });
gsap.from(".home__title img", 1.5, { opacity: 0, x: 100, delay: 1.6 });
