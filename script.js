document.addEventListener("DOMContentLoaded", function () {
  function toggleNavbar() {
    const header = document.getElementById("header");
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
    header.classList.toggle("nav-active");
  }

  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleNavbar);
});

var swiper = new Swiper(".swiper1", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: "swiper1, .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "swiper1, .swiper-button-next",
    prevEl: "swiper1, .swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper2", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: "swiper2, .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "swiper2, .swiper-button-next",
    prevEl: "swiper2, .swiper-button-prev",
  },
});
