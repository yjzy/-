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
        $(this).css('height','40px');
        $(this).css('padding-top','18px');
    })
    $('.list>a').mouseout(function(){

        $(this).parent().find('a').css('height','29px');
        $(this).parent().find('a').css('padding-top','');
    })
    $('.sidebutton>a').mouseover(function(){
        $(this).children('span').show();
        $(this).css('background-color','orange');
        $(this).children('img.newsite_icon').hide();
        $(this).children('.sidebutton_icon').hide();
        $(this).children('.sidebutton_code').show();
    })
    $('.sidebutton>a').mouseout(function(){
        $(this).children('span').hide();
        $(this).css('background-color','');
        $(this).children('img.newsite_icon').show();
        $(this).children('.sidebutton_icon').show();
        $(this).children('.sidebutton_code').hide();
        
    })
})




