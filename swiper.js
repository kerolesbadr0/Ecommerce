// Swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay : {
        delay : 2000
    }
});
var swiper = new Swiper(".Swiper", {
    slidesPerView: 1, // العدد الافتراضي للشرائح على الشاشات الكبيرة
    breakpoints: {
        320: { // للشاشات الصغيرة جداً (الموبايل)
            slidesPerView: 1
        },
        480: { // للموبايل الأكبر قليلاً
            slidesPerView: 2
        },
        768: { // للتابلت
            slidesPerView: 3
        },
        1024: { // للاب توب
            slidesPerView: 5
        }
    }
});
