 // 创建连接
 var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
 // 建立连接
 oajax.open('get','http://192.168.0.105:3000/useing/public',true);
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
// 体验师专享
$('.title-one>li:eq(1)').on('click',function(){
    $(this).siblings().removeClass('select');
    $(this).addClass('select');
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/master',true);
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
// 大众试用
$('.title-one>li:eq(0)').on('click',function(){
    $(this).siblings().removeClass('select');
    $(this).addClass('select');
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/public',true);
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
// 加载更多
$('.one-bottom p').on('click',function(){
    $('.one-bottom p>img').attr({'src':'../image/素材/图片/css/img/loading-icon.gif','width':'20px',height:'20px'});
    //模拟加载过程
    var time=setTimeout(function(){
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/master',true);
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
        document.getElementsByClassName('section-one')[0].innerHTML=document.getElementsByClassName('section-one')[0].innerHTML+html;
    }
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    },1000)
})
$('.title-two>li').on('click',function(){
    $(this).siblings().removeClass('select1');
    $(this).addClass('select1');
})
// 全部
$('.title-two>li:eq(0)').on('click',function(){
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/public',true);
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
// 申请中
$('.title-two>li:eq(1)').on('click',function(){
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/master',true);
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
        $('.bottom').removeClass('bottom2');
}
}) 
// 试用中
$('.title-two>li:eq(2)').on('click',function(){
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/public',true);
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
        $('.bottom').addClass('bottom2');
}
}) 
// 已结束
$('.title-two>li:eq(3)').on('click',function(){
    $('.one-bottom').html("<p class='nomore'>没有更多啦~</p>");
    var oajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 建立连接
    oajax.open('get','http://192.168.0.105:3000/useing/master',true);
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
        $('.bottom').addClass('bottom3');
}
}) 