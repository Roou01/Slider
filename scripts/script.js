const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  slidesPerView: 3,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  slidesPerView: 3,
  parallax: true,
  spaceBetween: 60,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("opener");
  });
});

let desc = document.querySelector(".description");

sliderMain.on("slideChange", (e) => {
  if (sliderMain.activeIndex > 0) {
    desc.classList.add("hidden");
  } else {
    desc.classList.remove("hidden");
  }
});
