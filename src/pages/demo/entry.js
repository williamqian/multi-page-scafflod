/*** css ***/
require('bootstrap');
require('./css/style.scss');
/*** js ***/
//加载组件js,组件css也是在组件的js里加载的
//const r = require.context('components', true, /.+\/script\.js$/);
const r = require.context('components', true, /^\.\/(banner|banner_1|banner_2|banner_3|bottom|bottom_1|contact_soon|custom|nav|nav_1|list|list_1|list_2|list_3|list_4|list_5|list_6|top|pagi|side_img_list|side_text_list|side_nav)\/script\.js$/);
r.keys().forEach(r);

const $ = require('jquery');
$('body').scrollspy(
{
    target: '#p-demo-navbar-collapse',
    offset: 60
});
//平滑滚动到锚点
$("#p-demo-navbar-collapse a").click(function()
{
    $("html, body").animate(
    {
        scrollTop: ($($(this).attr("href")).offset().top) - $('.p-demo-navbar').outerHeight() + "px"
    },
    {
        duration: 500,
        easing: "swing"
    });
    return false;
});