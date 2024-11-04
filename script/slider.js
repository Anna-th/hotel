$(".slider").bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 350,
  moveSlides: 1,
  auto: true,
  pause: 3000,
  slideMargin: 10,
  responsive: [
    {
      breakpoint: 800,
        settings: {
          minSlides: 2,
          maxSlides: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        minSlides: 1,
        maxSlides: 1
      }
    }
  ]
}
);