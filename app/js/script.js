const hambergurMenu = document.querySelector(".header__menu");
const mobileNavBar = document.querySelector(".nav__links-mobile");
const navLinks = document.querySelectorAll(".nav__link-mobile");

// add an eventlistener tio the hambergurMenu
hambergurMenu.addEventListener("click", function (e) {
  // check if the is-open class exists in mobile-nav
  console.log(mobileNavBar.classList.contains("is-open"));
  if (mobileNavBar.classList.contains("is-open")) {
    mobileNavBar.classList.remove("is-open");
  } else {
    mobileNavBar.classList.add("is-open");
  }

  this.classList.toggle("close");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (mobileNavBar.classList.contains("is-open")) {
      mobileNavBar.classList.remove("is-open");
    } else {
      mobileNavBar.classList.add("is-open");
    }

    hambergurMenu.classList.remove("close");
  });
});
