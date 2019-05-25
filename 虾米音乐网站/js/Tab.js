jQuery(function(){
    $(".new_lis li").click(function(){
        var index=$(this).index();
        $(".table>table:eq("+index+")").addClass("selected").siblings("table").removeClass("selected");
        $(this).addClass("new_boders").siblings("li").removeClass("new_boders");
        if(index==0){
            $(".tab_song").removeClass("bgci1 bgci0 bgci2 bgci3 bgci4").addClass("bgci0")
            $(".lb_img").removeClass("lb_img2 lb_img3 lb_img4").addClass("lb_img1")
        } else if(index==1){
            $(".tab_song").removeClass("bgcil bgci0 bgci2 bgci3 bgci4").addClass("bgci1")
            $(".lb_img").removeClass("lb_img1 lb_img3 lb_img4 lb_img5").addClass("lb_img2")
        } else if(index==2){
            $(".tab_song").removeClass("bgci1 bgci0 bgci2 bgci3 bgci4").addClass("bgci2")
            $(".lb_img").removeClass("lb_img1 lb_img2 lb_img4 lb_img5").addClass("lb_img3")
        }else if(index==3){
            $(".tab_song").removeClass("bgci1 bgci0 bgci2 bgci3 bgci4").addClass("bgci3")
            $(".lb_img").removeClass("lb_img1 lb_img2 lb_img3 lb_img5").addClass("lb_img4")
        }else if(index==4){
            $(".tab_song").removeClass("bgci1 bgci0 bgci2 bgci3 bgci4").addClass("bgci4")
            $(".lb_img").removeClass("lb_img1 lb_img2 lb_img3 lb_img4").addClass("lb_img5")
        }
        
    })
    $("tr").mouseover(function(){
        $(this).siblings("tr").children("td").find("a").removeClass("off hidden")
       $(this).children("td").find("a").addClass("off hidden")
       
    })
    $("table").mouseout(function(){
        $("tr").children("td").find("a").removeClass("off hidden")
    })

    $("#list_one").mouseover(function(){
        $(".mb_bgc").animate().css({height:65})
    })
    $("#list_one").mouseout(function(){
        $(".mb_bgc").animate().css({height:0})
    })

   
})