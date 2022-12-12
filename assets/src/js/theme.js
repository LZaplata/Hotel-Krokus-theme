import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgZoom;

window.$ = window.jQuery = require("jquery");

lightGallery(document.getElementById("gallery"), {
    selector: ".swiper-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
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

$(document).ready(function () {
    // $("#offcanvas .nav li a").click(function (event) {
    //     $("#offcanvas").removeClass("show");
    //     $(".offcanvas-backdrop").remove();
    //     $("body").removeAttr("style");
    // });
});
