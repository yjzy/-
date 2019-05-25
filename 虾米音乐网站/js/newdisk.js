$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>='1000'){
            $('.arr').css('display','block')
        }else{
            $('.arr').css('display','none')
        }
            move = $(document).scrollTop()
    })
    var move
    $('.arr').click(function(){
        var timer = setInterval(function(){
            move -= 10
            console.log(move)
            $(document).scrollTop(move)
            if(move<=0){
                clearInterval(timer)
                $(document).scrollTop(0)
            }
        })
    })
    $('.search input').focus(function(){
        $(this).animate({
            'width':'200px',
            'left':'-200px'
        },300)
        $(this).css('border-bottom','3px solid #000')
        $('.mask').show()
        $(this).css('left','-200px')
    })
    $('.search input').blur(function(){
        $(this).animate({
            'width':'105px',
            'left':'-105px'
        },300)
        $(this).css('border-bottom','')
        $('.mask').hide()
    })
    $('.country a').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })

    // $('.allstyle .one').click(function(){
    //     $('.allstyle .mysort').show()
    // })
    $('.allstyle .one').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
        $('.mysort').show();  
        return false;
    }); 
    $(document).click(function(e){
        var sortBox = $('.mysort')
        // console.log(sortBox)
        if(!sortBox.is(event.target) && sortBox.has(event.target).length === 0){
            console.log(event.target)
            $('.mysort').hide()
        }
    })

   $('.allstyle .two').click(function(event){
       event.stopPropagation();
       $('.mystyle').show();
   })
    $(document).click(function(e){
        var styleBox = $('.mystyle')
        // console.log(sortBox)
        if(!styleBox.is(event.target) && styleBox.has(event.target).length === 0){
            $('.mystyle').hide()
        }
    })


    $('.allstyle .three').click(function(event){
        event.stopPropagation();
        $('.mytime').show();
    })
     $(document).click(function(e){
         var timeBox = $('.mytime')
         // console.log(sortBox)
         if(!timeBox.is(event.target) && timeBox.has(event.target).length === 0){
             $('.mytime').hide()
         }
     })


     $('.allstyle .four').click(function(event){
        event.stopPropagation();
        $('.myclass').show();
    })
     $(document).click(function(e){
         var classBox = $('.myclass')
         // console.log(sortBox)
         if(!classBox.is(event.target) && classBox.has(event.target).length === 0){
             $('.myclass').hide()
         }
     })
    $('.mv ul li a').mouseenter(function(){
        $(this).siblings('.play').show()
        //this也是一个对象,在需要寻找兄弟对象的时候可以使用siblings()方法
        //当需要寻找子元素的时候,使用find()方法
    })
    $('.play').mouseenter(function(){
        $(this).show()
    })
    $('.mv ul li a').mouseout(function(){
        $(this).siblings('.play').hide()
    })
    $('.play').mouseout(function(){
        $(this).hide()
    })
    
})