document.write("<script src='js/jquery.min.js'><\/script>");
var letf_nav=document.getElementById("letf_nav")
var goTop=document.getElementById("goTop")
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    }
  }
window.onscroll=function(){
    var num= document.body.scrollTop || document.documentElement.scrollTop;
    if(num>3568){
        letf_nav.style.position=" absolute"
        letf_nav.style.top=-512+"px"
        letf_nav.style.left=2+"%";
   /*      letf_nav.style.transition=1.5+"s"; */
    }else{
        letf_nav.style.position="fixed";
        letf_nav.style.top=65+"px";
        letf_nav.style.left=2+"%";
        /* letf_nav.style.transition=0.5+"s"; */
    }
    var scrollTop = getScroll().scrollTop; 
    if(scrollTop>10){
        goTop.style.display="block";
    }else{
        goTop.style.display="none";
    }
 
}
var timerId = null;
goTop.onclick=function(){
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      timerId = setInterval(function () {
       
        var step = 10;
      
        var target = 0;
    
       
        var current = getScroll().scrollTop;
    
        if (current > target) {
          step = -Math.abs(step);
        }
    
    
        if (Math.abs(current - target) <= Math.abs(step)) {
          clearInterval(timerId);
          document.body.scrollTop = target;
          document.documentElement.scrollTop = target;
          return;
        }
    
        current += step;
        document.body.scrollTop = current;
        document.documentElement.scrollTop = current;
      }, 5);
}
$(function(){
   $("#tj_urs>li").mouseover(function(){
       $(this).siblings("li").children("div").find("div").css("display","none")
       $(this).children("div").find("div").css("display","block")
   })
   $("#tj_urs>li").mouseout(function(){
    $("#tj_urs>li").children("div").find("div").css("display","none");
   })
})