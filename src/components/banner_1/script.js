require('./style.scss');
const $ = require('jquery');
const slick = require('slick');
$('.c-banner-1 .slide-main').on('init afterChange', function(_event, _slick, _direction)
{
    const currentSlide = $(this).find('.item.slick-active');
    const title = currentSlide.attr('data-title');
    $('.c-banner-1 .slide-main-title').find('.title').html(title);
});
slick.call($('.c-banner-1 .slide-main'),
{
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    //appendDots:'.banner-1 .slide-main-dots',
    //asNavFor: '.banner-1 .slide-nav'
});