//导航栏
$(function(){
    $('#box>a').mouseover(function(){
        $(this).css('opacity','0.7')
    })
    $('#box>a').mouseout(function(){
        $(this).css('opacity','1')
    })

    // 固定浮动栏
    $('.huidingbu li').mouseover(function(){
        $(this).css('backgroundColor','#E06E16')
        $(this).children('p').show();
        $(this).children('img').hide();
        $(this).children('span').hide();
    })
    $('.huidingbu li').mouseout(function(){
        $(this).css('backgroundColor','')
        $(this).children('p').hide();
        $(this).children('img').show();
        $(this).children('span').show();
    })

    $('.huidingbu li').eq(1).mouseover(function(){
        $('.huidingbu .hide').stop().fadeIn()
    })
    $('.huidingbu li').eq(1).mouseout(function(){
        $('.huidingbu .hide').stop().fadeOut()
    })

    $('.huidingbu li').eq(2).click(function(){
        $('html ,body').animate({scrollTop: 0}, 300);
    })
    // 中间导航栏切换
    $('.content-w .mainNav').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        // console.log($(this).children('h3').html())
        if($(this).children('h3').html() == '我的VIP'){
            $('.vip_message_content').hide()
            $('.ktvip-w').show()
        } else {
            $('.vip_message_content').show()
            $('.ktvip-w').hide()
        }
    })
})