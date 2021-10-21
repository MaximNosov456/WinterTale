$(function () {
  // Tabs

  $(".tab").on("click", function () {
    $(this)
      .addClass("tab--active")
      .siblings()
      .removeClass("tab--active")
      .closest(".tabs-wrapper")
      .find(".tab-content")
      .removeClass("tab-content--active")
      .eq($(this).index())
      .addClass("tab-content--active");
  });

  //Dropdown

  $(".catalog__drop-title").on("click", function () {
    $(this).toggleClass("catalog__drop-title--active");
    $(this).next().slideToggle("200", "linear");
  });

  // Slider

  const swiper = new Swiper(".swiper-banners", {
    loop: true,
    pagination: {
      el: ".swiper-banners-pagination",
    },

    navigation: {
      nextEl: ".swiper-banners-next",
      prevEl: ".swiper-banners-prev",
    },
    slidesPerView: 1,
  });

  const swiper2 = new Swiper(".swiper-products", {
    loop: true,
    navigation: {
      nextEl: ".swiper-products-next",
      prevEl: ".swiper-products-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      670: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  $(".hamburger").on("click", function () {
    $(".menu__mobile").addClass("active");
  });

  $(".menu__mobile-close").on("click", function () {
    $(".menu__mobile").removeClass("active");
  });

  // Favourite

  $(".favourite").on("click", function () {
    $(this).toggleClass("active");
  });
});
