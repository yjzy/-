// 左边图片变色js
$(function(){
    $('#left_nav>a').mouseover(function(){
        if($(this).index()==0){
            return false ;
        }else if($(this).index()==1){
        var p = parseInt($(this).children('b').css('background-position-y'))+58;
       $(this).children('b').css('background-position-y',p);
        }else{
       var y = parseInt($(this).children('b').css('background-position-y'))+18;
       $(this).children('b').css('background-position-y',y);
        }
    })
    $('#left_nav>a').mouseout(function(){
        if($(this).index()==0){
            return false ;
        }else if($(this).index()==1){
        var p = parseInt($(this).children('b').css('background-position-y'))-58;
       $(this).children('b').css('background-position-y',p);
        }else{
       var y = parseInt($(this).children('b').css('background-position-y'))-18;
       $(this).children('b').css('background-position-y',y);
        }
     })
     //左边播放图片变色
    $('#left_genre>a').mouseover(function(){
        var y = parseInt($(this).children('b').css('background-position-y'))+18;
        $(this).children('b').css('background-position-y',y);
    })
    $('#left_genre>a').mouseout(function(){
        var y = parseInt($(this).children('b').css('background-position-y'))-18;
        $(this).children('b').css('background-position-y',y);
    })

    // 轮播图
    var imgIndex = 0;
    $('#next').click(function(){
        imgIndex++;
        if(imgIndex>5){
            imgIndex=0
        }
        $('#imgBox>div').eq(imgIndex).css('display','block').siblings().css('display','none')
        $('#diansBox>a').eq(imgIndex).addClass('current').siblings().removeClass('current');
    })
    $('#prev').click(function(){
        imgIndex--;
        if(imgIndex<0){
            imgIndex=5;
        }
        $('#imgBox>div').eq(imgIndex).css('display','block').siblings().css('display','none')
        $('#diansBox>a').eq(imgIndex).addClass('current').siblings().removeClass('current');
    })

    $('#diansBox>a').click(function(){
        imgIndex = $(this).index();
        $('#imgBox>div').eq(imgIndex).css('display','block').siblings().css('display','none');
        $(this).addClass('current').siblings().removeClass('current');
    })
    var timer = setInterval(function(){
        $('#next').click()
    },2000)
    $('#slider').hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(function(){
            $('#next').click()
        },2000)
    })

    $('.song').mouseover(function(){
        $(this).find('.img').removeClass('hide');
        $(this).siblings('.song').find('.img').addClass('hide');
    })

    // 音乐人播放
    $('.artist_list a').mouseover(function(){
        $(this).find('p').show();
        $(this).find('b').show();
    })
    $('.artist_list a').mouseout(function(){
        $(this).find('p').hide();
        $(this).find('b').hide();
    })


    // 固定导航
    $('.sidebutton_newsite').hover(function(){
        $('.newsite_icon').hide();
        $('span').show();
    },function(){
        $('.newsite_icon').show();
        $('span').hide();
    })

    $('.sidebutton_qrcode').hover(function(){
        $('.sidebutton_qrcode>.sidebutton_icon').hide();
        $('.sidebutton_qrcode>span').show();
        $('.sidebutton_code').css('display','block')
    },function(){
        $('.sidebutton_qrcode>.sidebutton_icon').show();
        $('.sidebutton_qrcode>span').hide();
        $('.sidebutton_code').css('display','none')

    })

    $('.sidebutton_gotop').mouseover(function(){
        $('.sidebutton_gotop>.sidebutton_icon').hide();
        $('.sidebutton_gotop>span').show();
        $('.sidebutton_gotop').click(function(){
            $(window).scrollTop(0);
        })
    })
    
    $('.sidebutton_gotop').mouseout(function(){
        $('.sidebutton_gotop>.sidebutton_icon').show();
        $('.sidebutton_gotop>span').hide();
    })
    // 热门专辑tab菜单
    $('.title_extra>a').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        if($(this).index() === 0) {
            $('.index_a').css('display','block');
            $('.index_b').css('display','none');
        }else{
            $('.index_a').css('display','none');
            $('.index_b').css('display','block');
        }
    })

    // 热门专辑
    $('.album_list a').hover(function(){
        $(this).find('.toplay').css('display','inline');
        $(this).find('#image_dl').css('display','block');
        $(this).find('#image_dl').hover(function(){
            $(this).find('dd').css('display','block')
        },function(){
            $(this).find('dd').css('display','none')
        })
    },function(){
        $(this).find('.toplay').css('display','none');
        $(this).find('#image_dl').css('display','none');
    })


})



