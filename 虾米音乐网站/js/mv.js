$(function(){
    $(".mv ul li").mouseover(function(){
        $(this).css("top","-10px");
    });
    $(".mv ul li").mouseout(function(){
        $(".mv ul li").css("top","0")
    });
})