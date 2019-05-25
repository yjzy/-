$(function(){

var len = $(".list_menu li").length/5;
var i = 0;
$(".recomment>.left").click(function() {
    
    i++;
    if (i >= len) {
        i = 0;
    }
    console.log(i);
    $(".list_menu ").animate({
        "margin-left": -i * 750 + "px"
    }, 500, function() {})
})
$(".recomment>.right").click(function() {
    i--;
    if (i <= 0) {
        i = len - 1;
    }
    $(".list_menu").animate({
        "margin-left": -i * 750+ "px"
    }, 500, function() {})
})
    $('.list>a').mouseover(function(){
        $(this).siblings('a').css('height','29px');
        $(this).css('height','48px');
        $(this).css('padding-top','28px');
    })
    $('.list>a').mouseout(function(){

        $(this).parent().find('a').css('height','29px');
        $(this).parent().find('a').css('padding-top','');
    })
})




