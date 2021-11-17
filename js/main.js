// preloader script
const loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// wow init
new WOW().init();

//on scroll sticky header
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      document.getElementById("main-header").classList.add("fixed-top");
    } else {
      document.getElementById("main-header").classList.remove("fixed-top");
    }
  });
});

// hero area slider scripts
var swiper = new Swiper(".hero-swiper", {
  autoplay: true,
  loop: true,
  // effect: "fade",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// home page tab slider scripts
var tabSwiper1 = new Swiper(".tabSwiper1", {
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
    },
    1152: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },
});

// home page tab slider scripts2
var tabSwiper1 = new Swiper(".tabSwiper2", {
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
    },
    1152: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },
});

// home page tab slider scripts3
var tabSwiper3 = new Swiper(".tabSwiper3", {
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
    },
    1152: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },
});

// certificate area slider
var certiSlider = new Swiper(".certi-swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay: true,
  loop: true,
  breakpoints: {
    1366: {
      slidesPerView: 6,
    },
    1152: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 3,
    },
  },
});

// about page company group slider scripts
var coGrSwiper = new Swiper(".coGr-swiper", {
  autolay: true,
  effect: "fade",
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// response slider area
var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// inner page project area slider
var projSwiper = new Swiper(".projectSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1366: {
      slidesPerView: 3,
    },
    1152: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
  },
});

// inner page 1 about tab img reel
var projSwiper = new Swiper(".abReelImg", {
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: true,
  breakpoints: {
    1366: {
      slidesPerView: 6,
      autoplay: false,
    },
    1152: {
      slidesPerView: 6,
      autoplay: false,
    },
    992: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 3,
    },
  },
});

// inner page 1 > product varient 3 - application section slider
var swiper = new Swiper(".applicationSlider", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    1366: {
      slidesPerView: 4,
      autoplay: false,
    },
    1152: {
      slidesPerView: 4,
      autoplay: false,
    },
    992: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  },
});

// right menu
const rightMenu = document.querySelector(".right-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".right-close-btn");

function showRightMenu() {
  document.querySelector(".right-menu").classList.add("active");
  document.querySelector(".overlay").classList.add("active");
}

overlay.addEventListener("click", function () {
  overlay.classList.remove("active");
  rightMenu.classList.remove("active");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("active");
  rightMenu.classList.remove("active");
});

//nav click to hide navbar
// $(function () {
//   $(".nav-link").on("click", function () {
//     $(".navbar-collapse").collapse("hide");
//   });
// });

// // active nav link
// $(document).on("click", "#main_nav li", function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });

// dropdown active nav link
// $(document).on("click", ".nav-dropdown li", function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });
