require('./style.scss');
const $ = require('jquery');
const matchHeight = require('jquery-match-height');
const addWindowLoadFunc = require('public/js/addWindowLoadFunc');
addWindowLoadFunc(function()
{
    $('.c-bottom-1').find('.qr-box,.check-box').matchHeight();
    $('.c-bottom-1').find('.left-box,.right-box').matchHeight();
});
const fwcx = require('public/js/fwcx');
const layer = require('layer');
$('#btn-fwcx-2').on('click', function()
{
    fwcx('code-fwcx-2');
});
$('.c-bottom-1 .wx_qr_popup').on('click', function(e)
{
    e.preventDefault();
    let imgSrc = $(this).attr('data-img');
    layer.open(
    {
        type: 1,
        title: false,
        //closeBtn: 0,
        area: '280px',
        //skin: 'layui-layer-nobg', //没有背景色
        shadeClose: true,
        content: '<img style="width:100%" src="' + imgSrc + '"/>'
    });
    return false;
});