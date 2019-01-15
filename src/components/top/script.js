require('./style.scss');
const fwcx = require('public/js/fwcx');
const layer = require('layer');
$('#btn-fwcx-1').on('click', function()
{
    fwcx('code-fwcx-1');
});
$('.c-top .wx_qr_popup').on('click', function(e)
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