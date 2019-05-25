// banner区域右侧
		$(function(){
			$("#banner-right-footer li:even").css("backgroundColor","#D5D5D5");
			$("#banner-right-footer li:odd").css("backgroundColor","#CDCDCD");

			$("#banner-right-footer li").mouseover(function(){
			  $(this).siblings("li").css("opacity",0.6);
              $(this).css("opacity",1);
			}).mouseout(function(){
			  $(this).parent().children("li").css("opacity",0.8)
			})
		});