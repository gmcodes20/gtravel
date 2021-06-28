//SHOW MENU

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hide
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU ON MOBILE VIEW
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // remove show-menu class when a link is clicked
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//  CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");

  // whan the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// SWIPPER DISCOVER
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video_icon");

function playPause() {
  if (videoFile.paused) {
    // Play Video
    videoFile.play();
    // change the icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    videoFile.pause();
    // change the icon
    videoIcon.classList.add("ri-play-line");
    videoIcon.classList.remove("ri-pause-line");
  }
}

videoButton.addEventListener("click", playPause);

function videoEnded() {
  videoIcon.classList.add("ri-play-line");
  videoIcon.classList.remove("ri-pause-line");
}

videoFile.addEventListener("ended", videoEnded);

// SHOW SCROLL UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // reveal scroll up button when the scroll is higher than 200vh
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// DARK AND LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previosly selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// validate if the previous user previously choosed a theme
if (selectedTheme) {
  // check if dark theme was activated or deactivated
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  document.body.classList[selectedTheme === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate and Deactivate the theme with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // relay the chosen theme and icon to localstorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL REVEAL
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

sr.reveal(
  ` .home__data, 
    .home__social-link, 
    .hime__info, 
    .discover__container, 
    .experience__data,
    .expereince__overlay,
    .place__card,
    .sponsor__content,
    .footer__data, .footer__rights,`,
  {
    origin: "top",
    interval: 100,
  }
);
sr.reveal(
  ` .about__data,
    .video__description,
    .subscribe__description,
            `,
  {
    origin: "left",
  }
);
sr.reveal(
  ` .about__img-overlay, 
    .video__content,
    .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);
