AOS.init({
    duration: 1000,
});


//visual
const visual_list = new Swiper(".visual_list", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
})



//new
const new_list = new Swiper(".new_list", {
    slidesPerView: 1.8,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 2.7,
        },
    },

    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: { //자동 슬라이드 코드
        delay: 2500, //2.5초 대기시간(변경가능)
        disableOnInteraction: false,
    },
})