$(function(){
    var imgindex =0
    $(".next").click(function(){
        imgindex++;
        if(imgindex>5){
            $(".imgBox").css({left:930})
            imgindex=0;
        }
        var move=-imgindex*930;
        $(".imgBox").stop().animate({left:move},930);
        if(imgindex==6){
            $(".dianLi li").eq(0).addClass("color").siblings().removeClass("color")
        }
        else{
            $(".dianLi li").eq(imgindex).addClass("color").siblings().removeClass("color");
        }

    })
    $(".prev").click(function(){
        imgindex--;
        if(imgindex<0){ 
            $(".imgBox").css({left:-5580})
            imgindex=5;
        }
        var move=-imgindex*930;
        $(".imgBox").stop().animate({left:move},930);
         $(".dianLi li").eq(imgindex).addClass("color").siblings().removeClass("color");
        
        
    })
    $(".dianLi li").click(function(){
            $(this).addClass("color").siblings().removeClass("color");
            imgindex=$(this).index();
            var move=-imgindex*930
            $(".imgBox").stop().animate({left:move},930);
        })
    var time= setInterval(function(){
            jQuery(".next").click()
        },2000)
    
        $(".slider").hover(function(){
            clearInterval(time);
        },function(){
            time=setInterval(function(){
            $('.next').click();
            },3000);
        })



})
