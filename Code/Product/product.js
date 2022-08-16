  var swiper = new Swiper(".product__list-videos", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlide: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        885: {
            slidesPerView: 3,
        },
        1140: {
            slidesPerView: 4,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});