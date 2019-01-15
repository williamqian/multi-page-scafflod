require('./style.scss');
const $ = require('jquery');
const slick = require('slick');
$('.c-banner-2 .slide-main').on('init afterChange', function(_event, _slick, _direction)
{
    //var currentSlide = _slick.currentSlide;
    //const currentSlide = $(this).find('.item.slick-active');
    $('.c-banner-2 .slide-main-num .cur_page').html(_slick.currentSlide + 1);
    $('.c-banner-2 .slide-main-num .total_page').html(_slick.slideCount);
    //const title = currentSlide.attr('data-title');
    //$('.banner-2 .slide-main-title').find('.title').html(title);
});
slick.call($('.c-banner-2 .slide-main'),
{
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    appendDots: '.c-banner-2 .slide-main-dots',
    //asNavFor: '.banner-1 .slide-nav'
});