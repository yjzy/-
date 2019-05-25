$(function(){
    $(".box ul li").mouseover(function(){
        $(this).css("top","-10px");
    });
    $(".box ul li").mouseout(function(){
        $(".box ul li").css("top","0")
    });

    $(".txt").focus(function(){
        if($(".txt").val()==="儿歌"){
            $(".txt").val("")
            $(".txt").css("color","black");
        }      
    })
    $(".txt").blur(function(){
        if($(".txt").val()===""|| $(".txt").var()==="儿歌"){
            $(".txt").val("儿歌");
            $(".txt").css("color","gray");
        }
    })
    //翻页颜色排它
    $(".fan>ul li").mouseover(function(){
        $(this).addClass("reds").siblings().removeClass();
    })
    $(".fan>ul li").mouseout(function(){
        $(".fan>ul li:eq(1)").addClass("reds").siblings().removeClass();
    })


});
