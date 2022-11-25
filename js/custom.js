$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
AOS.init();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    autoplay: true,
    spaceBetween: 20,

});