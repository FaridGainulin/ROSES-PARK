function initSwiperSmall() {
  const swiper = new Swiper('.swiper-small', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.small-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperMedium() {
  const swiper = new Swiper('.swiper-medium', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.medium-pagination',
      type: 'progressbar',
    },
    
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1024: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperMediumStart() {
  const swiper = new Swiper('.swiper-medium-start', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.medium-pagination',
      type: 'progressbar',
    },
    
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1024: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperLg() {
  const swiper = new Swiper('.swiper-lg', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.lg-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1200: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}
function initSwiperLarge() {
  const swiper = new Swiper('.swiper-large', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.large-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1400: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperDesktop() {
  const swiper = new Swiper('.swiper-desktop', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.desktop-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1400:{
        speed: 450,
        effect: 'slide',
        loop: true,
        // rewind: true,
        autoplay: {
          delay: 2000, // Время задержки в миллисекундах между переключениями слайдов
          disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        updateOnWindowResize: true,
        slidesPerView: 1,
        spaceBetween: 20,
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          scale: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: true,
      }
    },
  })
}


$(document).ready(function () {
  initSwiperSmall()
  initSwiperMedium()
  initSwiperMediumStart()
  initSwiperLarge()
  initSwiperLg()
  initSwiperDesktop()
})
