import $ from "jquery";

import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
Swiper.use([Navigation, Pagination]);

window.jQuery = $;
window.$ = $;
require('@fancyapps/fancybox');

$(function() {

    /* Подключение fancybox */
    $('[data-fancybox]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            "fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
    });

    /* - - - Прокрутка к элементу - - - */
    $(".go-to").click(function() {

        var elem = $(this).attr('href');

        $('html, body').animate({

            scrollTop: $(elem).offset().top

        }, 1000);

        return false;
    });

    /* Слайдер */
    var strSliderResult = 'block-result';

    var sliderResult = new Swiper($('.' + strSliderResult + '__slider .swiper-container'), {
        slideActiveClass: strSliderResult + '__slide-active',
        navigation: {
            prevEl: $('.' + strSliderResult + '__prev'),
            nextEl: $('.' + strSliderResult + '__next'),
            disabledClass: strSliderResult + '__str-disabled',
        },
    });

    /* Раскрытие меню */
    $('.header-main__hamburger').click(function(){

        $('.nav-top').slideToggle();
    });
});