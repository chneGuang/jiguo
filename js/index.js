// 倒计时效果
var time_=document.getElementsByClassName('time')[0];
var timrs=setInterval(function(){
    var today=new Date();
    var sdan=new Date("12 25,2021,00:00:00");
    var t=sdan.getTime()-today.getTime();
    var t1=t/1000;
    var day=parseInt(t1/(24*60*60));
    var hours=parseInt(t1%(24*60*60)/3600);
    var minutes=parseInt(t1%3600/60);
    time_.innerHTML='申请时间剩余：'+day+'天'+hours+'小时'+minutes+'分钟';
},10)
// 报告
$('.four-bottom p').on('click',function(){
    $('.four-bottom p>img').attr({'src':'./image/素材/图片/css/img/loading-icon.gif','width':'20px',height:'20px'});
})