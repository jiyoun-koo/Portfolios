const navbar = document.querySelector("header");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add("header-fix");
  } else {
    navbar.classList.remove("header-fix");
  }
});

// search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// badges scroll hidden
const badgeEl = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log("scoll");
    if (window.scrollY) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// notice
const btnNotice = document.querySelector(".notice-btn");
const noticeList = document.querySelector(".notice-list");
btnNotice.addEventListener("click", function () {
  noticeList.classList.toggle("expand");
});

// data count fade animation
const fadeEls = document.querySelectorAll(".count-data .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.4,
    opacity: 1,
  });
});

// notice slide
const noticeSwiper = new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// banner slide
const bannerSwiper = new Swiper(".banner .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".banner .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".banner .swiper-next",
    prevEl: ".banner .swiper-prev",
    clickable: true,
  },
});

// banner slide
const communitySwiper = new Swiper(".community .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 0,
  autoplay: true,
  loop: true,
});
