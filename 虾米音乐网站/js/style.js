$(function(){
    $('#links>li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        // $('#content div').eq(index).addClass('active').siblings('div').removeClass('active');
    })
})
$(function(){
    $('#seven').mouseover(function(){
        $('#sky-tow').css('display','block').siblings().css('display','none');
        
    }).mouseout(function(){
        $('#sky-one').css('display','block').siblings().css('display','none');
    })
})
// 返回顶部显示隐藏
$(function () {
    //滚动条事件
    $(window).scroll(function () {
        if($(document).scrollTop() >= 700){
            $('.fly').removeClass('hide')
        }else{
            $('.fly').addClass('hide')
        }
    });
});
//返回顶部
$(function(){
    var num = 0;
    $(window).scroll(function(){
        num = num = document.body.scrollTop || document.documentElement.scrollTop;
    })
    $('.fly').click(function(){
        var timer = setInterval(function(){
            num -=10;
            if(num<0){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                clearInterval(timer);
            }
            document.body.scrollTop = num;
            document.documentElement.scrollTop = num;
        },1)
    })
})
//box隐藏菜单显示与隐藏事件
$(function () {
    //#all-one
        $('#all-one').click(function (event) {
                $('#i-one').addClass('hide');
                $('#i-tow').removeClass('hide');
                $('.box-tow').hide();
                event.stopPropagation();
                $('.box-one').show();
                return false;
        });
        $(document).click(function(e){
            var sortBox = $('.box-one')
            if(!sortBox.is(event.target) && sortBox.has(event.target).length === 0){
                $('.box-one').hide();
            }
            $('#i-one').removeClass('hide');
            $('#i-tow').addClass('hide');
        })

        //#all-tow
        $('#all-tow').click(function (event) {
            $('#i-a').addClass('hide');
            $('#i-b').removeClass('hide');
            $('.box-one').hide();
            event.stopPropagation();
            $('.box-tow').show();
            return false;
        });
        $(document).click(function(e){
            var sortBox = $('.box-tow')
            if(!sortBox.is(event.target) && sortBox.has(event.target).length === 0){
                $('.box-tow').hide();
            }
            $('#i-a').removeClass('hide');
            $('#i-b').addClass('hide');
        })
    });
//box选择菜单标签i的点击事件
    //box-one
$(function(){
    $('.box-one li').click(function(){
        var index = $(this).index();
        $('.tink li').children().addClass('hide');
        $('.tink li').eq(index).children().removeClass('hide');

        $('.all-one').children().eq(index).addClass('deep').siblings('span').removeClass('deep');
    })
})
    //box-tow
$(function(){
    $('.box-tow li').click(function(){
        var index = $(this).index();
        $('.tink-one li').children().addClass('hide');
        $('.tink-one li').eq(index).children().removeClass('hide');

        $('.all-tow').children().eq(index).addClass('deep').siblings('span').removeClass('deep');
    })
})