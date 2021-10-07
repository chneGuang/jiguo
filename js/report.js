// 最新
// 创建连接
var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
// 建立连接
oajax.open('get','http://192.168.0.105:3000/report/new',true);
// 发送请求
oajax.send();
// 接受服务器数据
oajax.onreadystatechange=function(){
    if(oajax.readyState==4){
        if(oajax.status==200){
            var json_=oajax.responseText;
            json_=JSON.parse(json_);
            console.log(json_);
            reader(json_);
        }
    }
}
function reader(res){
   // 4.把模板和数据关联起来
   var html=template('moban',{
       value:res
   });
   // 5.把模板template返回的模板通过innerhtml渲染到指定的元素内。
   document.getElementsByClassName('section-one')[0].innerHTML=html;
}
$('.one-bottom p').on('click',function(){
    $('.one-bottom p>img').attr({'src':'../image/素材/图片/css/img/loading-icon.gif','width':'20px',height:'20px'});
})
// 最热
$('.title-one>li:eq(1)').on('click',function(){
    // 创建连接
var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
// 建立连接
oajax.open('get','http://192.168.0.105:3000/report/hot',true);
// 发送请求
oajax.send();
// 接受服务器数据
oajax.onreadystatechange=function(){
    if(oajax.readyState==4){
        if(oajax.status==200){
            var json_=oajax.responseText;
            json_=JSON.parse(json_);
            console.log(json_);
            reader(json_);
        }
    }
}
function reader(res){
   // 4.把模板和数据关联起来
   var html=template('moban1',{
       value:res
   });
   // 5.把模板template返回的模板通过innerhtml渲染到指定的元素内。
   document.getElementsByClassName('section-one')[0].innerHTML=html;
}
})
// 最新
$('.title-one>li:eq(0)').on('click',function(){
    // 创建连接
var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
// 建立连接
oajax.open('get','http://192.168.0.105:3000/report/new',true);
// 发送请求
oajax.send();
// 接受服务器数据
oajax.onreadystatechange=function(){
    if(oajax.readyState==4){
        if(oajax.status==200){
            var json_=oajax.responseText;
            json_=JSON.parse(json_);
            console.log(json_);
            reader(json_);
        }
    }
}
function reader(res){
   // 4.把模板和数据关联起来
   var html=template('moban',{
       value:res
   });
   // 5.把模板template返回的模板通过innerhtml渲染到指定的元素内。
   document.getElementsByClassName('section-one')[0].innerHTML=html;
}
})