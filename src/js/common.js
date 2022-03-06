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

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
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
