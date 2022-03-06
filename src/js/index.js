// header
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
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

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

// community slide
const communitySwiper = new Swiper(".community .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 0,
  // centeredSliders: true,
  autoplay: true,
  loop: true,
});

// sitempa toggle
const sitemapEl = document.querySelector(".sitemap .inner");
const toggleSitemapEl = document.querySelector(".sitemap .toggle-sitemap");
const toggleExpand = document.querySelector(".expand");
let isHideSitemap = false;
toggleSitemapEl.addEventListener("click", function () {
  isHideSitemap = !isHideSitemap;
  if (isHideSitemap) {
    sitemapEl.classList.add("hide");
    toggleSitemapEl.classList.add("expand");
  } else {
    sitemapEl.classList.remove("hide");
    toggleSitemapEl.classList.remove("expand");
  }
});

// scroll animation
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
