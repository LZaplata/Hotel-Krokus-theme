import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import flatpickr from "flatpickr";

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgZoom;

window.$ = window.jQuery = require("jquery");

lightGallery(document.getElementById("gallery"), {
    selector: ".swiper-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    galleryId: 1,
});

lightGallery(document.getElementById("gallery"), {
    selector: ".gallery-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    galleryId: 1,
});

lightGallery(document.getElementById("menu"), {
    selector: ".menu-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    galleryId: 2,
});

lightGallery(document.getElementById("rooms"), {
    selector: ".swiper-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});

var bannerSwiper = new Swiper(".banner-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 7000,
    },
});

var roomGallerySwiper = new Swiper(".room-gallery-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var gallerySwiper = new Swiper(".gallery-swiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            slidesOffsetBefore: $(".mi-logo").offset().left - 12,
            slidesOffsetAfter: $(".mi-logo").offset().left - 12,
        },
        1200: {
            slidesPerView: 5,
            slidesOffsetBefore: $(".mi-logo").offset().left - 12,
            slidesOffsetAfter: $(".mi-logo").offset().left - 12,
        },
    },
});

var today = new Date();
var tomorrow = new Date();

tomorrow.setDate(today.getDate() + 1);

flatpickr(".datepicker", {
    dateFormat: "j. n. Y",
    defaultDate: "today",
});

flatpickr(".datepicker_to", {
    dateFormat: "j. n. Y",
    defaultDate: tomorrow,
});

flatpickr(".timepicker_from", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    defaultDate: today.getHours() + ":" + today.getMinutes(),
});

flatpickr(".timepicker_to", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    defaultDate: (today.getHours() + 1) + ":" + today.getMinutes(),
});

$(document).ready(function () {
    // $("#offcanvas .nav li a").click(function (event) {
    //     $("#offcanvas").removeClass("show");
    //     $(".offcanvas-backdrop").remove();
    //     $("body").removeAttr("style");
    // });
});
