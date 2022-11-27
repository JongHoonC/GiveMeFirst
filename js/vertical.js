		var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 10,
      spaceBetween: 20,
      mousewheel: true,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

  });