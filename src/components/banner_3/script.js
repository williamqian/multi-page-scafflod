require('./style.scss');
const $ = require('jquery');
const slick = require('slick');
slick.call($('.c-banner-3 .slide-main'),
{
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 768,
        settings:
        {
            slidesToShow: 2,
        }
    }]
    //asNavFor: '.banner-1 .slide-nav'
});