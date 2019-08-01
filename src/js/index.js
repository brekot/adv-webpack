import $ from "jquery";

import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
Swiper.use([Navigation, Pagination]);

//window.jQuery = $;
//window.$ = $;
//require('@fancyapps/fancybox');

$(function() {

    /* - - - Подключение fancybox - - - */
/*     $('[data-fancybox]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            "fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
    }); */

    var block_name = 'block-result';

    var sliderResult = new Swiper($('.' + block_name + '__slider .swiper-container'), {
        slideActiveClass: block_name + '__slide-active',
        navigation: {
            prevEl: $('.' + block_name + '__prev'),
            nextEl: $('.' + block_name + '__next'),
            disabledClass: block_name + '__str-disabled',
        },
    });

    $('.header-main__hamburger').click(function(){

        $('.nav-top').slideToggle();
    });
});