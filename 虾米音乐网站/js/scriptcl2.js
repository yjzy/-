
//轮播图
$(function(){
    $('#wenzi>li').mouseover(function(){
        $(this).siblings('li').removeClass('selected')
         $(this).addClass('selected');

        var index = $(this).index()
        $('.tupian>li:eq('+index+')').siblings('li').removeClass('active');
        $('.tupian>li:eq('+index+')').addClass('active');
    })
    $('#wenzi>li').mouseout(function(){
        $(this).removeClass('selected')
    })
})

//尾部
$(function () {     
    $('#button>ul>li').mouseover(function(){
        $(this).css('backgroundColor','#ff8821')
        $(this).children('ol').stop().show()

    })
    $('#button>ul>li').mouseout(function(){
        $(this).children('ol').stop().hide()
        $(this).css('backgroundColor','')
    })
    
});

