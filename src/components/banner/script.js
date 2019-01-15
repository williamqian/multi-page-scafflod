require('./style.scss');
const $ = require('jquery');
const slick = require('slick');
const matchHeight = require('jquery-match-height');
$('.c-banner .slide-main').on('init afterChange', function(_event, _slick, _direction)
{
    const currentSlide = $(this).find('.item.slick-active');
    const title = currentSlide.attr('data-title');
    const des = currentSlide.attr('data-des');
    const url = currentSlide.attr('data-url');
    $('.c-banner .slide-main-title').find('.title').html(title);
    $('.c-banner .txt').find('.title').html(title);
    $('.c-banner .txt').find('.des').html(des);
    $('.c-banner .txt').find('.url').attr('href', url);
});
slick.call($('.c-banner .slide-main'),
{
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: '.c-banner .slide-main-dots',
    asNavFor: '.c-banner .slide-nav'
});
slick.call($('.c-banner .slide-nav'),
{
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.c-banner .slide-main',
    centerMode: true,
    centerPadding: '0px',
    arrow: true,
    prevArrow: '.c-banner .slide-arrow-left',
    nextArrow: '.c-banner .slide-arrow-right',
    dots: false,
    focusOnSelect: true
});
const addWindowLoadFunc = require('public/js/addWindowLoadFunc');
addWindowLoadFunc(function()
{
    $('.c-banner .slide-nav-box-left,.c-banner .slide-nav-box-right').matchHeight();
});